import { BaseImage } from "./BaseImage";

export function ProfileImage() {
  return (
    <BaseImage
      desktopUri="../assets/image-homepage-profile.jpg"
      tabletUri="../assets/image-homepage-profile.jpg"
      mobileUri="../assets/image-homepage-profile.jpg"
      alt="Profile picture of Simon Vereecke"
    />
  );
}


// TODO: Refactor the ProfileImage component to use the srcSet attribute
// import ProfileMobileImage from "../assets/homepage/mobile/image-homepage-profile.jpg";
// import ProfileTabletImage from "../assets/homepage/tablet/image-homepage-profile.jpg";
// import ProfileDesktopImage from "../assets/homepage/desktop/image-homepage-profile.jpg";

// export function ProfileImage() {
//     return (
//       <img
//         src={ProfileMobileImage}
//         srcSet={`${ProfileMobileImage} 320w, ${ProfileTabletImage} 768w, ${ProfileDesktopImage} 1280w`}
//         sizes="(max-width: 640px) 100%, (max-width: 768px) 100%, 100%"
//         alt="homepage image"
//       />
//     );
//   }