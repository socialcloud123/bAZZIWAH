import sharp from 'sharp';
import fs from 'fs';

async function addWhiteBackground() {
  try {
    const inputPath = 'public/logo.png';
    const outputPath = 'public/logo-white-bg.png';

    // Get the dimensions of the original image
    const metadata = await sharp(inputPath).metadata();

    // Calculate padding
    const padding = Math.floor(Math.max(metadata.width, metadata.height) * 0.1);
    
    const newWidth = metadata.width + padding * 2;
    const newHeight = metadata.height + padding * 2;

    // Create a new white image and composite the logo on top
    await sharp({
      create: {
        width: newWidth,
        height: newHeight,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      { input: inputPath, gravity: 'center' }
    ])
    .png()
    .toFile(outputPath);

    console.log(`Successfully created ${outputPath} with a white background!`);
  } catch (error) {
    console.error('Error adding white background:', error);
  }
}

addWhiteBackground();
