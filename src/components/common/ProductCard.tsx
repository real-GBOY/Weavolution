import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  image,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="mt-auto">
          <Link 
            to={`/products/${id}`} 
            className="inline-block bg-secondary-100 hover:bg-secondary-200 text-secondary-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;