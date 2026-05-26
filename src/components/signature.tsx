// Handwritten signatures using the Caveat script font from Google Fonts.
// Placeholder until Evert or Wendy provide actual signature images.

type Props = { className?: string; size?: number; color?: string };

export function SignatureEvert({ className = "", size = 48, color }: Props) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-signature)",
        fontSize: `${size}px`,
        lineHeight: 1,
        fontWeight: 500,
        color: color,
        display: "inline-block",
        transform: "rotate(-2deg)",
      }}
      aria-label="Evert Akkerman signature"
    >
      Evert
    </span>
  );
}

export function SignatureWendy({ className = "", size = 48, color }: Props) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-signature)",
        fontSize: `${size}px`,
        lineHeight: 1,
        fontWeight: 500,
        color: color,
        display: "inline-block",
        transform: "rotate(-3deg)",
      }}
      aria-label="Wendy Akkerman signature"
    >
      Wendy
    </span>
  );
}
