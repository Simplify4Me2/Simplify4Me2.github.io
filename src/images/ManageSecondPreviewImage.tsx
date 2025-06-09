import { Image } from "./Image";
import MobileImage from "../assets/detail/mobile/image-manage-preview-2.jpg";
import TabletImage from "../assets/detail/tablet/image-manage-preview-2.jpg";
import DesktopImage from "../assets/detail/desktop/image-manage-preview-2.jpg";

export function ManageSecondPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Second preview picture of the Manage project"
    />
  );
}
