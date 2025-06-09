import { Image } from "./Image";
import MobileImage from "../assets/detail/mobile/image-bookmark-preview-2.jpg";
import TabletImage from "../assets/detail/tablet/image-bookmark-preview-2.jpg";
import DesktopImage from "../assets/detail/desktop/image-bookmark-preview-2.jpg";

export function BookmarkSecondPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Second preview picture of the Bookmark project"
    />
  );
}
