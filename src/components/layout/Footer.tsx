import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Recycle, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Weavolution</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Transforming textile waste into valuable products through innovation and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-primary-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/impact" className="text-neutral-300 hover:text-primary-400 transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-neutral-300">Menoufiya University, Shebin El Kom, Egypt</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <span className="text-neutral-300">+20 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <span className="text-neutral-300">info@weavolution.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-neutral-300 mb-4">
              Stay updated with our latest news, products, and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-primary-400"
              />
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>
            © {new Date().getFullYear()} Weavolution | Enactus Menoufiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;