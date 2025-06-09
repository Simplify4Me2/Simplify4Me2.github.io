import { Image } from "./Image";
import MobileImage from "../assets/detail/mobile/image-manage-hero.jpg";
import TabletImage from "../assets/detail/tablet/image-manage-hero.jpg";
import DesktopImage from "../assets/detail/desktop/image-manage-hero.jpg";

export function ManageHeroImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Preview picture of the Manage project"
    />
  );
}


