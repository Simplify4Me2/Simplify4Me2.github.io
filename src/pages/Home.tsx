import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import GitHubIcon from "../assets/icons/github.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

import ProfileDesktopImage from "../assets/image-homepage-profile.jpg";
import { PropsWithChildren } from "react";

export function Home() {
  return (
    <>
      <header className="flex items-center justify-between p-8 md:pt-16 md:pb-12 md:px-10 lg:px-[5.25rem]">
        <Link to="/">
          <img src={LogoIcon} alt="logo" />
        </Link>
        <button>
          <img src={HamburgerIcon} className="md:hidden" />
        </button>
        <nav className="hidden md:block">
          <ul className="md:flex gap-[42px] font-publicSans text-xs tracking-[0.125rem]">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="contact">CONTACT ME</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-col lg:flex-row lg:justify-between pt-2 pb-[3.3rem lg:pt-16">
        <img
          src={ProfileDesktopImage}
          alt="homepage image"
          className="hidden lg:block"
        />
        <div className="border-y-[0.25px] border-solid border-grayish-dark-blue/15  my-8 pt-8 pb-12 lg:flex lg:flex-col lg:mx-20 lg:mb-0 lg:pt-12 lg:pb-0 lg:mt-0 lg:w-[22.5rem]">
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            About Me
          </h1>
          <p className="font-publicSans leading-[1.875rem] text-left pt-[0.25rem] pb-1.5 min-h-[11.75rem]">
            I'm a full-stack software developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in Aarschot, BE, but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check out my work.
          </p>
          <Button variant="outlined" className="mt-4 self-start">
            <Link to="projects">GO TO PORTFOLIO</Link>
          </Button>
        </div>
      </section>

      <footer className="w-full bg-grayish-dark-blue h-fit text-white py-[3.5rem] lg:py-6 lg:px-9 flex justify-center">
      <div className="max-w-screen-xl flex flex-col gap-9 lg:flex-row justify-between items-center">
        <img src={LogoIcon} className="invert" />
        <nav className="lg:mr-[35rem] lg:pl-2">
          <ul className="flex flex-col lg:flex-row justify-between text-center font-publicSans text-xs font-extralight tracking-[0.15rem] h-28 lg:h-fit lg:gap-10">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="contact">CONTACT ME</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-4 lg:items-center">
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
      </div>
    </footer>
    </>
  );
}

interface IButtonProps {
  variant: "contained" | "outlined";
  className?: string;
  onClick?: () => void;
}

function Button({
  children,
  variant,
  className,
  onClick,
}: PropsWithChildren<IButtonProps>) {
  if (variant === "contained") return <>{children}</>;

  return (
    <button
      role="link"
      onClick={onClick}
      className={`font-publicSans text-xs tracking-[0.125rem] border-[0.5px] border-solid border-black h-12 px-8 ${className}`}
    >
      {children}
    </button>
  );
}
