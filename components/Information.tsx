'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

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

        const particleCount = window.innerWidth < 768 ? 30 : 120;

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

                ctx.fillStyle = `rgba(8, 239, 255, ${p.curA})`;
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
    const { language, t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    // Asset Paths (assuming images are placed in public/assets or similar - utilizing generated ones)
    // For this environment, we'll assume they need to be moved to the public folder by the user or are served correctly.
    // Using absolute paths for now as placehodlers or the actual generated paths if we could access them via a server route.
    // Since we are in a dev environment without a proper public folder mapping shown yet, I will use the paths provided but ideally these should be in /public.
    // I will use colors and layout to convey the theme primarily, using the images as backgrounds if possible.

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Vision Parallax & Fade - Mobile optimized (scrub removed for fast scroll stability)
            gsap.from('.vision-text', {
                scrollTrigger: {
                    trigger: '.vision-section',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    fastScrollEnd: true,
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                immediateRender: false,
            });

            // 2. Bento Grid Stagger - Mobile optimized
            gsap.from('.bento-item', {
                scrollTrigger: {
                    trigger: '.features-section',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    fastScrollEnd: true,
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power2.out',
                immediateRender: false,
            });

            // 3. Kubic Cycle - Mobile optimized with deterministic fromTo
            const mechanismTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.kubic-section',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    fastScrollEnd: true,
                }
            });
            mechanismTl.fromTo('.kubic-tab',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: "transform", // Ensure no lingering transforms interfere with layout
                    immediateRender: false,
                }
            ).fromTo('.kubic-mobile',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    immediateRender: false,
                }, "-=0.4");

            // 4. Economy Split - Mobile optimized
            gsap.from('.economy-left', {
                scrollTrigger: {
                    trigger: '.economy-section',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    fastScrollEnd: true,
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                immediateRender: false,
            });
            gsap.from('.economy-right', {
                scrollTrigger: {
                    trigger: '.economy-section',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    fastScrollEnd: true,
                },
                x: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.15,
                ease: 'power2.out',
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

            // Ensure layout positions are calibrated after initial paint/load
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500);

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
                    <div className="w-full h-full bg-[url('/assets/k-001.webp')] bg-cover bg-center" />
                    <VisionParticles />
                    {/* Fallback gradient if image not available */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                </div>

                <div className="relative z-10 max-w-5xl w-full text-center space-y-12">
                    <div className="vision-text space-y-4">
                        <h2 className="text-[#08efff] tracking-[0.2em] text-[16px] md:text-[18px] font-bold uppercase">{t('info.vision.subtitle')}</h2>
                        <h1 className={`text-4xl md:text-7xl tracking-tight text-white ${language === 'ko' ? 'leading-[1.3] md:leading-[87px] font-extrabold' : 'leading-[41px] md:leading-[77px]'}`}>
                            <span className={language === 'en' ? 'font-accent font-normal' : ''}>{t('info.vision.title1')}</span><br />
                            <span className={language === 'en' ? 'font-accent font-bold' : ''}>{t('info.vision.title2')}</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto pt-4">
                            {t('info.vision.description')}
                        </p>
                    </div>

                    <div className="vision-text grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-[#0A0A0A]/20 backdrop-blur-[12px] md:backdrop-blur-[80px] p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">{t('info.vision.card1.title')}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t('info.vision.card1.desc')}
                            </p>
                        </div>
                        <div className="space-y-6 flex flex-col justify-center md:border-l-[1px] border-[#08efff]/50 md:pl-8">
                            <p className="text-xl md:text-3xl font-light text-white leading-snug">
                                {t('info.vision.card2.quote1')}<br />
                                <span className="font-bold text-[#08efff]">{t('info.vision.card2.quote2')}</span>
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
                        <h2 className="bento-item text-[#08efff] font-bold tracking-widest uppercase text-[18px]">{t('info.features.subtitle')}</h2>
                        <h3 className={`bento-item text-4xl md:text-5xl leading-[1.3] md:leading-[63px] ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`} dangerouslySetInnerHTML={{ __html: t('info.features.title').replace('\n', '<br />') }}></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                        {/* Card 1: Location-Based Posting */}
                        <div className="bento-item col-span-1 md:col-span-1 row-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-white/5 hover:border-[#08efff]/30 transition-colors duration-500 overflow-hidden group relative min-h-[500px] md:min-h-0">
                            {/* Background Image: Hexagon Digital Context */}
                            <div className="absolute inset-0 z-0 opacity-[0.8] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.95]">
                                <div
                                    className="w-full h-full bg-[url('/assets/location_posting_bg.webp')] bg-cover bg-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                            </div>
                            <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#08efff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="h-full flex flex-col justify-between relative z-10">
                                <div className="w-12 h-12 bg-[#08efff] rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4">{t('info.features.card1.title')}</h4>
                                    <p className="text-gray-400">{t('info.features.card1.desc')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Local-to-Global Flow (Wide) */}
                        <div className="bento-item col-span-1 md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-[#08efff]/30 transition-all duration-500 relative overflow-hidden group">
                            {/* Abstract visual for flow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-2">{t('info.features.card2.title')}</h4>
                                <p className="text-gray-400 max-w-md">{t('info.features.card2.desc')}</p>
                            </div>
                            <div className="mt-8 flex items-center space-x-4 relative z-10">
                                <span className="px-4 py-2 bg-[#111111] rounded-full text-xs uppercase tracking-wider text-[#08efff] group-hover:bg-[#08efff]/10 transition-colors border border-white/5">{t('info.features.card2.local')}</span>
                                <div className="flex items-center">
                                    <svg width="48" height="12" viewBox="0 0 48 12" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                        <path d="M0 6H45M45 6L40 2M45 6L40 10" stroke="url(#flowGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="flowGradient" x1="0" y1="6" x2="45" y2="6" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#08efff" stopOpacity="0.2" />
                                                <stop offset="1" stopColor="#08efff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-xs uppercase tracking-wider text-white group-hover:bg-white/20 transition-colors border border-white/5">{t('info.features.card2.global')}</span>
                            </div>
                        </div>

                        {/* Card 3: The Surface Becomes Ownable (Wide) */}
                        <div className="bento-item col-span-1 md:col-span-2 bg-[#080808] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center cursor-pointer group hover:bg-[#0C0C0C] transition-colors">
                            {/* Background Image Placeholder: Kubic Surface */}
                            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                                <div className="w-full h-full bg-[url('/assets/k-002.webp')] bg-cover bg-center" />
                            </div>

                            <div className="relative z-10 w-full">
                                <h4 className="text-3xl font-bold mb-3"><span className="text-[#08efff]">Kubic.</span> {t('info.features.card3.title')}</h4>
                                <p className="text-gray-300">{t('info.features.card3.desc')}</p>
                            </div>
                            <div className="relative z-10 mt-6 md:mt-0 md:ml-auto">
                                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 group-hover:border-[#08efff] group-hover:text-[#08efff] transition-all">
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
                <div className="absolute inset-0 z-0 opacity-15 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='42' viewBox='0 0 24 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0 L0 7 V21 L12 28 V42 M12 0 L24 7 M24 21 L12 28' fill='none' stroke='%2308efff' stroke-width='1.2'/%3E%3C/svg%3E")`,
                        backgroundSize: '36px 63px'
                    }}
                />
                <div className="kubic-scanline absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#08efff15] to-transparent z-[1] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Copy */}
                    <div className="lg:col-span-4 space-y-8">
                        <h2 className="text-[#08efff] font-bold tracking-widest uppercase text-[16px]">{t('info.kubic.subtitle')}</h2>
                        <h3 className={`text-4xl md:text-5xl leading-[1.2] ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`} dangerouslySetInnerHTML={{ __html: t('info.kubic.title').replace('\n', '<br />') }}></h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {t('info.kubic.description1')}
                        </p>
                        <div className="pl-6 border-l-[5px] border-[#08efff]">
                            <p className="text-white/80 italic text-lg leading-relaxed">
                                {t('info.kubic.quote1')}<br />
                                {t('info.kubic.quote2')}
                            </p>
                        </div>
                    </div>

                    {/* Center Column: Mobile Mockup */}
                    <div className="lg:col-span-4 flex justify-center items-center py-10 kubic-mobile">
                        <div className="relative w-full max-w-[320px] aspect-[9/18.5] perspective-1000">
                            {/* Simple Mobile Frame - Cleaned up to remove the grey "case" effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                                {/* Render all images simultaneously and control visibility with opacity */}
                                <Image
                                    src={`/assets/01_Post-${language === 'en' ? 'eng' : 'kor'}.webp`}
                                    alt="Step 1"
                                    fill
                                    className={`object-cover transition-opacity duration-500 ease-in-out ${activeTab === 0 ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <Image
                                    src={`/assets/02_Stacks-${language === 'en' ? 'eng' : 'kor'}.webp`}
                                    alt="Step 2"
                                    fill
                                    className={`object-cover transition-opacity duration-500 ease-in-out ${activeTab === 1 ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <Image
                                    src={`/assets/03_Value-${language === 'en' ? 'eng' : 'kor'}.webp`}
                                    alt="Step 3"
                                    fill
                                    className={`object-cover transition-opacity duration-500 ease-in-out ${activeTab === 2 ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interaction Tabs */}
                    <div className="lg:col-span-4 space-y-4">
                        {[
                            { step: "01", title: t('info.kubic.step1.title'), desc: t('info.kubic.step1.desc') },
                            { step: "02", title: t('info.kubic.step2.title'), desc: t('info.kubic.step2.desc') },
                            { step: "03", title: t('info.kubic.step3.title'), desc: t('info.kubic.step3.desc') }
                        ].map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                onMouseEnter={() => setActiveTab(i)}
                                className={`kubic-tab w-full text-left p-6 rounded-2xl border transition-[background-color,border-color,box-shadow] duration-500 flex items-start gap-6 group backdrop-blur-sm
                                    ${activeTab === i
                                        ? 'bg-white/[0.08] border-[#08efff]/50 shadow-[0_8px_32px_0_rgba(8,239,255,0.15)] opacity-100'
                                        : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10'
                                    }`}
                            >
                                <span className={`text-4xl font-bold transition-colors duration-500
                                    ${activeTab === i ? 'text-[#08efff]' : 'text-white/10 group-hover:text-white/20'}`}>
                                    {item.step}
                                </span>
                                <div className="space-y-1">
                                    <h4 className={`text-xl font-bold transition-colors duration-500
                                        ${activeTab === i ? 'text-white' : 'text-white/50'}`}>
                                        {item.title}
                                    </h4>
                                    <p className={`text-sm leading-relaxed transition-colors duration-500
                                        ${activeTab === i ? 'text-gray-400' : 'text-gray-400/40'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- SECTION 4: WHY KUBIC & TRADING (Economy) --- */}
            <section id="kubic" className="economy-section w-full min-h-screen py-24 bg-[#030303] relative flex flex-col justify-center">
                {/* Abstract Background - Economy Flow */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('/assets/k-003.webp')] bg-cover bg-center" />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-[#08efff] font-bold tracking-widest uppercase mb-4 text-[18px]">{t('info.economy.subtitle')}</h2>
                        <h3 className={`text-4xl md:text-6xl leading-[1.3] md:leading-[75px] ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`}>{t('info.economy.title')}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

                        {/* Left: Revenue Share Logic */}
                        <div className="economy-left h-full bg-white/[0.015] backdrop-blur-xl rounded-3xl p-10 border border-white/10 space-y-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#08efff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="w-[5px] h-8 bg-[#08efff] mr-4 rounded-sm" />
                                    {t('info.economy.left.title')}
                                </h4>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {t('info.economy.left.desc')}
                                </p>
                                <ul className="mt-6 space-y-6">
                                    {[
                                        { text: t('info.economy.list1'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /> }, // Ownership/Key
                                        { text: t('info.economy.list2'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /> }, // Creation/Stars
                                        { text: t('info.economy.list3'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /> } // Globe/Network
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-white/90 font-medium group/item hover:text-white transition-colors duration-300">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 group-hover/item:border-[#08efff]/50 group-hover/item:bg-[#08efff]/10 transition-all duration-500">
                                                <svg className="w-5 h-5 text-[#08efff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    {item.icon}
                                                </svg>
                                            </div>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-8 border-t border-white/10 mt-10">
                                    <p className="text-xl text-left text-gray-200">
                                        {t('info.economy.left.quote1')}<br />
                                        {t('info.economy.left.quote2')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Real Estate + Trading */}
                        <div className="economy-right h-full flex flex-col gap-8">
                            <div className="flex-1 bg-white/[0.015] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl group/box relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <h5 className="text-gray-400 uppercase text-[14px] tracking-wider mb-6 flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-[#08efff]" />
                                        {t('info.economy.right.box.title')}
                                    </h5>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-xl font-bold text-white mb-2">{t('info.economy.right.box.row1.title')}</p>
                                            <p className="text-sm text-gray-500">{t('info.economy.right.box.row1.desc')}</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-[#08efff] mb-2">{t('info.economy.right.box.row2.title')}</p>
                                            <p className="text-sm text-gray-400">{t('info.economy.right.box.row2.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 bg-gradient-to-br from-[#1a1540]/25 to-[#08efff]/05 p-10 rounded-3xl border border-[#08efff]/30 relative overflow-hidden text-left group backdrop-blur-2xl shadow-2xl hover:shadow-[#08efff]/10 transition-all duration-500 flex flex-col justify-center">
                                <h4 className="text-3xl font-bold text-white mb-4 relative z-10">{t('info.economy.right.card.title')}</h4>
                                <div className="space-y-1 mb-8 relative z-10">
                                    <p className="text-blue-200 text-lg">
                                        {t('info.economy.right.card.desc1')}
                                    </p>
                                    <p className="text-blue-200 text-lg">
                                        {t('info.economy.right.card.desc2')}
                                    </p>
                                </div>
                                <div className="relative z-10">
                                    <button className="px-8 py-3 bg-[#08efff] text-[#03030a] font-bold rounded-full hover:bg-white hover:text-[#03030a] transition-colors shadow-lg shadow-[#08efff]/20">
                                        {t('info.economy.button')}
                                    </button>
                                </div>

                                {/* Refined Zigzag Rising Arrow Icon: Aligned with Button Bottom */}
                                <div className="absolute bottom-[34px] right-[10%] opacity-[0.15] group-hover:opacity-[0.25] transition-all duration-700 pointer-events-none transform group-hover:scale-110 group-hover:translate-y-[-5px]">
                                    <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-[#08efff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
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

                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto space-y-16 py-24">
                    {/* Main Headline */}
                    <div className="space-y-6">
                        <h2 className={`text-3xl md:text-5xl lg:text-[3.5rem] md:whitespace-nowrap break-keep text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8B7FFF] to-[#08efff] py-4 leading-[1.3] lg:leading-[71px] tracking-tight ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`}>
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
                    <div className="pt-16">
                        <p className="text-[16px] md:text-[18px] tracking-[0.3em] uppercase text-[#FFBB00]">
                            {t('info.cta.tagline')}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
