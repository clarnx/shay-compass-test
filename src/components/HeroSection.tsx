import { SITE_CONTENT } from '@/constants/siteContent';
import HeroNavigation from './HeroNavigation';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-fixed flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('${SITE_CONTENT.HERO.BACKGROUND_IMAGE}')`,
        backgroundPosition: SITE_CONTENT.HERO.BACKGROUND_POSITION,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {SITE_CONTENT.HERO.TITLE}
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          {SITE_CONTENT.HERO.SUBTITLE}
        </p>
      </div>

      <HeroNavigation />
    </section>
  );
}
