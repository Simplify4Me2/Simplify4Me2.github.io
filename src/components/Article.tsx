import { PropsWithChildren } from "react";
import ArticleHeader from "./ArticleHeader";

export function Article({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <article
      className={`flex lg:items-center ${className}`}
    >
      <div className="flex flex-col h-full justify-center lg:pb-7 pt-6 lg:pt-12 md:my-0 md:ml-[4.25rem] lg:ml-24 lg:mr-24 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        <ArticleHeader className="pb-1">{title}</ArticleHeader>
        {children}
      </div>
    </article>
  );
}
