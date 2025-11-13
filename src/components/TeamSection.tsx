import Image from 'next/image';
import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';

interface Company {
  logo: string;
  name: string;
  alt: string;
  link?: string;
}

interface TeamSectionProps {
  title?: string;
  description?: string;
  companies?: Company[];
  learnMoreLink?: string;
}

const defaultDescription = `Shay Compass is a full-service real estate development and investment firm dedicated to
creating exceptional residential and commercial properties. With decades of combined experience
in property development, construction management, and market analysis, we transform strategic
visions into tangible assets that deliver lasting value.`;

export default function TeamSection({
  title = 'Meet the Team',
  description = defaultDescription,
  companies = [],
  learnMoreLink = '/team',
}: TeamSectionProps) {
  return (
    <PageSection id="team">
      <SectionHeading title={title} />
      <div className="max-w-3xl mx-auto">
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p>{description}</p>

          <div className="flex gap-12 mt-6 justify-between">
            <Button href={learnMoreLink} variant="text" size="lg">
              Learn More
            </Button>

            {companies.length > 0 && (
              <div className='flex gap-12'>
                {companies.map((company) => {
                  const logoImg = (
                    <Image
                      src={company.logo}
                      alt={company.alt || `${company.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain rounded-full transition-transform hover:scale-110"
                    />
                  );

                  return company.link ? (
                    <a
                      key={company.name}
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                      title={company.name}
                      aria-label={`Visit ${company.name} website`}
                    >
                      {logoImg}
                    </a>
                  ) : (
                    <div key={company.name} title={company.name}>
                      {logoImg}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
