import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ImpactPage from './pages/ImpactPage';
import PartnersPage from './pages/PartnersPage';
import AboutUsPage from './pages/AboutUsPage';
import CampaignsPage from './pages/CampaignsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </Router>
  );
}

export default App;