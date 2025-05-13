import { Campaign } from '../types';

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Textile Waste Awareness Workshop',
    date: '2024-02-15',
    location: 'Menoufiya University',
    images: [
      'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    ],
    description: 'An interactive workshop educating students and community members about the environmental impact of textile waste and practical steps for reduction.',
    goals: [
      'Educate 200+ participants about textile waste issues',
      'Collect 500kg of textile waste for recycling',
      'Demonstrate upcycling techniques',
    ],
    results: [
      'Over 250 participants attended',
      'Collected 720kg of textile waste',
      'Conducted 5 hands-on upcycling workshops',
    ],
  },
  {
    id: '2',
    title: 'Sustainable Fashion Exhibition',
    date: '2023-11-20',
    location: 'Cairo Design Week',
    images: [
      'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg',
      'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg',
    ],
    description: 'A showcase of fashion designs created from recycled textiles, highlighting the potential for creativity in sustainable fashion.',
    goals: [
      'Showcase 30 sustainable fashion designs',
      'Engage with fashion industry professionals',
      'Generate media coverage of sustainable fashion alternatives',
    ],
    results: [
      'Exhibited 45 designs from 12 designers',
      'Connected with 15 fashion brands interested in sustainable materials',
      'Featured in 3 national publications',
    ],
  },
  {
    id: '3',
    title: 'Community Collection Drive',
    date: '2024-01-10',
    location: 'Multiple Locations, Menoufiya Governorate',
    images: [
      'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    ],
    description: 'A region-wide initiative to collect unwanted textiles from households and businesses, diverting them from landfills to our recycling programs.',
    goals: [
      'Set up 20 collection points across the region',
      'Collect 2000kg of textile waste',
      'Engage 1000+ community members',
    ],
    results: [
      'Established 25 collection points',
      'Collected 3200kg of textile waste',
      'Engaged with approximately 1500 community participants',
    ],
  },
  {
    id: '4',
    title: 'School Education Program',
    date: '2023-09-05',
    location: 'Schools across Menoufiya',
    images: [
      'https://images.pexels.com/photos/8363095/pexels-photo-8363095.jpeg',
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
    ],
    description: 'Educational sessions at local schools teaching students about textile waste, recycling, and sustainable consumption habits.',
    goals: [
      'Visit 15 schools',
      'Educate 1000+ students',
      'Distribute educational materials',
    ],
    results: [
      'Visited 18 schools',
      'Reached over 1200 students',
      'Distributed educational booklets and started recycling programs in 10 schools',
    ],
  },
];

export const getCampaignById = (id: string): Campaign | undefined => {
  return campaigns.find(campaign => campaign.id === id);
};