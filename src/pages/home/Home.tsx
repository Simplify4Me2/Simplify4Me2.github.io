import { useScrollToTop } from "../../hooks";
import { HomepageHeroImage, ProfileImage } from "../../images";
import DownArrowsIcon from '../../assets/icons/down-arrows.svg';
import WhiteDownArrowsIcon from '../../assets/icons/white-down-arrows.svg';
import {
  Button,
  ArticleHeader,
  TextBlock,
  ProjectLink,
  Section,
} from "../../components";
import { useRef } from "react";
import { ContactSection } from "../ContactSection";

function Home() {
  useScrollToTop();

  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <section className="flex flex-col pt-2 md:pt-0 pb-[5.5rem] relative lg:pt-[0.3rem]">
          <HomepageHeroImage />
          <div className="flex flex-col justify-end bg-very-light-grey md:absolute md:bottom-[5.5rem] md:w-3/4 lg:w-2/5 md:h-[17.5rem] lg:h-[22.5rem]">
            <ArticleHeader className="grow pt-6 md:pt-14 pb-[1.85rem] max-w-md md:w-3/4 lg:text-[3.1rem] lg:leading-[3.1rem] lg:w-[24.5rem] lg:pt-16 lg:pb-14 lg:tracking-normal">
              Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
            </ArticleHeader>
            <Button onClick={scrollToAboutMe} className="group">
              <img src={DownArrowsIcon} className="h-full p-4 group-hover:filter group-hover:hidden" />
              <img src={WhiteDownArrowsIcon} className="h-full p-4 hidden group-hover:filter group-hover:inline-block" />
              <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
                ABOUT ME
              </p>
            </Button>
          </div>
        </section>

        <Section ref={aboutMeRef} className="pt-2 lg:pt-0 lg:mt-16 gap-8">
          <ProfileImage />
          <article className="flex lg:px-24">
            <div className="flex flex-col flex-1 justify-start pb-[1.65rem] lg:pb-5 pt-[1.9rem] md:ml-9 lg:ml-0 md:pt-12 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
              <ArticleHeader className="pb-2">About Me</ArticleHeader>
              <TextBlock className="pt-[1.35rem] lg:pt-6 pb-6">
                I'm a junior front-end developer looking for a new role in an
                exciting company. I focus on writing accessible HTML, using
                modern CSS practices and writing clean JavaScript. When writing
                JavaScript code, I mostly use React, but I can adapt to whatever
                tools are required. I'm based in London, UK, but I'm happy
                working remotely and have experience in remote teams. When I'm
                not coding, you'll find me outdoors. I love being out in nature
                whether that's going for a walk, run or cycling. I'd love you to
                check out my work.
              </TextBlock>
              <ProjectLink to="/portfolio" className="mb-6">GO TO PORTFOLIO</ProjectLink>
            </div>
          </article>
        </Section>

        <ContactSection className="pt-[7.15rem] md:pt-[5.5rem] pb-20 md:pb-24 lg:mt-16 lg:mb-12" />
      </main>
    </>
  );
}

export default Home;
