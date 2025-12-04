'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-kees-bg/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter text-kees-dark">
          KEES
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium hover:text-kees-gold transition-colors">About</Link>
          <Link href="#features" className="text-sm font-medium hover:text-kees-gold transition-colors">Features</Link>
          <Link href="#tokenomics" className="text-sm font-medium hover:text-kees-gold transition-colors">Kubic</Link>
          <button className="bg-kees-dark text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-kees-gold transition-colors duration-300">
            Join Beta
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-kees-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-kees-bg border-b border-gray-200 p-6 md:hidden flex flex-col space-y-4">
          <Link href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="#features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="#tokenomics" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Kubic</Link>
          <button className="bg-kees-dark text-white px-6 py-3 rounded-full text-lg font-medium w-full">
            Join Beta
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;