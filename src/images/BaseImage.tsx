type BaseImageProps = {
    mobileUri: string;
    tabletUri: string;
    desktopUri: string;
    alt: string;
  };

  export function BaseImage({ mobileUri, tabletUri, desktopUri, alt }: BaseImageProps) 
  { 
    return (
      <>
        <img
          src={mobileUri}
          alt={`${alt} image`}
          className="md:hidden"
          loading="lazy"
        />
        <img
          src={tabletUri}
          alt={`${alt} image`}
          className="hidden md:block lg:hidden"
          loading="lazy"
        />
        <img
          src={desktopUri}
          alt={`${alt} image`}
          className="hidden lg:block"
          loading="lazy"
        />
      </>
    );
  }