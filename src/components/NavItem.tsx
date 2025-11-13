import clsx from 'clsx';

interface NavItemProps {
  href: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
  className?: string;
  isSticky?: boolean;
  isActive?: boolean;
}

export const NavItem = ({
  href,
  label,
  onClick,
  className,
  isSticky = false,
  isActive = false
}: NavItemProps) => {
  // Determine text color based on state
  const getTextColor = () => {
    if (isSticky) {
      return isActive
        ? 'text-gray-900 hover:text-gray-700'
        : 'text-gray-800 hover:text-gray-600';
    }
    return isActive
      ? 'text-white hover:text-white/90'
      : 'text-white hover:text-white/80';
  };

  // Determine underline color
  const getUnderlineColor = () => {
    return isSticky ? 'after:bg-gray-900' : 'after:bg-white';
  };

  return (
    <a
      className={clsx(
        // Base styles
        'relative font-semibold text-sm md:text-md pb-1 transition-all duration-300',
        // Text color
        getTextColor(),
        // Underline styles
        'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]',
        'after:transition-transform after:duration-300 after:origin-center',
        getUnderlineColor(),
        // Underline visibility
        isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
        className
      )}
      href={href}
      onClick={(e) => onClick(e, href)}
    >
      {label}
    </a>
  );
};
