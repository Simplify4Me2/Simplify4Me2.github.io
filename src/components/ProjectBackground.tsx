import { PropsWithChildren } from "react";
import { TextBlock } from "./TextBlock";

export function ProjectBackground({ children }: PropsWithChildren) {
  return (
    <article>
      <h2 className="font-ibarra font-medium text-[2rem] tracking-tight pt-12 md:pt-9 md:pb-1 lg:py-0">
        Project Background
      </h2>
      <TextBlock
        tracking="tight"
        fontSize="[0.95rem]"
        className="pt-[1.35rem] lg:pt-6 pb-6 lg:pr-1 opacity-80"
      >
        {children}
      </TextBlock>
    </article>
  );
}
