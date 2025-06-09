type ImageProps = {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  alt: string;
};

export function Image({
  mobileImage,
  tabletImage,
  desktopImage,
  alt,
}: ImageProps) {
  return (
    <>
      <img
        src={mobileImage}
        alt={`${alt} image`}
        className="md:hidden h-fit self-center"
        loading="lazy"
      />
      <img
        src={tabletImage}
        alt={`${alt} image`}
        className="hidden md:block lg:hidden h-fit self-center"
        loading="lazy"
      />
      <img
        src={desktopImage}
        alt={`${alt} image`}
        className="hidden lg:block h-fit self-center"
        loading="lazy"
      />
    </>
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
