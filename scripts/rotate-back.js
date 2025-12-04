import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCULPTURES_DIR = join(__dirname, '..', 'static', 'sculptures');

async function getAllImageFiles(dir) {
	const files = [];
	const items = await readdir(dir);

	for (const item of items) {
		const fullPath = join(dir, item);
		const stats = await stat(fullPath);

		if (stats.isDirectory()) {
			const subFiles = await getAllImageFiles(fullPath);
			files.push(...subFiles);
		} else if (['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG'].includes(extname(item))) {
			files.push(fullPath);
		}
	}

	return files;
}

async function rotateImage(imagePath) {
	try {
		console.log(`🔄 Rotating ${imagePath}`);

		// Rotate 270 degrees (90 degrees counter-clockwise)
		await sharp(imagePath)
			.rotate(-90)
			.toFile(imagePath + '.tmp');

		const fs = await import('fs/promises');
		await fs.unlink(imagePath);
		await fs.rename(imagePath + '.tmp', imagePath);

		console.log(`✅ Rotated back`);
	} catch (error) {
		console.error(`❌ Error rotating ${imagePath}:`, error.message);
	}
}

async function main() {
	console.log('🔄 Rotating images back...\n');

	const imageFiles = await getAllImageFiles(SCULPTURES_DIR);
	console.log(`Found ${imageFiles.length} images to rotate\n`);

	for (const imagePath of imageFiles) {
		await rotateImage(imagePath);
	}

	console.log('\n✨ Rotation complete!');
}

main();
