import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import ProjectCta from '@/components/ProjectCta';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ProjectCta />
      <Contact />
    </>
  );
}
