import { useState } from "react";
import { navLinkList } from "@/constants/navLinks";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { SITE_CONTENT } from "@/constants/siteContent";
import { HamburgerIcon } from "@/ui/icons/HamburgerIcon";

const MobileNavMenu = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const smoothScroll = useSmoothScroll();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        smoothScroll(e, url);
        setIsOpenMobileMenu(false);
    };

    return (
        <div className="lg:hidden">
            <button
                className="align-middle"
                onClick={() => setIsOpenMobileMenu(true)}
                aria-label={SITE_CONTENT.ARIA_LABELS.HAMBURGER_MENU}
            >
                <HamburgerIcon className="fill-base-content" />
            </button>

            <div
                onClick={() => setIsOpenMobileMenu(false)}
                id="mobileMenuOverlay"
                style={{ zIndex: LAYOUT_CONSTANTS.Z_INDEX.MOBILE_MENU_OVERLAY }}
                className={`fixed top-0 right-0 w-full h-[100dvh] bg-base-300 bg-opacity-50 transition-opacity ${isOpenMobileMenu
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none delay-300"
                    }`}
            >
                <div
                    className={`w-[80%] sm:w-[300px] justify-between pt-4 pb-4 bg-base-100 h-full flex flex-col float-right transition-transform ${isOpenMobileMenu ? "translate-x-0 delay-200" : "translate-x-full"
                        }`}
                >
                    <div className="text-end mr-2 pr-2" id="mobileMenuX">
                        <button
                            className="p-8 mt-[-16px] float-right max-w-[20px] text-base-content cursor-pointer"
                            onClick={() => setIsOpenMobileMenu(false)}
                            aria-label={SITE_CONTENT.ARIA_LABELS.MOBILE_MENU_CLOSE}
                        >
                            X
                        </button>
                    </div>
                    <ul className="text-center h-full">
                        {navLinkList.map((navLink) => (
                            <li key={navLink.label}>
                                <a
                                    onClick={(e) => handleClick(e, navLink.url)}
                                    className="block px-5 py-3.5 text-base-content hover:text-primary"
                                    href={navLink.url}
                                >
                                    {navLink.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileNavMenu;