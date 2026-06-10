import { PropsWithChildren } from "react";

export function Tags({
    children,
    className,
  }: PropsWithChildren<{ className?: string }>) {
    return (
      <p
        className={`font-publicSans font-bold text-[0.805rem] lg:text-base text-slightly-desaturated-cyan py-[0.3rem] ${className}`}
      >
        {children}
      </p>
    );
  }