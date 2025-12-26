'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// --- Vision Background Particle Component ---
const VisionParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        const particles: { x: number; y: number; s: number; vx: number; vy: number; a: number; curA: number }[] = [];

        const particleCount = window.innerWidth < 768 ? 120 : 220;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                s: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                a: Math.random() * 0.4 + 0.1,
                curA: 0
            });
        }

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        let animationFrameId: number;
        const render = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                // Subtle breathing alpha
                p.curA = p.a * (0.5 + Math.sin(Date.now() * 0.001 + p.x * 0.01) * 0.5);

                ctx.fillStyle = `rgba(70, 64, 250, ${p.curA})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[5]" />;
};

export default function Information() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    // Asset Paths (assuming images are placed in public/assets or similar - utilizing generated ones)
    // For this environment, we'll assume they need to be moved to the public folder by the user or are served correctly.
    // Using absolute paths for now as placehodlers or the actual generated paths if we could access them via a server route.
    // Since we are in a dev environment without a proper public folder mapping shown yet, I will use the paths provided but ideally these should be in /public.
    // I will use colors and layout to convey the theme primarily, using the images as backgrounds if possible.

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Vision Parallax & Fade - Mobile optimized
            gsap.from('.vision-text', {
                scrollTrigger: {
                    trigger: '.vision-section',
                    start: 'top 80%', // More forgiving for mobile
                    end: 'bottom 20%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                },
                y: 60, // Reduced movement for mobile
                opacity: 0,
                stagger: 0.15,
                immediateRender: false, // Prevent initial hide
            });

            // 2. Bento Grid Stagger - Mobile optimized
            gsap.from('.bento-item', {
                scrollTrigger: {
                    trigger: '.features-section',
                    start: 'top 85%', // Earlier trigger for mobile
                    toggleActions: 'play none none reverse',
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: 'power2.out',
                immediateRender: false,
            });

            // 3. Kubic Cycle - Mobile optimized
            const mechanismTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.kubic-section',
                    start: 'top 75%',
                    end: 'bottom 80%',
                    toggleActions: 'play reverse play reverse'
                }
            });
            mechanismTl.from('.mechanism-step', {
                x: -20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                immediateRender: false,
            });

            // 4. Economy Split - Mobile optimized
            gsap.from('.economy-left', {
                scrollTrigger: {
                    trigger: '.economy-section',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                immediateRender: false,
            });
            gsap.from('.economy-right', {
                scrollTrigger: {
                    trigger: '.economy-section',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                x: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.15,
                immediateRender: false,
            });

            // 5. Kubic Section Scanline Animation
            gsap.fromTo('.kubic-scanline',
                { top: '0%' },
                {
                    top: '100%',
                    duration: 4,
                    repeat: -1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.kubic-section',
                        start: 'top bottom',
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-[#030308] text-white overflow-hidden relative font-sans">

            {/* --- SECTION 1: VISION --- */}
            <section id="about" className="vision-section relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-24 overflow-hidden">
                {/* Background Image Placeholder: Vision Digital Layer */}
                <div className="absolute inset-0 z-0 opacity-40">
                    {/* In a real scenario, <img src="/path/to/vision_digital_layer.png" className="w-full h-full object-cover" /> */}
                    <div className="w-full h-full bg-[url('/assets/k-001.png')] bg-cover bg-center" />
                    <VisionParticles />
                    {/* Fallback gradient if image not available */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                </div>

                <div className="relative z-10 max-w-5xl w-full text-center space-y-12">
                    <div className="vision-text space-y-4">
                        <h2 className="text-[#4640fa] tracking-[0.2em] text-sm md:text-base font-bold uppercase">{t('info.vision.subtitle')}</h2>
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            {t('info.vision.title1')}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4640fa]">{t('info.vision.title2')}</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto pt-4">
                            {t('info.vision.description')}
                        </p>
                    </div>

                    <div className="vision-text grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">{t('info.vision.card1.title')}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t('info.vision.card1.desc')}
                            </p>
                        </div>
                        <div className="space-y-6 flex flex-col justify-center md:border-l-2 border-[#4640fa]/30 md:pl-8">
                            <p className="text-xl md:text-3xl font-light text-white leading-snug">
                                {t('info.vision.card2.quote1')}<br />
                                <span className="font-bold text-[#4640fa]">{t('info.vision.card2.quote2')}</span>
                                {t('info.vision.card2.quote3')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- SECTION 2: KEY FEATURES (Bento Grid) --- */}
            <section id="features" className="features-section w-full px-6 py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="bento-item text-[#4640fa] font-bold tracking-widest uppercase">{t('info.features.subtitle')}</h2>
                        <h3 className="bento-item text-4xl md:text-5xl font-bold" dangerouslySetInnerHTML={{ __html: t('info.features.title').replace('\n', '<br />') }}></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                        {/* Card 1: Location-Based Posting */}
                        <div className="bento-item col-span-1 md:col-span-1 row-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-white/5 hover:border-[#4640fa]/30 transition-colors duration-500 overflow-hidden group relative">
                            <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#4640fa]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="h-full flex flex-col justify-between relative z-10">
                                <div className="w-12 h-12 bg-[#4640fa] rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4">{t('info.features.card1.title')}</h4>
                                    <p className="text-gray-400">{t('info.features.card1.desc')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Local-to-Global Flow (Wide) */}
                        <div className="bento-item col-span-1 md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                            {/* Abstract visual for flow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-2">{t('info.features.card2.title')}</h4>
                                <p className="text-gray-400 max-w-md">{t('info.features.card2.desc')}</p>
                            </div>
                            <div className="mt-8 flex items-center space-x-4">
                                <span className="px-4 py-2 bg-white/5 rounded-full text-xs uppercase tracking-wider text-[#4640fa]">{t('info.features.card2.local')}</span>
                                <div className="h-[1px] w-12 bg-gradient-to-r from-[#4640fa] to-transparent"></div>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-xs uppercase tracking-wider text-white">{t('info.features.card2.global')}</span>
                            </div>
                        </div>

                        {/* Card 3: The Surface Becomes Ownable (Wide) */}
                        <div className="bento-item col-span-1 md:col-span-2 bg-[#080808] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center cursor-pointer group hover:bg-[#0C0C0C] transition-colors">
                            {/* Background Image Placeholder: Kubic Surface */}
                            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                                <div className="w-full h-full bg-[url('/assets/k-002.png')] bg-cover bg-center" />
                            </div>

                            <div className="relative z-10 w-full">
                                <h4 className="text-3xl font-bold mb-3"><span className="text-[#4640fa]">Kubic.</span> {t('info.features.card3.title')}</h4>
                                <p className="text-gray-300">{t('info.features.card3.desc')}</p>
                            </div>
                            <div className="relative z-10 mt-6 md:mt-0 md:ml-auto">
                                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 group-hover:border-[#4640fa] group-hover:text-[#4640fa] transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- SECTION 3: KUBIC x LBS POSTING --- */}
            <section className="kubic-section w-full py-32 bg-black relative overflow-hidden">
                {/* Fixed Honeycomb (Interlocking Hexagon) Grid - Zero Overlap Verified */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='42' viewBox='0 0 24 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0 L0 7 V21 L12 28 V42 M12 0 L24 7 M24 21 L12 28' fill='none' stroke='%234640fa' stroke-width='1.2'/%3E%3C/svg%3E")`,
                        backgroundSize: '36px 63px'
                    }}
                />
                <div className="kubic-scanline absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#4640fa15] to-transparent z-[1] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Left Copy */}
                    <div className="col-span-1 md:col-span-4 space-y-8">
                        <h2 className="text-[#4640fa] font-bold tracking-widest uppercase">{t('info.kubic.subtitle')}</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: t('info.kubic.title').replace('\n', '<br />') }}></h3>
                        <p className="text-gray-400 text-lg">
                            {t('info.kubic.description1')}
                        </p>
                        <div className="pl-6 border-l-4 border-[#4640fa]">
                            <p className="text-white italic text-xl">
                                {t('info.kubic.quote1')}<br />
                                {t('info.kubic.quote2')}
                            </p>
                        </div>
                    </div>

                    {/* Right Mechanism */}
                    <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: "01", title: t('info.kubic.step1.title'), desc: t('info.kubic.step1.desc') },
                            { step: "02", title: t('info.kubic.step2.title'), desc: t('info.kubic.step2.desc') },
                            { step: "03", title: t('info.kubic.step3.title'), desc: t('info.kubic.step3.desc') }
                        ].map((item, i) => (
                            <div key={i} className="mechanism-step bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors relative overflow-hidden group">
                                <span className="text-6xl font-bold text-[#222] absolute top-4 right-4 group-hover:text-[#4640fa]/50 transition-colors">{item.step}</span>
                                <div className="relative z-10 pt-12">
                                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 bg-[#4640fa] w-0 group-hover:w-full transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- SECTION 4: WHY KUBIC & TRADING (Economy) --- */}
            <section id="kubic" className="economy-section w-full min-h-screen py-24 bg-[#030303] relative flex flex-col justify-center">
                {/* Abstract Background - Economy Flow */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('/assets/k-003.png')] bg-cover bg-center" />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-[#4640fa] font-bold tracking-widest uppercase mb-4">{t('info.economy.subtitle')}</h2>
                        <h3 className="text-4xl md:text-6xl font-bold">{t('info.economy.title')}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                        {/* Left: Revenue Share Logic */}
                        <div className="economy-left bg-[#0A0A0A]/90 backdrop-blur rounded-3xl p-10 border border-white/10 space-y-10">
                            <div>
                                <h4 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-[#4640fa] mr-4 rounded-sm" />
                                    {t('info.economy.left.title')}
                                </h4>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {t('info.economy.left.desc')}
                                </p>
                                <ul className="mt-6 space-y-4">
                                    {[t('info.economy.list1'), t('info.economy.list2'), t('info.economy.list3')].map((item) => (
                                        <li key={item} className="flex items-center text-white font-medium">
                                            <div className="w-2 h-2 rounded-full bg-[#4640fa] mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-8 border-t border-white/10">
                                <p className="text-xl text-center text-gray-200">
                                    {t('info.economy.left.quote1')}<br />
                                    {t('info.economy.left.quote2')}
                                </p>
                            </div>
                        </div>

                        {/* Right: Real Estate + Trading */}
                        <div className="economy-right space-y-8">
                            <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                                <h5 className="text-gray-400 uppercase text-sm tracking-wider mb-2">{t('info.economy.right.box.title')}</h5>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-xl font-bold text-white mb-2">{t('info.economy.right.box.row1.title')}</p>
                                        <p className="text-sm text-gray-500">{t('info.economy.right.box.row1.desc')}</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-[#4640fa] mb-2">{t('info.economy.right.box.row2.title')}</p>
                                        <p className="text-sm text-gray-400">{t('info.economy.right.box.row2.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#1a1540] to-[#4640fa]/40 p-10 rounded-3xl border border-[#4640fa]/30 relative overflow-hidden text-center group">
                                <div className="absolute top-0 right-0 p-3 opacity-20">
                                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-4 relative z-10">{t('info.economy.right.card.title')}</h4>
                                <p className="text-blue-200 mb-8 relative z-10">
                                    {t('info.economy.right.card.desc1')}<br />
                                    {t('info.economy.right.card.desc2')}
                                </p>
                                <button className="px-8 py-3 bg-[#4640fa] text-white font-bold rounded-full hover:bg-white hover:text-[#4640fa] transition-colors relative z-10">
                                    {t('info.economy.button')}
                                </button>
                                <div className="absolute inset-0 bg-[#4640fa]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* --- SECTION 5: GLOBAL TRENDS & CTA --- */}
            <section className="global-section w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-16 py-24">
                    {/* Main Headline */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8B7FFF] to-[#4640fa]">
                            {t('info.cta.title')}
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t('info.cta.subtitle1')}<br />
                            {t('info.cta.subtitle2')}
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8">
                        <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            {t('info.cta.button')}
                        </button>
                    </div>

                    {/* Subtext */}
                    <div className="pt-4">
                        <p className="text-lg md:text-2xl text-gray-300">
                            {t('info.cta.description1')}<br />
                            <span className="font-bold text-white">{t('info.cta.description2')}</span>
                        </p>
                    </div>

                    {/* Footer Tagline */}
                    <div className="pt-16 opacity-50">
                        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500">
                            {t('info.cta.tagline')}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
