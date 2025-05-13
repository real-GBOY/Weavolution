import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  image,
  bio,
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-primary-600 font-medium text-sm mb-3">{position}</p>
        <p className="text-neutral-600 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;