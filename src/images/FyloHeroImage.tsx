import MobileImage from "../assets/detail/mobile/image-fylo-hero.jpg";
import TabletImage from "../assets/detail/tablet/image-fylo-hero.jpg";
import DesktopImage from "../assets/detail/desktop/image-fylo-hero.jpg";
import { Image } from "./Image";

export function FyloHeroImage() {
    return (
        <Image
          mobileImage={MobileImage}
          tabletImage={TabletImage}
          desktopImage={DesktopImage}
          alt="Fylo image"
        />
      );
}