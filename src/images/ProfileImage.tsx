import MobileImage from "../assets/homepage/mobile/image-homepage-profile.jpg";
import TabletImage from "../assets/homepage/tablet/image-homepage-profile.jpg";
import DesktopImage from "../assets/homepage/desktop/image-homepage-profile.jpg";
import { Image } from "./Image";

export function ProfileImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Profile image"
    />
  );
}
