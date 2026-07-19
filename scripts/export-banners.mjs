import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const banners = [
  { name: "linkedin", width: 1584, height: 396 },
  { name: "facebook", width: 820, height: 312 },
  { name: "x", width: 1500, height: 500 },
  { name: "github", width: 1280, height: 640 },
  { name: "opengraph", width: 1200, height: 630 },
];

const outputDir = path.resolve("public/images/branding/banners");

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: {
    width: 1800,
    height: 1000,
  },
  deviceScaleFactor: 1,
});

await page.goto("http://localhost:3000/banners", {
  waitUntil: "networkidle",
});

await page.evaluate(async () => {
  await document.fonts.ready;
});

for (const banner of banners) {
  const element = page.locator(`#banner-${banner.name}`);

  await element.screenshot({
    path: path.join(outputDir, `${banner.name}-banner.png`),
    type: "png",
  });

  console.log(
    `Exported ${banner.name}-banner.png (${banner.width} × ${banner.height})`,
  );
}

await browser.close();