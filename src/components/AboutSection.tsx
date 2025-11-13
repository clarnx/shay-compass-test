import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';

export default function AboutSection() {
  return (
    <PageSection id="team">
      <SectionHeading title="Meet the Team" />
      <div className="max-w-3xl mx-auto">
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p>
            Shay Compass is a full-service real estate development and investment firm dedicated to
            creating exceptional residential and commercial properties. With decades of combined experience
            in property development, construction management, and market analysis, we transform strategic
            visions into tangible assets that deliver lasting value.
          </p>

          <div className="flex gap-12 mt-6 justify-between">
            <Button href="/team" variant="text" size="lg">
              Learn More
            </Button>

            <div className='flex gap-12'>
              <img
                src="https://picsum.photos/120/120"
                alt="Company 1"
                className="h-12 object-contain rounded-full"
              />
              <img
                src="https://picsum.photos/120/120"
                alt="Company 2"
                className="h-12 object-contain rounded-full"
              />
              <img
                src="https://picsum.photos/120/120"
                alt="Company 3"
                className="h-12 object-contain rounded-full"
              />
              <img
                src="https://picsum.photos/120/120"
                alt="Company 4"
                className="h-12 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
