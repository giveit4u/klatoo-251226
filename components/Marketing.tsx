'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marketing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the first large text
      gsap.fromTo(textRef1.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef1.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the detailed paragraph
      gsap.fromTo(textRef2.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef2.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the massive bottom text
      gsap.fromTo(textRef3.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef3.current,
            start: "top 75%",
            scrub: 1
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full min-h-screen bg-kees-dark text-white py-32 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="col-span-1">
          <h2 ref={textRef1} className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.9]">
            Born to <br />
            <span className="text-transparent stroke-text hover:text-kees-gold transition-colors duration-500" style={{ WebkitTextStroke: '2px white' }}>Connect</span>
          </h2>
        </div>

        <div className="col-span-1">
          <p ref={textRef2} className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            From the streets to the global stage, KEES bridges the gap.
            <br /><br />
            An instinctive journey of speed, flair, and light.
            This is the story of a unique platform, traced between the clubs of local communities and the global digital earth.
          </p>
        </div>

      </div>

      <div className="mt-40 text-center">
        <h3 ref={textRef3} className="text-[10vw] font-display font-bold uppercase tracking-tighter text-white opacity-20">
          Connecting Earthlings
        </h3>
      </div>

    </section>
  );
};

export default Marketing;