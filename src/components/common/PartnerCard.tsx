import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface PartnerCardProps {
  name: string;
  logo: string;
  website: string;
  description: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  logo,
  website,
  description,
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      <div className="h-40 p-6 flex items-center justify-center bg-white border-b border-neutral-100">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-neutral-600 text-sm mb-4">{description}</p>
        <div className="mt-auto">
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Visit Website
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;