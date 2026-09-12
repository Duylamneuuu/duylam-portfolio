export const site = {
  name: "Duy Lam",
  eyebrow: "E-commerce Student @ NEU",
  headline: "I build digital products around messy real-world workflows.",
  summary:
    "I’m Duy Lam, an E-commerce student at National Economics University exploring digital product, business analysis, and practical AI. I like finding everyday workflow problems, shaping clearer product flows, and using AI to move from idea to working prototype.",
  location: "Hanoi, Vietnam",
  availability:
    "Open to student programs, internships, and part-time opportunities",
  linkedin: "https://www.linkedin.com/in/duylam-neu/",
  github: "https://github.com/Duylamneuuu",
} as const;

export const about = {
  body: "I’m an E-commerce student at National Economics University, currently building my foundation in Business Analysis while exploring digital products and AI-enabled workflows. I’m more interested in understanding problems, shaping product decisions, and using technology and AI to simplify workflows than positioning myself as a software engineer.",
  education: {
    school: "National Economics University",
    program: "E-commerce",
    dates: "Sep 2025 – 2029",
  },
  ielts: {
    label: "IELTS Academic",
    score: "Overall 7.0",
    issuer: "British Council",
    date: "Sep 2024",
  },
} as const;

export const process = {
  steps: [
    "Notice a messy workflow",
    "Understand users and constraints",
    "Define the smallest useful product",
    "Prototype with AI",
    "Review, test, refine",
  ],
  support:
    "I’m especially interested in the space between business problems and technology: turning unclear problems into usable product flows, deciding what should and should not be built, and using AI to shorten the path from idea to evidence.",
} as const;

const workAsset = (path: string) => `/work/${path}`;

export type WorkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  storyLabel: string;
  story: string;
  shaped: string[];
  ai: string;
  status: string;
  hero: WorkImage;
  frames: WorkImage[];
};

export const projects: Project[] = [
  {
    id: "giaotrinh",
    index: "01",
    title: "GiaoTrinh",
    category: "Student Marketplace · Product Prototype",
    summary:
      "A student-focused marketplace prototype for finding and exchanging textbooks and study materials more clearly than scattered Facebook posts.",
    storyLabel: "The problem",
    story:
      "Campus trades already happen, but they live in fragmented Facebook posts that are hard to search and easy to miss. Listings go stale, school and meetup context is inconsistent, and contact details sit in the open.",
    shaped: [
      "Structured listings",
      "School context",
      "Meetup context",
      "Search and filtering",
      "Seller-contact safety step",
    ],
    ai: "AI-assisted development and iterative UX review to reach a working prototype.",
    status:
      "Feature-complete prototype. Production verification remains pending.",
    hero: {
      src: workAsset("giaotrinh/02-listing-detail.png"),
      alt: "GiaoTrinh listing detail with product photos, price, school, meetup location, and contact still hidden",
      width: 1440,
      height: 900,
      caption: "Listing detail — school, meetup, and contact still hidden",
    },
    frames: [
      {
        src: workAsset("giaotrinh/01-discovery.png"),
        alt: "GiaoTrinh search results for a calculator listing with school and price context",
        width: 1440,
        height: 900,
        caption: "Discovery — search and school-aware listings",
      },
      {
        src: workAsset("giaotrinh/03-safety.png"),
        alt: "GiaoTrinh safety acknowledgement shown before seller contact is revealed",
        width: 1440,
        height: 900,
        caption: "Safety step before any seller contact",
      },
      {
        src: workAsset("giaotrinh/04-mobile.png"),
        alt: "GiaoTrinh mobile home feed with textbook and study-material listings",
        width: 780,
        height: 1688,
        caption: "Mobile home — browse without an account",
      },
    ],
  },
  {
    id: "clubdrop",
    index: "02",
    title: "Clubdrop",
    category: "Digital Product · AI-assisted Workflow",
    summary:
      "A simpler preorder workflow for student clubs, instead of stitching a campaign together from social posts, Google Forms, and spreadsheets.",
    storyLabel: "The problem",
    story:
      "Club drops usually split across campaign details in a chat post, submissions in a form, and organizer tools in a spreadsheet. Details go stale, and there is no clean public page for buyers.",
    shaped: [
      "Structured campaign brief",
      "Template selection",
      "Organizer review",
      "Public campaign page",
      "Preorder roster",
    ],
    ai: "AI helps structure campaign setup. Organizers keep control of pricing, deadlines, payment details, pickup, and publishing.",
    status:
      "Demo-ready on a development deployment. Moving toward a small closed beta. Not production launched.",
    hero: {
      src: workAsset("clubdrop/01-hero-issue.png"),
      alt: "Clubdrop public buyer page using the Issue magazine template for a campus merch drop",
      width: 1440,
      height: 900,
      caption: "Public buyer page — Issue template, no account required",
    },
    frames: [
      {
        src: workAsset("clubdrop/03-template-atelier.png"),
        alt: "Clubdrop Atelier buyer template with a quiet split layout for merch preorder",
        width: 1440,
        height: 900,
        caption: "Buyer page — Atelier template",
      },
      {
        src: workAsset("clubdrop/06-organizer-review-publish.png"),
        alt: "Clubdrop organizer review screen with template picker and publish control",
        width: 1085,
        height: 2058,
        caption: "Organizer review — template, price, and publish stay human-controlled",
      },
      {
        src: workAsset("clubdrop/07-organizer-roster.png"),
        alt: "Clubdrop organizer preorder roster with synthetic demo buyer data",
        width: 1085,
        height: 1818,
        caption: "Preorder roster — synthetic demo data",
      },
    ],
  },
  {
    id: "sushiloop",
    index: "03",
    title: "SushiLoop",
    category: "AI-assisted Game Development · Unity",
    summary:
      "A complete 20-level mobile puzzle prototype for a game competition, built with extensive AI-assisted development.",
    storyLabel: "What I did",
    story:
      "I directed gameplay, progression, a responsive portrait UI, testing, and iteration. Exact constraints stayed human-owned; agents implemented inside those bounds.",
    shaped: [
      "Gameplay loop",
      "20-level progression",
      "Responsive portrait UI",
      "Testing and iteration",
    ],
    ai: "I directed agents through implementation, debugging, editor automation, testing, and visual review. Humans keep the specs and validation gates. AI is a collaborator, not a one-shot generator.",
    status: "Completed competition prototype.",
    hero: {
      src: workAsset("sushiloop/03-gameplay-hero.png"),
      alt: "SushiLoop Level 5 gameplay with a conveyor loop, customer orders, and hand-drawn portrait UI",
      width: 1080,
      height: 1920,
      caption: "Gameplay — Level 5",
    },
    frames: [
      {
        src: workAsset("sushiloop/01-main-menu.png"),
        alt: "SushiLoop main menu with play, levels, and hand-drawn portrait art",
        width: 1080,
        height: 1920,
        caption: "Main menu",
      },
      {
        src: workAsset("sushiloop/04-win-result.png"),
        alt: "SushiLoop win result screen after completing a level",
        width: 1080,
        height: 1920,
        caption: "Win result",
      },
    ],
  },
];
