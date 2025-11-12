'use client';

import { navLinkList } from "@/constants/navLinks";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { NavItem } from "./NavItem";
import clsx from "clsx";

export default function HeroNavigation() {
  const { isPastThreshold: isSticky } = useScrollThreshold({
    thresholdPercent: LAYOUT_CONSTANTS.SCROLL_THRESHOLDS.HERO_NAV_STICKY,
  });
  const handleClick = useSmoothScroll();

  return (
    <nav
      style={{
        transform: isSticky ? 'translateX(-50%) translateY(0)' : 'translateX(0) translateY(0)',
        zIndex: LAYOUT_CONSTANTS.Z_INDEX.HERO_NAV,
      }}
      className={clsx(
        "transition-all duration-500 ease-in-out max-lg:hidden",
        isSticky ? "fixed top-4 left-1/2" : "relative"
      )}
    >
      <ul className={clsx(
        "flex items-center gap-6 md:gap-8 px-6 md:px-8 py-3 md:py-4 rounded-full border transition-all duration-500",
        isSticky
          ? "bg-base-200 border-base-300 shadow-xl"
          : "bg-white/10 backdrop-blur-md border-white/20"
      )}>
        {navLinkList.map((navLink) => (
          <li key={navLink.url}>
            <NavItem
              href={navLink.url}
              label={navLink.label}
              onClick={handleClick}
              isSticky={isSticky}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
