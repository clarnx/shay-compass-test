import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg border border-gray-900",
  secondary: "bg-white text-gray-900 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-300",
  text: "text-gray-900 hover:text-gray-700 italic font-light hover:font-medium",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-semibold transition-all duration-200 inline-block";

  // Text variant doesn't need horizontal padding for alignment
  const getSizeStyles = () => {
    if (variant === "text") {
      return size === "lg" ? "py-2.5 text-xl" : size === "sm" ? "py-1 text-sm" : "py-2 text-base";
    }
    return sizeStyles[size];
  };

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    getSizeStyles(),
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;
