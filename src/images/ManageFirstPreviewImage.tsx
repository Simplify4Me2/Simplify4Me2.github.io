import { Image } from "./Image";
import MobileImage from "../assets/detail/mobile/image-manage-preview-1.jpg";
import TabletImage from "../assets/detail/tablet/image-manage-preview-1.jpg";
import DesktopImage from "../assets/detail/desktop/image-manage-preview-1.jpg";

export function ManageFirstPreviewImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="First preview picture of the Manage project"
    />
  );
}