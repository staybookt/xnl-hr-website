// Inline SVG icon set — strict 1.5px stroke, currentColor.

type IconProps = { size?: number; className?: string };

const svgProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function BriefcaseIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function ScaleIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M6 7l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3l-3-7Z" />
      <path d="M18 7l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3l-3-7Z" />
      <path d="M6 7l6-2 6 2" />
    </svg>
  );
}

export function PenIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function PhoneIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function DocumentIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

export function HandshakeIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <path d="M11 17l2 2a1 1 0 1 0 3-3" />
      <path d="M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="M21 3l-9 9-3-3" />
      <path d="M3 13l3-3 3 3-3 3z" />
    </svg>
  );
}

export function CalendarIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function MinusIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function PlusIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...svgProps(size)} className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function getServiceIcon(name: string, props: IconProps = {}) {
  switch (name) {
    case "briefcase":
      return <BriefcaseIcon {...props} />;
    case "scale":
      return <ScaleIcon {...props} />;
    case "pen":
      return <PenIcon {...props} />;
    default:
      return <BriefcaseIcon {...props} />;
  }
}

export function getStepIcon(idx: number, props: IconProps = {}) {
  const icons = [PhoneIcon, DocumentIcon, HandshakeIcon, CalendarIcon];
  const Icon = icons[idx] ?? PhoneIcon;
  return <Icon {...props} />;
}
