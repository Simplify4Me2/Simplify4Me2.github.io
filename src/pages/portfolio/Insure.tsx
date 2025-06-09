import {
  PortfolioNavigation,
  ArticleHeader,
  TextBlock,
  ProjectArticle,
  Tags,
  ProjectLink,
  ProjectBackground,
  StaticPreviews,
} from "../../components";
import { ContactSection } from "../ContactSection";
import {
  InsureFirstPreviewImage,
  InsureHeroImage,
  InsureSecondPreviewImage,
} from "../../images";

export function Insure() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] pt-2 md:pt-12">
        <InsureHeroImage />

        <section className="mt-10 lg:mt-28 lg:grid lg:grid-cols-[22rem_auto] lg:gap-[7.5rem]">
          <ProjectArticle className="items-start ">
            <div>
              <ArticleHeader className="pb-1">Insure</ArticleHeader>
              <TextBlock
                fontSize="[0.95rem]"
                tracking="tight"
                className="opacity-80 md:hidden lg:block pt-[1.35rem] pr-1 lg:pt-6 pb-6"
              >
                This was a small project which mostly consisted of HTML and CSS. I
                built a fully&#8209;responsive landing page. The only JavaScript this
                project required was to enable the toggling of the mobile
                navigation.
              </TextBlock>
              <Tags classname="mb-0 md:mt-3 lg:mt-0 lg:mb-3">
                Interaction Design / Front End Development
              </Tags>
              <Tags classname="mb-6 md:mb-4 lg:mb-7">HTML / CSS / JS</Tags>
              <ProjectLink to="insure" className="mb-6">VISIT WEBSITE</ProjectLink>
            </div>
            <TextBlock
              fontSize="[0.95rem]"
              tracking="tight"
              className="opacity-80 hidden md:block lg:hidden pb-2 lg:pt-6 md:pl-1"
            >
              This was a small project which mostly consisted of HTML and CSS. I
              built a fully&#8209;responsive landing page. The only JavaScript this
              project required was to enable the toggling of the mobile
              navigation.
            </TextBlock>
          </ProjectArticle>

          <section className="basis-lg lg:pl-1">
            <ProjectBackground>
              This project was a front-end challenge from Frontend Mentor. It's a
              platform that enables you to practice building websites to a design
              and project brief. Each challenge includes mobile and desktop
              designs to show how the website should look at different screen
              sizes. Creating these projects has helped me refine my workflow and
              solve real-world coding problems. I've learned something new with
              each project, helping me to improve and adapt my style.
            </ProjectBackground>
            <StaticPreviews>
              <InsureFirstPreviewImage />
              <InsureSecondPreviewImage />
            </StaticPreviews>
          </section>
        </section>
      </main>
      <PortfolioNavigation
        previousProject="Bookmark"
        previousProjectLink="/portfolio/bookmark"
        nextProject="Fylo"
        nextProjectLink="/portfolio/fylo"
      />
      <ContactSection className="mt-16 md:mt-20 lg:mt-3 mb-20 md:mb-24 lg:mb-[9.5rem] px-8 md:px-0" />
    </>
  );
}

