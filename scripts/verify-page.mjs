/* Temporary verification harness: measures mobile overflow and exercises
 * the featured-video click-to-play using the locally installed Edge. */
import { chromium } from "playwright-core";

const browser = await chromium.launch({ channel: "msedge", headless: true });

// --- Mobile overflow check ---
const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
const overflow = await mobile.evaluate(() => {
  const doc = document.documentElement;
  const result = {
    scrollWidth: doc.scrollWidth,
    clientWidth: doc.clientWidth,
    culprits: [],
  };
  for (const el of document.querySelectorAll("*")) {
    const rect = el.getBoundingClientRect();
    if (rect.right > doc.clientWidth + 1 || rect.left < -1) {
      result.culprits.push(
        `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 90)} → left:${Math.round(rect.left)} right:${Math.round(rect.right)}`
      );
    }
    if (result.culprits.length > 15) break;
  }
  return result;
});
console.log("MOBILE scrollWidth:", overflow.scrollWidth, "clientWidth:", overflow.clientWidth);
for (const c of overflow.culprits) console.log("  OVERFLOW:", c);
await mobile.screenshot({ path: ".claude-verify-mobile-pw.png", fullPage: false });

// --- Featured video click-to-play ---
const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto("http://localhost:3000", { waitUntil: "networkidle" });
await desktop.locator('button[aria-label^="Play video"]').scrollIntoViewIfNeeded();
await desktop.locator('button[aria-label^="Play video"]').click();
await desktop.waitForSelector("iframe[src*='youtube.com/embed/3ZZw7OHYqJI']", { timeout: 10000 });
const src = await desktop.locator("iframe").first().getAttribute("src");
console.log("IFRAME SRC:", src);
await desktop.screenshot({ path: ".claude-verify-video.png" });

await browser.close();
console.log("DONE");
