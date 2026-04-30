import AboutSection from './_components/AboutSection';
import ContactSection from './_components/ContactSection';
import HeroSection from './_components/HeroSection';
import ProjectsSection from './_components/ProjectsSection';
import ServicesSection from './_components/ServicesSection';
import TechnologySection from './_components/TechnologySection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
