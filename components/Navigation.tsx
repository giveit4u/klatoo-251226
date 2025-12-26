'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use GSAP for smoother scroll animation
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: element,
          offsetY: 0,
          autoKill: true
        },
        ease: 'power2.inOut'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Show navigation when Information section (about) starts
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top top',
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-6 transition-all duration-500 backdrop-blur ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      style={{ backgroundColor: isVisible ? 'rgba(3, 3, 8, 0.5)' : 'transparent' }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => gsap.to(window, { duration: 1.2, scrollTo: 0, ease: 'power2.inOut' })}
          className="text-2xl font-display font-bold tracking-tighter text-white hover:opacity-80 transition-opacity cursor-pointer"
        >
          KLATOO
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-white hover:text-[#4640fa] transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-white hover:text-[#4640fa] transition-colors duration-300"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('kubic')}
            className="text-sm font-medium text-white hover:text-[#4640fa] transition-colors duration-300"
          >
            Kubic
          </button>
          <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-[#4640fa] hover:text-white transition-all duration-300">
            Sign up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white transition-colors duration-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030308] border-b border-white/10 p-6 md:hidden flex flex-col space-y-4">
          <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-white text-left">About</button>
          <button onClick={() => scrollToSection('features')} className="text-lg font-medium text-white text-left">Features</button>
          <button onClick={() => scrollToSection('kubic')} className="text-lg font-medium text-white text-left">Kubic</button>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium w-full hover:bg-[#4640fa] hover:text-white transition-all">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;