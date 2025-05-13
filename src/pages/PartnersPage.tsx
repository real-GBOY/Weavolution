import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import PartnerCard from '../components/common/PartnerCard';
import { partners, getPartnersByType } from '../data/partners';

const PartnersPage: React.FC = () => {
  const sponsors = getPartnersByType('sponsor');
  const collaborators = getPartnersByType('partner');
  
  return (
    <>
      <PageHeader 
        title="Our Partners & Sponsors" 
        subtitle="Meet the organizations helping us make a difference."
        image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Sponsors</h2>
            <p className="text-neutral-600 max-w-3xl">
              Organizations that provide financial and resource support to make our work possible.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map(sponsor => (
              <PartnerCard
                key={sponsor.id}
                name={sponsor.name}
                logo={sponsor.logo}
                website={sponsor.website}
                description={sponsor.description}
              />
            ))}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Project Partners & Collaborators</h2>
            <p className="text-neutral-600 max-w-3xl">
              Organizations we work with to implement our programs and expand our impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map(partner => (
              <PartnerCard
                key={partner.id}
                name={partner.name}
                logo={partner.logo}
                website={partner.website}
                description={partner.description}
              />
            ))}
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
              Become a Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-primary-100 mb-8"
            >
              Join our network of partners and sponsors to support sustainable textile solutions and make a positive impact.
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
                Contact Us About Partnerships
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;