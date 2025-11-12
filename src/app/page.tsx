import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default async function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="bg-neutral text-neutral-content py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Shay Compass</p>
          <p className="text-sm text-neutral-content/70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
