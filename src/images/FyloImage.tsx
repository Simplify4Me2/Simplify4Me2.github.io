import MobileImage from '../assets/portfolio/mobile/image-portfolio-fylo.jpg';
import TabletImage from "../assets/portfolio/tablet/image-portfolio-fylo.jpg";
import DesktopImage from "../assets/portfolio/desktop/image-portfolio-fylo.jpg";
import { Image } from "./Image";

export function FyloImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Fylo"
    />
  );
}
