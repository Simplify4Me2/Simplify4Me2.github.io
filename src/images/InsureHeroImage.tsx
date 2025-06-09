import MobileImage from "../assets/detail/mobile/image-insure-hero.jpg";
import TabletImage from "../assets/detail/tablet/image-insure-hero.jpg";
import DesktopImage from "../assets/detail/desktop/image-insure-hero.jpg";
import { Image } from "./Image";

export function InsureHeroImage() {
    return (
        <Image
          mobileImage={MobileImage}
          tabletImage={TabletImage}
          desktopImage={DesktopImage}
          alt="Insure project preview"
        />
    );
}