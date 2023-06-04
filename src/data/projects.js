export var FEATURES = {
  "music-lab": {
    name: "Music Lab",
    tags: ["Music Theory", "Content production", "Animation"],
    cover: "music-lab/cover.png",
    link: "https://www.youtube.com/playlist?list=PLNzX5UGbEkhyzqhn7mwTSwDsAHG_3kuQ3",
    summary: [
      'An educational series breaking down music theory through animated, narrated episodes',
    ],
    gallery: [
      {
        src: "music-lab/gallery/0.png",
        wide: true,
      },
      {
        src: "music-lab/gallery/1a.png",
        wide: false,
      },
      {
        src: "music-lab/gallery/1b.png",
        wide: false,
      },
      {
        src: "music-lab/gallery/2.png",
        wide: true,
      },
      {
        src: "music-lab/gallery/3a.png",
        wide: false,
      },
      {
        src: "music-lab/gallery/3b.png",
        wide: false,
      },
      {
        src: "music-lab/gallery/4.png",
        wide: true,
      },
      {
        src: "music-lab/gallery/5.png",
        wide: true,
      },
      {
        src: "music-lab/gallery/6.png",
        wide: true,
      },
    ],
  },
  laganja: {
    name: "LaganjaEstranja.com",
    tags: ["Branding", "Freelance", "Squarespace"],
    cover: "laganja/cover.png",
    link: "https://laganjaestranja.com",
    summary: [
      "New website and brand expansion for drag icon Laganja Estranja.",
    ],
    gallery: [
      {
        src: "laganja/gallery/0.png",
        wide: true,
      },
      {
        src: "laganja/gallery/1.png",
        wide: true,
      },
      {
        src: "laganja/gallery/2a.png",
        wide: false,
      },
      {
        src: "laganja/gallery/2b.png",
        wide: false,
      },
      {
        src: "laganja/gallery/3.png",
        wide: true,
      },
      {
        src: "laganja/gallery/4.png",
        wide: true,
      },
      {
        src: "laganja/gallery/5.png",
        wide: true,
      },
    ],
  },

  "comma-ai": {
    name: "comma.ai",
    tags: ["Product design", "Freelance", "Design System"],
    cover: "comma-ai/cover.png",
    summary: [
      'A brand refresh and product re-skin for Comma’s latest flagship product, the Comma 3',
    ],
    gallery: [
      {
        src: "comma-ai/gallery/0.png",
        wide: true,
      },
      {
        src: "comma-ai/gallery/1a.png",
        wide: false,
      },
      {
        src: "comma-ai/gallery/1b.png",
        wide: false,
      },
      {
        src: "comma-ai/gallery/2.png",
        wide: true,
      },
      {
        src: "comma-ai/gallery/3.png",
        wide: true,
      },
      {
        src: "comma-ai/gallery/4.png",
        wide: true,
      },
    ],
  },
};

export const OTHER = {
  "las-culturistas": {
    name: "Las Culturistas: Rules of Culture",
    tags: ["Info Design", "Fan Project", "Indesign"],
    cover: "las-culturistas/cover.png",
  },
  fueled: {
    name: "Fueled.com",
    tags: ["Vue", "Web dev", "Marketing"],
    cover: "fueled/cover.png",

  },
};

export const ALL = {
  ...FEATURES,
  ...OTHER,
};
