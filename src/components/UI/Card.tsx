import { ReactNode, MouseEventHandler } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animationDelay?: string;
  onClick?: MouseEventHandler<HTMLDivElement>; // Add this line
}

const Card = ({
  children,
  className = "",
  hover = false,
  animationDelay,
  onClick, // Add this
}: CardProps) => {
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        hover ? "hover:shadow-lg hover:-translate-y-1" : ""
      } ${className}`}
      style={animationDelay ? { animationDelay } : undefined}
      onClick={onClick} // Add this
    >
      {children}
    </div>
  );
};

export default Card;
