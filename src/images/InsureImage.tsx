import MobileImage from '../assets/portfolio/mobile/image-portfolio-insure.jpg';
import TabletImage from "../assets/portfolio/tablet/image-portfolio-insure.jpg";
import DesktopImage from "../assets/portfolio/desktop/image-portfolio-insure.jpg";
import { Image } from "./Image";

export function InsureImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Insure"
    />
  );
}
