import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: '3D Printing Filament',
    category: 'Filament',
    image: 'https://images.pexels.com/photos/12456348/pexels-photo-12456348.jpeg',
    description: 'Sustainable 3D printing filament made from recycled textile waste. Perfect for prototyping and small-scale manufacturing with reduced environmental impact.',
    materialSource: 'Post-consumer textile waste from local garment factories and collection drives.',
    usage: 'Can be used with standard FDM 3D printers. Compatible with most printer models and settings.',
    factories: [
      {
        id: 'f1',
        name: 'EcoTech Processing Facility',
        location: {
          address: 'Industrial Zone, Menoufiya, Egypt',
          coordinates: {
            lat: 30.5965,
            lng: 30.9876,
          },
        },
        description: 'Specializes in processing textile waste into raw materials for various applications.',
      },
      {
        id: 'f2',
        name: 'FilaWorks Manufacturing',
        location: {
          address: 'Alexandria Industrial Park, Egypt',
          coordinates: {
            lat: 31.2001,
            lng: 29.9187,
          },
        },
        description: 'Converts processed textile waste into 3D printing filament with precise specifications.',
      },
    ],
  },
  {
    id: '2',
    name: 'Recycled Yarn',
    category: 'Yarn',
    image: 'https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg',
    description: 'High-quality yarn made from recycled textile materials. Perfect for crafting, knitting, and sustainable fashion projects.',
    materialSource: 'Recycled cotton and polyester from textile waste collected from factories and households.',
    usage: 'Suitable for knitting, crocheting, weaving, and various crafting projects.',
    factories: [
      {
        id: 'f3',
        name: 'TextileCycle Processing Plant',
        location: {
          address: 'Cairo Industrial Area, Egypt',
          coordinates: {
            lat: 30.0444,
            lng: 31.2357,
          },
        },
        description: 'Processes and sorts textile waste for various recycling applications.',
      },
    ],
  },
  {
    id: '3',
    name: 'Eco-Friendly MDF Boards',
    category: 'Building Materials',
    image: 'https://images.pexels.com/photos/6957649/pexels-photo-6957649.jpeg',
    description: 'Medium-density fiberboard made from compressed textile waste. A sustainable alternative to traditional wood-based MDF.',
    materialSource: 'Industrial textile waste and denim scraps compressed with eco-friendly binding agents.',
    usage: 'Perfect for furniture making, interior design elements, and construction projects requiring lightweight yet durable materials.',
    factories: [
      {
        id: 'f4',
        name: 'GreenBoard Manufacturing',
        location: {
          address: 'Industrial Zone, Port Said, Egypt',
          coordinates: {
            lat: 31.2565,
            lng: 32.2841,
          },
        },
        description: 'Specializes in producing sustainable building materials from various recycled sources.',
      },
    ],
  },
  {
    id: '4',
    name: 'Upcycled Furniture',
    category: 'Furniture',
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg',
    description: 'Beautiful, functional furniture pieces created using recycled textile materials and sustainable design principles.',
    materialSource: 'Combination of textile waste, recycled wood, and eco-friendly finishing materials.',
    usage: 'Ready-to-use furniture pieces for homes, offices, and commercial spaces looking for sustainable design elements.',
    factories: [
      {
        id: 'f5',
        name: 'EcoFurnish Design Studio',
        location: {
          address: 'Design District, Cairo, Egypt',
          coordinates: {
            lat: 30.0444,
            lng: 31.2357,
          },
        },
        description: 'Designs and crafts sustainable furniture combining textile waste with other eco-friendly materials.',
      },
      {
        id: 'f6',
        name: 'Craft Collective Workshop',
        location: {
          address: 'Menoufiya, Egypt',
          coordinates: {
            lat: 30.5965,
            lng: 30.9876,
          },
        },
        description: 'Community workshop supporting local artisans in creating handcrafted furniture from recycled materials.',
      },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};