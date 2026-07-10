import React, { useState, useEffect } from 'react';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Blog from './views/Blog';
import Legal from './views/Legal';
import LoadingScreen from './components/LoadingScreen';
import FloatingParticles from './components/FloatingParticles';
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Facebook, ChevronRight, Activity, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync scroll on page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [page]);

  // Handle URL hash router for better shareability and reload stability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (['home', 'about', 'services', 'blog', 'legal'].includes(hash)) {
        setPage(hash);
      } else {
        setPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newPage) => {
    window.location.hash = `#/${newPage}`;
    setPage(newPage);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'legal', label: 'Legal Policies' }
  ];

  return (
    <div className="min-h-screen bg-tennis-dark text-tennis-cream flex flex-col justify-between selection:bg-tennis-gold selection:text-tennis-dark relative">
      
      {/* Dynamic Bouncing Tennis Ball Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Renders the rest of the application once loaded */}
      {!isLoading && (
        <div className="flex-grow flex flex-col justify-between min-h-screen relative">
          {/* Drifting kinetic coordinate nodes */}
          <FloatingParticles />

          {/* 1. STICKY NAV HEADER */}
          <header className="fixed top-0 left-0 right-0 z-40 bg-[#020a06]/75 backdrop-blur-md border-b border-tennis-gold/15 transition-all">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
              
              {/* Logo */}
              <button 
                onClick={() => navigateTo('home')} 
                className="flex items-center gap-2 group text-left cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-tennis-brand border border-tennis-gold flex items-center justify-center shadow-md shadow-tennis-gold/10 group-hover:scale-105 transition-transform duration-300">
                  <Activity className="w-4 h-4 text-tennis-gold" />
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-tennis-cream tracking-widest uppercase">
                    THE TENNIS THEORY
                  </span>
                  <span className="block text-[8px] font-mono text-tennis-gold tracking-wider uppercase leading-none">
                    Biomechanics & Analytics
                  </span>
                </div>
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = page === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => navigateTo(link.id)}
                      className={`text-xs font-display font-semibold uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                        isActive ? 'text-tennis-gold' : 'text-slate-300 hover:text-tennis-gold'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div 
                          layoutId="nav-underline" 
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-tennis-gold"
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Book Analysis CTA */}
              <div className="hidden md:block">
                <a 
                  href="https://wa.me/917330712779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-tennis-gold hover:bg-tennis-gold/90 text-tennis-dark font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 border-glow-gold inline-flex items-center gap-1.5"
                >
                  Book Your Analysis
                </a>
              </div>

              {/* Mobile menu trigger */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-tennis-gold/20 hover:border-tennis-gold/55 transition-colors text-tennis-gold"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>
          </header>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-30 pt-20 bg-tennis-dark/95 backdrop-blur-lg flex flex-col justify-between"
              >
                <div className="px-6 py-8 space-y-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => navigateTo(link.id)}
                      className={`w-full text-left font-display font-bold text-lg uppercase tracking-wider ${
                        page === link.id ? 'text-tennis-gold' : 'text-tennis-cream hover:text-tennis-gold'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                
                <div className="p-6 border-t border-tennis-gold/15 bg-[#002B1A]/40 space-y-4">
                  <a 
                    href="https://wa.me/917330712779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-tennis-gold hover:bg-tennis-gold/90 text-tennis-dark font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Book Analysis via WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. MAIN SCROLLABLE WRAPPER */}
          <main className="flex-grow pt-0 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {page === 'home' && <Home setPage={navigateTo} />}
                {page === 'about' && <About />}
                {page === 'services' && <Services />}
                {page === 'blog' && <Blog />}
                {page === 'legal' && <Legal />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* 3. PREMIUM FOOTER */}
          <footer className="border-t border-tennis-gold/15 bg-[#010906] py-16 relative overflow-hidden z-10">
            <div className="absolute inset-0 clay-court-overlay opacity-15 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-tennis-kinetic/10 scanning-line pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 relative z-10">
              
              <div className="md:col-span-4 space-y-4">
                <button 
                  onClick={() => navigateTo('home')} 
                  className="flex items-center gap-2 group text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-tennis-brand border border-tennis-gold flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Activity className="w-4 h-4 text-tennis-gold" />
                  </div>
                  <div>
                    <span className="block font-display font-bold text-sm text-tennis-cream tracking-widest uppercase">
                      THE TENNIS THEORY
                    </span>
                    <span className="block text-[8px] font-mono text-tennis-gold tracking-wider uppercase leading-none">
                      Biomechanics & Analytics
                    </span>
                  </div>
                </button>
                <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                  Premium, data-driven biomechanical stroke analyses bringing scientific clarity and mechanical safety to players worldwide.
                </p>
                
                <div className="flex gap-3 pt-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#002B1A]/80 border border-tennis-gold/15 flex items-center justify-center text-slate-400 hover:text-tennis-gold hover:border-tennis-gold/60 transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#002B1A]/80 border border-tennis-gold/15 flex items-center justify-center text-slate-400 hover:text-tennis-gold hover:border-tennis-gold/60 transition-all">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#002B1A]/80 border border-tennis-gold/15 flex items-center justify-center text-slate-400 hover:text-tennis-gold hover:border-tennis-gold/60 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#002B1A]/80 border border-tennis-gold/15 flex items-center justify-center text-slate-400 hover:text-tennis-gold hover:border-tennis-gold/60 transition-all">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <h5 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-widest border-b border-tennis-gold/10 pb-2">
                  Diagnostic Links
                </h5>
                <ul className="space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => navigateTo(link.id)}
                        className="text-xs text-slate-400 hover:text-tennis-gold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronRight className="w-3 h-3 text-tennis-gold" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 space-y-4">
                <h5 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-widest border-b border-tennis-gold/10 pb-2">
                  Contact & Coordinates
                </h5>
                
                <div className="space-y-3 font-sans text-xs text-slate-400">
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-tennis-gold shrink-0 mt-0.5" />
                    <a href="mailto:info@thetennistheory.com" className="hover:text-tennis-gold transition-colors">
                      info@thetennistheory.com
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-tennis-kinetic shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div>
                        <span className="font-bold text-[9px] font-mono text-tennis-gold mr-1">[IND]:</span>
                        <a href="tel:+917330712779" className="hover:text-tennis-gold transition-colors">+91 73307-12779</a>
                      </div>
                      <div>
                        <span className="font-bold text-[9px] font-mono text-tennis-kinetic mr-1">[USA]:</span>
                        <a href="tel:+12107819773" className="hover:text-tennis-gold transition-colors">+1 210-781-9773</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 border-t border-tennis-gold/10 pt-3 mt-3">
                    <MapPin className="w-4 h-4 text-tennis-diagnostic shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div>Hyderabad, India</div>
                      <div>Dallas, Texas, USA</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="container mx-auto px-6 mt-16 pt-6 border-t border-tennis-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-slate-500">
                © {new Date().getFullYear()} The Tennis Theory. All engineering rights reserved.
              </span>
              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-tennis-diagnostic animate-pulse" />
                Lab Core Online & Secure
              </span>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
