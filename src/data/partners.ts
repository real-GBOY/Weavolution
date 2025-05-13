import { Partner } from '../types';

export const partners: Partner[] = [
  {
    id: '1',
    name: 'EcoTextile Global',
    logo: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg',
    website: 'https://example.com/ecotextile',
    description: 'Leading provider of sustainable textile solutions, supporting Weavolution with technical expertise and distribution networks.',
    type: 'partner',
  },
  {
    id: '2',
    name: 'Green Ventures Fund',
    logo: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg',
    website: 'https://example.com/greenventures',
    description: 'Impact investment fund focused on environmental startups, providing financial support and business mentorship.',
    type: 'sponsor',
  },
  {
    id: '3',
    name: 'Circular Economy Alliance',
    logo: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg',
    website: 'https://example.com/cea',
    description: 'Network of organizations committed to advancing circular economy principles and practices worldwide.',
    type: 'partner',
  },
  {
    id: '4',
    name: 'Sustainable Futures Initiative',
    logo: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg',
    website: 'https://example.com/sfi',
    description: 'Research and advocacy group focused on sustainable development goals and environmental education.',
    type: 'sponsor',
  },
  {
    id: '5',
    name: 'Local Crafters Association',
    logo: 'https://images.pexels.com/photos/5849578/pexels-photo-5849578.jpeg',
    website: 'https://example.com/lca',
    description: 'Collective of local artisans and craftspeople working with sustainable materials and traditional techniques.',
    type: 'partner',
  },
  {
    id: '6',
    name: 'Menoufiya University',
    logo: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg',
    website: 'https://example.com/menoufiya-university',
    description: 'Academic partner providing research support, facilities, and student volunteers for Weavolution initiatives.',
    type: 'partner',
  },
];

export const getPartnersByType = (type: 'sponsor' | 'partner') => {
  return partners.filter(partner => partner.type === type);
};