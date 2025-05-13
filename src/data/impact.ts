import { ImpactData } from '../types';

export const impactData: ImpactData = {
  direct: {
    jobs: 120,
    communityOutreach: 15,
  },
  indirect: {
    awarenessRaised: 25000,
  },
  social: {
    peopleAffected: 5000,
  },
  economic: {
    moneySaved: 150000,
    moneyGenerated: 300000,
  },
  environmental: {
    wasteReduced: 75000, // in kg
    pollutionAvoided: 45000, // in kg CO2 equivalent
  },
};