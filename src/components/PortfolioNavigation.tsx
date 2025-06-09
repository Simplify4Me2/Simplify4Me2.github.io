import { Link } from "react-router-dom";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";

type PortfolioNavigationProps = {
  previousProject: string;
  previousProjectLink: string;
  nextProject: string;
  nextProjectLink: string;
};

export function PortfolioNavigation({
  previousProject,
  previousProjectLink,
  nextProject,
  nextProjectLink,
}: PortfolioNavigationProps) {
  return (
    <nav className="max-w-screen-md lg:max-w-screen-xl flex w-full px-6 lg:px-[4.25rem] mt-[4.25rem] md:mt-[4.85rem] lg:mt-16 lg:mb-[6.5rem] ">
      <Link
        to={previousProjectLink}
        className="flex-1 md:pl-3 md:flex md:justify-start md:items-center border-black border-grayish-dark-blue/[.15] border-y-[1px]"
      >
        <img src={ArrowLeft} className="pt-[1.4rem] pb-4" />
        <div className="md:flex md:flex-col md:py-8 md:px-9 ">
          <p className="font-serif text-3xl">{previousProject}</p>
          <p className="font-sans tracking-wide pt-1 pb-6 md:pb-0 lg:py-0 opacity-50">
            Previous Project
          </p>
        </div>
      </Link>
      <span className="border-l-[1px] border-grayish-dark-blue/[.15]"></span>
      <Link
        to={nextProjectLink}
        className="flex-1 md:pr-3 flex flex-col items-end md:justify-start md:flex-row-reverse md:items-center text-right border-grayish-dark-blue/[.15] border-solid border-y-[1px]"
      >
        <img src={ArrowRight} className="pt-[1.4rem] pb-4" />
        <div className="md:flex md:flex-col md:py-8 md:px-9 lg:p-8 lg:pb-10">
          <p className="font-serif text-3xl">{nextProject}</p>
          <p className="font-sans tracking-wide pt-1 pb-6 md:pb-0 lg:py-0 opacity-50">
            Next Project
          </p>
        </div>
      </Link>
    </nav>
  );
}
