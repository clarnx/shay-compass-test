import clsx from 'clsx';

interface NavItemProps {
  href: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
  className?: string;
  isSticky?: boolean;
}

export const NavItem = ({ href, label, onClick, className, isSticky }: NavItemProps) => {
  return (
    <a
      className={clsx(
        'relative font-semibold text-sm md:text-md transition-all duration-300',
        isSticky !== undefined
          ? isSticky
            ? 'text-base-content hover:text-primary after:bg-primary'
            : 'text-white hover:text-white/80 after:bg-white'
          : 'text-base-content hover:text-primary',
        'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center',
        className
      )}
      href={href}
      onClick={(e) => onClick(e, href)}
    >
      {label}
    </a>
  );
};
