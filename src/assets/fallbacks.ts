/**
 * Locally generated fallback artwork.
 *
 * Every remote image on the site has one of these as a backup, so no slot can
 * ever show a broken-image icon. All art is built as inline SVG data URIs, so it
 * needs no network access and ships inside the bundle.
 */

const toDataUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.replace(/\s{2,}/g, ' ').trim())}`;

/** Deterministic pseudo-random generator so the art is identical on every load. */
const seeded = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const stars = (count: number, w: number, h: number, seed: number, color = '#ffffff') => {
  const rand = seeded(seed);
  let out = '';
  for (let i = 0; i < count; i++) {
    const r = rand() * 1.6 + 0.3;
    out += `<circle cx="${(rand() * w).toFixed(1)}" cy="${(rand() * h).toFixed(1)}" r="${r.toFixed(2)}" fill="${color}" opacity="${(rand() * 0.7 + 0.2).toFixed(2)}"/>`;
  }
  return out;
};

const svg = (w: number, h: number, body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice">${body}</svg>`;

/* ------------------------------------------------------------------ */
/* NEBULA — cosmic 3D motion graphics                                  */
/* ------------------------------------------------------------------ */

const nebulaPlanet = svg(
  800,
  600,
  `<defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="80%"><stop offset="0" stop-color="#1a0f3d"/><stop offset="1" stop-color="#05030f"/></radialGradient>
    <radialGradient id="pl" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#9ad8ff"/><stop offset=".35" stop-color="#5b5bf0"/><stop offset=".75" stop-color="#3a1580"/><stop offset="1" stop-color="#12052e"/></radialGradient>
    <linearGradient id="ring" x1="0" x2="1"><stop offset="0" stop-color="#ff5fd2" stop-opacity="0"/><stop offset=".5" stop-color="#ffb3f0"/><stop offset="1" stop-color="#7a6bff" stop-opacity="0"/></linearGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="22"/></filter>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  ${stars(140, 800, 600, 11)}
  <circle cx="400" cy="300" r="190" fill="#6a4dff" opacity=".45" filter="url(#glow)"/>
  <ellipse cx="400" cy="310" rx="330" ry="62" fill="none" stroke="url(#ring)" stroke-width="10" opacity=".6"/>
  <circle cx="400" cy="300" r="160" fill="url(#pl)"/>
  <path d="M240 300a160 160 0 0 0 320 0" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="2"/>
  <path d="M70 318 Q400 410 730 318" fill="none" stroke="url(#ring)" stroke-width="10"/>
  <circle cx="640" cy="140" r="22" fill="#ff7ad9" opacity=".85"/>
  <circle cx="634" cy="134" r="8" fill="#ffd6f5" opacity=".8"/>`,
);

const nebulaCloud = svg(
  800,
  600,
  `<defs>
    <filter id="b"><feGaussianBlur stdDeviation="55"/></filter>
    <filter id="t"><feTurbulence type="fractalNoise" baseFrequency=".008" numOctaves="4" seed="7"/><feColorMatrix values="0 0 0 0 .85  0 0 0 0 .35  0 0 0 0 1  0 0 0 .55 -.1"/></filter>
  </defs>
  <rect width="800" height="600" fill="#07031a"/>
  <rect width="800" height="600" filter="url(#t)" opacity=".9"/>
  <ellipse cx="300" cy="260" rx="260" ry="150" fill="#b02bff" opacity=".55" filter="url(#b)"/>
  <ellipse cx="520" cy="360" rx="240" ry="140" fill="#ff3fa4" opacity=".45" filter="url(#b)"/>
  <ellipse cx="440" cy="220" rx="150" ry="90" fill="#3b7bff" opacity=".55" filter="url(#b)"/>
  ${stars(220, 800, 600, 23)}
  <circle cx="455" cy="290" r="5" fill="#fff"/><circle cx="455" cy="290" r="26" fill="#fff" opacity=".15"/>`,
);

const nebulaOrb = svg(
  800,
  1000,
  `<defs>
    <radialGradient id="bg" cx="50%" cy="55%" r="70%"><stop offset="0" stop-color="#0f1c4a"/><stop offset="1" stop-color="#03040d"/></radialGradient>
    <radialGradient id="orb" cx="34%" cy="28%" r="80%"><stop offset="0" stop-color="#ffffff"/><stop offset=".12" stop-color="#cfe2ff"/><stop offset=".4" stop-color="#5d78c9"/><stop offset=".7" stop-color="#1b2152"/><stop offset="1" stop-color="#060716"/></radialGradient>
    <radialGradient id="rim" cx="70%" cy="78%" r="45%"><stop offset="0" stop-color="#ff4fd8" stop-opacity=".85"/><stop offset="1" stop-color="#ff4fd8" stop-opacity="0"/></radialGradient>
    <filter id="g"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>
  <rect width="800" height="1000" fill="url(#bg)"/>
  ${stars(160, 800, 1000, 37)}
  <circle cx="400" cy="520" r="290" fill="#3b5bff" opacity=".35" filter="url(#g)"/>
  <circle cx="400" cy="500" r="250" fill="url(#orb)"/>
  <circle cx="400" cy="500" r="250" fill="url(#rim)"/>
  <ellipse cx="400" cy="820" rx="250" ry="26" fill="#000" opacity=".55" filter="url(#g)"/>
  <circle cx="160" cy="210" r="34" fill="url(#orb)"/>
  <circle cx="650" cy="200" r="18" fill="url(#orb)"/>`,
);

/* ------------------------------------------------------------------ */
/* NOIR — cinematic editing & colour grading                           */
/* ------------------------------------------------------------------ */

const grain = `<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .09 0"/></filter>`;

const noirCone = svg(
  800,
  600,
  `<defs>
    ${grain}
    <linearGradient id="cone" x1=".5" y1="0" x2=".5" y2="1"><stop offset="0" stop-color="#ffcf8a" stop-opacity=".95"/><stop offset=".55" stop-color="#d98a3d" stop-opacity=".35"/><stop offset="1" stop-color="#d98a3d" stop-opacity="0"/></linearGradient>
    <radialGradient id="pool" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f0b061" stop-opacity=".55"/><stop offset="1" stop-color="#f0b061" stop-opacity="0"/></radialGradient>
    <filter id="s"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <rect width="800" height="600" fill="#0b0a09"/>
  <polygon points="370,40 430,40 640,600 160,600" fill="url(#cone)" filter="url(#s)"/>
  <ellipse cx="400" cy="560" rx="260" ry="46" fill="url(#pool)"/>
  <rect x="384" y="22" width="32" height="24" rx="4" fill="#2a2520"/>
  <path d="M376 600 L384 430 Q400 392 416 430 L424 600 Z" fill="#050505"/>
  <circle cx="400" cy="402" r="20" fill="#050505"/>
  <rect width="800" height="600" filter="url(#grain)"/>`,
);

const noirArchitecture = svg(
  800,
  600,
  `<defs>
    ${grain}
    <linearGradient id="wall" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#3b3329"/><stop offset="1" stop-color="#0d0c0b"/></linearGradient>
    <linearGradient id="beam" x1="0" x2="1"><stop offset="0" stop-color="#e9b877" stop-opacity=".75"/><stop offset="1" stop-color="#e9b877" stop-opacity=".05"/></linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#wall)"/>
  <g transform="skewX(-28)">
    <rect x="260" y="0" width="70" height="600" fill="url(#beam)"/>
    <rect x="390" y="0" width="70" height="600" fill="url(#beam)"/>
    <rect x="520" y="0" width="70" height="600" fill="url(#beam)"/>
    <rect x="650" y="0" width="70" height="600" fill="url(#beam)"/>
  </g>
  <rect x="0" y="470" width="800" height="130" fill="#080706"/>
  <path d="M0 470 L800 470" stroke="#e9b877" stroke-opacity=".35" stroke-width="2"/>
  <rect x="80" y="120" width="18" height="350" fill="#0a0908"/>
  <rect x="700" y="80" width="22" height="390" fill="#0a0908"/>
  <rect width="800" height="600" filter="url(#grain)"/>`,
);

const noirLetterbox = svg(
  800,
  1000,
  `<defs>
    ${grain}
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e2a2f"/><stop offset=".55" stop-color="#1d4a4c"/><stop offset=".78" stop-color="#d27a3a"/><stop offset="1" stop-color="#2b1408"/></linearGradient>
    <radialGradient id="sun" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd59b"/><stop offset=".4" stop-color="#ff9a4a" stop-opacity=".8"/><stop offset="1" stop-color="#ff9a4a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="800" height="1000" fill="#000"/>
  <rect y="150" width="800" height="700" fill="url(#sky)"/>
  <circle cx="400" cy="660" r="200" fill="url(#sun)"/>
  <path d="M0 760 L120 640 L190 700 L300 560 L410 690 L520 600 L640 720 L800 620 L800 850 L0 850 Z" fill="#0a0d0e"/>
  <path d="M370 850 L392 700 L408 700 L430 850 Z" fill="#050606"/>
  <circle cx="400" cy="690" r="13" fill="#050606"/>
  <rect y="150" width="800" height="700" filter="url(#grain)"/>
  <rect y="0" width="800" height="150" fill="#000"/><rect y="850" width="800" height="150" fill="#000"/>`,
);

/* ------------------------------------------------------------------ */
/* HYPERDRIVE — VFX & experimental design                              */
/* ------------------------------------------------------------------ */

const hyperTunnel = (() => {
  const rand = seeded(91);
  let streaks = '';
  for (let i = 0; i < 120; i++) {
    const a = rand() * Math.PI * 2;
    const r1 = 30 + rand() * 60;
    const r2 = 380 + rand() * 260;
    const colors = ['#5ff6ff', '#ff4fe1', '#ffffff', '#7a5cff'];
    streaks += `<line x1="${(400 + Math.cos(a) * r1).toFixed(1)}" y1="${(300 + Math.sin(a) * r1).toFixed(1)}" x2="${(400 + Math.cos(a) * r2).toFixed(1)}" y2="${(300 + Math.sin(a) * r2).toFixed(1)}" stroke="${colors[i % 4]}" stroke-width="${(rand() * 2.4 + 0.4).toFixed(2)}" stroke-opacity="${(rand() * 0.6 + 0.3).toFixed(2)}" stroke-linecap="round"/>`;
  }
  return svg(
    800,
    600,
    `<defs><radialGradient id="c" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffffff"/><stop offset=".2" stop-color="#8af4ff" stop-opacity=".8"/><stop offset="1" stop-color="#1b0a3a" stop-opacity="0"/></radialGradient></defs>
    <rect width="800" height="600" fill="#05020d"/>
    ${streaks}
    <circle cx="400" cy="300" r="150" fill="url(#c)"/>`,
  );
})();

const hyperGrid = (() => {
  let lines = '';
  for (let i = -10; i <= 10; i++) lines += `<line x1="400" y1="330" x2="${400 + i * 90}" y2="600" stroke="#ff3fd6" stroke-opacity=".45"/>`;
  for (let i = 0; i < 9; i++) {
    const y = 330 + Math.pow(i / 8, 2) * 270;
    lines += `<line x1="0" y1="${y.toFixed(1)}" x2="800" y2="${y.toFixed(1)}" stroke="#ff3fd6" stroke-opacity="${(0.15 + i * 0.06).toFixed(2)}"/>`;
  }
  return svg(
    800,
    600,
    `<defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05020f"/><stop offset="1" stop-color="#2a0a4a"/></linearGradient>
      <linearGradient id="prism" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6ffcff"/><stop offset="1" stop-color="#8a4dff"/></linearGradient>
      <filter id="g"><feGaussianBlur stdDeviation="10"/></filter>
    </defs>
    <rect width="800" height="600" fill="url(#sky)"/>
    ${stars(70, 800, 320, 57, '#bfe9ff')}
    ${lines}
    <g filter="url(#g)" opacity=".9"><polygon points="400,90 520,250 400,330 280,250" fill="#46e8ff"/></g>
    <polygon points="400,90 520,250 400,330 280,250" fill="none" stroke="url(#prism)" stroke-width="4"/>
    <polygon points="400,90 520,250 400,200" fill="#6ffcff" opacity=".25"/>
    <polygon points="400,90 280,250 400,200" fill="#8a4dff" opacity=".3"/>
    <line x1="400" y1="90" x2="400" y2="330" stroke="#fff" stroke-opacity=".6"/>`,
  );
})();

const hyperChrome = svg(
  800,
  1000,
  `<defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#151525"/><stop offset="1" stop-color="#040409"/></radialGradient>
    <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f9ff"/><stop offset=".25" stop-color="#6d7489"/><stop offset=".5" stop-color="#e8ecf5"/><stop offset=".75" stop-color="#262a37"/><stop offset="1" stop-color="#b8c0d6"/></linearGradient>
    <linearGradient id="rimC" x1="0" x2="1"><stop offset="0" stop-color="#3ff3ff"/><stop offset="1" stop-color="#3ff3ff" stop-opacity="0"/></linearGradient>
    <linearGradient id="rimM" x1="1" x2="0"><stop offset="0" stop-color="#ff3fd6"/><stop offset="1" stop-color="#ff3fd6" stop-opacity="0"/></linearGradient>
    <filter id="g"><feGaussianBlur stdDeviation="30"/></filter>
  </defs>
  <rect width="800" height="1000" fill="url(#bg)"/>
  <circle cx="240" cy="420" r="200" fill="#1de7ff" opacity=".25" filter="url(#g)"/>
  <circle cx="580" cy="600" r="220" fill="#ff2fd0" opacity=".25" filter="url(#g)"/>
  <path d="M400 170 C620 220 660 420 540 520 C440 600 620 760 420 840 C220 900 140 700 250 600 C340 520 160 380 260 260 C300 210 340 160 400 170 Z" fill="url(#chrome)"/>
  <path d="M400 170 C620 220 660 420 540 520 C440 600 620 760 420 840" fill="none" stroke="url(#rimM)" stroke-width="7"/>
  <path d="M420 840 C220 900 140 700 250 600 C340 520 160 380 260 260 C300 210 340 160 400 170" fill="none" stroke="url(#rimC)" stroke-width="7"/>
  <ellipse cx="380" cy="330" rx="60" ry="18" fill="#fff" opacity=".55" transform="rotate(-25 380 330)"/>`,
);

/* ------------------------------------------------------------------ */
/* HERO + ABOUT decorative objects                                     */
/* ------------------------------------------------------------------ */

const heroComposition = svg(
  600,
  720,
  `<defs>
    <radialGradient id="o1" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ffd2fb"/><stop offset=".35" stop-color="#b600a8"/><stop offset=".75" stop-color="#4a0f6e"/><stop offset="1" stop-color="#18011f"/></radialGradient>
    <radialGradient id="o2" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ffe0bf"/><stop offset=".4" stop-color="#be4c00"/><stop offset="1" stop-color="#2a0e02"/></radialGradient>
    <radialGradient id="o3" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#e7dbff"/><stop offset=".4" stop-color="#7621b0"/><stop offset="1" stop-color="#140428"/></radialGradient>
    <linearGradient id="m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4f6fb"/><stop offset=".4" stop-color="#6e7385"/><stop offset=".6" stop-color="#d7e2ea"/><stop offset="1" stop-color="#2b2f3b"/></linearGradient>
    <filter id="g"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>
  <circle cx="300" cy="430" r="230" fill="#b600a8" opacity=".35" filter="url(#g)"/>
  <rect x="200" y="380" width="200" height="340" rx="100" fill="url(#m)"/>
  <circle cx="300" cy="360" r="170" fill="url(#o1)"/>
  <ellipse cx="300" cy="380" rx="250" ry="48" fill="none" stroke="#d7e2ea" stroke-opacity=".55" stroke-width="5" transform="rotate(-14 300 380)"/>
  <circle cx="120" cy="170" r="54" fill="url(#o2)"/>
  <circle cx="485" cy="215" r="70" fill="url(#o3)"/>
  <circle cx="470" cy="560" r="28" fill="url(#o2)"/>`,
);

const decoMoon = svg(
  300,
  300,
  `<defs>
    <radialGradient id="m" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff6d6"/><stop offset=".45" stop-color="#f2b84b"/><stop offset="1" stop-color="#7a3f00"/></radialGradient>
    <mask id="cut"><rect width="300" height="300" fill="#fff"/><circle cx="195" cy="115" r="105" fill="#000"/></mask>
  </defs>
  <circle cx="145" cy="155" r="120" fill="url(#m)" mask="url(#cut)"/>`,
);

const decoObject = svg(
  300,
  300,
  `<defs>
    <linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8ff1"/><stop offset="1" stop-color="#7621b0"/></linearGradient>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b600a8"/><stop offset="1" stop-color="#3a0a52"/></linearGradient>
    <linearGradient id="c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd0a6"/><stop offset="1" stop-color="#be4c00"/></linearGradient>
  </defs>
  <polygon points="150,40 260,100 150,160 40,100" fill="url(#a)"/>
  <polygon points="40,100 150,160 150,270 40,210" fill="url(#b)"/>
  <polygon points="260,100 150,160 150,270 260,210" fill="url(#c)"/>`,
);

const decoBlocks = svg(
  300,
  300,
  `<defs>
    <linearGradient id="t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9fd6ff"/><stop offset="1" stop-color="#3b6cff"/></linearGradient>
    <linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2546c9"/><stop offset="1" stop-color="#0e1b5c"/></linearGradient>
  </defs>
  <rect x="50" y="120" width="200" height="120" rx="18" fill="url(#s)"/>
  <rect x="50" y="90" width="200" height="60" rx="18" fill="url(#t)"/>
  <g fill="url(#t)"><rect x="76" y="62" width="44" height="40" rx="12"/><rect x="128" y="62" width="44" height="40" rx="12"/><rect x="180" y="62" width="44" height="40" rx="12"/></g>
  <g fill="#fff" opacity=".45"><rect x="84" y="66" width="28" height="7" rx="3.5"/><rect x="136" y="66" width="28" height="7" rx="3.5"/><rect x="188" y="66" width="28" height="7" rx="3.5"/></g>`,
);

const decoGroup = svg(
  300,
  300,
  `<defs>
    <radialGradient id="a" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ffe0bf"/><stop offset=".45" stop-color="#ff7a1f"/><stop offset="1" stop-color="#5a1c00"/></radialGradient>
    <radialGradient id="b" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#f6d6ff"/><stop offset=".45" stop-color="#9b3df0"/><stop offset="1" stop-color="#22074a"/></radialGradient>
    <linearGradient id="r" x1="0" x2="1"><stop offset="0" stop-color="#d7e2ea"/><stop offset="1" stop-color="#646973"/></linearGradient>
  </defs>
  <circle cx="125" cy="170" r="85" fill="url(#b)"/>
  <ellipse cx="125" cy="175" rx="125" ry="26" fill="none" stroke="url(#r)" stroke-width="7" transform="rotate(-18 125 175)"/>
  <circle cx="225" cy="95" r="45" fill="url(#a)"/>
  <circle cx="240" cy="235" r="22" fill="url(#a)"/>`,
);

/* ------------------------------------------------------------------ */
/* Marquee fallback tiles                                              */
/* ------------------------------------------------------------------ */

const tilePalettes: [string, string, string][] = [
  ['#18011f', '#b600a8', '#ff8ff1'],
  ['#050b2a', '#3b6cff', '#8af4ff'],
  ['#1f0a01', '#be4c00', '#ffd0a6'],
  ['#120428', '#7621b0', '#d7b8ff'],
  ['#02161a', '#0fb5c9', '#b6fbff'],
  ['#1a0313', '#ff3fa4', '#ffd6ea'],
];

const marqueeTile = (i: number) => {
  const [bg, mid, hi] = tilePalettes[i % tilePalettes.length];
  const variant = i % 3;
  const shape =
    variant === 0
      ? `<circle cx="300" cy="140" r="90" fill="url(#o)"/><ellipse cx="300" cy="150" rx="150" ry="26" fill="none" stroke="${hi}" stroke-opacity=".6" stroke-width="4" transform="rotate(-12 300 150)"/>`
      : variant === 1
        ? `<rect x="90" y="70" width="150" height="150" rx="34" fill="url(#o)" transform="rotate(18 165 145)"/><circle cx="310" cy="160" r="44" fill="url(#o)"/>`
        : `<path d="M60 220 C140 40 260 260 360 70" fill="none" stroke="url(#l)" stroke-width="22" stroke-linecap="round"/><circle cx="360" cy="70" r="20" fill="${hi}"/>`;
  return svg(
    420,
    270,
    `<defs>
      <radialGradient id="bg" cx="30%" cy="20%" r="100%"><stop offset="0" stop-color="${mid}" stop-opacity=".45"/><stop offset="1" stop-color="${bg}"/></radialGradient>
      <radialGradient id="o" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="${hi}"/><stop offset=".5" stop-color="${mid}"/><stop offset="1" stop-color="${bg}"/></radialGradient>
      <linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="${mid}"/><stop offset="1" stop-color="${hi}"/></linearGradient>
    </defs>
    <rect width="420" height="270" fill="url(#bg)"/>
    ${stars(40, 420, 270, 100 + i, hi)}
    ${shape}`,
  );
};

export const fallbacks = {
  hero: toDataUri(heroComposition),
  about: {
    moon: toDataUri(decoMoon),
    object: toDataUri(decoObject),
    lego: toDataUri(decoBlocks),
    group: toDataUri(decoGroup),
  },
  nebula: [toDataUri(nebulaPlanet), toDataUri(nebulaCloud), toDataUri(nebulaOrb)] as const,
  noir: [toDataUri(noirCone), toDataUri(noirArchitecture), toDataUri(noirLetterbox)] as const,
  hyperdrive: [toDataUri(hyperTunnel), toDataUri(hyperGrid), toDataUri(hyperChrome)] as const,
  marqueeTile: (index: number) => toDataUri(marqueeTile(index)),
};
