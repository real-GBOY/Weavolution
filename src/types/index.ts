export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  materialSource: string;
  usage: string;
  factories: Factory[];
}

export interface Factory {
  id: string;
  name: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  description: string;
}

export interface ImpactData {
  direct: {
    jobs: number;
    communityOutreach: number;
  };
  indirect: {
    awarenessRaised: number;
  };
  social: {
    peopleAffected: number;
  };
  economic: {
    moneySaved: number;
    moneyGenerated: number;
  };
  environmental: {
    wasteReduced: number;
    pollutionAvoided: number;
  };
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  type: 'sponsor' | 'partner';
}

export interface Campaign {
  id: string;
  title: string;
  date: string;
  location: string;
  images: string[];
  description: string;
  goals: string[];
  results: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}