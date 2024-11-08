import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";

export function Home() {

    return <>
    <header className="flex items-center justify-between p-8 w-lvw">
    <img src={LogoIcon} />
    <img src={HamburgerIcon} />
  </header>
    <h1>Home</h1>
    <Link to="projects">Projects</Link>
    </>
}