import { memo, PropsWithChildren } from "react";

const ArticleHeader = memo(({ children, className }: PropsWithChildren<{ className?: string }>) => {
    return (
      <h1 className={`font-ibarra font-bold text-4xl tracking-tight ${className}`}>
        {children}
      </h1>
    );
  });

  export default ArticleHeader;