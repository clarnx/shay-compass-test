import Image from 'next/image';

interface FeatureSectionProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    imageOnRight?: boolean;
}

/**
 * Reusable feature section with image and content
 * Used for displaying neighborhood features, service highlights, etc.
 */
export default function FeatureSection({
    title,
    description,
    image,
    imageAlt,
    imageOnRight = false,
}: FeatureSectionProps) {
    const flexDirection = imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row';

    return (
        <div className={`flex flex-col ${flexDirection} gap-12 items-center`}>
            {/* Image */}
            <div className="flex-1">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
