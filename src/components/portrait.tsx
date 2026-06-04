import Image from "next/image";

type Props = {
  className?: string;
};

// Real headshot of Evert Akkerman. Photo provided 2025. Replaces the prior SVG illustration.
export function PortraitEvert({ className = "w-full h-auto" }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`} style={{ aspectRatio: "338 / 444" }}>
      <Image
        src="/img/evert.jpg"
        alt="Evert Akkerman, CHRL, founder of XNL HR & Communications"
        fill
        sizes="(max-width: 768px) 80vw, 400px"
        className="object-cover"
        priority
      />
    </div>
  );
}

// Legacy export kept so any lingering import resolves. Renders nothing.
export function PortraitWendy() {
  return null;
}
