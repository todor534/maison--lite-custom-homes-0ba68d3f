export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  squareFeet: string;
  bedrooms: number;
  description: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "coastal-serenity",
    title: "Coastal Serenity",
    location: "Malibu, California",
    year: "2024",
    category: "Modern Coastal",
    squareFeet: "8,400",
    bedrooms: 5,
    description:
      "A cliffside sanctuary where floor-to-ceiling glass dissolves the boundary between architecture and the Pacific horizon. Every material was hand-selected to echo the shifting light of the coastline.",
    coverImage: "",
    gallery: [
      "",
      "",
      "",
      "",
    ],
    featured: true,
  },
  {
    id: "the-hillside-manor",
    title: "The Hillside Manor",
    location: "Aspen, Colorado",
    year: "2023",
    category: "Mountain Estate",
    squareFeet: "12,600",
    bedrooms: 6,
    description:
      "Nestled into the alpine terrain, this timber-and-stone estate balances rugged permanence with refined warmth. Vaulted ceilings and a central hearth anchor an unforgettable gathering space.",
    coverImage: "",
    gallery: [
      "",
      "",
      "",
      "",
    ],
    featured: true,
  },
  {
    id: "villa-lumina",
    title: "Villa Lumina",
    location: "Scottsdale, Arizona",
    year: "2024",
    category: "Desert Contemporary",
    squareFeet: "9,800",
    bedrooms: 5,
    description:
      "A study in shadow and sunlight, Villa Lumina wraps around a private courtyard oasis. Curated stonework and reflective water features create a serene desert retreat.",
    coverImage: "",
    gallery: [
      "",
      "",
      "",
      "",
    ],
    featured: true,
  },
  {
    id: "the-glass-pavilion",
    title: "The Glass Pavilion",
    location: "Lake Tahoe, Nevada",
    year: "2022",
    category: "Modern Lakefront",
    squareFeet: "7,200",
    bedrooms: 4,
    description:
      "Transparent living at its finest. This lakefront pavilion frames unobstructed views through structural glass, blurring the line between interior comfort and natural grandeur.",
    coverImage: "",
    gallery: [
      "",
      "",
      "",
      "",
    ],
    featured: false,
  },
  {
    id: "heritage-estate",
    title: "Heritage Estate",
    location: "Greenwich, Connecticut",
    year: "2023",
    category: "Classic Georgian",
    squareFeet: "14,500",
    bedrooms: 7,
    description:
      "A timeless Georgian residence reimagined for modern living. Handcrafted millwork, imported marble, and formal gardens honor a legacy of enduring elegance.",
    coverImage: "",
    gallery: [
      "",
      "",
      "",
      "",
    ],
    featured: false,
  },
  {
    id: "the-vineyard-residence",
    title: "The Vineyard Residence",
    location: "Napa Valley, California",
    year: "2024",
    category: "Rustic Modern",
    squareFeet: "10,100",
    bedrooms: 5,
    description:
      "Set among rolling vineyards, this residence marries reclaimed oak, board-formed concrete, and expansive terraces to celebrate the art of gracious country living.",
    coverImage: "",
    gallery: [
      "",
      "",
      "",
      "",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);