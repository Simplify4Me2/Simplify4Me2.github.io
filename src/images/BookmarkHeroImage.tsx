import { Image } from "./Image";
import MobileImage from "../assets/detail/mobile/image-bookmark-hero.jpg";
import TabletImage from "../assets/detail/tablet/image-bookmark-hero.jpg";
import DesktopImage from "../assets/detail/desktop/image-bookmark-hero.jpg";

export function BookmarkHeroImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Preview picture of the Bookmark project"
    />
  );
}
