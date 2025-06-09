import { PropsWithChildren } from "react";

export function Tags({
    children,
    classname,
  }: PropsWithChildren<{ classname?: string }>) {
    return (
      <p
        className={`font-publicSans font-bold text-[0.805rem] lg:text-base text-slightly-desaturated-cyan py-[0.3rem] ${classname}`}
      >
        {children}
      </p>
    );
  }