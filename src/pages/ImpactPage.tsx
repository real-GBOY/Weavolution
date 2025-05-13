import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ImpactCounter from '../components/common/ImpactCounter';
import { impactData } from '../data/impact';

const ImpactPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Impact" 
        subtitle="See how Weavolution is making a difference through sustainable textile solutions."
        image="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2>Impact Overview</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Measuring our social, economic, and environmental impact
            </p>
          </motion.div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Direct Impact</h3>
              <div className="grid grid-cols-2">
                <ImpactCounter 
                  value={impactData.direct.jobs} 
                  label="Jobs Created" 
                  delay={0}
                />
                <ImpactCounter 
                  value={impactData.direct.communityOutreach} 
                  label="Community Programs" 
                  delay={200}
                />
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-secondary-800">Indirect Impact</h3>
              <div className="grid grid-cols-1">
                <ImpactCounter 
                  value={impactData.indirect.awarenessRaised} 
                  label="People Reached" 
                  delay={400}
                />
              </div>
            </div>
            
            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-800">Social Impact</h3>
              <div className="grid grid-cols-1">
                <ImpactCounter 
                  value={impactData.social.peopleAffected} 
                  label="People Positively Affected" 
                  delay={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Economic Impact</h2>
            <div className="w-20 h-1 bg-primary-600 mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-4">
                  ${impactData.economic.moneySaved.toLocaleString()}
                </div>
                <p className="text-xl text-neutral-600 text-center">Money Saved</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
                <div className="text-5xl md:text-6xl font-bold text-accent-600 mb-4">
                  ${impactData.economic.moneyGenerated.toLocaleString()}
                </div>
                <p className="text-xl text-neutral-600 text-center">Money Generated</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Environmental Impact</h2>
            <div className="w-20 h-1 bg-primary-600 mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Waste Reduction</h3>
              <div className="flex items-end gap-4 mb-6">
                <div className="text-5xl font-bold">{impactData.environmental.wasteReduced.toLocaleString()}</div>
                <div className="text-xl mb-1">kg</div>
              </div>
              <p className="text-primary-100">
                Total textile waste diverted from landfills and repurposed through our recycling programs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Pollution Avoided</h3>
              <div className="flex items-end gap-4 mb-6">
                <div className="text-5xl font-bold">{impactData.environmental.pollutionAvoided.toLocaleString()}</div>
                <div className="text-xl mb-1">kg CO₂</div>
              </div>
              <p className="text-secondary-100">
                Greenhouse gas emissions avoided through our recycling and sustainable manufacturing practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h2>Our Commitment</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Continuously improving our impact through measurement and innovation
            </p>
          </motion.div>
          
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">Measuring Our Progress</h3>
                <p className="text-neutral-700 mb-6">
                  We're committed to transparency and accountability in our impact measurement. Every quarter, we assess our progress against these key metrics:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                  <li>Waste collection and processing volume</li>
                  <li>Resource efficiency in manufacturing</li>
                  <li>Employment and training opportunities created</li>
                  <li>Community engagement and education reach</li>
                  <li>Carbon footprint reduction</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Future Goals</h3>
                <p className="text-neutral-700 mb-6">
                  As we continue to grow, we're setting ambitious targets for the future:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                  <li>Double our waste processing capacity by 2026</li>
                  <li>Expand product lines to include construction materials and industrial applications</li>
                  <li>Establish collection networks in 5 additional regions</li>
                  <li>Reduce our carbon footprint by 50% through renewable energy integration</li>
                  <li>Train 500+ individuals in textile recycling and sustainable manufacturing</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;