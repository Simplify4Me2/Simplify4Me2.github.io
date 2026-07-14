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
        <a href="https://github.com/Simplify4Me2" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><img src={GitHubIcon} className={iconClass} alt="" /></a>
      </li>
      <li>
        <a href="https://x.com/simon_vereecke" target="_blank" rel="noopener noreferrer" aria-label="X (opens in a new tab)"><img src={XIcon} className={iconClass} alt="" /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/simon-vereecke-75822497/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><img src={LinkedInIcon} className={iconClass} alt="" /></a>
      </li>
    </ul>
  </nav>
  }