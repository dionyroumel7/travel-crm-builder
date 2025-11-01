export interface OliveTree {
  id: string;
  name: string;
  position: [number, number]; // [lat, lng]
  age: string;
  variety: string;
  description: string;
  adopted: boolean;
  adoptedBy?: string;
  adoptionEndDate?: string;
  image?: string;
}

export const oliveTrees: OliveTree[] = [
  {
    id: "tree-1",
    name: "Eleni's Legacy",
    position: [37.5951, 22.4218],
    age: "~120 years",
    variety: "Koroneiki",
    description: "Named after Eleni, a local matriarch who tended this grove for decades. This ancient tree stands at the highest point of the grove, overlooking the valley.",
    adopted: false,
  },
  {
    id: "tree-2",
    name: "Arcadian Sunbeam",
    position: [37.5948, 22.4225],
    age: "~85 years",
    variety: "Kalamata",
    description: "This tree catches the first rays of morning sun, producing olives with exceptional sweetness. A favorite among local harvesters.",
    adopted: true,
    adoptedBy: "Maria & George P.",
    adoptionEndDate: "2026-03-15",
  },
  {
    id: "tree-3",
    name: "Ancient Guardian",
    position: [37.5955, 22.4212],
    age: "~200 years",
    variety: "Koroneiki",
    description: "One of the oldest trees in the grove. Local legend says it was planted by shepherds returning from the War of Independence.",
    adopted: false,
  },
  {
    id: "tree-4",
    name: "Sophia's Pride",
    position: [37.5944, 22.4220],
    age: "~95 years",
    variety: "Kalamata",
    description: "Named for the grandmother who first pressed its olives. Known for producing the finest oil in the region.",
    adopted: true,
    adoptedBy: "The Anderson Family",
    adoptionEndDate: "2025-12-20",
  },
  {
    id: "tree-5",
    name: "Mountain Whisper",
    position: [37.5952, 22.4230],
    age: "~110 years",
    variety: "Koroneiki",
    description: "Positioned where the mountain winds create a gentle rustling. Locals say it tells stories of the past.",
    adopted: false,
  },
  {
    id: "tree-6",
    name: "Golden Heart",
    position: [37.5950, 22.4215],
    age: "~70 years",
    variety: "Kalamata",
    description: "Young but vigorous, this tree produces golden-hued olives prized for their flavor. A symbol of new beginnings.",
    adopted: false,
  },
  {
    id: "tree-7",
    name: "Dimitri's Dream",
    position: [37.5946, 22.4228],
    age: "~130 years",
    variety: "Koroneiki",
    description: "Planted by Dimitri as a young man's promise to his bride. Still standing strong, just like their love story.",
    adopted: false,
  },
  {
    id: "tree-8",
    name: "Sunset Sentinel",
    position: [37.5949, 22.4210],
    age: "~90 years",
    variety: "Kalamata",
    description: "Silhouetted beautifully against the setting sun. A photographer's favorite and a tree of tranquil beauty.",
    adopted: true,
    adoptedBy: "James & Linda K.",
    adoptionEndDate: "2026-01-10",
  },
  {
    id: "tree-9",
    name: "Valley's Blessing",
    position: [37.5953, 22.4222],
    age: "~100 years",
    variety: "Koroneiki",
    description: "Stands at the heart of the valley, blessed by perfect soil and water. Produces abundant harvests year after year.",
    adopted: false,
  },
  {
    id: "tree-10",
    name: "Athena's Gift",
    position: [37.5947, 22.4216],
    age: "~150 years",
    variety: "Kalamata",
    description: "Named for the goddess who gifted the olive tree to Greece. Majestic and timeless, a true treasure of Arcadia.",
    adopted: false,
  },
  {
    id: "tree-11",
    name: "Heritage Oak",
    position: [37.5945, 22.4224],
    age: "~115 years",
    variety: "Koroneiki",
    description: "A testament to generations of sustainable farming. This tree has witnessed the passage of time and tradition.",
    adopted: false,
  },
  {
    id: "tree-12",
    name: "Morning Glory",
    position: [37.5954, 22.4214],
    age: "~80 years",
    variety: "Kalamata",
    description: "Blooms magnificently in spring, filling the air with delicate fragrance. A celebration of nature's renewal.",
    adopted: false,
  },
];
