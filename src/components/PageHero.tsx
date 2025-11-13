interface PageHeroProps {
    title: string;
    subtitle: string;
    minHeight?: string;
}

/**
 * Reusable hero section for internal pages
 * Displays a title and subtitle with consistent styling
 */
export default function PageHero({
    title,
    subtitle,
    minHeight = 'h-[25vh]',
}: PageHeroProps) {
    return (
        <section className={`relative ${minHeight} w-full bg-gray-100 flex items-end pt-20`}>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
