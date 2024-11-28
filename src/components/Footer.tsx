import LogoIcon from "../assets/logo.svg";
import GitHubIcon from "../assets/icons/github.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

export function Footer() {
  return (
    <footer>
      <img src={LogoIcon} className="invert" />
      <nav>
        <ul>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>CONTACT ME</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <img src={GitHubIcon} className="invert" />
          </li>
          <li>
            <img src={TwitterIcon} className="invert" />
          </li>
          <li>
            <img src={LinkedInIcon} className="invert" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
