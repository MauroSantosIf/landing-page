import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageTransition } from "@/components/layout/PageTransition";
import { StackSection } from "@/components/sections/StackSection";
import { ProjectsSection } from "@/components/sections/ProjectSection";
import { ContactSection } from "@/components/sections/ContactSection";


export default function Home() {
  return (

    <PageTransition>
      <Header />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </PageTransition>
  );
}