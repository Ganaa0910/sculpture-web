export interface Sculpture {
	id: string;
	title: string;
	year?: number;
	material?: string;
	dimensions?: string;
	description?: string;
	image: string;
	category?: 'sculpture' | 'drawing';
	featured?: boolean;
}

export const sculptures: Sculpture[] = [
	{
		id: 'sculpture-1',
		title: 'Eternal Guardian',
		year: 2024,
		material: 'Bronze',
		dimensions: '180 × 60 × 45 cm',
		description: 'A powerful figure emerging from mythological tradition, capturing the eternal struggle between strength and vulnerability.',
		image: '/sculptures/1.png',
		category: 'sculpture',
		featured: true
	},
	{
		id: 'sculpture-2',
		title: 'Mystic Sentinel',
		year: 2024,
		material: 'Bronze',
		dimensions: '220 × 80 × 60 cm',
		description: 'An imposing sentinel inspired by ancient protective deities, embodying watchfulness and ancient wisdom.',
		image: '/sculptures/2.png',
		category: 'sculpture'
	},
	{
		id: 'sculpture-3',
		title: 'Ancient Warrior',
		year: 2023,
		material: 'Bronze',
		dimensions: '160 × 90 × 50 cm',
		description: 'Movement captured in metal, exploring the fluidity of form and the rhythm of existence.',
		image: '/sculptures/3.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-5',
		title: 'Divine Herald',
		year: 2022,
		material: 'Bronze',
		dimensions: '140 × 45 × 40 cm',
		description: 'A contemplative figure representing the accumulation of knowledge across generations.',
		image: '/sculptures/5.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-6',
		title: 'Storm Bearer',
		year: 2024,
		material: 'Bronze',
		dimensions: '200 × 70 × 55 cm',
		description: 'Power and chaos intertwined, inspired by mythological figures who commanded the elements.',
		image: '/sculptures/6.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-7',
		title: 'Silent Prophet',
		year: 2023,
		material: 'Bronze',
		dimensions: '170 × 50 × 45 cm',
		description: 'A figure caught between worlds, channeling divine messages through bronze form.',
		image: '/sculptures/7.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-8',
		title: 'Titan\'s Rest',
		year: 2023,
		material: 'Bronze',
		dimensions: '190 × 75 × 55 cm',
		description: 'The weight of ages captured in bronze, a meditation on endurance and time.',
		image: '/sculptures/8.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-9',
		title: 'Phoenix Rising',
		year: 2024,
		material: 'Bronze',
		dimensions: '165 × 85 × 50 cm',
		description: 'Transformation and rebirth, the eternal cycle of destruction and renewal.',
		image: '/sculptures/9.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-10',
		title: 'Oracle\'s Vision',
		year: 2023,
		material: 'Bronze',
		dimensions: '155 × 65 × 48 cm',
		description: 'Ancient knowledge flowing through bronze, wisdom transcending time.',
		image: '/sculptures/10.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-11',
		title: 'Warrior\'s Lament',
		year: 2022,
		material: 'Bronze',
		dimensions: '175 × 70 × 52 cm',
		description: 'The aftermath of battle, strength tempered by reflection.',
		image: '/sculptures/11.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-12',
		title: 'Celestial Dance',
		year: 2024,
		material: 'Bronze',
		dimensions: '185 × 80 × 58 cm',
		description: 'Movement between realms, the dance of earthly and divine.',
		image: '/sculptures/12.jpg',
		category: 'sculpture'
	},
	{
		id: 'sculpture-13',
		title: 'Forgotten King',
		year: 2023,
		material: 'Bronze',
		dimensions: '195 × 85 × 60 cm',
		description: 'Majesty preserved in bronze, legends cast in eternal metal.',
		image: '/sculptures/13.jpg',
		category: 'sculpture'
	}
];

export const featuredSculpture = sculptures.find(s => s.featured) || sculptures[0];

export function getSculptureById(id: string): Sculpture | undefined {
	return sculptures.find(s => s.id === id);
}

export function getSculpturesByCategory(category: 'sculpture' | 'drawing'): Sculpture[] {
	return sculptures.filter(s => s.category === category);
}