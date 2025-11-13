import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';
import Image from 'next/image';

export default function NeighborhoodSection() {
  return (
    <PageSection id="neighborhood">
      <SectionHeading title="Neighborhood" />
      <div className="max-w-3xl mx-auto">
        <Image
          src="/uptown.webp"
          alt="Neighborhood"
          width={800}
          height={400}
          className="rounded-lg filter grayscale mb-6"
        />
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p className="mb-4">
            Shay Compass is a full-service real estate development and investment firm dedicated to
            creating exceptional residential and commercial properties. With decades of combined experience
            in property development, construction management, and market analysis, we transform strategic
            visions into tangible assets that deliver lasting value.
          </p>
          <Button href="/neighberhood" variant="text" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
