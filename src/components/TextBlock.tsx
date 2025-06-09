import { PropsWithChildren } from "react";

type TextBlockProps = {
    className?: string;
    tracking?: "tight" | "normal";
    fontSize?: "[0.95rem]" | "sm" | "base";
  }
  
  export function TextBlock({ children, className, tracking = "normal", fontSize = "base" }: PropsWithChildren<TextBlockProps>) {
    return (
      <p className={`font-publicSans tracking-${tracking} text-${fontSize} leading-[1.875rem] text-left pt-6 pb-6 min-h-[11.75rem] ${className}`}>
        {children}
      </p>
    );
  }

  // function TextBlock({ children, className }: PropsWithChildren<TextBlockProps>) {
  //   return (
  //     <p className={`font-publicSans tracking-tight lg:tracking-normal text-[0.95rem] lg:text-base opacity-80 leading-[1.875rem] text-left pt-5 lg:pt-6 pb-6 pr-2 min-h-[11.75rem] ${className}`}>
  //       {children}
  //     </p>
  //   );
  // }