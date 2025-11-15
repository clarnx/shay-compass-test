'use client';

import { navLinkList } from "@/constants/navLinks";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePathname } from "next/navigation";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { NavItem } from "./NavItem";
import { extractSectionId, extractSectionIds } from "@/util/navigationUtils";
import clsx from "clsx";

export default function HeroNavigation() {
  const pathname = usePathname();
  const { isPastThreshold: isScrolled } = useScrollThreshold({
    thresholdPercent: LAYOUT_CONSTANTS.SCROLL_THRESHOLDS.HERO_NAV_STICKY,
  });
  const handleClick = useSmoothScroll();

  // Track active section
  const sectionIds = extractSectionIds(navLinkList.map(link => link.url));
  const activeSection = useActiveSection(sectionIds);

  // Determine navigation state
  const isHomePage = pathname === '/';
  const useSolidBackground = !isHomePage || isScrolled;
  const showHomeLink = !isHomePage || isScrolled;

  // Position: center in hero on home page, fixed at top otherwise
  const positionClass = isHomePage && !isScrolled
    ? "absolute top-[60vh] left-1/2 -translate-x-1/2"
    : "fixed top-4 left-1/2 -translate-x-1/2";

  // Filter out home link when in hero section
  const visibleNavLinks = showHomeLink
    ? navLinkList
    : navLinkList.filter(link => link.url !== '#home');

  return (
    <nav
      style={{ zIndex: LAYOUT_CONSTANTS.Z_INDEX.HERO_NAV }}
      className={clsx(
        positionClass,
        "transition-all duration-200 ease-in-out max-lg:hidden"
      )}
    >
      <ul
        className={clsx(
          "flex items-center gap-6 md:gap-8 px-6 md:px-8 py-3 md:py-4 rounded-full border transition-all duration-500",
          useSolidBackground
            ? "bg-white border-gray-300 shadow-2xl"
            : "bg-white/10 backdrop-blur-md border-white/20"
        )}
      >
        {visibleNavLinks.map((navLink) => {
          const sectionId = extractSectionId(navLink.url);
          const isActive = activeSection === sectionId;

          return (
            <li key={navLink.url}>
              <NavItem
                href={navLink.url}
                label={navLink.label}
                onClick={handleClick}
                isSticky={useSolidBackground}
                isActive={isActive}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
