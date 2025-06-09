import MobileImage from '../assets/homepage/mobile/image-homepage-hero.jpg';
import TabletImage from "../assets/homepage/tablet/image-homepage-hero.jpg";
import DesktopImage from "../assets/homepage/desktop/image-homepage-hero.jpg";
import { Image } from "./Image";

export function HomepageHeroImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Profile picture of Alex Spencer"
    />
  );
}
