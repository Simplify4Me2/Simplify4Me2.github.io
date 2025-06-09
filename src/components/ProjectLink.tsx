import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function ProjectLink({ to, children }: PropsWithChildren<{to: string}>) {
  return (
    <Link
      to={to}
      className="flex items-center font-publicSans text-xs tracking-[0.125rem] border-[0.5px] border-solid border-black h-12 px-8 mb-6 self-start"
    >
      {children}
    </Link>
  );
}