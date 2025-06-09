import LogoIcon from "./assets/logo.svg";
import { Link } from "react-router-dom";
import { SocialMediaNav } from "./components";

export function Footer() {
  return (
    <footer className="w-full bg-grayish-dark-blue h-fit text-white py-[3.5rem] md:py-6 md:px-9 flex justify-center">
      <div className="max-w-screen-xl flex flex-col gap-9 md:flex-row justify-between items-center">
        <Link to="/">
          <img src={LogoIcon} className="invert" alt="logo" />
        </Link>
        <nav className="md:mr-32 lg:mr-[35rem] md:pl-2">
          <ul className="flex flex-col md:flex-row justify-between text-center font-publicSans text-xs font-extralight tracking-[0.15rem] h-28 md:h-fit md:gap-10">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT ME</Link>
            </li>
          </ul>
        </nav>
        <SocialMediaNav inverted />
      </div>
    </footer>
  );
}
