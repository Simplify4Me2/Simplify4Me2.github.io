import HomepageMobileImage from "../assets/homepage/mobile/image-homepage-hero.jpg";
import HomepageTabletImage from "../assets/homepage/tablet/image-homepage-hero.jpg";
import HomepageDesktopImage from "../assets/homepage/desktop/image-homepage-hero.jpg";

export function HomePageImage() {
    return (
      <>
        <img
          src={HomepageMobileImage}
          alt="homepage image"
          className="md:hidden"
        />
        <img
          src={HomepageTabletImage}
          alt="homepage image"
          className="hidden md:block lg:hidden"
        />
        <img
          src={HomepageDesktopImage}
          alt="homepage image"
          className="hidden lg:block"
        />
      </>
    );
  }