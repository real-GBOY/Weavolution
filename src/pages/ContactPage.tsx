import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/common/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the Weavolution team."
        image="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-neutral-600 mb-8">
                Have questions about our products, initiatives, or how you can get involved? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 md:mt-0"
            >
              <div className="bg-neutral-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-neutral-600">
                        Enactus Menoufiya Office<br />
                        Menoufiya University<br />
                        Shebin El Kom, Egypt
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-neutral-600">
                        +20 123 456 7890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-neutral-600">
                        info@weavolution.org
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="text-neutral-600">
                        Monday - Thursday: 9am - 5pm<br />
                        Friday: 9am - 1pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-primary-100 flex items-center justify-center transition-colors">
                      <Facebook className="h-5 w-5 text-neutral-700" />
                    </a>
                    <a href="https://instagram.com" className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-primary-100 flex items-center justify-center transition-colors">
                      <Instagram className="h-5 w-5 text-neutral-700" />
                    </a>
                    <a href="https://twitter.com" className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-primary-100 flex items-center justify-center transition-colors">
                      <Twitter className="h-5 w-5 text-neutral-700" />
                    </a>
                    <a href="https://linkedin.com" className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-primary-100 flex items-center justify-center transition-colors">
                      <Linkedin className="h-5 w-5 text-neutral-700" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-neutral-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Visit Our Factory</h3>
                <p className="text-neutral-600 mb-4">
                  Want to see our processes in action? We offer guided tours of our production facility every Wednesday. Contact us to schedule a visit.
                </p>
                <div className="aspect-video bg-neutral-200 rounded-lg">
                  {/* Map would go here - placeholder for now */}
                  <div className="h-full w-full flex items-center justify-center text-neutral-500">
                    Interactive Map
                  </div>
                </div>
              </div>
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
            <h2>Frequently Asked Questions</h2>
          </motion.div>
          
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-neutral-200">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4 }}
                className="p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How can I donate textile waste?</h3>
                <p className="text-neutral-600">
                  You can drop off textile waste at any of our collection points throughout Menoufiya. For large donations, we also offer pickup services. Contact us to arrange a collection.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Do you offer educational workshops?</h3>
                <p className="text-neutral-600">
                  Yes! We regularly conduct workshops on textile waste reduction, sustainable fashion, and upcycling techniques. Check our Campaigns page for upcoming events or contact us to organize a workshop for your school, community, or organization.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How can businesses partner with Weavolution?</h3>
                <p className="text-neutral-600">
                  We offer various partnership opportunities, including corporate waste management solutions, product collaborations, and sponsorship of our initiatives. Please contact us with your specific interests, and we'll explore potential collaboration opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Where can I purchase your products?</h3>
                <p className="text-neutral-600">
                  Our products are available through our partner stores in Menoufiya and Cairo. We're also working on an online store to make our products accessible nationwide. Subscribe to our newsletter to be notified when online ordering becomes available.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;