import MobileImage from "../assets/portfolio/mobile/image-portfolio-manage.jpg";
import TabletImage from "../assets/portfolio/tablet/image-portfolio-manage.jpg";
import DesktopImage from "../assets/portfolio/desktop/image-portfolio-manage.jpg";
import { Image } from "./Image";

export function ManageImage() {
  return (
      <Image
        mobileImage={MobileImage}
        tabletImage={TabletImage}
        desktopImage={DesktopImage}
        alt="Manage"
      />
  );
}
