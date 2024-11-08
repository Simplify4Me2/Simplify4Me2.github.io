import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import GitHubIcon from "../assets/icons/github.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

export function Home() {

    return <>
    <header className="flex items-center justify-between p-8 w-lvw">
    <img src={LogoIcon} />
    <img src={HamburgerIcon} />
  </header>
    <h1>Home</h1>
    <Link to="projects">Projects</Link>
    <footer className="flex flex-col justify-around items-center bg-grayish-dark-blue h-[22rem] text-white py-8">
    <img src={LogoIcon} className="invert" />
    <ul className="flex flex-col justify-between text-center font-publicSans text-xs font-extralight tracking-[0.15rem] h-28">
      <li>HOME</li>
      <li>PORTFOLIO</li>
      <li>CONTACT ME</li>
    </ul>
    <ul className="flex gap-4">
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
  </footer>
    </>
}