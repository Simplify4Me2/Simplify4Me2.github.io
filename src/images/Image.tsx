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
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopImage} />
      <source media="(min-width: 768px)" srcSet={tabletImage} />
      <img
        src={mobileImage}
        alt={alt}
        className="h-fit self-center"
        loading="lazy"
      />
    </picture>
  );
}
