import { PropsWithChildren } from "react";

export function Section({
  children,
  className = '',
  ref
}: PropsWithChildren<{ className?: string, ref?: React.Ref<HTMLDivElement> }>) {
  return (
    <section
      ref={ref}
      className={`flex flex-col md:flex-row lg:justify-between ${className}`}
    >
      {children}
    </section>
  );
}
