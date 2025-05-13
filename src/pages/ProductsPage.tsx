import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Filament', name: '3D Filament' },
    { id: 'Yarn', name: 'Yarn' },
    { id: 'Building Materials', name: 'MDF Boards' },
    { id: 'Furniture', name: 'Furniture' },
  ];
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <PageHeader 
        title="Our Products" 
        subtitle="Discover our range of sustainable products made from recycled textile waste."
        image="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          {/* Categories Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                description={product.description}
              />
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No products found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;