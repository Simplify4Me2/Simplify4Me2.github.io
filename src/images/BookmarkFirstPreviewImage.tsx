import { Image } from "./Image";
import MobileImage from "../assets/detail/mobile/image-bookmark-preview-1.jpg";
import TabletImage from "../assets/detail/tablet/image-bookmark-preview-1.jpg";
import DesktopImage from "../assets/detail/desktop/image-bookmark-preview-1.jpg";

export function BookmarkFirstPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="First preview picture of the Bookmark project"
    />
  );
}
