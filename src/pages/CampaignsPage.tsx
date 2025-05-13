import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import CampaignCard from '../components/common/CampaignCard';
import { campaigns } from '../data/campaigns';

const CampaignsPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Awareness Campaigns" 
        subtitle="Explore our initiatives to educate and engage communities about textile waste."
        image="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Campaigns</h2>
            <p className="text-neutral-600 max-w-3xl">
              Through educational workshops, collection drives, and community events, we're raising awareness about textile waste and promoting sustainable practices.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CampaignCard campaign={campaign} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Campaign Impact</h2>
              <p className="text-neutral-700 mb-4">
                Our awareness campaigns have reached over 25,000 people through direct engagement, helping to shift perceptions about textile waste and inspiring action.
              </p>
              <p className="text-neutral-700 mb-4">
                Through these initiatives, we've collected over 3,200 kg of textile waste, engaged with 1,500+ community members, and established ongoing relationships with 18 schools and educational institutions.
              </p>
              <p className="text-neutral-700">
                Each campaign is designed not just to create momentary awareness, but to catalyze lasting behavioral change and build a community committed to sustainable textile practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/7370/startup-photos.jpg" 
                alt="Campaign Impact"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Get Involved
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-primary-100 mb-8"
            >
              Want to host a campaign in your school, community, or organization? We provide resources, speakers, and support to make your awareness event a success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="/contact" 
                className="btn bg-white text-primary-900 hover:bg-primary-50"
              >
                Contact Us to Plan a Campaign
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignsPage;