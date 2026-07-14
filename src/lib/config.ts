/**
 * All editable copy, numbers, and links live here (see CLAUDE.md §7).
 * Client revisions should only ever touch this file.
 */

// On-page anchor for the pricing section — all generic CTAs scroll here.
export const DISCORD_URL = "#join";

// Real Subscord checkout for the private Discord (The Tribe).
export const STORE_URL = "https://subscord.com/store/1044393249466486874";

export const FEATURED_VIDEO_URL =
  "https://www.youtube.com/watch?v=3ZZw7OHYqJI&t=3579s";

export const FEATURED_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/3ZZw7OHYqJI?start=3579&autoplay=1";

export const FEATURED_VIDEO_THUMB =
  "https://img.youtube.com/vi/3ZZw7OHYqJI/maxresdefault.jpg";

export type NavLink = {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Join", href: "#join" },
  {
    label: "About",
    href: "#about",
    items: [
      { label: "Our Coaches", href: "#about" },
      { label: "Meet PureFX", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Learn",
    href: "#videos",
    items: [
      { label: "Blog", href: "#blog" },
      { label: "Tools", href: "#expect" },
      { label: "Video Lessons", href: "#videos" },
      { label: "FAQ", href: "#contact" },
    ],
  },
  {
    label: "Results",
    href: "#results",
    items: [
      { label: "Reviews", href: "#reviews" },
      { label: "Success Stories", href: "#results" },
    ],
  },
];

export type SocialLink = { label: string; href: string };

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export type Stat = {
  /** Numeric target for the count-up animation. */
  value: number;
  /** Formatted final string shown once the animation lands (and for no-JS). */
  display: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 2400, display: "2,400+", label: "Discord Members" },
  { value: 180, display: "180K+", label: "Instagram Followers" },
  { value: 500, display: "500+", label: "Trade Calls Posted" },
  { value: 4.9, display: "4.9★", label: "Average Review" },
];

export type Feature = {
  title: string;
  description: string;
  accent: "gold" | "blue" | "peach";
  /** Card video; falls back to the accent icon when missing. */
  video?: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Learn",
    accent: "gold",
    video: "/purefx-video-6.mp4",
    description:
      "Daily premarket watchlists, live trade breakdowns, and a structured video library. Skip years of trial and error by studying real setups as they happen — with the reasoning spelled out.",
  },
  {
    title: "Connect",
    accent: "blue",
    video: "/purefx-video-5.mp4",
    description:
      "Trading alone is the hard way. Ask questions in real time, compare notes with traders at your level, and get honest feedback from people who actually take the same setups.",
  },
  {
    title: "Grow",
    accent: "peach",
    video: "/purefx215_1782485012_highlight18085932899310119.mp4",
    description:
      "Track your progress with monthly reviews and accountability check-ins. The goal isn't a hot streak — it's building a repeatable process you can trust in any market.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  avatar: string;
  /** Local vertical (9:16) purefx clip in /public — each card gets a unique one. */
  video: string;
};

// Clip assignments follow client requests — some clips repeat across
// sections (e.g. the 1782485012 highlight also fills the why-join Grow card).
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jordan M.",
    location: "Austin, USA",
    quote:
      "The premarket watchlist alone changed how I prepare. I finally have a routine instead of chasing whatever's moving.",
    avatar: "/placeholders/avatar-1.jpg",
    video: "/purefx215_1744803926_3611999500038922312_561256036.mp4",
  },
  {
    name: "Priya S.",
    location: "Toronto, Canada",
    quote:
      "PureFX explains the why behind every call. After six months here I understand risk management better than after two years on my own.",
    avatar: "/placeholders/avatar-2.jpg",
    video: "/purefx215_1745233840_3615605877482985839_561256036.mp4",
  },
  {
    name: "Marcus T.",
    location: "London, UK",
    quote:
      "No hype, no lambo talk — just honest breakdowns of what worked and what didn't. That's rarer than it should be.",
    avatar: "/placeholders/avatar-3.jpg",
    video: "/purefx215_1745326674_3616384645307026758_561256036.mp4",
  },
  {
    name: "Alina K.",
    location: "Berlin, Germany",
    quote:
      "The community reviews my trade journal every month. Having other eyes on my mistakes shortened my learning curve massively.",
    avatar: "/placeholders/avatar-4.jpg",
    video: "/purefx215_1765443942_3785140471739767340_561256036.mp4",
  },
  {
    name: "Dev R.",
    location: "Mumbai, India",
    quote:
      "I joined for the trade calls and stayed for the people. Someone is always around to sanity-check a setup before I take it.",
    avatar: "/placeholders/avatar-5.jpg",
    video: "/purefx215_1782485012_highlight18085932899310119.mp4",
  },
  {
    name: "Sofia L.",
    location: "Sydney, Australia",
    quote:
      "As a swing trader in a different time zone, the recorded breakdowns are gold. I never feel like I'm missing the session.",
    avatar: "/placeholders/avatar-6.jpg",
    // purefx215_1781776305 is a byte-identical copy of purefx-video-1.mp4
    // (grid slot 1), so this card uses a highlight clip instead.
    video: "/purefx215_1782485012_highlight18085932899310119.mp4",
  },
  {
    name: "Noah B.",
    location: "Amsterdam, Netherlands",
    quote:
      "The monthly accountability check-ins keep me honest. My journal finally shows a process instead of random trades.",
    avatar: "/placeholders/avatar-1.jpg",
    video: "/purefx215_1782145836_3925245863369350094_561256036.mp4",
  },
  {
    name: "Camila F.",
    location: "São Paulo, Brazil",
    quote:
      "I stopped overtrading within my first month. Watching the live sessions taught me that sitting on my hands is a position too.",
    avatar: "/placeholders/avatar-2.jpg",
    video: "/purefx215_1782483859_3928081362458980196_561256036.mp4",
  },
  {
    name: "Ethan W.",
    location: "Cape Town, South Africa",
    quote:
      "The funded-account guidance was worth it alone. Clear rules, honest feedback, and no promises — just structure.",
    avatar: "/placeholders/avatar-3.jpg",
    video: "/purefx215_1781708191_highlight18085932899310119.mp4",
  },
];

export const PULL_QUOTE = {
  quote:
    "The market pays you for patience and process, not for predictions.",
  attribution: "PureFX — pinned in #daily-mindset",
};

export type Video = {
  title: string;
  /** Local vertical (9:16) clip in /public. */
  src: string;
};

// Four of the client's real purefx clips (all 720×1280 vertical).
// Per client request, purefx-video-6 also fills the why-join "Learn" card and
// grid slot 3, so purefx-video-3/4 are currently unused.
export const VIDEOS: Video[] = [
  {
    title: "Live Trading Session: Full Market Open Breakdown",
    src: "/purefx-video-1.mp4",
  },
  {
    title: "How I Build My Premarket Watchlist",
    // purefx-video-2.mp4 is a byte-identical copy of purefx-video-1.mp4,
    // so this slot uses a highlight clip instead.
    src: "/purefx215_1781802900_highlight18085932899310119.mp4",
  },
  {
    title: "Risk Management Rules I Never Break",
    src: "/purefx-video-6.mp4",
  },
  {
    title: "Swing Trading a Choppy Market",
    src: "/purefx215_1783098323_3933268855145017011_561256036.mp4",
  },
];

export type PricingTier = {
  name: string;
  emoji: string;
  price: number;
  period: string;
  tagline: string;
  features: string[];
  href: string;
  /** Highlighted "most popular" card. */
  featured?: boolean;
};

// Mirrors the live Subscord store tiers — keep names/prices in sync with it.
export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Tribe Tier 1",
    emoji: "🐺",
    price: 43,
    period: "/month",
    tagline: "Live trading — perfect for traders who want to watch, learn, and grow.",
    features: [
      "Live trading Monday–Friday",
      "Real-time trade setups and market analysis",
      "Trade recaps and educational content",
      "Community access",
    ],
    href: STORE_URL,
  },
  {
    name: "Tribe Tier 2 — Mentorship",
    emoji: "🦁",
    price: 63,
    period: "/month",
    tagline: "Adds coaching and mentorship for faster trader development.",
    features: [
      "Everything in Tier 1",
      "Weekly group coaching calls",
      "1-on-1 coaching sessions",
      "Strategy reviews and feedback",
      "Help passing funded accounts",
      "Priority support and direct access",
    ],
    href: STORE_URL,
    featured: true,
  },
  {
    name: "Tribe Tier 3 — Complete Mentorship Program",
    emoji: "🐺",
    price: 103,
    period: "/month",
    tagline: "Perfect for traders who want the fastest path to growth.",
    features: [
      "Everything in Tier 1 & Tier 2",
      "Beginner-to-advanced education",
      "Step-by-step trading blueprint",
      "Personalized trade reviews",
      "Advanced strategy training",
      "Funded account guidance",
    ],
    href: STORE_URL,
  },
];

export type BlogPost = { title: string; thumb: string };

// Trending-now thumbnails currently reuse the client's two real photos.
export const BLOG_POSTS: BlogPost[] = [
  { title: "5 Habits of Consistent Day Traders", thumb: "/image1.jpg" },
  { title: "Reading Level 2 Without the Noise", thumb: "/image2.jpg" },
  { title: "Position Sizing for Small Accounts", thumb: "/image1.jpg" },
  { title: "When Not to Trade: A Field Guide", thumb: "/image2.jpg" },
];

export const RISK_DISCLAIMER =
  "Trading involves substantial risk. Past performance does not guarantee future results. PureFX is not a licensed financial advisor.";
