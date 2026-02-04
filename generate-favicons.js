const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'public', 'favicon.png');
const outputDir = path.join(__dirname, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

async function generateFavicons() {
  for (const { name, size } of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .toFile(path.join(outputDir, name));
    console.log(`Generated ${name}`);
  }
  
  // Generate favicon.ico (32x32)
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon.ico'));
  console.log('Generated favicon.ico');
}

generateFavicons().catch(console.error);
