import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Factory, Info, Package, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import { Product } from '../types';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-neutral-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      <div className="container-custom py-8">
        <Link to="/products" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="mt-6 mb-8">
              <nav className="flex space-x-4 border-b border-neutral-200">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 px-1 ${
                    activeTab === 'description'
                      ? 'text-primary-600 border-b-2 border-primary-600 font-medium'
                      : 'text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('usage')}
                  className={`pb-4 px-1 ${
                    activeTab === 'usage'
                      ? 'text-primary-600 border-b-2 border-primary-600 font-medium'
                      : 'text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Usage
                </button>
                <button
                  onClick={() => setActiveTab('factories')}
                  className={`pb-4 px-1 ${
                    activeTab === 'factories'
                      ? 'text-primary-600 border-b-2 border-primary-600 font-medium'
                      : 'text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Factories
                </button>
              </nav>
              
              <div className="py-6">
                {activeTab === 'description' && (
                  <div>
                    <p className="text-neutral-700 mb-4">{product.description}</p>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Package className="h-5 w-5 mr-2 text-primary-600" />
                        Material Source
                      </h3>
                      <p className="text-neutral-700">{product.materialSource}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'usage' && (
                  <div>
                    <div className="flex items-start mb-4">
                      <Info className="h-5 w-5 mr-2 text-primary-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">How to Use</h3>
                        <p className="text-neutral-700">{product.usage}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'factories' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Manufacturing Facilities</h3>
                    <div className="space-y-6">
                      {product.factories.map(factory => (
                        <div key={factory.id} className="border border-neutral-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <Factory className="h-5 w-5 mr-2 text-primary-600 mt-1" />
                            <div>
                              <h4 className="font-semibold">{factory.name}</h4>
                              <div className="flex items-center mt-1 text-sm text-neutral-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                {factory.location.address}
                              </div>
                              <p className="mt-2 text-neutral-700">
                                {factory.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;