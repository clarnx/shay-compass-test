"use client";
import { FC, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import MobileNavMenu from "./MobileMenu";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { Logo } from "@/ui/icons/logo";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
  const { isPastThreshold: isVisible } = useScrollThreshold({
    thresholdPercent: LAYOUT_CONSTANTS.SCROLL_THRESHOLDS.MOBILE_NAV_APPEAR,
  });

  return (
    <header
      className={clsx(
        "py-5 bg-base-200 fixed top-0 left-0 w-full transition-all lg:hidden",
        isVisible ? "translate-y-0 opacity-100 shadow-md" : "-translate-y-full opacity-0 pointer-events-none"
      )}
      style={{
        height: LAYOUT_CONSTANTS.NAVBAR_HEIGHT,
        minWidth: LAYOUT_CONSTANTS.MIN_VIEWPORT_WIDTH,
        zIndex: LAYOUT_CONSTANTS.Z_INDEX.NAVBAR,
        transitionDuration: `${LAYOUT_CONSTANTS.ANIMATION_DURATION.NORMAL}ms`,
      }}
    >
      <div className="h-full flex flex-col justify-center max-w-[1024px] lg:mx-auto mx-4">
        <div className="flex justify-between items-center relative">
          <div className="max-w-[183px] lg:max-w-[163px]">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <MobileNavMenu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
