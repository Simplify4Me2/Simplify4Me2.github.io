import { PropsWithChildren } from "react";
import ArticleHeader from "./ArticleHeader";

export function Article({
  children,
  className,
  title,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <article className={`flex ${className}`}>
      <div className="flex flex-col flex-1 justify-start lg:pb-7 pt-6 md:pl-9 lg:pl-0 md:pt-12 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        <ArticleHeader className="pb-1">{title}</ArticleHeader>
        {children}
      </div>
    </article>
  );
}
