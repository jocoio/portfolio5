export var FEATURES = {
  "music-lab": {
    name: "Music Lab",
    tags: ["Music Theory", "Content production", "Animation"],
    cover: "music-lab/cover.png",
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
        src: "laganja/cover.png",
        wide: true,
      },
      {
        src: "laganja/cover.png",
        wide: false,
      },
      {
        src: "laganja/cover.png",
        wide: false,
      }
    ],
  },

  "comma-ai": {
    name: "comma.ai",
    tags: ["Product design", "Freelance", "Design System"],
    cover: "comma-ai/cover.png",
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
