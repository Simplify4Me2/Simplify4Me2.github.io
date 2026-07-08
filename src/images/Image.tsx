type ImageProps = {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  alt: string;
  className?: string;
};

export function Image({
  mobileImage,
  tabletImage,
  desktopImage,
  alt,
  className,
}: ImageProps) {
  return (
    <picture className={className}>
      <source media="(min-width: 1024px)" srcSet={desktopImage} />
      <source media="(min-width: 768px)" srcSet={tabletImage} />
      <img
        src={mobileImage}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </picture>
  );
}
