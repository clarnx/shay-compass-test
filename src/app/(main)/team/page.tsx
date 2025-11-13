import Image from 'next/image';
import { getTeamPage } from '@/util/payloadQueries';
import { getMediaUrlWithPlaceholder } from '@/util/mediaHelpers';
import type { Company } from '@/types/payload';

export default async function TeamPage() {
    const teamData = await getTeamPage().catch(() => null);

    const pageTitle = teamData?.title || 'Our Team Partners';
    const companies: Company[] = teamData?.companies || [];

    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <h1 className="text-3xl font-bold text-center mb-8">{pageTitle}</h1>

            <div className="space-y-8">
                {companies.map((company) => {
                    const logoUrl = getMediaUrlWithPlaceholder(company.logo, 400, 400);
                    const logoImage = (
                        <Image
                            src={logoUrl}
                            alt={company.alt || `${company.name} logo`}
                            width={200}
                            height={200}
                            className="object-contain rounded transition-transform hover:scale-105"
                        />
                    );

                    return (
                        <div key={company.name} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-md">
                            <div className="flex-shrink-0">
                                {company.link ? (
                                    <a
                                        href={company.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer block"
                                        title={`Visit ${company.name} website`}
                                    >
                                        {logoImage}
                                    </a>
                                ) : (
                                    logoImage
                                )}
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                    {company.name}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {company.description}
                                </p>
                                {company.link && (
                                    <a
                                        href={company.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-blue-600 hover:text-blue-800 hover:underline"
                                    >
                                        Visit Website →
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
