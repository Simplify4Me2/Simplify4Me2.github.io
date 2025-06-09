import { PropsWithChildren } from "react";

export function Button({ children, className, disabled, onClick }: PropsWithChildren<{ className?: string, onClick?: () => void, disabled?: boolean }>) {
  return <button
    onClick={onClick}
    className={`flex items-center h-12 w-[12.5rem] bg-dark-blue 
        hover:bg-slightly-desaturated-cyan ${className} 
        ${disabled ? "opacity-20 cursor-not-allowed" : ""}`}>
    {children}
  </button>
};
