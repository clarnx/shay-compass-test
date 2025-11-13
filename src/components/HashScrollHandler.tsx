'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { extractSectionId } from '@/util/navigationUtils';

/**
 * Handles automatic scrolling to sections when navigating with hash URLs
 * Used when navigating from other pages to home page with section hash
 */
export default function HashScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            // Small delay to ensure DOM is fully rendered
            const timeoutId = setTimeout(() => {
                const sectionId = extractSectionId(hash);
                const element = document.getElementById(sectionId);

                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [searchParams]);

    return null;
}
