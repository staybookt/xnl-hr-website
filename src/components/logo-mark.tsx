// XNL logomark — X + orange dot + NL
// Size prop controls width in px; everything else scales relative to that.

export function LogoMark({
  size = 24,
  className = "",
  showTagline = false,
  light = false,
}: {
  size?: number;
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}) {
  const dotSize = Math.round(size * 0.55);
  const dotMargin = Math.round(size * 0.06);
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span
        className={`inline-flex items-baseline font-bold tracking-[-0.02em] ${light ? "text-white" : "text-[var(--color-ink)]"}`}
        style={{ fontSize: `${size}px`, lineHeight: 1 }}
      >
        <span>X</span>
        <span
          aria-hidden="true"
          className="inline-block rounded-full bg-[var(--color-brand)]"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            marginLeft: `${dotMargin}px`,
            marginRight: `${dotMargin}px`,
            transform: `translateY(-${Math.round(size * 0.05)}px)`,
          }}
        />
        <span>NL</span>
      </span>
      {showTagline && (
        <span
          className={`ml-3 uppercase font-medium ${light ? "text-white/60" : "text-[var(--color-secondary)]"}`}
          style={{ fontSize: `${Math.round(size * 0.42)}px`, letterSpacing: "0.14em" }}
        >
          HR &amp; Communications
        </span>
      )}
    </span>
  );
}
