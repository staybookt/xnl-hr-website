import Image from "next/image";

type Props = {
  className?: string;
};

// Real headshot of Evert Akkerman. Swapped Oct 2026 at Evert's request.
// Source is 264x285, so the container matches that aspect ratio to avoid
// cropping (which would force an even bigger upscale).
export function PortraitEvert({ className = "w-full h-auto" }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`} style={{ aspectRatio: "264 / 285" }}>
      <Image
        src="/img/evert-headshot-2026.jpg"
        alt="Evert Akkerman, CHRL, founder of XNL HR & Communications"
        fill
        sizes="(max-width: 768px) 80vw, 400px"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

// Legacy export kept so any lingering import resolves. Renders nothing.
export function PortraitWendy() {
  return null;
}
