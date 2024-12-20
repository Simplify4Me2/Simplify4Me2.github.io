import { Link } from "react-router-dom";
import DownArrowsIcon from "../assets/icons/down-arrows.svg";

import { PropsWithChildren } from "react";
import { HomePageImage, ProfileImage } from "../responsive-images";

export function Home() {
  return (
    <main className="px-8">
      <section className="flex flex-col pt-2 md:pt-0 pb-[5.5rem] relative lg:pt-[0.3rem]">
        <HomePageImage />
        <div className="flex flex-col justify-end bg-very-light-grey md:absolute md:bottom-[5.5rem] md:w-3/4 lg:w-2/5 md:h-[17.5rem] lg:h-[22.5rem]">
          <h1
            className={`font-serif font-bold text-[2.5rem] leading-[2.65rem] tracking-[-0.01em] grow pt-6 md:pt-14 pb-[1.85rem] max-w-md md:w-3/4 lg:text-[3.1rem] lg:leading-[3.1rem] lg:w-[24.5rem] lg:pt-16 lg:pb-14 lg:tracking-normal`}
          >
            {/* Hey, I&rsquo;m Alex Spencer and I love building beautiful websites */}
            Hey, I&rsquo;m Simon Vereecke and I love building beautiful websites
          </h1>
          <Button variant="contained-with-down-arrow">ABOUT ME</Button>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between pt-2 pb-[3.3rem lg:pt-16">
        {/* <img
          src={ProfileDesktopImage}
          alt="homepage image"
          className="hidden lg:block"
        /> */}
        <ProfileImage />
        <div className="border-y-[0.25px] border-solid border-grayish-dark-blue/15  my-8 pt-8 pb-12 lg:flex lg:flex-col lg:mx-20 lg:mb-0 lg:pt-12 lg:pb-0 lg:mt-0 lg:w-[22.5rem]">
          <h1 className="font-serif font-bold text-4xl tracking-tight pb-6">
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
    </main>
  );
}

interface IButtonProps {
  variant: "contained" | "contained-with-down-arrow" | "outlined";
  className?: string;
  onClick?: () => void;
}

function Button({
  children,
  variant,
  className,
  onClick,
}: PropsWithChildren<IButtonProps>) {
  if (variant === "contained-with-down-arrow")
    return (
      <button className="flex items-center h-12 w-[12.5rem] bg-dark-blue">
        <img src={DownArrowsIcon} className="h-full p-4 bg-dark-blue" />
        <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
          {children}
        </p>
      </button>
    );

  if (variant === "contained")
    return (
      <button className="flex items-center h-12 w-[12.5rem] bg-dark-blue">
        <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
          {children}
        </p>
      </button>
    );

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