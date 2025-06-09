import MobileImage from "../assets/detail/mobile/image-insure-preview-1.jpg";
import TabletImage from "../assets/detail/tablet/image-insure-preview-1.jpg";
import DesktopImage from "../assets/detail/desktop/image-insure-preview-1.jpg";
import { Image } from "./Image";

export function InsureFirstPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="First preview picture of the Insure project"
    />
  );
}