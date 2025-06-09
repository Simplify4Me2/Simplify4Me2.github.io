import MobileImage from "../assets/detail/mobile/image-insure-preview-2.jpg";
import TabletImage from "../assets/detail/tablet/image-insure-preview-2.jpg";
import DesktopImage from "../assets/detail/desktop/image-insure-preview-2.jpg";
import { Image } from "./Image";

export function InsureSecondPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Second preview picture of the Insure project"
    />
  );
}
