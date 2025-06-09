import GitHubIcon from "../assets/icons/github.svg";
import XIcon from "../assets/icons/x.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

interface SocialMediaNavProps {
    inverted?: boolean;
    className?: string;
}

export function SocialMediaNav({ inverted = false, className }: SocialMediaNavProps) {
  const iconClass = inverted ? "invert" : "";

    return <nav>
    <ul className={`flex gap-4 lg:items-center ${className}`}>
      <li>
        <img src={GitHubIcon} className={iconClass} />
      </li>
      <li>
        <img src={XIcon} className={iconClass} />
      </li>
      <li>
        <img src={LinkedInIcon} className={iconClass} />
      </li>
    </ul>
  </nav>
  }