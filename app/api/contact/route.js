import { Resend } from "resend";

// Route Handler simple: valida el payload en servidor y reenvía el mensaje
// por email con Resend. Sin caché ni segmentos dinámicos: se ejecuta en
// cada petición.
export const runtime = "nodejs";

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valida el payload recibido del formulario. `website` es el campo
// honeypot: un visitante real nunca lo rellena (está oculto visualmente),
// así que si llega con contenido se trata como bot.
function validatePayload({ name, email, message, website }) {
  if (typeof website === "string" && website.trim() !== "") {
    return { ok: false, isBot: true };
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { ok: false, isBot: false };
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const nameOk =
    trimmedName.length >= MIN_NAME_LENGTH &&
    trimmedName.length <= MAX_NAME_LENGTH;
  const emailOk =
    trimmedEmail.length <= MAX_EMAIL_LENGTH && EMAIL_REGEX.test(trimmedEmail);
  const messageOk =
    trimmedMessage.length >= MIN_MESSAGE_LENGTH &&
    trimmedMessage.length <= MAX_MESSAGE_LENGTH;

  if (!nameOk || !emailOk || !messageOk) {
    return { ok: false, isBot: false };
  }

  return {
    ok: true,
    data: { name: trimmedName, email: trimmedEmail, message: trimmedMessage },
  };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  const result = validatePayload(body);

  if (!result.ok) {
    // Honeypot activado: se responde como éxito (sin enviar nada) para no
    // dar pistas a bots de que fueron detectados.
    if (result.isBot) {
      return Response.json({ success: true }, { status: 200 });
    }
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  const { name, email, message } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Faltan variables de entorno: RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL."
    );
    return Response.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: "Nuevo mensaje desde el portfolio",
      text: `Nuevo mensaje desde el portfolio\n\nNombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("[contact] Error de Resend:", error);
      return Response.json({ error: "send_failed" }, { status: 502 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Error inesperado al enviar el email:", err);
    return Response.json({ error: "send_failed" }, { status: 500 });
  }
}
