import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCULPTURES_DIR = join(__dirname, '..', 'static', 'sculptures');
const QUALITY = 92; // JPEG quality (0-100) - higher for better quality
const MAX_WIDTH = 2400; // Max width for images
const MAX_HEIGHT = 3200; // Max height for images

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

async function optimizeImage(imagePath) {
	try {
		const stats = await stat(imagePath);
		const originalSize = stats.size;
		const originalSizeMB = (originalSize / (1024 * 1024)).toFixed(2);

		// Read image metadata
		const metadata = await sharp(imagePath).metadata();

		// Skip if already optimized (under 1MB)
		if (originalSize < 1024 * 1024) {
			console.log(`⏭️  Skipping ${imagePath} (already optimized: ${originalSizeMB}MB)`);
			return;
		}

		console.log(`🔄 Processing ${imagePath} (${originalSizeMB}MB, ${metadata.width}x${metadata.height})`);

		// Create a backup path
		const backupPath = imagePath.replace(/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/, '.original.$1');

		// Optimize the image - rotate based on EXIF orientation first
		await sharp(imagePath)
			.rotate() // Auto-rotate based on EXIF orientation
			.resize(MAX_WIDTH, MAX_HEIGHT, {
				fit: 'inside',
				withoutEnlargement: true
			})
			.jpeg({
				quality: QUALITY,
				progressive: true,
				mozjpeg: true
			})
			.toFile(backupPath);

		// Get new file size
		const newStats = await stat(backupPath);
		const newSize = newStats.size;
		const newSizeMB = (newSize / (1024 * 1024)).toFixed(2);
		const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

		console.log(`✅ Optimized: ${newSizeMB}MB (saved ${savings}%)`);

		// Replace original with optimized
		await sharp(backupPath).toFile(imagePath + '.tmp');
		const fs = await import('fs/promises');
		await fs.unlink(imagePath);
		await fs.rename(imagePath + '.tmp', imagePath);
		await fs.unlink(backupPath);

	} catch (error) {
		console.error(`❌ Error optimizing ${imagePath}:`, error.message);
	}
}

async function main() {
	console.log('🚀 Starting image optimization...\n');

	const imageFiles = await getAllImageFiles(SCULPTURES_DIR);
	console.log(`Found ${imageFiles.length} images to process\n`);

	let processed = 0;
	for (const imagePath of imageFiles) {
		await optimizeImage(imagePath);
		processed++;

		if (processed % 10 === 0) {
			console.log(`\n📊 Progress: ${processed}/${imageFiles.length}\n`);
		}
	}

	console.log('\n✨ Image optimization complete!');
}

main();
