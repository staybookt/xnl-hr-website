import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** Opacity 0-1 of the photograph below the gradient overlay */
  imageOpacity?: number;
};

/** A subtle full-bleed background image meant to sit BEHIND a gradient hero.
 *  Use as the first child of a relative-positioned hero section. */
export function HeroImage({ src, alt, imageOpacity = 0.18 }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ opacity: imageOpacity }}
      />
    </div>
  );
}
