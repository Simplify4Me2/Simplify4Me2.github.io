import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const EXTERNAL_URL_PATTERN = /^https?:\/\//i;
const PROTOCOL_PATTERN = /^[a-z][a-z\d+.-]*:/i;

export function ProjectLink({ to, children, className }: PropsWithChildren<{ to: string, className?: string }>) {
  const linkClassName = [
    "flex items-center font-publicSans text-xs w-fit tracking-[0.125rem] border-[0.5px]",
    "border-solid border-black h-12 px-8 self-start hover:bg-grayish-dark-blue hover:text-white",
    `transition-colors duration-300 ease-in-out group ${className}`,
  ].join(" ");
  const isExternal = EXTERNAL_URL_PATTERN.test(to);
  const hasUnsupportedProtocol = PROTOCOL_PATTERN.test(to) && !isExternal;

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={linkClassName}>
        {children}
      </a>
    );
  }

  if (hasUnsupportedProtocol) {
    if (import.meta.env.DEV) {
      console.warn(`Unsupported ProjectLink destination: ${to}`);
    }

    return null;
  }

  return (
    <Link to={to} className={linkClassName}>
      {children}
    </Link>
  );
}