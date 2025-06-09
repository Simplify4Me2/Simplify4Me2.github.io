import MobileImage from '../assets/portfolio/mobile/image-portfolio-bookmark.jpg';
import TabletImage from "../assets/portfolio/tablet/image-portfolio-bookmark.jpg";
import DesktopImage from "../assets/portfolio/desktop/image-portfolio-bookmark.jpg";
import { Image } from "./Image";

export function BookmarkImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Bookmark image"
    />
  );
}
