import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-md bg-primary-900/90' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <Code size={28} />
          <span className="font-heading font-semibold text-xl">Abdul Rafay</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              className="capitalize text-slate-300 hover:text-accent transition-colors duration-300"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-accent" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-screen bg-primary-800/95 backdrop-blur-md w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20 px-6 shadow-xl`}
      >
        <div className="flex flex-col space-y-6">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              className="capitalize text-slate-300 hover:text-accent transition-colors duration-300 text-left"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;