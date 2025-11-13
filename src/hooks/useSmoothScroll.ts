"use client";

import { useRouter, usePathname } from "next/navigation";
import { isHashLink, extractSectionId } from "@/util/navigationUtils";

/**
 * Hook for smooth scrolling to sections on the page
 * Handles navigation from both home page and other pages
 */
export const useSmoothScroll = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (!isHashLink(url)) return;

    e.preventDefault();
    const sectionId = extractSectionId(url);
    const isHomePage = pathname === "/";

    if (isHomePage) {
      // On home page: scroll directly to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages: navigate to home page with hash
      router.push(`/${url}`);
    }
  };

  return handleClick;
};
