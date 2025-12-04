'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FEATURES } from '../constants';
import { Video, MapPin, Hexagon, FileCheck, Coins, Cpu, ArrowRight, X } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IconMap: Record<string, React.ReactNode> = {
  video: <Video size={32} strokeWidth={1.5} />,
  'map-pin': <MapPin size={32} strokeWidth={1.5} />,
  hexagon: <Hexagon size={32} strokeWidth={1.5} />,
  'file-check': <FileCheck size={32} strokeWidth={1.5} />,
  coins: <Coins size={32} strokeWidth={1.5} />,
  cpu: <Cpu size={32} strokeWidth={1.5} />
};

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFeature = (id: string) => {
    setActiveFeature(activeFeature === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate cards with stagger
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 px-6 md:px-12 bg-kees-bg relative">
      <div className="container mx-auto">
        <div ref={headerRef} className="mb-16 max-w-2xl opacity-0">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-kees-dark">
            The Ecosystem
          </h2>
          <p className="text-lg text-gray-600">
            A revolutionary platform combining location-based social networking with digital asset ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              onClick={() => toggleFeature(feature.id)}
              className={`
                relative group p-8 rounded-3xl cursor-pointer transition-all duration-500 ease-out overflow-hidden opacity-0
                ${activeFeature === feature.id
                  ? 'bg-kees-dark text-white shadow-2xl scale-[1.02] z-10'
                  : 'bg-white hover:bg-gray-50 hover:shadow-xl text-kees-dark border border-gray-100'}
              `}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`
                  p-3 rounded-2xl transition-colors duration-300
                  ${activeFeature === feature.id ? 'bg-white/10 text-kees-gold' : 'bg-kees-bg text-kees-dark'}
                `}>
                  {IconMap[feature.icon]}
                </div>
                <div className={`transition-transform duration-300 ${activeFeature === feature.id ? 'rotate-90' : ''}`}>
                  {activeFeature === feature.id ? <X size={24} /> : <ArrowRight size={24} className="opacity-50 group-hover:opacity-100" />}
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold mb-3">
                {feature.title}
              </h3>

              <p className={`text-lg font-medium leading-relaxed mb-4 ${activeFeature === feature.id ? 'text-gray-200' : 'text-gray-600'}`}>
                {feature.shortDescription}
              </p>

              <div className={`
                grid transition-all duration-500 ease-in-out
                ${activeFeature === feature.id ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/10' : 'grid-rows-[0fr] opacity-0'}
              `}>
                <div className="overflow-hidden">
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    {feature.fullDescription}
                  </p>

                  {feature.stats && (
                    <div className="grid grid-cols-2 gap-4">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/5 rounded-xl p-3">
                          <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">{stat.label}</div>
                          <div className="text-xl font-bold text-kees-gold">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;