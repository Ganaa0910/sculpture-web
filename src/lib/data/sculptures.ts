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
	},
	// Drawings
	{
		id: 'drawing-1',
		title: 'Study I',
		image: '/drawings/DSC_9686.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-2',
		title: 'Study II',
		image: '/drawings/DSC_9687.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-3',
		title: 'Study III',
		image: '/drawings/DSC_9688.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-4',
		title: 'Study IV',
		image: '/drawings/DSC_9689.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-5',
		title: 'Study V',
		image: '/drawings/DSC_9690.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-6',
		title: 'Study VI',
		image: '/drawings/DSC_9691.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-7',
		title: 'Study VII',
		image: '/drawings/DSC_9692.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-8',
		title: 'Study VIII',
		image: '/drawings/DSC_9693.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-9',
		title: 'Study IX',
		image: '/drawings/DSC_9694.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-10',
		title: 'Study X',
		image: '/drawings/DSC_9695.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-11',
		title: 'Study XI',
		image: '/drawings/DSC_9696.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-12',
		title: 'Study XII',
		image: '/drawings/DSC_9697.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-13',
		title: 'Study XIII',
		image: '/drawings/DSC_9698.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-14',
		title: 'Study XIV',
		image: '/drawings/DSC_9699.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-15',
		title: 'Study XV',
		image: '/drawings/DSC_9700.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-16',
		title: 'Study XVI',
		image: '/drawings/DSC_9701.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-17',
		title: 'Study XVII',
		image: '/drawings/DSC_9702.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-18',
		title: 'Study XVIII',
		image: '/drawings/DSC_9703.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-19',
		title: 'Study XIX',
		image: '/drawings/DSC_9704.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-20',
		title: 'Study XX',
		image: '/drawings/DSC_9705.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-21',
		title: 'Study XXI',
		image: '/drawings/DSC_9706.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-22',
		title: 'Study XXII',
		image: '/drawings/DSC_9707.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-23',
		title: 'Study XXIII',
		image: '/drawings/DSC_9708.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-24',
		title: 'Study XXIV',
		image: '/drawings/DSC_9709.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-25',
		title: 'Study XXV',
		image: '/drawings/DSC_9710.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-26',
		title: 'Study XXVI',
		image: '/drawings/DSC_9711.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-27',
		title: 'Study XXVII',
		image: '/drawings/DSC_9712.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-28',
		title: 'Study XXVIII',
		image: '/drawings/DSC_9713.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-29',
		title: 'Study XXIX',
		image: '/drawings/DSC_9714.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-30',
		title: 'Study XXX',
		image: '/drawings/DSC_9715.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-31',
		title: 'Study XXXI',
		image: '/drawings/DSC_9716.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-32',
		title: 'Study XXXII',
		image: '/drawings/DSC_9717.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-33',
		title: 'Study XXXIII',
		image: '/drawings/DSC_9718.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-34',
		title: 'Study XXXIV',
		image: '/drawings/DSC_9719.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-35',
		title: 'Study XXXV',
		image: '/drawings/DSC_9720.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-36',
		title: 'Study XXXVI',
		image: '/drawings/DSC_9721.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-37',
		title: 'Study XXXVII',
		image: '/drawings/DSC_9722.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-38',
		title: 'Study XXXVIII',
		image: '/drawings/DSC08068.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-39',
		title: 'Study XXXIX',
		image: '/drawings/DSC08069.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-40',
		title: 'Study XL',
		image: '/drawings/DSC08070.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-41',
		title: 'Study XLI',
		image: '/drawings/DSC08071.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-42',
		title: 'Study XLII',
		image: '/drawings/DSC08072.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-43',
		title: 'Study XLIII',
		image: '/drawings/DSC08073.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-44',
		title: 'Study XLIV',
		image: '/drawings/DSC08074.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-45',
		title: 'Study XLV',
		image: '/drawings/DSC06851 (1).jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-46',
		title: 'Study XLVI',
		image: '/drawings/DSC06852 (1).jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-47',
		title: 'Study XLVII',
		image: '/drawings/DSC05181.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-48',
		title: 'Study XLVIII',
		image: '/drawings/DSC05100.jpg',
		category: 'drawing'
	},
	{
		id: 'drawing-49',
		title: 'Study XLIX',
		image: '/drawings/DSC00127 (1).jpg',
		category: 'drawing'
	}
];

export const featuredSculpture = sculptures.find(s => s.featured) || sculptures[0];

export function getSculptureById(id: string): Sculpture | undefined {
	return sculptures.find(s => s.id === id);
}

export function getSculpturesByCategory(category: 'sculpture' | 'drawing'): Sculpture[] {
	return sculptures.filter(s => s.category === category);
}