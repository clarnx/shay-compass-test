import React from 'react';
import Image from 'next/image';

const TeamPage = () => {
    const companies = [
        {
            id: 1,
            name: 'Company A',
            logo: '/logos/company-a.png',
            description: 'Leading technology company specializing in innovative software solutions. We focus on creating cutting-edge applications that transform how businesses operate in the digital age. Leading technology company specializing in innovative software solutions. We focus on creating cutting-edge applications that transform how businesses operate in the digital age.'
        },
        {
            id: 2,
            name: 'Company B',
            logo: '/logos/company-b.png',
            description: 'Global consulting firm providing strategic guidance and implementation services. Our team of experts helps organizations navigate complex challenges and achieve sustainable growth.'
        },
        {
            id: 3,
            name: 'Company C',
            logo: '/logos/company-c.png',
            description: 'Financial services provider offering comprehensive solutions for businesses and individuals. We deliver secure, reliable, and innovative financial products tailored to our clients needs.'
        },
        {
            id: 4,
            name: 'Company C',
            logo: '/logos/company-c.png',
            description: 'Financial services provider offering comprehensive solutions for businesses and individuals. We deliver secure, reliable, and innovative financial products tailored to our clients needs.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Team Partners</h1>
            
            <div className="space-y-8">
                {companies.map((company) => (
                    <div key={company.id} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-md">
                        <div className="flex-shrink-0">
                            <Image
                                src="https://picsum.photos/800"
                                alt={`${company.name} logo`}
                                width={200}
                                height={200}
                                className="object-contain rounded"
                            />
                        </div>
                        
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                {company.name}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {company.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;