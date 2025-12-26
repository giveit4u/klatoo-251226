'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    // Standard window scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fallback for document element
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#171717] text-[#888] pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Logo and Info + SNS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">

          {/* Logo and Info */}
          <div className="space-y-6">
            <div className="mb-4">
              <a
                href="#"
                onClick={scrollToTop}
                className="inline-block cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src="/assets/underpin_logo.svg"
                  alt="UNDERPIN"
                  className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>83 Uisadang-daero, Yeongdeungpo-gu, Seoul, Republic of Korea</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>070-7537-2017</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:cs@underpin.kr" className="hover:text-white transition-colors">cs@underpin.kr</a>
                </div>
              </div>
            </div>
          </div>

          {/* SNS Icons - Sized 22px (reduced 15%), colored to match #888 */}
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            {[
              { src: 'facebook.png', alt: 'Facebook' },
              { src: 'x.png', alt: 'X' },
              { src: 'youtube.png', alt: 'YouTube' },
              { src: 'instagram.png', alt: 'Instagram' },
              { src: 'telegram.png', alt: 'Telegram' }
            ].map((sns) => (
              <a key={sns.alt} href="#" className="group transition-all">
                <img
                  src={`/assets/sns/${sns.src}`}
                  alt={sns.alt}
                  className="h-[22px] w-[22px] object-contain filter grayscale brightness-[0.8] opacity-70 group-hover:grayscale-0 group-hover:brightness-110 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-white/10 my-8" />

        {/* Bottom Section: Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs tracking-tight">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Terms for location based services</a>
          </div>
          <div className="opacity-60 text-center md:text-right">
            All rights reserved &copy; {new Date().getFullYear()} UNDERPIN.
          </div>
        </div>
      </div>
    </footer>
  );
}