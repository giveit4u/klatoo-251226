'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { language, setLanguage, t } = useLanguage();

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 py-4 md:py-6 transition-all duration-500 backdrop-blur ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:-translate-y-full md:opacity-0'
        }`}
      style={{ backgroundColor: isVisible ? 'rgba(3, 3, 8, 0.5)' : 'transparent' }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => gsap.to(window, { duration: 1.2, scrollTo: 0, ease: 'power2.inOut' })}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src="/assets/KLATOO-H-Logo.svg"
            alt="KLATOO Logo"
            width={112}
            height={30}
            className="w-[100px] md:w-[112px] h-auto"
            priority
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-white hover:text-[#4640fa] transition-colors duration-300"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-white hover:text-[#4640fa] transition-colors duration-300"
          >
            {t('nav.features')}
          </button>
          <button
            onClick={() => scrollToSection('kubic')}
            className="text-sm font-medium text-white hover:text-[#4640fa] transition-colors duration-300"
          >
            {t('nav.kubic')}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm ml-2 mr-2">
            <button
              onClick={() => setLanguage('en')}
              className={`font-medium transition-colors duration-300 ${language === 'en' ? 'text-[#4640fa]' : 'text-white/60 hover:text-white'
                }`}
            >
              EN
            </button>
            <span className="text-white/40">/</span>
            <button
              onClick={() => setLanguage('ko')}
              className={`font-medium transition-colors duration-300 ${language === 'ko' ? 'text-[#4640fa]' : 'text-white/60 hover:text-white'
                }`}
            >
              KO
            </button>
          </div>

          <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-[#4640fa] hover:text-white transition-all duration-300">
            {t('nav.signup')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white transition-colors duration-500 p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030308] border-b border-white/10 p-6 md:hidden flex flex-col space-y-4">
          <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-white text-left">{t('nav.about')}</button>
          <button onClick={() => scrollToSection('features')} className="text-lg font-medium text-white text-left">{t('nav.features')}</button>
          <button onClick={() => scrollToSection('kubic')} className="text-lg font-medium text-white text-left">{t('nav.kubic')}</button>

          <div className="flex gap-4 py-2">
            <button
              onClick={() => setLanguage('en')}
              className={`text-lg font-medium ${language === 'en' ? 'text-[#4640fa]' : 'text-white/60'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('ko')}
              className={`text-lg font-medium ${language === 'ko' ? 'text-[#4640fa]' : 'text-white/60'}`}
            >
              한국어
            </button>
          </div>

          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium w-full hover:bg-[#4640fa] hover:text-white transition-all">
            {t('nav.signup')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;