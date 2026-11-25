const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "reels", label: "Reels & Short-Form" },
  { id: "food", label: "Culinary & Studio" },
  { id: "designs", label: "Brand Designs" },
  { id: "ambience", label: "Ambience & Venues" },
  { id: "sports", label: "Sports & Action" },
  { id: "school", label: "Campus & Events" },
  { id: "behind_the_Scenes", label: "Behind The Scenes" }
];

const HERO_REELS = [
  {
    tag: "Featured Reel · Lyzure",
    title: "Lyzure — Hospitality Launch Reel",
    sub: "Vertical motion storytelling · 0:30",
    video: "media/videos/reels/IMG_4658.mp4",
    poster: "media/thumbs/reels/IMG_4658.jpg"
  },
  {
    tag: "Featured Reel · Chai Kahani",
    title: "Chai Kahani Café — Kompally Spotlight",
    sub: "Warm brand vlog edit · 0:18",
    video: "media/videos/reels/IMG_9866.mp4",
    poster: "media/thumbs/reels/IMG_9866.jpg"
  },
  {
    tag: "Featured Ambience · Socio",
    title: "Socio — Architectural Interior Walkthrough",
    sub: "Smooth hospitality movement · 0:30",
    video: "media/videos/ambience/D9B896BB-6C22-4CD5-A9D8-C0D11638CDB7.mp4",
    poster: "media/thumbs/ambience/D9B896BB-6C22-4CD5-A9D8-C0D11638CDB7.jpg"
  }
];

const PORTFOLIO_ITEMS = [
  // Reels (6)
  {
    id: "reel-lyzure",
    category: "reels",
    categoryLabel: "Reels & Short-Form",
    type: "video",
    orientation: "reel",
    duration: "0:30",
    title: "Lyzure — Brand Intro & Venue Reel",
    client: "Lyzure",
    meta: "9:16 Vertical Reel · 0:30",
    src: "media/videos/reels/IMG_4658.mp4",
    thumb: "media/thumbs/reels/IMG_4658.jpg",
    desc: "Fast-paced entrance reveal and ambience showcase crafted to drive weekend footfall and local discovery.",
    tags: ["9:16 Vertical", "Hook Edit", "Hospitality"]
  },
  {
    id: "reel-chai-kahani",
    category: "reels",
    categoryLabel: "Reels & Short-Form",
    type: "video",
    orientation: "reel",
    duration: "0:18",
    title: "Chai Kahani Café — Kompally Vlog",
    client: "Chai Kahani Café",
    meta: "9:16 Vertical Reel · 0:18",
    src: "media/videos/reels/IMG_9866.mp4",
    thumb: "media/thumbs/reels/IMG_9866.jpg",
    desc: "Warm neon glow opening and tight social vlog pacing built for organic neighborhood reach in Kompally.",
    tags: ["9:16 Vertical", "Brand Vlog", "Color Grade"]
  },
  {
    id: "reel-sunrisers",
    category: "reels",
    categoryLabel: "Reels & Short-Form",
    type: "video",
    orientation: "reel",
    duration: "0:33",
    title: "Early Sunrisers Club × L’Unico Cafe",
    client: "L’Unico Cafe",
    meta: "9:16 Event Reel · 0:33",
    src: "media/videos/reels/IMG_9139.mp4",
    thumb: "media/thumbs/reels/IMG_9139.jpg",
    desc: "Community morning wellness collab recap uniting fitness culture, café hospitality, and high-retention pacing.",
    tags: ["Community Collab", "Event Recap", "9:16"]
  },
  {
    id: "reel-celebration-lounge",
    category: "reels",
    categoryLabel: "Reels & Short-Form",
    type: "video",
    orientation: "reel",
    duration: "0:25",
    title: "Private Celebration & Lounge Reveal",
    client: "Hospitality Showcase",
    meta: "9:16 Vertical Reel · 0:25",
    src: "media/videos/reels/IMG_7949.mp4",
    thumb: "media/thumbs/reels/IMG_7949.jpg",
    desc: "Event-ready seating and celebratory decor showcase highlighting private booking potential for local venues.",
    tags: ["Private Events", "Interior Reveal", "9:16"]
  },
  {
    id: "reel-seasons-xprs",
    category: "reels",
    categoryLabel: "Reels & Short-Form",
    type: "video",
    orientation: "reel",
    duration: "0:24",
    title: "Seasons XPRS & Culinary Strip Night Edit",
    client: "Seasons XPRS",
    meta: "9:16 Night Reel · 0:24",
    src: "media/videos/reels/9117408E-C3D3-4B21-A2E3-FEACB0BF3923.mp4",
    thumb: "media/thumbs/reels/9117408E-C3D3-4B21-A2E3-FEACB0BF3923.jpg",
    desc: "Monochrome-to-color night exterior transition highlighting glowing restaurant storefronts and bustling service.",
    tags: ["Night Shoot", "Speed Ramp", "Storefront"]
  },
  {
    id: "reel-cinematic-opener",
    category: "reels",
    categoryLabel: "Reels & Short-Form",
    type: "video",
    orientation: "reel",
    duration: "0:21",
    title: "Celebration Moments — Monochrome Storytelling Reel",
    client: "Hospitality & Events",
    meta: "9:16 Vertical Cut · 0:21",
    src: "media/videos/reels/7D4D91DC-9C6A-4EDE-AD36-7CACEE6A46FE.mp4",
    thumb: "media/thumbs/reels/7D4D91DC-9C6A-4EDE-AD36-7CACEE6A46FE.jpg",
    desc: "Monochrome candid celebration storytelling transitioning from masked letterbox into joyful cake-cutting moments.",
    tags: ["Monochrome", "Event Reel", "Candid"]
  },

  // Brand Designs (5)
  {
    id: "design-pasta-split",
    category: "designs",
    categoryLabel: "Brand Designs",
    type: "image",
    orientation: "portrait",
    title: "L’Unico Cafe — Pasta Sketch-to-Plate",
    client: "L’Unico Cafe",
    meta: "Social Poster Creative",
    src: "media/designs/IMG_1296.PNG",
    thumb: "media/designs/IMG_1296.PNG",
    desc: "Half-monochrome wireframe illustration paired with rich burnished gold and color food photography.",
    tags: ["Composite Art", "Social Ad", "L’Unico Cafe"]
  },
  {
    id: "design-pulav-moody",
    category: "designs",
    categoryLabel: "Brand Designs",
    type: "image",
    orientation: "portrait",
    title: "Pulav — Flavours That Feel Like Home",
    client: "Culinary Campaign",
    meta: "Editorial Hero Poster",
    src: "media/designs/IMG_9046.PNG",
    thumb: "media/designs/IMG_9046.PNG",
    desc: "Moody dark-table editorial composition with gold serif typography and rising steam textures.",
    tags: ["Editorial Poster", "Gold Typography", "Menu Hero"]
  },
  {
    id: "design-chicken-pulav",
    category: "designs",
    categoryLabel: "Brand Designs",
    type: "image",
    orientation: "portrait",
    title: "Savor The Flavor — Chicken Pulav",
    client: "L’Unico Cafe",
    meta: "Instagram Story / Feed Poster",
    src: "media/designs/IMG_0434.PNG",
    thumb: "media/designs/IMG_0434.PNG",
    desc: "Layered bold display typography with floating garnishes and directional callout copy.",
    tags: ["Story Creative", "Food Composite", "L’Unico Cafe"]
  },
  {
    id: "design-dessert-geometric",
    category: "designs",
    categoryLabel: "Brand Designs",
    type: "image",
    orientation: "portrait",
    title: "Let’s Talk About Delicious Dessert!",
    client: "L’Unico Cafe",
    meta: "Geometric Brand Post",
    src: "media/designs/IMG_0438.PNG",
    thumb: "media/designs/IMG_0438.PNG",
    desc: "Top-down plated brownie cake paired with modern geometric vector blocks and sage-cocoa palette.",
    tags: ["Flatlay Design", "Vector Accent", "L’Unico Cafe"]
  },
  {
    id: "design-dessert-pancake",
    category: "designs",
    categoryLabel: "Brand Designs",
    type: "image",
    orientation: "portrait",
    title: "Dessert Pancake — Minimalist Series",
    client: "L’Unico Cafe",
    meta: "Feed Campaign Tile",
    src: "media/designs/IMG_1282.PNG",
    thumb: "media/designs/IMG_1282.PNG",
    desc: "Clean editorial serif pairing on muted charcoal with warm blush geometric backdrop framing.",
    tags: ["Minimalist", "Menu Feature", "L’Unico Cafe"]
  },

  // Culinary & Studio Photography (11)
  {
    id: "food-chocolate-pour",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Warm Chocolate Pour — Double Cocoa Pancakes",
    client: "L’Unico Cafe",
    meta: "Studio Action Food Shot",
    src: "media/food/IMG_8863.jpg",
    thumb: "media/food/IMG_8863.jpg",
    desc: "Controlled studio action pour capturing glossy ganache cascade over dark cocoa pancakes.",
    tags: ["Action Pour", "Food Styling", "Warm Lighting"]
  },
  {
    id: "food-pancake-glazed",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Glazed Chocolate Pancake & Espresso Pitcher",
    client: "L’Unico Cafe",
    meta: "Editorial Tabletop Still",
    src: "media/food/IMG_8890.jpg",
    thumb: "media/food/IMG_8890.jpg",
    desc: "Rich textural close-up highlighting ceramic tableware, chocolate sprinkles, and split warm-cool lighting.",
    tags: ["Tabletop", "Texture Study", "Cafe Shoot"]
  },
  {
    id: "food-penne-yellow",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Creamy Arrabbiata Penne — Studio Yellow",
    client: "Studio Food Series",
    meta: "Color-Pop Studio Still",
    src: "media/food/IMG_1074.jpg",
    thumb: "media/food/IMG_1074.jpg",
    desc: "High-contrast monochrome yellow backdrop designed to make plated pasta pop on social feeds.",
    tags: ["Color Backdrop", "Studio Lit", "Menu Still"]
  },
  {
    id: "food-rings-yellow",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Crispy Herb-Crusted Rings & Dip",
    client: "Studio Food Series",
    meta: "Commercial Appetizer Still",
    src: "media/food/IMG_1099.jpg",
    thumb: "media/food/IMG_1099.jpg",
    desc: "Diagonal plating geometry on vibrant saffron backdrop with clean directional shadow.",
    tags: ["Appetizer", "Commercial Still", "Color Pop"]
  },
  {
    id: "food-parfait-yellow",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Berry Cheesecake Parfait & Gold Cutlery",
    client: "Studio Food Series",
    meta: "Dessert Studio Portrait",
    src: "media/food/IMG_1116.jpg",
    thumb: "media/food/IMG_1116.jpg",
    desc: "Layered berry compote and whipped cream styled with ornate gold dessert spoons.",
    tags: ["Dessert Styling", "Props", "Studio Still"]
  },
  {
    id: "food-sundae-dark",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Double Scoop Sundae — Moody Wood",
    client: "Dessert Campaign",
    meta: "Low-Key Studio Still",
    src: "media/food/IMG_8903.jpg",
    thumb: "media/food/IMG_8903.jpg",
    desc: "Low-key directional lighting sculpting highlights across glass coupe and chocolate drizzle.",
    tags: ["Low-Key", "Moody Food", "Dessert"]
  },
  {
    id: "food-tricolor-spread",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Tricolor Festive Full-Table Spread",
    client: "Festive Menu Drop",
    meta: "Overhead Editorial Flatlay",
    src: "media/food/IMG_9867.PNG",
    thumb: "media/food/IMG_9867.PNG",
    desc: "Hero overhead flatlay uniting tricolor pasta, rice, flatbread, and mocktails for Republic/Independence Day promos.",
    tags: ["Festive Campaign", "Flatlay", "Art Direction"]
  },
  {
    id: "food-tricolor-rice",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Tricolor Saffron, Jeera & Herb Rice",
    client: "Festive Menu Drop",
    meta: "Minimalist Dark Plate",
    src: "media/food/IMG_9751.jpg",
    thumb: "media/food/IMG_9751.jpg",
    desc: "Clean centered composition with star anise garnish isolated against matte obsidian.",
    tags: ["Overhead", "Festive Dish", "Dark Backdrop"]
  },
  {
    id: "food-tricolor-pizza",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Tricolor Artisan Flatbread & Spice Bowls",
    client: "Festive Menu Drop",
    meta: "Dark Wood Paddle Still",
    src: "media/food/IMG_9761.jpg",
    thumb: "media/food/IMG_9761.jpg",
    desc: "Three-flavor paneer & chicken flatbread plated with chili flakes, oregano, and house dip.",
    tags: ["Artisan Plating", "Dark Studio", "Menu Asset"]
  },
  {
    id: "food-tricolor-pasta",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Tricolor Penne Trio — Arrabbiata, Alfredo, Pesto",
    client: "Festive Menu Drop",
    meta: "Isolated Black Studio",
    src: "media/food/IMG_9773.jpg",
    thumb: "media/food/IMG_9773.jpg",
    desc: "Crisp angled platter shot engineered for clean cutout menu cards and festive banner overlays.",
    tags: ["Cutout Ready", "Pasta Trio", "Studio"]
  },
  {
    id: "food-tricolor-drinks",
    category: "food",
    categoryLabel: "Culinary & Studio",
    type: "image",
    orientation: "portrait",
    title: "Signature Citrus & Mint Mocktail Trio",
    client: "Festive Menu Drop",
    meta: "Glassware Studio Lighting",
    src: "media/food/IMG_9778.jpg",
    thumb: "media/food/IMG_9778.jpg",
    desc: "Backlit glassware revealing carbonation bubbles, ice clarity, and citrus garnishes on pure black.",
    tags: ["Beverage Shoot", "Backlit Glass", "Bar Menu"]
  },

  // Ambience & Venues (2)
  {
    id: "ambience-socio",
    category: "ambience",
    categoryLabel: "Ambience & Venues",
    type: "video",
    orientation: "reel",
    duration: "0:30",
    title: "Socio — Spiral Staircase & Interior Tour",
    client: "Socio Café",
    meta: "9:16 Ambience Film · 0:30",
    src: "media/videos/ambience/D9B896BB-6C22-4CD5-A9D8-C0D11638CDB7.mp4",
    thumb: "media/thumbs/ambience/D9B896BB-6C22-4CD5-A9D8-C0D11638CDB7.jpg",
    desc: "Architectural foreground-reveal glide showcasing Socio’s signature red staircase, arched wall glow, and dining layout.",
    tags: ["Architecture", "Gimbal Glide", "Socio"]
  },
  {
    id: "ambience-coffee-beans",
    category: "ambience",
    categoryLabel: "Ambience & Venues",
    type: "video",
    orientation: "reel",
    duration: "0:22",
    title: "Roastery Craft & Café Texture Reel",
    client: "Specialty Coffee Showcase",
    meta: "9:16 Atmospheric Cut · 0:22",
    src: "media/videos/ambience/A35FD24B-44CC-43DA-AFA9-5C5063EFCFD9.mp4",
    thumb: "media/thumbs/ambience/A35FD24B-44CC-43DA-AFA9-5C5063EFCFD9.jpg",
    desc: "Macro depth-of-field pulls celebrating roasted coffee beans, glassware, and warm café mood.",
    tags: ["Macro Focus", "Roastery", "Mood Film"]
  },

  // Sports & Action (4)
  {
    id: "sports-protouch-1",
    category: "sports",
    categoryLabel: "Sports & Action",
    type: "video",
    orientation: "reel",
    duration: "0:28",
    title: "Pro Touch PBC — Night Court Hype Reel",
    client: "Pro Touch Pickleball Club",
    meta: "9:16 Action Reel · 0:28",
    src: "media/videos/sports/IMG_4582.mp4",
    thumb: "media/thumbs/sports/IMG_4582.jpg",
    desc: "High-energy prism transitions, floodlit court rallies, and branded club watermark integration.",
    tags: ["Pickleball", "Prism FX", "Pro Touch PBC"]
  },
  {
    id: "sports-hpl-league",
    category: "sports",
    categoryLabel: "Sports & Action",
    type: "video",
    orientation: "landscape",
    duration: "0:19",
    title: "HPL Club League — Pro Touch Match Highlights",
    client: "Pro Touch PBC / HPL",
    meta: "16:9 Widescreen Highlights · 0:19",
    src: "media/videos/sports/IMG_4584.mp4",
    thumb: "media/thumbs/sports/IMG_4584.jpg",
    desc: "Widescreen courtside rally coverage capturing sponsor boards, serve technique, and tournament energy.",
    tags: ["16:9 Highlights", "Tournament", "Sponsor Visibility"]
  },
  {
    id: "sports-protouch-rally",
    category: "sports",
    categoryLabel: "Sports & Action",
    type: "video",
    orientation: "reel",
    duration: "0:19",
    title: "Pro Touch PBC — Speed-Ramp Rally Cut",
    client: "Pro Touch Pickleball Club",
    meta: "9:16 Vertical Action · 0:19",
    src: "media/videos/sports/IMG_4586.mp4",
    thumb: "media/thumbs/sports/IMG_4586.jpg",
    desc: "Whip-pan transitions and beat-synced rally highlights built for sports club engagement.",
    tags: ["Whip Transitions", "Beat Sync", "Sports Reel"]
  },
  {
    id: "sports-tunnel-opener",
    category: "sports",
    categoryLabel: "Sports & Action",
    type: "video",
    orientation: "landscape",
    duration: "0:11",
    title: "Matchday Opener — Widescreen Action Stinger",
    client: "Sports Coverage",
    meta: "16:9 Match Teaser · 0:11",
    src: "media/videos/sports/IMG_5559.mp4",
    thumb: "media/thumbs/sports/IMG_5559.jpg",
    desc: "Punchy widescreen teaser stinger built for tournament announcements and sponsor intros.",
    tags: ["Match Stinger", "16:9", "Fast Cut"]
  },

  // Campus & School (2)
  {
    id: "school-tjis-bonalu",
    category: "school",
    categoryLabel: "Campus & Events",
    type: "video",
    orientation: "reel",
    duration: "0:49",
    title: "The Jain International School — Bonalu Celebration 2026",
    client: "The Jain International School (TJIS)",
    meta: "9:16 Institutional Event Film · 0:49",
    src: "media/videos/school/IMG_8915.mp4",
    thumb: "media/thumbs/school/IMG_8915.jpg",
    desc: "Custom branded title card opener and cultural event recap celebrating student performances and campus spirit.",
    tags: ["Cultural Event", "Title Animation", "TJIS"]
  },
  {
    id: "school-campus-parade",
    category: "school",
    categoryLabel: "Campus & Events",
    type: "video",
    orientation: "reel",
    duration: "0:58",
    title: "Campus Ceremonial March & VIP Welcome Film",
    client: "Educational Institution",
    meta: "9:16 Campus Coverage · 0:58",
    src: "media/videos/school/IMG_0335.mp4",
    thumb: "media/thumbs/school/IMG_0335.jpg",
    desc: "Full-event coverage capturing dignified red-carpet arrivals, student escorts, and campus ceremony highlights.",
    tags: ["Campus Film", "Event Recap", "Multi-Angle"]
  },

  // Behind The Scenes (5)
  {
    id: "bts-cafin-prep",
    category: "behind_the_Scenes",
    categoryLabel: "Behind The Scenes",
    type: "video",
    orientation: "reel",
    duration: "0:32",
    title: "Cafin Coffee & Kitchen — Culinary Prep BTS",
    client: "Cafin Coffee & Kitchen",
    meta: "9:16 Kitchen BTS · 0:32",
    src: "media/videos/behind_the_Scenes/767D20D3-AC16-423E-B16B-1484038CEBF5.mp4",
    thumb: "media/thumbs/behind_the_Scenes/767D20D3-AC16-423E-B16B-1484038CEBF5.jpg",
    desc: "Authentic chef prep and line-cook rhythm filmed to build kitchen transparency and brand trust.",
    tags: ["Kitchen Craft", "Cafin", "BTS"]
  },
  {
    id: "bts-skillet-sizzle",
    category: "behind_the_Scenes",
    categoryLabel: "Behind The Scenes",
    type: "video",
    orientation: "reel",
    duration: "0:31",
    title: "Live Pan Sizzle & Chef Garnishing BTS",
    client: "Kitchen Production",
    meta: "9:16 Culinary Motion · 0:31",
    src: "media/videos/behind_the_Scenes/A9CDE54A-8F0B-4EFD-94AE-D2DCA0337EB7.mp4",
    thumb: "media/thumbs/behind_the_Scenes/A9CDE54A-8F0B-4EFD-94AE-D2DCA0337EB7.jpg",
    desc: "Flame-lit pan sear and precision chef plating captured for high-retention foodie reels.",
    tags: ["Live Flame", "Chef Action", "BTS"]
  },
  {
    id: "bts-studio-marble",
    category: "behind_the_Scenes",
    categoryLabel: "Behind The Scenes",
    type: "video",
    orientation: "reel",
    duration: "0:25",
    title: "On-Set Marble Backdrop & Sizzle Production",
    client: "Trevixa Studio Set",
    meta: "9:16 Studio BTS · 0:25",
    src: "media/videos/behind_the_Scenes/IMG_1254.mp4",
    thumb: "media/thumbs/behind_the_Scenes/IMG_1254.jpg",
    desc: "Peek behind the scenes of our custom backdrop rigging and live skillet filming workflow.",
    tags: ["Set Rigging", "Production BTS", "Studio"]
  },
  {
    id: "bts-knife-prep",
    category: "behind_the_Scenes",
    categoryLabel: "Behind The Scenes",
    type: "video",
    orientation: "reel",
    duration: "0:14",
    title: "Moody Crimson Kitchen Prep — Close-Up",
    client: "Culinary Studio",
    meta: "9:16 Macro BTS · 0:14",
    src: "media/videos/behind_the_Scenes/IMG_0353.mp4",
    thumb: "media/thumbs/behind_the_Scenes/IMG_0353.jpg",
    desc: "Dramatic crimson-lit knife prep shot for sensory ASMR-style food openings.",
    tags: ["Macro", "Sensory Edit", "Mood Lighting"]
  },
  {
    id: "bts-julienne-craft",
    category: "behind_the_Scenes",
    categoryLabel: "Behind The Scenes",
    type: "video",
    orientation: "reel",
    duration: "0:25",
    title: "Fresh Ingredient Craft & Prep Station",
    client: "Hospitality BTS",
    meta: "9:16 Overhead BTS · 0:25",
    src: "media/videos/behind_the_Scenes/IMG_9142.mp4",
    thumb: "media/thumbs/behind_the_Scenes/IMG_9142.jpg",
    desc: "Clean daylight overhead prep documenting fresh ingredients from board to plate.",
    tags: ["Overhead", "Fresh Prep", "BTS"]
  }
];

const SPOTLIGHT_IDS = [
  "design-pasta-split",
  "food-chocolate-pour",
  "design-dessert-geometric",
  "food-tricolor-spread"
];

let activeCategory = "all";
let currentHeroIndex = 0;
let currentLightboxIndex = 0;
let filteredItems = [...PORTFOLIO_ITEMS];

const els = {
  filterBar: document.getElementById("filterBar"),
  portfolioGrid: document.getElementById("portfolioGrid"),
  spotlightCollage: document.getElementById("spotlightCollage"),
  heroVideo: document.getElementById("heroVideo"),
  heroStageTag: document.getElementById("heroStageTag"),
  heroStageTitle: document.getElementById("heroStageTitle"),
  heroStageSub: document.getElementById("heroStageSub"),
  heroSwitcher: document.getElementById("heroSwitcher"),
  heroMuteBtn: document.getElementById("heroMuteBtn"),
  openHeroLightbox: document.getElementById("openHeroLightbox"),
  filterDesignsBtn: document.getElementById("filterDesignsBtn"),
  lightbox: document.getElementById("lightbox"),
  lbStage: document.getElementById("lbStage"),
  lbCategory: document.getElementById("lbCategory"),
  lbTitle: document.getElementById("lbTitle"),
  lbDesc: document.getElementById("lbDesc"),
  lbTags: document.getElementById("lbTags"),
  lbClose: document.getElementById("lbClose"),
  lbPrev: document.getElementById("lbPrev"),
  lbNext: document.getElementById("lbNext"),
  briefForm: document.getElementById("briefForm"),
  briefOutput: document.getElementById("briefOutput"),
  serviceChips: document.getElementById("serviceChips"),
  menuToggle: document.getElementById("menuToggle"),
  navLinks: document.getElementById("navLinks"),
  yearNow: document.getElementById("yearNow")
};

function renderFilters() {
  els.filterBar.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === "all"
      ? PORTFOLIO_ITEMS.length
      : PORTFOLIO_ITEMS.filter(item => item.category === cat.id).length;
    const active = cat.id === activeCategory ? "active" : "";
    return `
      <button type="button" class="filter-btn ${active}" data-cat="${cat.id}" role="tab" aria-selected="${cat.id === activeCategory}">
        <span>${cat.label}</span>
        <span class="filter-count">${count}</span>
      </button>
    `;
  }).join("");
}

function getRatioClass(item) {
  if (item.orientation === "landscape") return "ratio-landscape";
  if (item.orientation === "reel") return "ratio-reel";
  return "ratio-portrait";
}

function renderGrid() {
  filteredItems = activeCategory === "all"
    ? [...PORTFOLIO_ITEMS]
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  els.portfolioGrid.innerHTML = filteredItems.map((item, idx) => {
    const isVideo = item.type === "video";
    return `
      <article class="work-card" data-idx="${idx}" tabindex="0" role="button" aria-label="Open ${item.title}">
        <div class="work-media ${getRatioClass(item)}">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy" />
          ${isVideo ? `<video class="work-hover-video" muted loop playsinline preload="none" data-src="${item.src}"></video>` : ""}
          <div class="media-badges">
            <span class="badge badge-gold">${item.categoryLabel}</span>
            ${isVideo ? `<span class="badge">${item.duration}</span>` : `<span class="badge">STILL</span>`}
          </div>
          ${isVideo ? `<div class="play-orb" aria-hidden="true">▶</div>` : ""}
        </div>
        <div class="work-body">
          <h3 class="work-title">${item.title}</h3>
          <p class="work-meta">${item.client} · ${item.meta}</p>
        </div>
      </article>
    `;
  }).join("");

  // Attach hover video preview + click handlers
  els.portfolioGrid.querySelectorAll(".work-card").forEach(card => {
    const idx = Number(card.dataset.idx);
    const vid = card.querySelector(".work-hover-video");

    if (vid) {
      card.addEventListener("mouseenter", () => {
        if (!vid.src) vid.src = vid.dataset.src;
        card.classList.add("is-previewing");
        vid.play().catch(() => {});
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-previewing");
        vid.pause();
      });
    }

    card.addEventListener("click", () => openLightbox(idx));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });
}

function renderSpotlight() {
  const items = SPOTLIGHT_IDS
    .map(id => PORTFOLIO_ITEMS.find(p => p.id === id))
    .filter(Boolean);

  els.spotlightCollage.innerHTML = items.map(item => `
    <div class="collage-tile" data-id="${item.id}" role="button" tabindex="0" aria-label="View ${item.title}">
      <img src="${item.thumb}" alt="${item.title}" loading="lazy" />
    </div>
  `).join("");

  els.spotlightCollage.querySelectorAll(".collage-tile").forEach(tile => {
    const openById = () => {
      activeCategory = "all";
      renderFilters();
      renderGrid();
      const idx = filteredItems.findIndex(x => x.id === tile.dataset.id);
      if (idx >= 0) openLightbox(idx);
    };
    tile.addEventListener("click", openById);
    tile.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openById();
      }
    });
  });
}

function setHeroReel(index) {
  currentHeroIndex = index;
  const reel = HERO_REELS[index];
  els.heroStageTag.textContent = reel.tag;
  els.heroStageTitle.textContent = reel.title;
  els.heroStageSub.textContent = reel.sub;
  els.heroVideo.poster = reel.poster;
  els.heroVideo.src = reel.video;
  els.heroVideo.play().catch(() => {});

  els.heroSwitcher.innerHTML = HERO_REELS.map((_, i) => `
    <button type="button" class="stage-dot-btn ${i === index ? "active" : ""}" data-hero="${i}" aria-label="Play hero reel ${i + 1}"></button>
  `).join("");

  els.heroSwitcher.querySelectorAll(".stage-dot-btn").forEach(btn => {
    btn.addEventListener("click", () => setHeroReel(Number(btn.dataset.hero)));
  });
}

function openLightbox(index) {
  currentLightboxIndex = (index + filteredItems.length) % filteredItems.length;
  const item = filteredItems[currentLightboxIndex];

  els.lbCategory.textContent = `${item.categoryLabel} · ${item.client}`;
  els.lbTitle.textContent = item.title;
  els.lbDesc.textContent = item.desc;
  els.lbTags.innerHTML = item.tags.map(t => `<span class="cap-tag">${t}</span>`).join("");

  if (item.type === "video") {
    els.lbStage.innerHTML = `
      <video controls autoplay playsinline poster="${item.thumb}">
        <source src="${item.src}" type="video/mp4" />
      </video>
    `;
  } else {
    els.lbStage.innerHTML = `<img src="${item.src}" alt="${item.title}" />`;
  }

  els.lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const vid = els.lbStage.querySelector("video");
  if (vid) vid.pause();
  els.lbStage.innerHTML = "";
  els.lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

// Event Listeners
els.filterBar.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderFilters();
  renderGrid();
});

els.heroMuteBtn.addEventListener("click", () => {
  els.heroVideo.muted = !els.heroVideo.muted;
  els.heroMuteBtn.textContent = els.heroVideo.muted ? "Sound: Off" : "Sound: On";
});

els.openHeroLightbox.addEventListener("click", () => {
  const currentVideoPath = HERO_REELS[currentHeroIndex].video;
  activeCategory = "all";
  renderFilters();
  renderGrid();
  const idx = filteredItems.findIndex(x => x.src === currentVideoPath);
  openLightbox(idx >= 0 ? idx : 0);
});

els.filterDesignsBtn.addEventListener("click", () => {
  activeCategory = "designs";
  renderFilters();
  renderGrid();
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

els.lbClose.addEventListener("click", closeLightbox);
els.lightbox.addEventListener("click", e => {
  if (e.target === els.lightbox) closeLightbox();
});
els.lbPrev.addEventListener("click", () => openLightbox(currentLightboxIndex - 1));
els.lbNext.addEventListener("click", () => openLightbox(currentLightboxIndex + 1));

document.addEventListener("keydown", e => {
  if (!els.lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") openLightbox(currentLightboxIndex - 1);
  if (e.key === "ArrowRight") openLightbox(currentLightboxIndex + 1);
});

els.serviceChips.addEventListener("click", e => {
  const chip = e.target.closest(".chip-toggle");
  if (!chip) return;
  chip.classList.toggle("selected");
});

els.briefForm.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("clientName").value.trim();
  const brand = document.getElementById("brandName").value.trim();
  const timeline = document.getElementById("timeline").value;
  const contact = document.getElementById("contactInfo").value.trim();
  const notes = document.getElementById("projectNotes").value.trim();
  const services = [...els.serviceChips.querySelectorAll(".chip-toggle.selected")]
    .map(c => c.dataset.service);

  const summary = [
    `TREVIXA MEDIA — CLIENT PROJECT BRIEF`,
    `Client: ${name} (${brand})`,
    `Contact: ${contact}`,
    `Deliverables: ${services.length ? services.join(", ") : "General Production"}`,
    `Timeline: ${timeline}`,
    `Notes: ${notes || "N/A"}`
  ].join("\n");

  let copied = false;
  try {
    await navigator.clipboard.writeText(summary);
    copied = true;
  } catch {}

  els.briefOutput.innerHTML = `
    <strong>${copied ? "Brief copied to clipboard!" : "Project brief ready!"}</strong><br />
    <pre style="white-space:pre-wrap; margin:0.6rem 0 0; font-family:var(--font-mono); font-size:0.78rem; color:var(--text);">${summary}</pre>
  `;
  els.briefOutput.classList.add("visible");
});

els.menuToggle.addEventListener("click", () => {
  const open = els.navLinks.classList.toggle("open");
  els.menuToggle.setAttribute("aria-expanded", String(open));
});

els.navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    els.navLinks.classList.remove("open");
    els.menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Init
els.yearNow.textContent = new Date().getFullYear();
renderFilters();
renderGrid();
renderSpotlight();
setHeroReel(0);
