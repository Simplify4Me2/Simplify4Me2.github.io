import { PropsWithChildren } from "react";

export function ProjectArticle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article className={`flex ${className}`}>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col flex-1 justify-start md:pb-2 lg:pb-7 pt-6 md:pt-8 lg:pt-12 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        {children}
      </div>
    </article>
  );
}
