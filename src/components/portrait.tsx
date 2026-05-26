// Custom illustrated SVG portraits — NOT AI-generated.
// Editorial minimalist style. Placeholder until real photography lands.
// See PLACEHOLDERS.md.

type Props = { className?: string };

export function PortraitEvert({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylized portrait of Evert Akkerman"
      className={className}
    >
      <defs>
        <linearGradient id="evertBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D3D4E" />
          <stop offset="100%" stopColor="#1F2D3D" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" rx="20" fill="url(#evertBg)" />
      <text x="16" y="30" fontSize="8" letterSpacing="0.18em" fill="rgba(255,255,255,0.5)" fontWeight="600">PORTRAIT · EA</text>
      <line x1="16" y1="38" x2="40" y2="38" stroke="#E89B7A" strokeWidth="2" strokeLinecap="round" />

      {/* Jacket */}
      <path d="M30 240 L42 180 Q100 164 158 180 L170 240 Z" fill="#1A1D24" />
      <line x1="100" y1="198" x2="100" y2="240" stroke="#0F151D" strokeWidth="2" />
      <rect x="120" y="202" width="3" height="14" fill="#E89B7A" rx="1" />

      {/* Shirt collar */}
      <path d="M88 178 L100 200 L112 178 Z" fill="#FAF7F2" />

      {/* Neck */}
      <rect x="91" y="160" width="18" height="22" fill="#D4B294" />

      {/* Head */}
      <ellipse cx="100" cy="115" rx="38" ry="44" fill="#E8C29A" />

      {/* Hair */}
      <path d="M62 102 Q60 72 100 66 Q140 72 138 102 L135 92 Q128 78 100 78 Q72 78 65 92 Z" fill="#4A4543" />
      <path d="M62 102 L62 132 L66 128 L66 105 Z" fill="#6B6661" opacity="0.6" />
      <path d="M138 102 L138 132 L134 128 L134 105 Z" fill="#6B6661" opacity="0.6" />

      {/* Glasses — rectangular, scholarly */}
      <rect x="74" y="108" width="22" height="22" rx="3" fill="none" stroke="#1A1D24" strokeWidth="2.2" />
      <rect x="104" y="108" width="22" height="22" rx="3" fill="none" stroke="#1A1D24" strokeWidth="2.2" />
      <line x1="96" y1="119" x2="104" y2="119" stroke="#1A1D24" strokeWidth="2.2" />

      {/* Eyes */}
      <circle cx="85" cy="119" r="1.6" fill="#1A1D24" />
      <circle cx="115" cy="119" r="1.6" fill="#1A1D24" />

      {/* Nose hint */}
      <path d="M100 125 L99 137" stroke="#C4A484" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Composed smile */}
      <path d="M92 145 Q100 147 108 145" stroke="#1A1D24" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      <text x="170" y="225" textAnchor="end" fontSize="8" letterSpacing="0.16em" fill="rgba(255,255,255,0.45)" fontWeight="600">EVERT</text>
    </svg>
  );
}

export function PortraitWendy({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylized portrait of Wendy Akkerman"
      className={className}
    >
      <defs>
        <linearGradient id="wendyBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8B5A8" />
          <stop offset="100%" stopColor="#7A8B7A" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" rx="20" fill="url(#wendyBg)" />
      <text x="16" y="30" fontSize="8" letterSpacing="0.18em" fill="rgba(255,255,255,0.6)" fontWeight="600">PORTRAIT · WA</text>
      <line x1="16" y1="38" x2="40" y2="38" stroke="#E89B7A" strokeWidth="2" strokeLinecap="round" />

      {/* Blazer */}
      <path d="M30 240 L42 180 Q100 162 158 180 L170 240 Z" fill="#5B6B5B" />

      {/* V-neck blouse */}
      <path d="M82 178 L100 208 L118 178 Z" fill="#FAF7F2" />

      {/* Necklace + coral pendant */}
      <line x1="92" y1="172" x2="108" y2="172" stroke="#E89B7A" strokeWidth="1.2" opacity="0.7" />
      <circle cx="100" cy="187" r="3.2" fill="#E89B7A" />

      {/* Neck */}
      <rect x="91" y="158" width="18" height="22" fill="#D4B294" />

      {/* Head */}
      <ellipse cx="100" cy="113" rx="37" ry="44" fill="#E8C29A" />

      {/* Hair — chestnut, layered, frames face */}
      <path d="M58 125 Q56 70 100 60 Q144 70 142 125 L138 105 Q134 84 100 78 Q66 84 62 105 Z" fill="#7A5337" />
      <path d="M58 125 Q54 158 60 178 L68 170 Q64 155 62 138 Z" fill="#7A5337" />
      <path d="M142 125 Q146 158 140 178 L132 170 Q136 155 138 138 Z" fill="#7A5337" />
      <path d="M60 90 Q80 78 100 76 L98 82 Q80 86 65 100 Z" fill="#9B7355" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="86" cy="115" rx="2.5" ry="1.5" fill="#1A1D24" />
      <ellipse cx="114" cy="115" rx="2.5" ry="1.5" fill="#1A1D24" />

      {/* Brows */}
      <path d="M80 107 Q86 105 92 107" stroke="#5A3D2A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M108 107 Q114 105 120 107" stroke="#5A3D2A" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Nose hint */}
      <path d="M100 122 L98 134" stroke="#C4A484" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Lips */}
      <path d="M91 144 Q100 148 109 144" stroke="#9B5C5C" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      <text x="170" y="225" textAnchor="end" fontSize="8" letterSpacing="0.16em" fill="rgba(255,255,255,0.55)" fontWeight="600">WENDY</text>
    </svg>
  );
}
