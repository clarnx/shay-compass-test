"use client";

import { useEffect, useState } from "react";

/**
 * Hook to track which section is currently visible in the viewport
 * Uses Intersection Observer to detect when sections enter the visible area
 *
 * @param sectionIds - Array of section IDs to observe
 * @returns The ID of the currently active section
 */
export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Intersection Observer options
    const observerOptions = {
      // Trigger when section is in the upper portion of viewport
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};
