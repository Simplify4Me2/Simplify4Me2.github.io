import MobileImage from "../assets/detail/mobile/image-fylo-preview-2.jpg";
import TabletImage from "../assets/detail/tablet/image-fylo-preview-2.jpg";
import DesktopImage from "../assets/detail/desktop/image-fylo-preview-2.jpg";
import { Image } from "./Image";

export function FyloSecondPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Second preview picture of the Fylo project"
    />
  );
}