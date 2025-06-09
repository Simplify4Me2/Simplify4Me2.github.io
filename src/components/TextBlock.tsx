import { PropsWithChildren } from "react";

type TextBlockProps = {
    className?: string;
    tracking?: "tight" | "normal";
    fontSize?: "[0.95rem]" | "sm" | "base";
  }
  
  // export function TextBlock({ children, className, tracking = "normal", fontSize = "base" }: PropsWithChildren<TextBlockProps>) {
  //   return (
  //     <p className={`font-publicSans tracking-${tracking} text-${fontSize} leading-[1.875rem] text-left pt-[1.35rem] lg:pt-6 pb-6 min-h-[11.75rem] ${className}`}>
  //       {children}
  //     </p>
  //   );
  // }
  
  export function TextBlock({ children, className, tracking = "normal", fontSize = "base" }: PropsWithChildren<TextBlockProps>) {
    return (
      <p className={`font-publicSans tracking-${tracking} text-${fontSize} leading-[1.875rem] text-left min-h-[11.75rem] ${className}`}>
        {children}
      </p>
    );
  }
