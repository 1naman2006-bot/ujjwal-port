import { fallbacks } from '../assets/fallbacks';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type RemoteImage = {
  /** Original remote URL. */
  src: string;
  /** Local generated asset, always available. */
  fallback: string;
  alt: string;
};

export type ProjectImage = RemoteImage;

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  /** leftTop, leftBottom, right */
  images: [ProjectImage, ProjectImage, ProjectImage];
  /** "" until a real URL is supplied. */
  liveUrl: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
};

export type NavLink = {
  label: string;
  target: string;
};

/* ------------------------------------------------------------------ */
/* Site content — edit everything here                                 */
/* ------------------------------------------------------------------ */

const higgs = (file: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${file}.png&w=1280&q=85`;

const figma = (path: string) => `https://shrug-person-78902957.figma.site/_components/v2/${path}`;

export const site = {
  name: 'Ujjwal',
  title: 'Ujjwal — Creative Portfolio',
  role: 'Motion Graphics Artist | Video Editor | VFX Artist | Creative Designer',

  heroHeading: "HI, I'M UJJWAL",
  heroDescription: 'MOTION DESIGNER, VIDEO EDITOR & VFX ARTIST CREATING BOLD VISUAL EXPERIENCES.',

  aboutHeading: 'About me',
  aboutText:
    "I'm Ujjwal, a creative artist focused on motion graphics, cinematic video editing, visual effects, 3D animation, and creative design. I enjoy transforming ideas into visually striking experiences through animation, rhythm, typography, compositing, and creative experimentation. My goal is to create work that feels intentional, immersive, and impossible to ignore.",

  /**
   * Where the Contact Me button goes, e.g. "mailto:hello@example.com".
   * Left empty on purpose: while empty, the button shows a demo-preview toast.
   */
  contactUrl: '',

  demoToastMessage: 'Demo preview — live link coming soon',

  nav: [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
  ] satisfies NavLink[],

  heroImage: {
    src: figma('d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'),
    fallback: fallbacks.hero,
    alt: 'Hero visual',
  } satisfies RemoteImage,

  aboutDecor: {
    moon: {
      src: figma('ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png'),
      fallback: fallbacks.about.moon,
      alt: '',
    },
    object: {
      src: figma('ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png'),
      fallback: fallbacks.about.object,
      alt: '',
    },
    lego: {
      src: figma('ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png'),
      fallback: fallbacks.about.lego,
      alt: '',
    },
    group: {
      src: figma('ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png'),
      fallback: fallbacks.about.group,
      alt: '',
    },
  } satisfies Record<string, RemoteImage>,

  marqueeImages: [
    'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
    'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
    'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
    'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
    'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
  ].map(
    (src, i): RemoteImage => ({
      src,
      fallback: fallbacks.marqueeTile(i),
      alt: `Motion design showreel frame ${i + 1}`,
    }),
  ),

  servicesHeading: 'Services',
  services: [
    {
      number: '01',
      title: 'Motion Graphics',
      description:
        'Creating high-impact animated visuals, kinetic typography, title sequences, transitions, and motion-led visual storytelling for digital platforms and brands.',
    },
    {
      number: '02',
      title: 'Video Editing',
      description:
        'Cinematic video editing, pacing, rhythm, sound synchronization, transitions, storytelling, and polished content for films, reels, campaigns, and YouTube.',
    },
    {
      number: '03',
      title: 'Visual Effects',
      description:
        'Enhancing footage through compositing, visual cleanup, effects integration, atmosphere creation, and cinematic visual treatments.',
    },
    {
      number: '04',
      title: '3D Design & Animation',
      description:
        'Developing visually engaging 3D objects, environments, animated sequences, lighting, materials, and product-style visuals.',
    },
    {
      number: '05',
      title: 'Creative Design',
      description:
        'Designing distinctive visual identities, creative campaigns, digital graphics, and visually cohesive experiences with strong typography and composition.',
    },
  ] satisfies Service[],

  projectsHeading: 'Selected Work',
  /** Fictional demo concepts used to showcase the website design. */
  projects: [
    {
      number: '01',
      name: 'Nebula',
      category: '3D Motion Graphics',
      description:
        'An experimental 3D motion design concept exploring cosmic environments, luminous planets, abstract forms, cinematic lighting, and expressive typography.',
      images: [
        {
          src: higgs('hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db'),
          fallback: fallbacks.nebula[0],
          alt: 'Nebula — ringed planet glowing in deep space',
        },
        {
          src: higgs('hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8'),
          fallback: fallbacks.nebula[1],
          alt: 'Nebula — violet and magenta nebula cloud with stars',
        },
        {
          src: higgs('hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327'),
          fallback: fallbacks.nebula[2],
          alt: 'Nebula — metallic orb lit in blue against deep space',
        },
      ],
      liveUrl: '',
    },
    {
      number: '02',
      name: 'Noir',
      category: 'Cinematic Editing & Color Grading',
      description:
        'A cinematic visual study focused on dramatic lighting, rich contrast, atmospheric compositions, film-inspired color grading, and editorial storytelling.',
      images: [
        {
          src: higgs('hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f'),
          fallback: fallbacks.noir[0],
          alt: 'Noir — figure beneath a single warm light cone',
        },
        {
          src: higgs('hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1'),
          fallback: fallbacks.noir[1],
          alt: 'Noir — high-contrast architectural light and shadow',
        },
        {
          src: higgs('hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea'),
          fallback: fallbacks.noir[2],
          alt: 'Noir — letterboxed teal and orange graded frame',
        },
      ],
      liveUrl: '',
    },
    {
      number: '03',
      name: 'Hyperdrive',
      category: 'VFX & Experimental Design',
      description:
        'A futuristic visual experiment combining imaginative environments, digital effects, abstract structures, 3D elements, and high-energy visual storytelling.',
      images: [
        {
          src: higgs('hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f'),
          fallback: fallbacks.hyperdrive[0],
          alt: 'Hyperdrive — hyperspace light-streak tunnel',
        },
        {
          src: higgs('hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b'),
          fallback: fallbacks.hyperdrive[1],
          alt: 'Hyperdrive — glowing neon prism over a dark grid',
        },
        {
          src: higgs('hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee'),
          fallback: fallbacks.hyperdrive[2],
          alt: 'Hyperdrive — abstract chrome form with cyan and magenta rim light',
        },
      ],
      liveUrl: '',
    },
  ] satisfies Project[],
};
