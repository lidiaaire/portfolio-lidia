import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Beyond from "@/components/Beyond/Beyond";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import SectionDivider from "@/components/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Beyond />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
