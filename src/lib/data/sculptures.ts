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
    id: "a-girl-blowing-a-dandelion",
    title: "A Girl Blowing a Dandelion",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "68x25x18",
    image: "/sculptures/A girl blowing a Dandelion/1.JPG",
    gallery: [
      "/sculptures/A girl blowing a Dandelion/1.JPG",
      "/sculptures/A girl blowing a Dandelion/2.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "a-man-in-love",
    title: "A Man in Love",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "72x25x18",
    image: "/sculptures/A man in love/1.JPG",
    gallery: [
      "/sculptures/A man in love/1.JPG",
      "/sculptures/A man in love/2.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "alpha",
    title: "Alpha",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "44x64x20",
    image: "/sculptures/Alpha/IMG_0465.JPG",
    gallery: [
      "/sculptures/Alpha/IMG_0465.JPG",
      "/sculptures/Alpha/IMG_0466.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "anger",
    title: "Anger",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "35x50x28",
    image: "/sculptures/Anger/IMG_0471.JPG",
    gallery: [
      "/sculptures/Anger/IMG_0471.JPG",
      "/sculptures/Anger/IMG_0472.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "black-stallion",
    title: "Black Stallion",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "30x87x38",
    image: "/sculptures/Black Stallion/IMG_0460.JPG",
    category: 'sculpture'
  },
  {
    id: "bow-wielding-warrior",
    title: "Bow-Wielding Warrior",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "55x80x30",
    image: "/sculptures/Bow-wielding-warrior/IMG_0484.JPG",
    category: 'sculpture'
  },
  {
    id: "brothers",
    title: "Brothers",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "40x61x18",
    image: "/sculptures/Brothers/IMG_0904.JPG",
    gallery: [
      "/sculptures/Brothers/IMG_0904.JPG",
      "/sculptures/Brothers/IMG_0923.JPG",
      "/sculptures/Brothers/IMG_0925.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "bull",
    title: "Bull",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "33x46x27",
    image: "/sculptures/Bull/IMG_0469.JPG",
    gallery: [
      "/sculptures/Bull/IMG_0469.JPG",
      "/sculptures/Bull/IMG_0912.JPG",
      "/sculptures/Bull/IMG_0914.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "chairman",
    title: "Chairman",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "103x70x40",
    image: "/sculptures/Chairman/IMG_0495.JPG",
    gallery: [
      "/sculptures/Chairman/IMG_0495.JPG",
      "/sculptures/Chairman/IMG_0905.JPG",
      "/sculptures/Chairman/IMG_0906.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "deer",
    title: "Deer",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "83x70x36",
    image: "/sculptures/Deer/IMG_0894.JPG",
    gallery: [
      "/sculptures/Deer/IMG_0894.JPG",
      "/sculptures/Deer/IMG_0917.JPG",
      "/sculptures/Deer/IMG_0921.JPG",
      "/sculptures/Deer/IMG_0922.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "desireling",
    title: "Desireling",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "114x66x60",
    image: "/sculptures/Desireling/IMG_0489.JPG",
    category: 'sculpture'
  },
  {
    id: "dragon",
    title: "Dragon",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "92x37x30",
    image: "/sculptures/Dragon/IMG_0491.JPG",
    gallery: [
      "/sculptures/Dragon/IMG_0491.JPG",
      "/sculptures/Dragon/IMG_0492.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "buddha",
    title: "Buddha",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "45x50x32",
    image: "/sculptures/God and devil/Buddha/Buddha.JPG",
    gallery: [
      "/sculptures/God and devil/Buddha/Buddha.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "devil",
    title: "Devil in Meditation",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "45x50x32",
    image: "/sculptures/God and devil/Devil/Devil in Meditation.JPG",
    gallery: [
      "/sculptures/God and devil/Devil/Devil in Meditation.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "god-and-devil",
    title: "God and Devil",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "45x50x32 (each piece)",
    image: "/featured/god-and-devil.JPG",
    gallery: [
      "/sculptures/God and devil/Buddha/Buddha.JPG",
      "/sculptures/God and devil/Devil/Devil in Meditation.JPG"
    ],
    category: 'sculpture',
    featured: true
  },
  {
    id: "ibex",
    title: "Ibex",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "56x70x40",
    image: "/sculptures/Ibex/IMG_0473.JPG",
    gallery: [
      "/sculptures/Ibex/IMG_0473.JPG",
      "/sculptures/Ibex/IMG_0474.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "love",
    title: "Love",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "82x35x30",
    image: "/sculptures/Love/IMG_0493.JPG",
    gallery: [
      "/sculptures/Love/IMG_0493.JPG",
      "/sculptures/Love/IMG_0494.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "lynx",
    title: "Lynx",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "44x40x30",
    image: "/sculptures/Lynx/IMG_0461.JPG",
    gallery: [
      "/sculptures/Lynx/IMG_0461.JPG",
      "/sculptures/Lynx/IMG_0462.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "memento-mori",
    title: "Memento Mori",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "32x37x22",
    image: "/sculptures/Memento Mori/IMG_0468.JPG",
    category: 'sculpture'
  },
  {
    id: "mind-s-cosmos",
    title: "Mind’s Cosmos",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "100x45x35",
    image: "/sculptures/Mind's Cosmos/IMG_0496.JPG",
    gallery: [
      "/sculptures/Mind's Cosmos/IMG_0496.JPG",
      "/sculptures/Mind's Cosmos/IMG_0497.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "moose",
    title: "Moose",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "81x90x40",
    image: "/sculptures/Moose/IMG_0903.JPG",
    gallery: [
      "/sculptures/Moose/IMG_0903.JPG",
      "/sculptures/Moose/IMG_0908.JPG",
      "/sculptures/Moose/IMG_0913.JPG",
      "/sculptures/Moose/IMG_0915.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "morning",
    title: "Morning",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "10x60x34",
    image: "/sculptures/Morning/IMG_0457.JPG",
    category: 'sculpture'
  },
  {
    id: "myth",
    title: "Myth",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "53x30x20",
    image: "/sculptures/Myth/IMG_0485.JPG",
    category: 'sculpture'
  },
  {
    id: "old-warrior",
    title: "Old Warrior",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "25x40x35",
    image: "/sculptures/Old warrior/IMG_0478.JPG",
    gallery: [
      "/sculptures/Old warrior/IMG_0478.JPG",
      "/sculptures/Old warrior/IMG_0900.JPG",
      "/sculptures/Old warrior/IMG_0907.JPG",
      "/sculptures/Old warrior/IMG_0910.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "pegasus",
    title: "Pegasus",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "115x85x30",
    image: "/sculptures/Pegasus/IMG_0488.JPG",
    category: 'sculpture'
  },
  {
    id: "racing-horse",
    title: "Racing Horse",
    year: 2024,
    material: "Bronze, cast and patinated",
    image: "/sculptures/Racing Horse/IMG_0464.JPG",
    gallery: [
      "/sculptures/Racing Horse/IMG_0464.JPG",
      "/sculptures/Racing Horse/IMG_0909.JPG",
      "/sculptures/Racing Horse/IMG_0911.JPG",
      "/sculptures/Racing Horse/IMG_0916.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "shaman",
    title: "Shaman",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "Dimensions to be provided",
    image: "/sculptures/Shaman/IMG_0898.JPG",
    gallery: [
      "/sculptures/Shaman/IMG_0898.JPG",
      "/sculptures/Shaman/IMG_0901.JPG",
      "/sculptures/Shaman/IMG_0902.JPG",
      "/sculptures/Shaman/IMG_0918.JPG",
      "/sculptures/Shaman/IMG_0919.JPG",
      "/sculptures/Shaman/IMG_0920.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "strength-of-a-lion",
    title: "Strength of a Lion",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "30x20x20",
    image: "/sculptures/Strength-of-a-Lion/IMG_0454.JPG",
    category: 'sculpture'
  },
  {
    id: "stretch",
    title: "Stretch",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "22x64x18",
    image: "/sculptures/Stretch/IMG_0455.JPG",
    category: 'sculpture'
  },
  {
    id: "takhi",
    title: "Takhi",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "44x70x20",
    image: "/sculptures/Takhi/IMG_0476.JPG",
    category: 'sculpture'
  },
  {
    id: "the-king",
    title: "The King",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "38x50x30",
    image: "/sculptures/The King/The King-2024-38x.JPG",
    category: 'sculpture'
  },
  {
    id: "welcome",
    title: "Welcome",
    year: 2025,
    material: "Bronze, cast and patinated",
    dimensions: "37x66x28",
    image: "/sculptures/Welcome/IMG_0480.JPG",
    gallery: [
      "/sculptures/Welcome/IMG_0480.JPG",
      "/sculptures/Welcome/IMG_0481.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "wild-boar",
    title: "Wild Boar",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "54x53x30",
    image: "/sculptures/Wild Boar/IMG_0467.JPG",
    category: 'sculpture'
  },
  {
    id: "woman",
    title: "Woman",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "113x35x30",
    image: "/sculptures/Woman/IMG_0482.JPG",
    gallery: [
      "/sculptures/Woman/IMG_0482.JPG",
      "/sculptures/Woman/IMG_0490.JPG"
    ],
    category: 'sculpture'
  },
  {
    id: "pig",
    title: "Pig",
    year: 2024,
    material: "Bronze, cast and patinated",
    dimensions: "38x48x23",
    image: "/sculptures/pig/image.JPG",
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
