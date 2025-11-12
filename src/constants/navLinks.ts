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
    label: "Projects",
    style: "default",
    url: "#projects",
  },
  {
    label: "Neighborhood",
    style: "default",
    url: "#neighborhood",
  },
  {
    label: "The Team",
    style: "default",
    url: "#team",
  },
  {
    label: "Contact",
    style: "default",
    url: "#contact",
  },
];
