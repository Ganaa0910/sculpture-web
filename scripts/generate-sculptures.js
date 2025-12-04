import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sculpturesDir = path.join(__dirname, '../static/sculptures');
const outputFile = path.join(__dirname, '../src/lib/data/sculptures.ts');

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function parseInfoMd(content) {
	const lines = content.trim().split('\n').filter(line => line.trim());

	return {
		title: lines[0]?.trim() || '',
		year: lines[1]?.trim() || '',
		material: lines[2]?.trim() || '',
		dimensions: lines[3]?.trim() || ''
	};
}

function getImages(folderPath, folderName) {
	const images = [];
	const entries = fs.readdirSync(folderPath, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(folderPath, entry.name);

		if (entry.isFile() && /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(entry.name)) {
			images.push(`/sculptures/${folderName}/${entry.name}`);
		} else if (entry.isDirectory()) {
			// Handle subfolders like God and devil/Buddha
			const subImages = fs.readdirSync(fullPath, { withFileTypes: true })
				.filter(f => f.isFile() && /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f.name))
				.map(f => `/sculptures/${folderName}/${entry.name}/${f.name}`);
			images.push(...subImages);
		}
	}

	return images;
}

function generateSculptures() {
	const sculptures = [];
	const folders = fs.readdirSync(sculpturesDir, { withFileTypes: true })
		.filter(entry => entry.isDirectory());

	for (const folder of folders) {
		const folderPath = path.join(sculpturesDir, folder.name);
		const infoPath = path.join(folderPath, 'info.md');

		if (!fs.existsSync(infoPath)) {
			console.warn(`Skipping ${folder.name}: no info.md found`);
			continue;
		}

		const content = fs.readFileSync(infoPath, 'utf-8');
		const info = parseInfoMd(content);
		const images = getImages(folderPath, folder.name);

		if (images.length === 0) {
			console.warn(`Skipping ${folder.name}: no images found`);
			continue;
		}

		const isFeatured = info.title === 'God and Devil';

		const sculpture = {
			id: slugify(info.title || folder.name),
			title: info.title || folder.name,
			year: info.year ? parseInt(info.year) : undefined,
			material: info.material || undefined,
			dimensions: info.dimensions || undefined,
			image: isFeatured ? '/featured/god-and-devil.JPG' : images[0],
			gallery: images.length > 1 ? images : undefined,
			category: 'sculpture',
			featured: isFeatured ? true : undefined
		};

		// Remove undefined values
		Object.keys(sculpture).forEach(key => {
			if (sculpture[key] === undefined) {
				delete sculpture[key];
			}
		});

		sculptures.push(sculpture);
	}

	return sculptures;
}

function generateTypeScript(sculptures) {
	const sculpturesJson = JSON.stringify(sculptures, null, 2)
		.replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
		.replace(/: "sculpture"/g, ": 'sculpture'"); // Use single quotes for category

	return `export interface Sculpture {
	id: string;
	title: string;
	year?: number;
	material?: string;
	dimensions?: string;
	description?: string;
	image: string;
	gallery?: string[];
	category?: 'sculpture' | 'drawing';
	featured?: boolean;
}

export const sculptures: Sculpture[] = ${sculpturesJson};

export const featuredSculpture = sculptures.find(s => s.featured) || sculptures[0];

export function getSculptureById(id: string): Sculpture | undefined {
	return sculptures.find(s => s.id === id);
}

export function getSculpturesByCategory(category: 'sculpture' | 'drawing'): Sculpture[] {
	return sculptures.filter(s => s.category === category);
}
`;
}

// Generate and write
const sculptures = generateSculptures();
const tsContent = generateTypeScript(sculptures);

fs.writeFileSync(outputFile, tsContent, 'utf-8');

console.log(`✓ Generated ${sculptures.length} sculptures`);
console.log(`✓ Written to ${outputFile}`);
