import { BaseImage } from "./BaseImage";

export function HomepageHeroImage() {
  return (
    <BaseImage
      mobileUri="../assets/homepage/mobile/image-homepage-hero.jpg"
      tabletUri="../assets/homepage/tablet/image-homepage-hero.jpg"
      desktopUri="../assets/homepage/desktop/image-homepage-hero.jpg"
      alt="Profile picture of Simon Vereecke"
    />
  );
}
