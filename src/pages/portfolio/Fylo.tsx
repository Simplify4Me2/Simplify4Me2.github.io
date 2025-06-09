import {
  TextBlock,
  PortfolioNavigation,
  ArticleHeader,
  ProjectArticle,
  ProjectBackground,
  StaticPreviews,
  Tags,
  ProjectLink,
} from "../../components";
import {
  FyloHeroImage,
  FyloFirstPreviewImage,
  FyloSecondPreviewImage,
} from "../../images";
import { ContactSection } from "../ContactSection";

export function Fylo() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] pt-2 md:pt-12">
        <FyloHeroImage />

        <section className="mt-10 lg:mt-28 lg:grid lg:grid-cols-[22rem_auto] lg:gap-[7.5rem]">
          <ProjectArticle className="items-start ">
            <div>
              <ArticleHeader className="pb-1">Fylo</ArticleHeader>
              <TextBlock
                fontSize="[0.95rem]"
                tracking="tight"
                className="opacity-80 md:hidden lg:block pt-[1.35rem] pr-1 lg:pt-6 pb-6"
              >
                This project was built in pure HTML and CSS. I had mobile and
                desktop designs to work to and built it so that it was
                fully&#8209;responsive. I took a mobile&#8209;first approach and
                used modern CSS like Flexbox and Grid for layout purposes.
              </TextBlock>
              <Tags classname="mb-0 md:mt-3 lg:mt-0 lg:mb-3">
                Interaction Design / Front End Development
              </Tags>
              <Tags classname="mb-6 md:mb-4 lg:mb-7">HTML / CSS</Tags>
              <ProjectLink to="https://www.frontendmentor.io/profile/Simplify4Me2" className="mb-6">VISIT WEBSITE</ProjectLink>
            </div>
            <TextBlock
              fontSize="[0.95rem]"
              tracking="tight"
              className="opacity-80 hidden md:block lg:hidden pb-2 lg:pt-6 md:pl-1"
            >
              This project was built in pure HTML and CSS. I had mobile and
              desktop designs to work to and built it so that it was
              fully&#8209;responsive. I took a mobile&#8209;first approach and
              used modern CSS like Flexbox and Grid for layout purposes.
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
              <FyloFirstPreviewImage />
              <FyloSecondPreviewImage />
            </StaticPreviews>
          </section>
        </section>
      </main>
      <PortfolioNavigation
        previousProject="Insure"
        previousProjectLink="/portfolio/insure"
        nextProject="Manage"
        nextProjectLink="/portfolio/manage"
      />
      <ContactSection className="mt-16 md:mt-20 lg:mt-3 mb-20 md:mb-24 lg:mb-[9.5rem] px-8 md:px-0" />
    </>
  );
}
