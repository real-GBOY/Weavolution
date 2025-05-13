import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative bg-neutral-900 text-white">
      {/* Background Image with Overlay */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: 0.4
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative container-custom py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-neutral-200">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;