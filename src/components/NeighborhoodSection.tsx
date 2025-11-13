import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';
import Image from 'next/image';

interface NeighborhoodSectionProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  learnMoreLink?: string;
}

const defaultDescription = `Shay Compass is a full-service real estate development and investment firm dedicated to
creating exceptional residential and commercial properties. With decades of combined experience
in property development, construction management, and market analysis, we transform strategic
visions into tangible assets that deliver lasting value.`;

export default function NeighborhoodSection({
  title = 'Neighborhood',
  image = '/uptown.webp',
  imageAlt = 'Neighborhood',
  description = defaultDescription,
  learnMoreLink = '/neighberhood',
}: NeighborhoodSectionProps) {
  return (
    <PageSection id="neighborhood">
      <SectionHeading title={title} />
      <div className="max-w-3xl mx-auto">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={400}
          className="rounded-lg filter grayscale mb-6"
        />
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p className="mb-4">{description}</p>
          <Button href={learnMoreLink} variant="text" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
