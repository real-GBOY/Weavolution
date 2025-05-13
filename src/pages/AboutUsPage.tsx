import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import TeamMemberCard from '../components/common/TeamMemberCard';
import { teamMembers } from '../data/team';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about Enactus Menoufiya and the team behind Weavolution."
        image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Enactus Menoufiya</h2>
              <p className="text-neutral-700 mb-4">
                Enactus Menoufiya is a student-led organization at Menoufiya University dedicated to creating a better world through entrepreneurial action. We develop innovative solutions to social, economic, and environmental challenges in our community.
              </p>
              <p className="text-neutral-700 mb-4">
                Founded in 2015, our chapter has grown to include over 100 active members from diverse academic backgrounds, all united by a common goal: to use entrepreneurship as a catalyst for positive change.
              </p>
              <p className="text-neutral-700">
                We believe that by combining the power of business principles with a commitment to social impact, we can address complex challenges sustainably and effectively.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                alt="Enactus Menoufiya Team"
                className="rounded-xl shadow-lg w-full h-auto"
              />
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
            <h2>Our Vision & Mission</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Vision</h3>
              <p className="text-neutral-700">
                To create a world where textile waste is viewed as a valuable resource, not a burden, and where sustainable practices are the norm in the textile and manufacturing industries.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Mission</h3>
              <p className="text-neutral-700">
                To transform textile waste into valuable products while creating economic opportunities, raising environmental awareness, and building a more sustainable future for our communities.
              </p>
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
            className="section-title"
          >
            <h2>Our Accomplishments</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Key milestones in our journey
            </p>
          </motion.div>
          
          <div className="relative mt-12">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 z-0"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center mb-12"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-primary-50 p-6 rounded-xl inline-block">
                    <h3 className="text-xl font-bold mb-2">2021</h3>
                    <p className="text-neutral-700">
                      Weavolution project launched with initial research and community surveys to identify textile waste challenges.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 bg-primary-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center mb-12"
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 bg-primary-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-primary-50 p-6 rounded-xl inline-block">
                    <h3 className="text-xl font-bold mb-2">2022</h3>
                    <p className="text-neutral-700">
                      Developed first prototype products and established partnerships with local textile factories for waste collection.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center mb-12"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-primary-50 p-6 rounded-xl inline-block">
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <p className="text-neutral-700">
                      Won the Enactus Egypt National Competition and secured seed funding to scale operations.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 bg-primary-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 bg-primary-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-primary-50 p-6 rounded-xl inline-block">
                    <h3 className="text-xl font-bold mb-2">2024</h3>
                    <p className="text-neutral-700">
                      Expanded product line to include 3D printing filament and furniture, creating 120+ jobs in the community.
                    </p>
                  </div>
                </div>
              </motion.div>
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
            className="section-title"
          >
            <h2>Meet Our Team</h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              The dedicated individuals driving Weavolution forward
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMemberCard
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  bio={member.bio}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;