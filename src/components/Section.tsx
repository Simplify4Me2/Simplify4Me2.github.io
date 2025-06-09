import { PropsWithChildren } from "react";

export function Section({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section
      className={`flex flex-col md:flex-row lg:justify-between ${className}`}
    >
      {children}
    </section>
  );
}
