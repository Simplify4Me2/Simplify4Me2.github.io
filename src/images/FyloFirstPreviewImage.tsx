import MobileImage from "../assets/detail/mobile/image-fylo-preview-1.jpg";
import TabletImage from "../assets/detail/tablet/image-fylo-preview-1.jpg";
import DesktopImage from "../assets/detail/desktop/image-fylo-preview-1.jpg";
import { Image } from "./Image";

export function FyloFirstPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="First preview picture of the Fylo project"
    />
  );
}