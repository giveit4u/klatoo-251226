'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TypingSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [displayText, setDisplayText] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const fullText = "DIFFERENT,\nBEYOND";

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let count = 0;
                    const timer = setInterval(() => {
                        count++;
                        setDisplayText(fullText.substring(0, count));
                        if (count >= fullText.length) {
                            clearInterval(timer);
                            setIsFinished(true);
                        }
                    }, 50);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars.trigger === sectionRef.current) t.kill();
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full h-[800px] bg-[#030308] flex items-center justify-center overflow-hidden relative"
        >
            <div
                className="text-[#08CEFF] text-[29px] md:text-[38px] font-accent tracking-[0.4em] md:tracking-[0.6em] text-center px-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150px] md:-translate-y-[300px] whitespace-pre-line md:whitespace-nowrap"
            >
                {displayText}
                {!isFinished && <span className="animate-pulse ml-1">|</span>}
            </div>
        </section>
    );
};

export default TypingSection;
