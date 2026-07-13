/**
 * All editable copy, numbers, and links live here (see CLAUDE.md §7).
 * Client revisions should only ever touch this file.
 */

// Real Discord invite / checkout link still pending from client (CLAUDE.md §9).
export const DISCORD_URL = "#join";

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
      { label: "Meet Marcelo", href: "#about" },
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
};

export const FEATURES: Feature[] = [
  {
    title: "Learn",
    accent: "gold",
    description:
      "Daily premarket watchlists, live trade breakdowns, and a structured video library. Skip years of trial and error by studying real setups as they happen — with the reasoning spelled out.",
  },
  {
    title: "Connect",
    accent: "blue",
    description:
      "Trading alone is the hard way. Ask questions in real time, compare notes with traders at your level, and get honest feedback from people who actually take the same setups.",
  },
  {
    title: "Grow",
    accent: "peach",
    description:
      "Track your progress with monthly reviews and accountability check-ins. The goal isn't a hot streak — it's building a repeatable process you can trust in any market.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  thumb: string;
  avatar: string;
  duration: string;
  /** All reviews currently play the same real video per client request. */
  embedUrl: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jordan M.",
    location: "Austin, USA",
    quote:
      "The premarket watchlist alone changed how I prepare. I finally have a routine instead of chasing whatever's moving.",
    thumb: "/placeholders/review-thumb-1.jpg",
    avatar: "/placeholders/avatar-1.jpg",
    duration: "0:39",
    embedUrl: FEATURED_VIDEO_EMBED_URL,
  },
  {
    name: "Priya S.",
    location: "Toronto, Canada",
    quote:
      "Marcelo explains the why behind every call. After six months here I understand risk management better than after two years on my own.",
    thumb: "/placeholders/review-thumb-2.jpg",
    avatar: "/placeholders/avatar-2.jpg",
    duration: "1:12",
    embedUrl: FEATURED_VIDEO_EMBED_URL,
  },
  {
    name: "Marcus T.",
    location: "London, UK",
    quote:
      "No hype, no lambo talk — just honest breakdowns of what worked and what didn't. That's rarer than it should be.",
    thumb: "/placeholders/review-thumb-3.jpg",
    avatar: "/placeholders/avatar-3.jpg",
    duration: "0:54",
    embedUrl: FEATURED_VIDEO_EMBED_URL,
  },
  {
    name: "Alina K.",
    location: "Berlin, Germany",
    quote:
      "The community reviews my trade journal every month. Having other eyes on my mistakes shortened my learning curve massively.",
    thumb: "/placeholders/review-thumb-4.jpg",
    avatar: "/placeholders/avatar-4.jpg",
    duration: "0:47",
    embedUrl: FEATURED_VIDEO_EMBED_URL,
  },
  {
    name: "Dev R.",
    location: "Mumbai, India",
    quote:
      "I joined for the trade calls and stayed for the people. Someone is always around to sanity-check a setup before I take it.",
    thumb: "/placeholders/review-thumb-5.jpg",
    avatar: "/placeholders/avatar-5.jpg",
    duration: "1:03",
    embedUrl: FEATURED_VIDEO_EMBED_URL,
  },
  {
    name: "Sofia L.",
    location: "Sydney, Australia",
    quote:
      "As a swing trader in a different time zone, the recorded breakdowns are gold. I never feel like I'm missing the session.",
    thumb: "/placeholders/review-thumb-6.jpg",
    avatar: "/placeholders/avatar-6.jpg",
    duration: "0:58",
    embedUrl: FEATURED_VIDEO_EMBED_URL,
  },
];

export const PULL_QUOTE = {
  quote:
    "The market pays you for patience and process, not for predictions.",
  attribution: "Marcelo Estrada — pinned in #daily-mindset",
};

export type Video = {
  title: string;
  thumb: string;
  embedUrl: string;
  watchUrl: string;
};

// All 4 slots currently point at the same real video per client request —
// swap in unique links/thumbnails per slot when the client sends more.
export const VIDEOS: Video[] = [
  {
    title: "Live Trading Session: Full Market Open Breakdown",
    thumb: FEATURED_VIDEO_THUMB,
    embedUrl: FEATURED_VIDEO_EMBED_URL,
    watchUrl: FEATURED_VIDEO_URL,
  },
  {
    title: "How I Build My Premarket Watchlist",
    thumb: FEATURED_VIDEO_THUMB,
    embedUrl: FEATURED_VIDEO_EMBED_URL,
    watchUrl: FEATURED_VIDEO_URL,
  },
  {
    title: "Risk Management Rules I Never Break",
    thumb: FEATURED_VIDEO_THUMB,
    embedUrl: FEATURED_VIDEO_EMBED_URL,
    watchUrl: FEATURED_VIDEO_URL,
  },
  {
    title: "Swing Trading a Choppy Market",
    thumb: FEATURED_VIDEO_THUMB,
    embedUrl: FEATURED_VIDEO_EMBED_URL,
    watchUrl: FEATURED_VIDEO_URL,
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
  "Trading involves substantial risk. Past performance does not guarantee future results. Marcelo Estrada is not a licensed financial advisor.";
