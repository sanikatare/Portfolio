// Authentic vector logos for organizations: Tata Technologies, GDGC, ACM, PCCOE, DAV

export function TataLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tata logo">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Official Tata Emblem (Oval with bifurcation) */}
      <g>
        {/* Solid Oval Base in Tata Royal Blue */}
        <ellipse cx="50" cy="34" rx="24" ry="16" fill="#3B60AB" />
        
        {/* Negative Space Cuts in White */}
        {/* Horizontal Arch Cut */}
        <path
          d="M 24 37 Q 50 32 76 37"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Vertical Tapered Road Cut to Horizon */}
        <polygon
          points="48.5,33 51.5,33 52.2,51 47.8,51"
          fill="#FFFFFF"
        />
      </g>

      {/* T A T A Stylized Wordmark */}
      <g fill="#3B60AB">
        {/* First T */}
        <polygon points="16,63 30,63 30,67.5 25.4,67.5 25.4,82 20.6,82 20.6,67.5 16,67.5" />

        {/* First A (Inverted V / chevron styling without crossbar) */}
        <polygon points="38.5,63 43.5,63 50.5,82 45.6,82 41,70.5 36.4,82 31.5,82" />

        {/* Second T */}
        <polygon points="51,63 65,63 65,67.5 60.4,67.5 60.4,82 55.6,82 55.6,67.5 51,67.5" />

        {/* Second A */}
        <polygon points="73.5,63 78.5,63 85.5,82 80.6,82 76,70.5 71.4,82 66.5,82" />
      </g>
    </svg>
  )
}

export function GdgcLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Google Developer Groups On Campus PCCOE logo">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* GDGC PCCOE Brackets in Google 4-colors with pill styling */}
      {/* Left Bracket < : Red (top) & Blue (bottom) */}
      <line x1="22" y1="38" x2="41" y2="19" stroke="#1F1F1F" strokeWidth="14" strokeLinecap="round" />
      <line x1="22" y1="38" x2="41" y2="19" stroke="#EA4335" strokeWidth="10" strokeLinecap="round" />

      <line x1="22" y1="42" x2="41" y2="61" stroke="#1F1F1F" strokeWidth="14" strokeLinecap="round" />
      <line x1="22" y1="42" x2="41" y2="61" stroke="#4285F4" strokeWidth="10" strokeLinecap="round" />

      {/* Right Bracket > : Green (top) & Yellow (bottom) */}
      <line x1="78" y1="38" x2="59" y2="19" stroke="#1F1F1F" strokeWidth="14" strokeLinecap="round" />
      <line x1="78" y1="38" x2="59" y2="19" stroke="#34A853" strokeWidth="10" strokeLinecap="round" />

      <line x1="78" y1="42" x2="59" y2="61" stroke="#1F1F1F" strokeWidth="14" strokeLinecap="round" />
      <line x1="78" y1="42" x2="59" y2="61" stroke="#FBBC04" strokeWidth="10" strokeLinecap="round" />

      {/* PCCOE chapter text */}
      <text
        x="50"
        y="83"
        fill="#1F1F1F"
        fontSize="15"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        PCCOE
      </text>
    </svg>
  )
}

export function AcmLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ACM PCCOE Student Chapter logo">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* ACM Diamond Frame with Dual-Tone Blue Chevrons */}
      {/* Top Cyan Chevron */}
      <path
        d="M26 33L50 9L74 33"
        stroke="#008CD2"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Bottom Cyan Chevron */}
      <path
        d="M26 67L50 91L68 73"
        stroke="#008CD2"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Right Deep Blue Chevron / Arrowhead */}
      <path
        d="M64 28L85 49L64 70"
        stroke="#005A9C"
        strokeWidth="8.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* "acm" Lowercase Logo in Cyan */}
      <text
        x="10"
        y="56"
        fill="#008CD2"
        fontSize="31"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-1"
      >
        acm
      </text>

      {/* "PCCOE" Chapter Text in Deep Blue Under "m" */}
      <text
        x="40"
        y="65"
        fill="#005A9C"
        fontSize="10"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.8"
      >
        PCCOE
      </text>
    </svg>
  )
}

export function PccoeLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="PCET's PCCOE Pune emblem">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

      <defs>
        {/* Arc path for top outer text */}
        <path id="pccoe-top-arc-left" d="M14 54 A38 38 0 0 1 50 12" fill="none" />
        <path id="pccoe-top-arc-right" d="M50 12 A38 38 0 0 1 86 54" fill="none" />
        <clipPath id="pccoe-disc-clip">
          <circle cx="50" cy="50" r="35" />
        </clipPath>
      </defs>

      {/* Outer Circle Ring */}
      <circle cx="50" cy="50" r="45" stroke="#00AEEF" strokeWidth="1.8" fill="#FFFFFF" />

      {/* Top Arc Text */}
      <text fill="#0277BD" fontSize="4.6" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">
        <textPath href="#pccoe-top-arc-left" startOffset="50%" textAnchor="middle">
          PCET's Pimpri Chinchwad
        </textPath>
      </text>
      <text fill="#0277BD" fontSize="4.6" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">
        <textPath href="#pccoe-top-arc-right" startOffset="50%" textAnchor="middle">
          College of Engineering
        </textPath>
      </text>

      {/* Inner Azure / Cyan Disc */}
      <circle cx="50" cy="50" r="35" fill="#00AEEF" />
      <circle cx="50" cy="50" r="35" stroke="#0288D1" strokeWidth="1" fill="none" />

      {/* Star Arcs on Left and Right (5 white stars each) */}
      <g fill="#FFFFFF" fontSize="4.5" textAnchor="middle" fontFamily="sans-serif">
        {/* Left Stars */}
        <text x="21" y="44">★</text>
        <text x="24" y="37">★</text>
        <text x="28" y="31">★</text>
        <text x="34" y="26">★</text>
        <text x="41" y="23">★</text>

        {/* Right Stars */}
        <text x="79" y="44">★</text>
        <text x="76" y="37">★</text>
        <text x="72" y="31">★</text>
        <text x="66" y="26">★</text>
        <text x="59" y="23">★</text>
      </g>

      {/* Mashal / Torch Flame (Yellow & Red) */}
      <g>
        {/* Outer Red Flame */}
        <path
          d="M50 7 C45 13 44 20 48 24 C45 23 44 21 44 19 C42 22 43 25 45 28 C47 30 50 30 53 29 C56 27 57 24 55 20 C54 22 52 23 51 22 C53 17 52 11 50 7 Z"
          fill="#D32F2F"
        />
        {/* Inner Golden-Yellow Core Flame */}
        <path
          d="M50 10 C47 15 46 20 49 23 C47 22 46 21 46 19 C45 22 46 24 48 26 C49 27 51 27 53 26 C54 24 54 22 53 19 C52 21 51 22 50 21 C51 17 51 13 50 10 Z"
          fill="#FFB300"
        />
        {/* Torch Bowl & Handle */}
        <polygon points="42,27 58,27 55,33 45,33" fill="#C0392B" stroke="#8E1C13" strokeWidth="0.5" />
        <polygon points="45,33 55,33 53,36 47,36" fill="#D32F2F" />
        <polygon points="48,36 52,36 51,48 49,48" fill="#C0392B" />
      </g>

      {/* Open Book Spread */}
      <g>
        {/* Book Covers (Red wings) */}
        <polygon points="31,52 48,47 48,50 34,55" fill="#B71C1C" />
        <polygon points="69,52 52,47 52,50 66,55" fill="#B71C1C" />

        {/* Book Pages (Yellow & Gold) */}
        <polygon points="39,47 49,43 49,49 41,52" fill="#FFD54F" stroke="#FFA000" strokeWidth="0.4" />
        <polygon points="61,47 51,43 51,49 59,52" fill="#FFE082" stroke="#FFA000" strokeWidth="0.4" />
        <polygon points="43,45 49,41 49,47 45,50" fill="#FFF59D" />
        <polygon points="57,45 51,41 51,47 55,50" fill="#FFF59D" />
      </g>

      {/* "PCCOE" Bold Letters */}
      <text
        x="50"
        y="61.5"
        fill="#FFFFFF"
        fontSize="12.5"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="0.8"
      >
        PCCOE
      </text>

      {/* Banner Ribbon: "Knowledge Brings Freedom" */}
      <g>
        {/* Ribbon Tails */}
        <polygon points="6,65 14,63 14,71 6,71 9,67" fill="#E6C845" stroke="#C7A522" strokeWidth="0.5" />
        <polygon points="94,65 86,63 86,71 94,71 91,67" fill="#E6C845" stroke="#C7A522" strokeWidth="0.5" />

        {/* Ribbon Body */}
        <rect x="12" y="63.5" width="76" height="7.5" rx="1.5" fill="#FFF9A6" stroke="#D4B022" strokeWidth="0.8" />
        <text
          x="50"
          y="69"
          fill="#1A1A1A"
          fontSize="3.6"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="0.1"
        >
          &quot;Knowledge Brings Freedom&quot;
        </text>
      </g>

      {/* Inscription Below Banner */}
      <g fill="#FFFFFF" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        <text x="50" y="75.5" fontSize="3.3" fontWeight="600" letterSpacing="0.1">
          Progress Credibility Confidence
        </text>
        <text x="50" y="80.2" fontSize="3.3" fontWeight="600" letterSpacing="0.1">
          Optimism Excellence
        </text>
        <text x="50" y="86.5" fontSize="3.6" fontWeight="bold" letterSpacing="0.2">
          Since 1999
        </text>
      </g>
    </svg>
  )
}

export function DavLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="D.A.V. College Managing Committee logo">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Outer Circle Ring */}
      <circle cx="50" cy="44" r="36" stroke="#0B1A48" strokeWidth="3" fill="#FFFFFF" />
      <circle cx="50" cy="44" r="25" stroke="#0B1A48" strokeWidth="1.5" fill="#FFFFFF" />

      {/* Text along arc: D.A.V. COLLEGE MANAGING COMMITTEE */}
      <defs>
        <path id="dav-arc" d="M19 44 A31 31 0 0 1 81 44" fill="none" />
        <clipPath id="inner-circle-clip">
          <circle cx="50" cy="44" r="24" />
        </clipPath>
      </defs>
      <text fill="#0B1A48" fontSize="5.2" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.6">
        <textPath href="#dav-arc" startOffset="50%" textAnchor="middle">
          D.A.V. COLLEGE MANAGING COMMITTEE
        </textPath>
      </text>

      {/* Inner Rising Sun with Rays */}
      <g clipPath="url(#inner-circle-clip)">
        {/* Red sunburst rays */}
        <g stroke="#C62828" strokeWidth="1.2">
          <line x1="50" y1="44" x2="50" y2="21" />
          <line x1="50" y1="44" x2="57" y2="22" />
          <line x1="50" y1="44" x2="64" y2="25" />
          <line x1="50" y1="44" x2="70" y2="30" />
          <line x1="50" y1="44" x2="73" y2="37" />
          <line x1="50" y1="44" x2="74" y2="44" />
          <line x1="50" y1="44" x2="43" y2="22" />
          <line x1="50" y1="44" x2="36" y2="25" />
          <line x1="50" y1="44" x2="30" y2="30" />
          <line x1="50" y1="44" x2="27" y2="37" />
          <line x1="50" y1="44" x2="26" y2="44" />
        </g>

        {/* White / Saffron Sun dome */}
        <ellipse cx="50" cy="46" rx="20" ry="14" fill="#FFFFFF" stroke="#C62828" strokeWidth="1.2" />

        {/* Devanagari Sacred Text 'ओ३म्' */}
        <text
          x="50"
          y="43"
          fill="#D84315"
          fontSize="11"
          fontWeight="bold"
          fontFamily="'Noto Sans Devanagari', 'Mangal', 'Lohit Devanagari', sans-serif"
          textAnchor="middle"
        >
          ओ३म्
        </text>

        {/* Blue Wavy Water at bottom */}
        <g stroke="#0288D1" strokeWidth="1" fill="none">
          <path d="M26 47 Q32 45 38 47 T50 47 T62 47 T74 47" />
          <path d="M26 50 Q32 48 38 50 T50 50 T62 50 T74 50" />
          <path d="M26 53 Q32 51 38 53 T50 53 T62 53 T74 53" />
          <path d="M26 56 Q32 54 38 56 T50 56 T62 56 T74 56" />
          <path d="M26 59 Q32 57 38 59 T50 59 T62 59 T74 59" />
          <path d="M26 62 Q32 60 38 62 T50 62 T62 62 T74 62" />
        </g>
      </g>

      {/* Laurel Wreath Sprigs at bottom */}
      <g stroke="#0B1A48" strokeWidth="1.2" fill="#0B1A48">
        <path d="M30 68 C35 72 43 73 47 73" fill="none" strokeWidth="1.5" />
        <ellipse cx="32" cy="67" rx="2" ry="1" transform="rotate(-30 32 67)" />
        <ellipse cx="37" cy="70" rx="2" ry="1" transform="rotate(-15 37 70)" />
        <ellipse cx="43" cy="72" rx="2" ry="1" transform="rotate(0 43 72)" />

        <path d="M70 68 C65 72 57 73 53 73" fill="none" strokeWidth="1.5" />
        <ellipse cx="68" cy="67" rx="2" ry="1" transform="rotate(30 68 67)" />
        <ellipse cx="63" cy="70" rx="2" ry="1" transform="rotate(15 63 70)" />
        <ellipse cx="57" cy="72" rx="2" ry="1" transform="rotate(0 57 72)" />
      </g>

      {/* Bottom ESTD 1886 Banner Ribbon */}
      <g>
        {/* Ribbon tails */}
        <path d="M12 73 L26 73 L26 84 L12 84 L17 78.5 Z" fill="#FFFFFF" stroke="#0B1A48" strokeWidth="1.5" />
        <path d="M88 73 L74 73 L74 84 L88 84 L83 78.5 Z" fill="#FFFFFF" stroke="#0B1A48" strokeWidth="1.5" />
        {/* Ribbon folded shade lines */}
        <line x1="75" y1="76" x2="82" y2="76" stroke="#0B1A48" strokeWidth="1" />
        <line x1="75" y1="78.5" x2="82" y2="78.5" stroke="#0B1A48" strokeWidth="1" />
        <line x1="75" y1="81" x2="82" y2="81" stroke="#0B1A48" strokeWidth="1" />
        {/* Ribbon main body */}
        <rect x="23" y="74" width="54" height="15" rx="2" fill="#FFFFFF" stroke="#0B1A48" strokeWidth="1.8" />
        <text
          x="50"
          y="85.5"
          fill="#0B1A48"
          fontSize="8.5"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="1.2"
        >
          ESTD 1886
        </text>
      </g>
    </svg>
  )
}
