import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function ProjectLink({ to, children, className }: PropsWithChildren<{ to: string, className?: string }>) {
  return (
    <Link
      to={to}
      className={`flex items-center font-publicSans text-xs w-fit tracking-[0.125rem] border-[0.5px] 
        border-solid border-black h-12 px-8 self-start hover:bg-grayish-dark-blue hover:text-white 
        transition-colors duration-300 ease-in-out group ${className}`}
    >
      {children}
    </Link>
  );
}