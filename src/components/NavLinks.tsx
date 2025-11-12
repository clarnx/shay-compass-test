'use client';

import { navLinkList } from "@/constants/navLinks";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { NavItem } from "./NavItem";

const NavLinks = () => {
    const handleClick = useSmoothScroll();

    return (
        <nav className="flex items-center gap-6 max-lg:hidden">
            <ul className="flex items-center gap-6">
                {navLinkList.map((navLink) => (
                    <li key={navLink.url}>
                        <NavItem
                            href={navLink.url}
                            label={navLink.label}
                            onClick={handleClick}
                            className="w-fit block"
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;