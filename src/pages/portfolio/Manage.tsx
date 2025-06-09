import {
  PortfolioNavigation,
  TextBlock,
  ProjectLink,
  Tags,
  StaticPreviews,
  ProjectBackground,
  ArticleHeader,
  ProjectArticle,
} from "../../components";
import {
  ManageFirstPreviewImage,
  ManageHeroImage,
  ManageSecondPreviewImage,
} from "../../images";
import { ContactSection } from "../ContactSection";

export function Manage() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] pt-2 md:pt-12">
        <ManageHeroImage />

        <section className="mt-10 lg:mt-28 lg:grid lg:grid-cols-[22rem_auto] lg:gap-[7.5rem]">
          <ProjectArticle className="items-start ">
            <div>
              <ArticleHeader className="pb-1">Manage</ArticleHeader>
              <TextBlock
                fontSize="[0.95rem]"
                tracking="tight"
                className="opacity-80 md:hidden lg:block pt-[1.35rem] pr-1 lg:pt-6 pb-6"
              >
                This project required me to build a fully responsive landing page
                to the designs provided. I used HTML5, along with CSS Grid and
                JavaScript for the areas that required interactivity, such as the
                testimonial slider.
              </TextBlock>
              <Tags classname="mb-0 md:mt-3 lg:mt-0 lg:mb-3">
                Interaction Design / Front End Development
              </Tags>
              <Tags classname="mb-6 md:mb-4 lg:mb-7">HTML / CSS / JS</Tags>
              <ProjectLink to="https://www.frontendmentor.io/profile/Simplify4Me2" className="mb-6">VISIT WEBSITE</ProjectLink>
            </div>
            <TextBlock
              fontSize="[0.95rem]"
              tracking="tight"
              className="opacity-80 hidden md:block lg:hidden pb-2 lg:pt-6 md:pl-1"
            >
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </TextBlock>
          </ProjectArticle>

          <section className="basis-lg lg:pl-1">
            <ProjectBackground>
              This project was a front-end challenge from Frontend Mentor. It's
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I've learned
              something new with each project, helping me to improve and adapt
              my style.
            </ProjectBackground>
            <StaticPreviews>
              <ManageFirstPreviewImage />
              <ManageSecondPreviewImage />
            </StaticPreviews>
          </section>
        </section>
      </main>
      <PortfolioNavigation
        previousProject="Fylo"
        previousProjectLink="/portfolio/fylo"
        nextProject="Bookmark"
        nextProjectLink="/portfolio/bookmark"
      />
      <ContactSection className="mt-16 md:mt-20 lg:mt-3 mb-20 md:mb-24 lg:mb-[9.5rem] px-8 md:px-0" />
    </>
  );
}
