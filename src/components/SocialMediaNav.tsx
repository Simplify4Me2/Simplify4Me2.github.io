import GitHubIcon from "../assets/icons/github.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
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
        <img src={TwitterIcon} className={iconClass} />
      </li>
      <li>
        <img src={LinkedInIcon} className={iconClass} />
      </li>
    </ul>
  </nav>
  }