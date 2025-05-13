import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, TreeDeciduous, Compass, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="container-custom grid md:grid-cols-2 gap-12 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-6">
              Transforming Textile Waste Into Valuable Products
            </h1>
            <p className="text-xl text-neutral-100 mb-8 max-w-xl">
              Weavolution is an Enactus Menoufiya initiative tackling the global textile waste challenge through innovative recycling and upcycling solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary bg-accent-500 hover:bg-accent-600 focus:ring-accent-500">
                Explore Products
              </Link>
              <Link to="/about" className="btn bg-transparent border-2 border-white hover:bg-white/10 text-white focus:ring-white">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img 
              src="https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg"
              alt="Textile recycling process"
              className="rounded-2xl shadow-2xl max-w-full max-h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      {/* The Idea Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2 className="text-neutral-900">The Idea Behind Weavolution</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Rethinking textile waste as a valuable resource
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-neutral-700 mb-6">
                Weavolution was born from a simple observation: the vast amount of textile waste generated globally and locally that ends up in landfills, despite having significant untapped value.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                Our team at Enactus Menoufiya recognized this opportunity and developed innovative processes to transform this waste into valuable products while creating positive social, economic, and environmental impact.
              </p>
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  Read our full story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg" 
                alt="Textile recycling process"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* The Problem Section */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2 className="text-neutral-900">The Problem</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Textile waste is a growing global crisis
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-4">92M</div>
              <h3 className="text-lg font-semibold mb-2">Tons of Textile Waste</h3>
              <p className="text-neutral-600">
                The fashion industry produces 92 million tons of textile waste annually, with most ending up in landfills.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-4">20%</div>
              <h3 className="text-lg font-semibold mb-2">Recycling Rate</h3>
              <p className="text-neutral-600">
                Only 20% of textiles are recycled globally, leaving vast amounts of potential resources untapped.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-4">1.2M</div>
              <h3 className="text-lg font-semibold mb-2">Local Impact</h3>
              <p className="text-neutral-600">
                In Egypt, over 1.2 million tons of textile waste are generated annually, with minimal infrastructure for proper recycling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2 className="text-neutral-900">Our Solution</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Closing the loop through innovative recycling and upcycling
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Package className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Innovative Products</h3>
                    <p className="text-neutral-600">
                      Transforming textile waste into valuable products like 3D printing filament, yarn, MDF boards, and furniture.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <TreeDeciduous className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sustainable Practices</h3>
                    <p className="text-neutral-600">
                      Implementing eco-friendly manufacturing processes that minimize energy use and environmental impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Compass className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Circular Economy</h3>
                    <p className="text-neutral-600">
                      Creating a closed-loop system that extends the lifecycle of textile materials indefinitely.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Community Engagement</h3>
                    <p className="text-neutral-600">
                      Involving local communities through education, collection drives, and employment opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/products" className="btn btn-primary">
                  Explore Our Products
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg" 
                alt="Sustainable manufacturing process"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2 className="text-neutral-900">Featured Products</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our innovative solutions made from recycled textiles
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/12456348/pexels-photo-12456348.jpeg" 
                  alt="3D Printing Filament"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Filament
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">3D Printing Filament</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Sustainable filament made from recycled textile waste for 3D printing applications.
                </p>
                <Link to="/products/1" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg" 
                  alt="Recycled Yarn"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Yarn
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Recycled Yarn</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  High-quality yarn made from recycled textile materials for crafting and fashion.
                </p>
                <Link to="/products/2" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6957649/pexels-photo-6957649.jpeg" 
                  alt="Eco-Friendly MDF Boards"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Building Materials
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Eco-Friendly MDF</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Sustainable MDF boards made from compressed textile waste for construction.
                </p>
                <Link to="/products/3" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg" 
                  alt="Upcycled Furniture"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Furniture
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Upcycled Furniture</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Beautiful furniture pieces created using recycled textile materials.
                </p>
                <Link to="/products/4" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Impact Highlights */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2 className="text-white">Our Impact</h2>
            <p className="mt-4 text-xl text-primary-200 max-w-3xl mx-auto">
              Creating positive change through sustainable innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="text-center p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">120+</div>
              <p className="text-primary-200">Jobs Created</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">75k</div>
              <p className="text-primary-200">Kg Waste Reduced</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">5k+</div>
              <p className="text-primary-200">People Impacted</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">$300k</div>
              <p className="text-primary-200">Economic Value</p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/impact" className="btn bg-white text-primary-900 hover:bg-primary-50">
              See Detailed Impact
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-secondary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Us in Creating a Sustainable Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-secondary-200 mb-8"
            >
              Partner with us, support our initiatives, or simply spread awareness about the importance of textile waste reduction.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="btn btn-primary bg-accent-500 hover:bg-accent-600">
                Contact Us
              </Link>
              <Link to="/partners" className="btn bg-transparent border-2 border-white hover:bg-white/10 text-white">
                Become a Partner
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;