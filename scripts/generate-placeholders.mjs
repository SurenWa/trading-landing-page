/**
 * Generates the branded gradient placeholder JPGs listed in CLAUDE.md §5
 * into public/placeholders/, so the prototype works fully offline.
 * Run: node scripts/generate-placeholders.mjs
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/placeholders");

const PALETTE = {
  gold: ["#3a3007", "#0d0d10"],
  blue: ["#0e1f42", "#0d0d10"],
  peach: ["#3d1f14", "#0d0d10"],
  navy: ["#0a0e1a", "#000000"],
};

const IMAGES = [
  { file: "hero-portrait.jpg", w: 1200, h: 900, tint: "blue", label: "Vera Cross — home studio portrait" },
  { file: "about-portrait.jpg", w: 800, h: 1000, tint: "gold", label: "Vera Cross — casual portrait" },
  { file: "desk-setup.jpg", w: 1200, h: 900, tint: "navy", label: "Multi-monitor trading desk" },
  ...[1, 2, 3, 4, 5, 6].map((i) => ({
    file: `review-thumb-${i}.jpg`, w: 1280, h: 720,
    tint: ["gold", "blue", "peach"][(i - 1) % 3],
    label: `Member video testimonial #${i}`,
  })),
  ...[1, 2, 3, 4].map((i) => ({
    file: `video-thumb-${i}.jpg`, w: 1280, h: 720,
    tint: ["blue", "gold", "peach", "navy"][i - 1],
    label: `YouTube video thumbnail #${i}`,
  })),
  ...[1, 2, 3, 4].map((i) => ({
    file: `blog-${i}.jpg`, w: 400, h: 400,
    tint: ["gold", "blue", "peach", "navy"][i - 1],
    label: `Blog #${i}`,
  })),
  ...[1, 2, 3, 4, 5, 6].map((i) => ({
    file: `avatar-${i}.jpg`, w: 200, h: 200,
    tint: ["blue", "peach", "gold"][(i - 1) % 3],
    label: "",
  })),
  { file: "og-image.jpg", w: 1200, h: 630, tint: "navy", label: "Cross Trades — Trade Smarter With Vera Cross" },
];

function svgFor({ w, h, tint, label }) {
  const [from, to] = PALETTE[tint];
  const fontSize = Math.max(16, Math.round(Math.min(w, h) / 28));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <circle cx="${w * 0.8}" cy="${h * 0.2}" r="${Math.min(w, h) * 0.35}" fill="#ffffff" opacity="0.04"/>
  ${
    label
      ? `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, sans-serif" font-size="${fontSize}" fill="#9ca3af">${label}</text>`
      : ""
  }
</svg>`;
}

await mkdir(OUT_DIR, { recursive: true });
for (const img of IMAGES) {
  await sharp(Buffer.from(svgFor(img)))
    .jpeg({ quality: 80 })
    .toFile(path.join(OUT_DIR, img.file));
  console.log("wrote", img.file);
}
