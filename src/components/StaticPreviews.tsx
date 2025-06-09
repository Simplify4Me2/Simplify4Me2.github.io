import { PropsWithChildren } from "react";

export function StaticPreviews({ children }: PropsWithChildren) {
  return (
    <article className="pt-3">
      <div>
        <h2 className="font-ibarra font-medium text-[2rem] tracking-tight mb-10 lg:mb-6">
          Static Previews
        </h2>
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </article>
  );
}
