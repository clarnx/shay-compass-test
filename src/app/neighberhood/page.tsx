import PageSection from '@/components/PageSection';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import FeatureSection from '@/components/FeatureSection';
import Button from '@/ui/button';

interface NeighborhoodFeature {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}

const neighborhoodFeatures: NeighborhoodFeature[] = [
    {
        id: 1,
        title: 'Uptown Dining & Entertainment',
        description: 'Experience world-class dining, vibrant nightlife, and cultural attractions just minutes from your doorstep. From fine dining establishments to cozy cafes, the neighborhood offers an exceptional culinary scene that caters to every taste.',
        image: '/uptown.webp',
        imageAlt: 'Uptown Charlotte dining and entertainment district'
    },
    {
        id: 2,
        title: 'Parks & Recreation',
        description: 'Enjoy abundant green spaces, walking trails, and recreational facilities designed for an active lifestyle. The neighborhood features beautifully maintained parks, fitness centers, and outdoor activities for the whole family.',
        image: 'https://picsum.photos/800/500?random=1',
        imageAlt: 'Local parks and recreational facilities'
    },
    {
        id: 3,
        title: 'Shopping & Retail',
        description: 'Discover premier shopping destinations featuring boutique stores, national retailers, and artisan markets. Everything you need is conveniently located within the community, from daily essentials to luxury goods.',
        image: 'https://picsum.photos/800/500?random=2',
        imageAlt: 'Local shopping centers and retail districts'
    },
    {
        id: 4,
        title: 'Top-Rated Schools',
        description: 'Access to excellent educational institutions from preschool through high school. The area is served by highly-rated public and private schools, ensuring quality education for families with children of all ages.',
        image: 'https://picsum.photos/800/500?random=3',
        imageAlt: 'Educational institutions in the area'
    },
    {
        id: 5,
        title: 'Healthcare & Wellness',
        description: 'State-of-the-art medical facilities, wellness centers, and healthcare providers are easily accessible. The neighborhood is home to renowned hospitals, specialist clinics, and fitness studios dedicated to your wellbeing.',
        image: 'https://picsum.photos/800/500?random=4',
        imageAlt: 'Healthcare facilities and wellness centers'
    },
    {
        id: 6,
        title: 'Transportation & Connectivity',
        description: 'Seamless connectivity through public transit, major highways, and bike-friendly infrastructure. The strategic location provides easy access to downtown, the airport, and surrounding areas, making commuting effortless.',
        image: 'https://picsum.photos/800/500?random=5',
        imageAlt: 'Transportation and transit options'
    }
];

export default function NeighberhoodPage() {
    return (
        <main className="relative">
            <PageHero
                title="Discover Your Neighborhood"
                subtitle="Explore the vibrant community, exceptional amenities, and local attractions that make this location truly special."
            />

            {/* Neighborhood Features Sections */}
            {neighborhoodFeatures.map((feature, index) => (
                <PageSection
                    key={feature.id}
                    id={`neighborhood-${feature.id}`}
                    backgroundColor={index % 2 === 0 ? 'base-200' : 'base-100'}
                >
                    <FeatureSection
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        imageAlt={feature.imageAlt}
                        imageOnRight={index % 2 !== 0}
                    />
                </PageSection>
            ))}

            {/* Call to Action Section */}
            <PageSection id="neighborhood-contact" backgroundColor="base-200">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeading title="Ready to Make This Your Home?" />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        Discover how our developments integrate seamlessly with this exceptional neighborhood.
                        Contact us today to learn more about available properties and upcoming projects.
                    </p>
                    <Button href="/#contact" variant="primary" size="lg">
                        Get In Touch
                    </Button>
                </div>
            </PageSection>
        </main>
    );
}