export interface Sculpture {
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

export const sculptures: Sculpture[] = [
	{
		id: 'a-girl-blowing-a-dandelion',
		title: 'A Girl Blowing a Dandelion',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '68x25x18',
		image: '/sculptures/A girl blowing a Dandelion/_DSF6992.webp',
		gallery: [
			'/sculptures/A girl blowing a Dandelion/_DSF6992.webp',
			'/sculptures/A girl blowing a Dandelion/_DSF6995.webp',
			'/sculptures/A girl blowing a Dandelion/_DSF7017.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'a-man-in-love',
		title: 'A Man in Love',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '72x25x18',
		image: '/sculptures/A man in love/_DSF7006.webp',
		gallery: [
			'/sculptures/A man in love/_DSF7006.webp',
			'/sculptures/A man in love/_DSF7012.webp',
			'/sculptures/A man in love/_DSF7014.webp',
			'/sculptures/A man in love/_DSF7018.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'alpha',
		title: 'Alpha',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '44x64x20',
		image: '/sculptures/Alpha/_DSF7345.webp',
		gallery: [
			'/sculptures/Alpha/_DSF7345.webp',
			'/sculptures/Alpha/_DSF7349.webp',
			'/sculptures/Alpha/_DSF7354.webp',
			'/sculptures/Alpha/_DSF7355.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'anger',
		title: 'Anger',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '35x50x28',
		image: '/sculptures/Anger/_DSF7222.webp',
		gallery: [
			'/sculptures/Anger/_DSF7222.webp',
			'/sculptures/Anger/_DSF7224.webp',
			'/sculptures/Anger/_DSF7232.webp',
			'/sculptures/Anger/_DSF7235.webp',
			'/sculptures/Anger/_DSF7250.webp',
			'/sculptures/Anger/_DSF7263.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'black-stallion',
		title: 'Black Stallion',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '30x87x38',
		image: '/sculptures/Black Stallion/_DSF7395.webp',
		gallery: [
			'/sculptures/Black Stallion/_DSF7395.webp',
			'/sculptures/Black Stallion/_DSF7407.webp',
			'/sculptures/Black Stallion/_DSF7409.webp',
			'/sculptures/Black Stallion/_DSF7413.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'bow-wielding-warrior',
		title: 'Bow-Wielding Warrior',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '55x80x30',
		image: '/sculptures/Bow-wielding-warrior/_DSF6761.webp',
		gallery: [
			'/sculptures/Bow-wielding-warrior/_DSF6761.webp',
			'/sculptures/Bow-wielding-warrior/_DSF6778.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'brothers',
		title: 'Brothers',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '40x61x18',
		image: '/sculptures/Brothers/_DSF7372.webp',
		gallery: [
			'/sculptures/Brothers/_DSF7372.webp',
			'/sculptures/Brothers/_DSF7380.webp',
			'/sculptures/Brothers/_DSF7381.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'bull',
		title: 'Bull',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '33x46x27',
		image: '/sculptures/Bull/_DSF7271.webp',
		gallery: [
			'/sculptures/Bull/_DSF7271.webp',
			'/sculptures/Bull/_DSF7281.webp',
			'/sculptures/Bull/_DSF7289.webp',
			'/sculptures/Bull/_DSF7302.webp',
			'/sculptures/Bull/_DSF7309.webp',
			'/sculptures/Bull/_DSF7311.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'chairman',
		title: 'Chairman',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '103x70x40',
		image: '/sculptures/Chairman/_DSF6887.webp',
		gallery: [
			'/sculptures/Chairman/_DSF6887.webp',
			'/sculptures/Chairman/_DSF6890.webp',
			'/sculptures/Chairman/_DSF6891.webp',
			'/sculptures/Chairman/_DSF6893.webp',
			'/sculptures/Chairman/_DSF6894.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'chico',
		title: 'Chico',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '44x53x24',
		image: '/sculptures/Chico/_DSF7582.webp',
		gallery: [
			'/sculptures/Chico/_DSF7582.webp',
			'/sculptures/Chico/_DSF7592.webp',
			'/sculptures/Chico/_DSF7594.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'deer',
		title: 'Deer',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '83x70x36',
		image: '/sculptures/Deer/_DSF6866.webp',
		gallery: [
			'/sculptures/Deer/_DSF6866.webp',
			'/sculptures/Deer/_DSF6873.webp',
			'/sculptures/Deer/IMG_0921.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'desireling',
		title: 'Desireling',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '114x66x60',
		image: '/sculptures/Desireling/_DSF6972.webp',
		gallery: [
			'/sculptures/Desireling/_DSF6972.webp',
			'/sculptures/Desireling/_DSF6973.webp',
			'/sculptures/Desireling/_DSF6974.webp',
			'/sculptures/Desireling/_DSF6975.webp',
			'/sculptures/Desireling/_DSF6977.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'dragon',
		title: 'Dragon',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '92x37x30',
		image: '/sculptures/Dragon/_DSF6923.webp',
		gallery: [
			'/sculptures/Dragon/_DSF6923.webp',
			'/sculptures/Dragon/_DSF6926.webp',
			'/sculptures/Dragon/_DSF6927.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'buddha',
		title: 'Buddha',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '45x50x32',
		image: '/sculptures/God and devil/Buddha/1.webp',
		gallery: [
			'/sculptures/God and devil/Buddha/1.webp',
			'/sculptures/God and devil/Buddha/_DSF7501.webp',
			'/sculptures/God and devil/Buddha/_DSF7515.webp',
			'/sculptures/God and devil/Buddha/_DSF7517.webp',
			'/sculptures/God and devil/Buddha/_DSF7519.webp',
			'/sculptures/God and devil/Buddha/_DSF7520.webp',
			'/sculptures/God and devil/Buddha/_DSF7521.webp',
			'/sculptures/God and devil/Buddha/_DSF7523.webp',
			'/sculptures/God and devil/Buddha/_DSF7524.webp',
			'/sculptures/God and devil/Buddha/_DSF7529.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'devil',
		title: 'Devil in Meditation',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '45x50x32',
		image: '/sculptures/God and devil/Devil/1.webp',
		gallery: [
			'/sculptures/God and devil/Devil/1.webp',
			'/sculptures/God and devil/Devil/_DSF7532.webp',
			'/sculptures/God and devil/Devil/_DSF7559.webp',
			'/sculptures/God and devil/Devil/_DSF7562.webp',
			'/sculptures/God and devil/Devil/_DSF7570.webp',
			'/sculptures/God and devil/Devil/_DSF7575.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'god-and-devil',
		title: 'God and Devil',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '45x50x32 (each piece)',
		image: '/featured/god-and-devil.JPG',
		gallery: [
			'/sculptures/God and devil/Buddha/Buddha.JPG',
			'/sculptures/God and devil/Devil/Devil in Meditation.JPG'
		],
		category: 'sculpture',
		featured: true
	},
	{
		id: 'ibex',
		title: 'Ibex',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '56x70x40',
		image: '/sculptures/Ibex/_DSF7188.webp',
		gallery: [
			'/sculptures/Ibex/_DSF7188.webp',
			'/sculptures/Ibex/_DSF7205.webp',
			'/sculptures/Ibex/_DSF7206.webp',
			'/sculptures/Ibex/_DSF7211.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'love',
		title: 'Love',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '82x35x30',
		image: '/sculptures/Love/_DSF6909.webp',
		gallery: [
			'/sculptures/Love/_DSF6909.webp',
			'/sculptures/Love/_DSF6912.webp',
			'/sculptures/Love/_DSF6913.webp',
			'/sculptures/Love/_DSF6914.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'lynx',
		title: 'Lynx',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '44x40x30',
		image: '/sculptures/Lynx/IMG_0461.JPG',
		gallery: ['/sculptures/Lynx/IMG_0461.JPG', '/sculptures/Lynx/IMG_0462.JPG'],
		category: 'sculpture'
	},
	{
		id: 'memento-mori',
		title: 'Memento Mori',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '32x37x22',
		image: '/sculptures/Memento Mori/_DSF7313.webp',
		gallery: [
			'/sculptures/Memento Mori/_DSF7313.webp',
			'/sculptures/Memento Mori/_DSF7318.webp',
			'/sculptures/Memento Mori/_DSF7323.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'mind-s-cosmos',
		title: "Mind's Cosmos",
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '100x45x35',
		image: "/sculptures/Mind's Cosmos/_DSF6639 20.43.09.webp",
		gallery: [
			"/sculptures/Mind's Cosmos/_DSF6639 20.43.09.webp",
			"/sculptures/Mind's Cosmos/_DSF6643.webp",
			"/sculptures/Mind's Cosmos/_DSF6663.webp",
			"/sculptures/Mind's Cosmos/_DSF6667.webp",
			"/sculptures/Mind's Cosmos/_DSF6668.webp",
			"/sculptures/Mind's Cosmos/_DSF6672.webp",
			"/sculptures/Mind's Cosmos/_DSF6674.webp",
			"/sculptures/Mind's Cosmos/_DSF6677.webp"
		],
		category: 'sculpture'
	},
	{
		id: 'moose',
		title: 'Moose',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '81x90x40',
		image: '/sculptures/Moose/_DSF6746.webp',
		gallery: [
			'/sculptures/Moose/_DSF6746.webp',
			'/sculptures/Moose/_DSF6751.webp',
			'/sculptures/Moose/_DSF6753.webp',
			'/sculptures/Moose/_DSF6758.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'morning',
		title: 'Morning',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '10x60x34',
		image: '/sculptures/Morning/IMG_0457.JPG',
		category: 'sculpture'
	},
	{
		id: 'myth',
		title: 'Myth',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '53x30x20',
		image: '/sculptures/Myth/_DSF7027.webp',
		gallery: [
			'/sculptures/Myth/_DSF7027.webp',
			'/sculptures/Myth/_DSF7028.webp',
			'/sculptures/Myth/_DSF7042.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'old-warrior',
		title: 'Old Warrior',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '25x40x35',
		image: '/sculptures/Old warrior/_DSF7119.webp',
		gallery: [
			'/sculptures/Old warrior/_DSF7119.webp',
			'/sculptures/Old warrior/_DSF7123.webp',
			'/sculptures/Old warrior/_DSF7131.webp',
			'/sculptures/Old warrior/_DSF7133.webp',
			'/sculptures/Old warrior/_DSF7137.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'pegasus',
		title: 'Pegasus',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '115x85x30',
		image: '/sculptures/Pegasus/_DSF6979.webp',
		gallery: [
			'/sculptures/Pegasus/_DSF6979.webp',
			'/sculptures/Pegasus/_DSF6986.png',
			'/sculptures/Pegasus/_DSF6988.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'racing-horse',
		title: 'Racing Horse',
		year: 2024,
		material: 'Bronze, cast and patinated',
		image: '/sculptures/Racing Horse/_DSF7357.webp',
		gallery: [
			'/sculptures/Racing Horse/_DSF7357.webp',
			'/sculptures/Racing Horse/_DSF7363.webp',
			'/sculptures/Racing Horse/_DSF7370.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'running-man',
		title: 'Running Man',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '79x90x10',
		image: '/sculptures/Running man/_DSF6833.webp',
		gallery: [
			'/sculptures/Running man/_DSF6833.webp',
			'/sculptures/Running man/_DSF6834.webp',
			'/sculptures/Running man/_DSF6835.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'shaman',
		title: 'Shaman',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: 'Dimensions to be provided',
		image: '/sculptures/Shaman/_DSF6844.webp',
		gallery: [
			'/sculptures/Shaman/_DSF6844.webp',
			'/sculptures/Shaman/_DSF6845.webp',
			'/sculptures/Shaman/_DSF6847.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'strength-of-a-lion',
		title: 'Strength of a Lion',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '30x20x20',
		image: '/sculptures/Strength-of-a-Lion/_DSF7453.webp',
		gallery: [
			'/sculptures/Strength-of-a-Lion/_DSF7453.webp',
			'/sculptures/Strength-of-a-Lion/_DSF7457.webp',
			'/sculptures/Strength-of-a-Lion/_DSF7461.webp',
			'/sculptures/Strength-of-a-Lion/_DSF7470.webp',
			'/sculptures/Strength-of-a-Lion/_DSF7473.webp',
			'/sculptures/Strength-of-a-Lion/_DSF7477.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'stretch',
		title: 'Stretch',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '22x64x18',
		image: '/sculptures/Stretch/_DSF7430.webp',
		gallery: [
			'/sculptures/Stretch/_DSF7430.webp',
			'/sculptures/Stretch/_DSF7431.webp',
			'/sculptures/Stretch/_DSF7432.webp',
			'/sculptures/Stretch/_DSF7441.webp',
			'/sculptures/Stretch/_DSF7445.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'takhi',
		title: 'Takhi',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '44x70x20',
		image: '/sculptures/Takhi/_DSF7158.webp',
		gallery: [
			'/sculptures/Takhi/_DSF7158.webp',
			'/sculptures/Takhi/_DSF7176.webp',
			'/sculptures/Takhi/_DSF7184.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'the-king',
		title: 'The King',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '38x50x30',
		image: '/sculptures/The King/_DSF7142.webp',
		gallery: [
			'/sculptures/The King/_DSF7142.webp',
			'/sculptures/The King/_DSF7152.webp',
			'/sculptures/The King/_DSF7157.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'victory',
		title: 'Victory',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '71x50x26',
		image: '/sculptures/Victory/_DSF6782.webp',
		gallery: [
			'/sculptures/Victory/_DSF6782.webp',
			'/sculptures/Victory/_DSF6784.webp',
			'/sculptures/Victory/_DSF6786.webp',
			'/sculptures/Victory/_DSF6816.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'welcome',
		title: 'Welcome',
		year: 2025,
		material: 'Bronze, cast and patinated',
		dimensions: '37x66x28',
		image: '/sculptures/Welcome/_DSF7070.webp',
		gallery: [
			'/sculptures/Welcome/_DSF7070.webp',
			'/sculptures/Welcome/_DSF7073.webp',
			'/sculptures/Welcome/_DSF7074.webp',
			'/sculptures/Welcome/_DSF7078.webp',
			'/sculptures/Welcome/_DSF7080.webp',
			'/sculptures/Welcome/_DSF7081.webp',
			'/sculptures/Welcome/_DSF7089.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'wild-boar',
		title: 'Wild Boar',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '54x53x30',
		image: '/sculptures/Wild Boar/_DSF7329.webp',
		gallery: [
			'/sculptures/Wild Boar/_DSF7329.webp',
			'/sculptures/Wild Boar/_DSF7331.webp',
			'/sculptures/Wild Boar/_DSF7335.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'wind',
		title: 'Wind',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '67x60x30',
		image: '/sculptures/Wind/_DSF6689.webp',
		gallery: [
			'/sculptures/Wind/_DSF6689.webp',
			'/sculptures/Wind/_DSF6690.webp',
			'/sculptures/Wind/_DSF6691.webp',
			'/sculptures/Wind/_DSF6692.webp',
			'/sculptures/Wind/_DSF6699.webp',
			'/sculptures/Wind/_DSF6709.webp',
			'/sculptures/Wind/_DSF6710.webp',
			'/sculptures/Wind/_DSF6721.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'woman',
		title: 'Woman',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '113x35x30',
		image: '/sculptures/Woman/_DSF6936.webp',
		gallery: [
			'/sculptures/Woman/_DSF6936.webp',
			'/sculptures/Woman/_DSF6946.webp',
			'/sculptures/Woman/_DSF6947.webp',
			'/sculptures/Woman/_DSF6959.webp'
		],
		category: 'sculpture'
	},
	{
		id: 'pig',
		title: 'Pig',
		year: 2024,
		material: 'Bronze, cast and patinated',
		dimensions: '38x48x23',
		image: '/sculptures/pig/_DSF7096.webp',
		gallery: [
			'/sculptures/pig/_DSF7096.webp',
			'/sculptures/pig/_DSF7101.webp',
			'/sculptures/pig/_DSF7113.webp',
			'/sculptures/pig/_DSF7117.webp'
		],
		category: 'sculpture'
	}
];

export const featuredSculpture = sculptures.find((s) => s.featured) || sculptures[0];

export function getSculptureById(id: string): Sculpture | undefined {
	return sculptures.find((s) => s.id === id);
}

export function getSculpturesByCategory(category: 'sculpture' | 'drawing'): Sculpture[] {
	return sculptures.filter((s) => s.category === category);
}
