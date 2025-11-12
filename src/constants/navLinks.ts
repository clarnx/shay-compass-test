export interface NavLink {
  label: string;
  style: string;
  url: string;
}

export const navLinkList: NavLink[] = [
  {
    label: "Home",
    style: "default",
    url: "#home",
  },
  {
    label: "About",
    style: "default",
    url: "#about",
  },
  {
    label: "Projects",
    style: "default",
    url: "#projects",
  },
  {
    label: "Contact",
    style: "default",
    url: "#contact",
  },
];
