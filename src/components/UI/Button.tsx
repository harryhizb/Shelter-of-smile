import React, { forwardRef } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      isLoading = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl focus:ring-purple-500 transform hover:scale-105",
      secondary:
        "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl focus:ring-orange-500 transform hover:scale-105",
      outline:
        "border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-500 hover:text-purple-800 focus:ring-purple-500 shadow-md hover:shadow-lg",
      ghost:
        "text-gray-700 hover:bg-purple-50 hover:text-purple-700 focus:ring-purple-500",
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const iconSizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${
          sizeClasses[size]
        } ${
          props.disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon className={`${iconSizeClasses[size]} mr-2`} />
            )}
            {children}
            {Icon && iconPosition === "right" && (
              <Icon className={`${iconSizeClasses[size]} ml-2`} />
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
