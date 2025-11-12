import PageSection from './PageSection';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <PageSection id="about">
      <SectionHeading title="About Shay Compass" />
      <div className="max-w-3xl mx-auto">
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p>
            Shay Compass is a full-service real estate development and investment firm dedicated to
            creating exceptional residential and commercial properties. With decades of combined experience
            in property development, construction management, and market analysis, we transform strategic
            visions into tangible assets that deliver lasting value.
          </p>
          <p>
            Our comprehensive approach encompasses site acquisition, entitlement navigation, design
            oversight, construction management, and strategic disposition. We pride ourselves on our
            meticulous attention to detail, market expertise, and unwavering commitment to quality that
            exceeds industry standards and client expectations.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
