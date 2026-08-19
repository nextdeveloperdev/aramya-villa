import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "raw";
const OUT = "public/images";

// filename prefix → [width, quality]
const PROFILES = {
  hero: [2400, 78],
  og: [1200, 82],
  suite: [1600, 80],
  dining: [1600, 80],
  exp: [1400, 80],
  gallery: [1400, 80],
  about: [1400, 80],
};

function profileFor(name) {
  const key = Object.keys(PROFILES).find((k) => name.startsWith(k));
  return PROFILES[key] ?? [1400, 80];
}

async function run() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  if (!files.length) {
    console.log("No images found in raw/");
    return;
  }

  for (const file of files) {
    const base = path.parse(file).name;
    const [width, quality] = profileFor(base);
    const input = path.join(SRC, file);

    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(path.join(OUT, `${base}.webp`));

    // LQIP — blurDataURL එකට 20px placeholder
    const tiny = await sharp(input)
      .resize({ width: 20 })
      .webp({ quality: 30 })
      .toBuffer();

    console.log(
      `${base}.webp  ${width}px  blur:${(tiny.length / 1024).toFixed(1)}kb`
    );
  }

  console.log(`\nDone — ${files.length} images -> ${OUT}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});