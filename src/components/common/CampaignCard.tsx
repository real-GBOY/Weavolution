import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, X } from 'lucide-react';
import { Campaign } from '../../types';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <motion.div
        layout
        whileHover={{ y: -5 }}
        onClick={toggleExpand}
        className="card cursor-pointer overflow-hidden"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={campaign.images[0]}
            alt={campaign.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
          
          <div className="flex flex-wrap gap-3 mb-3 text-sm text-neutral-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-primary-600" />
              {formatDate(campaign.date)}
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-primary-600" />
              {campaign.location}
            </div>
          </div>
          
          <p className="text-neutral-600 text-sm line-clamp-2">
            {campaign.description}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full text-neutral-800 hover:bg-neutral-100"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="relative h-64 md:h-80">
                <img
                  src={campaign.images[0]}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-2xl md:text-3xl font-bold">{campaign.title}</h2>
                  <div className="flex flex-wrap gap-4 mt-2 text-white/90">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(campaign.date)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {campaign.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">About this Campaign</h3>
                  <p className="text-neutral-700">
                    {campaign.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-700">Goals</h4>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                      {campaign.goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-700">Results</h4>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                      {campaign.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {campaign.images.length > 1 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Gallery</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {campaign.images.map((image, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={image} 
                            alt={`${campaign.title} - image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CampaignCard;