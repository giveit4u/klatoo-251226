'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                s: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                a: Math.random() * 0.5 + 0.2,
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
                p.curA = p.a * (0.6 + Math.sin(Date.now() * 0.001 + p.x) * 0.4);

                ctx.fillStyle = `rgba(70, 64, 250, ${p.curA})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
                ctx.fill();

                // Add tiny glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#4640fa';
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

    // Asset Paths (assuming images are placed in public/assets or similar - utilizing generated ones)
    // For this environment, we'll assume they need to be moved to the public folder by the user or are served correctly.
    // Using absolute paths for now as placehodlers or the actual generated paths if we could access them via a server route.
    // Since we are in a dev environment without a proper public folder mapping shown yet, I will use the paths provided but ideally these should be in /public.
    // I will use colors and layout to convey the theme primarily, using the images as backgrounds if possible.

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Vision Parallax & Fade
            gsap.from('.vision-text', {
                scrollTrigger: {
                    trigger: '.vision-section',
                    start: 'top 60%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
            });

            // 2. Bento Grid Stagger
            gsap.from('.bento-item', {
                scrollTrigger: {
                    trigger: '.features-section',
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
            });

            // 3. Kubic Cycle
            const mechanismTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.kubic-section',
                    start: 'top 60%',
                    end: 'bottom 80%',
                    toggleActions: 'play reverse play reverse'
                }
            });
            mechanismTl.from('.mechanism-step', {
                x: -30,
                opacity: 0,
                stagger: 0.3,
                duration: 0.6
            });

            // 4. Economy Split
            gsap.from('.economy-left', {
                scrollTrigger: {
                    trigger: '.economy-section',
                    start: 'top 70%',
                },
                x: -50,
                opacity: 0,
                duration: 1,
            });
            gsap.from('.economy-right', {
                scrollTrigger: {
                    trigger: '.economy-section',
                    start: 'top 70%',
                },
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2
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
        <div ref={containerRef} className="w-full bg-black text-white overflow-hidden relative font-sans">

            {/* --- SECTION 1: VISION --- */}
            <section className="vision-section relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-24 overflow-hidden">
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
                        <h2 className="text-[#4640fa] tracking-[0.2em] text-sm md:text-base font-bold uppercase">The Declaration of a Digital Earth</h2>
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            We Are Building<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4640fa]">A Digital Earth.</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto pt-4">
                            Rooted in reality. Designed for real value.
                        </p>
                    </div>

                    <div className="vision-text grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Not a Virtual Fantasy</h3>
                            <p className="text-gray-300 leading-relaxed">
                                KLATOO is built on real locations, real people, and real-world activity — faithfully mirrored onto a digital earth.
                                We are not escaping reality. We are layering a digital world directly on top of it.
                            </p>
                        </div>
                        <div className="space-y-6 flex flex-col justify-center border-l-2 border-[#4640fa]/30 pl-8">
                            <p className="text-2xl md:text-3xl font-light text-white leading-snug">
                                "On the digital layer,<br />
                                <span className="font-bold text-[#4640fa]">reality overlaps</span>,<br />
                                and value accumulates."
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- SECTION 2: KEY FEATURES (Bento Grid) --- */}
            <section className="features-section w-full px-6 py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="bento-item text-[#4640fa] font-bold tracking-widest uppercase">Key Features</h2>
                        <h3 className="bento-item text-4xl md:text-5xl font-bold">From Local to Global,<br />With Assetization Built In.</h3>
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
                                    <h4 className="text-2xl font-bold mb-4">Location-Based Posting</h4>
                                    <p className="text-gray-400">Every piece of content begins with where it happens. Anchor your moments to real coordinates.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Local-to-Global Flow (Wide) */}
                        <div className="bento-item col-span-1 md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                            {/* Abstract visual for flow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-2">Local-to-Global Flow</h4>
                                <p className="text-gray-400 max-w-md">A single local post can scale into global visibility. Traffic turns into revenue share.</p>
                            </div>
                            <div className="mt-8 flex items-center space-x-4">
                                <span className="px-4 py-2 bg-white/5 rounded-full text-xs uppercase tracking-wider text-[#4640fa]">Local</span>
                                <div className="h-[1px] w-12 bg-gradient-to-r from-[#4640fa] to-transparent"></div>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-xs uppercase tracking-wider text-white">Global</span>
                            </div>
                        </div>

                        {/* Card 3: The Surface Becomes Ownable (Wide) */}
                        <div className="bento-item col-span-1 md:col-span-2 bg-[#080808] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center cursor-pointer group hover:bg-[#0C0C0C] transition-colors">
                            {/* Background Image Placeholder: Kubic Surface */}
                            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                                <div className="w-full h-full bg-[url('/assets/k-002.png')] bg-cover bg-center" />
                            </div>

                            <div className="relative z-10 w-full">
                                <h4 className="text-3xl font-bold mb-3"><span className="text-[#4640fa]">Kubic.</span> The Ownable Surface.</h4>
                                <p className="text-gray-300">All activity accumulates on the digital surface of the earth. <br /> Digital land, valued by real economics.</p>
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
                        <h2 className="text-[#4640fa] font-bold tracking-widest uppercase">KUBIC x LBS Posting</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">Content Shapes<br />The Land.</h3>
                        <p className="text-gray-400 text-lg">
                            On KLATOO, content does not end as content.
                            As meaningful posts accumulate, the Kubic tied to that location becomes active —
                            and its value grows.
                        </p>
                        <div className="pl-6 border-l-4 border-[#4640fa]">
                            <p className="text-white italic text-xl">
                                "You don’t buy land and wait.<br />
                                You activate land and grow it."
                            </p>
                        </div>
                    </div>

                    {/* Right Mechanism */}
                    <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: "01", title: "Creators Post", desc: "Short-form content created at real-world places." },
                            { step: "02", title: "Engagement Stacks", desc: "Views, interactions, and sharing stack onto the Kubic." },
                            { step: "03", title: "Kubic Gains Value", desc: "Land with real activity naturally becomes more valuable." }
                        ].map((item, i) => (
                            <div key={i} className="mechanism-step bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors relative overflow-hidden group">
                                <span className="text-6xl font-bold text-[#222] absolute top-4 right-4 group-hover:text-[#4640fa]/20 transition-colors">{item.step}</span>
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
            <section className="economy-section w-full min-h-screen py-24 bg-[#030303] relative flex flex-col justify-center">
                {/* Abstract Background - Economy Flow */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('/assets/k-003.png')] bg-cover bg-center" />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-[#4640fa] font-bold tracking-widest uppercase mb-4">Why Kubic Has Real Value</h2>
                        <h3 className="text-4xl md:text-6xl font-bold">A New Economic Dimension</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                        {/* Left: Revenue Share Logic */}
                        <div className="economy-left bg-[#0A0A0A]/90 backdrop-blur rounded-3xl p-10 border border-white/10 space-y-10">
                            <div>
                                <h4 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-[#4640fa] mr-4 rounded-sm" />
                                    Revenue Is Shared, Not Extracted
                                </h4>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Value is shared — not captured. Kubic is designed so that value flows to:
                                </p>
                                <ul className="mt-6 space-y-4">
                                    {['Kubic Owners', 'Content Creators', 'The Platform Ecosystem'].map((item) => (
                                        <li key={item} className="flex items-center text-white font-medium">
                                            <div className="w-2 h-2 rounded-full bg-[#4640fa] mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-8 border-t border-white/10">
                                <p className="text-xl text-center text-gray-200">
                                    Ownership meets Creation.<br />
                                    Creation meets Distribution.
                                </p>
                            </div>
                        </div>

                        {/* Right: Real Estate + Trading */}
                        <div className="economy-right space-y-8">
                            <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                                <h5 className="text-gray-400 uppercase text-sm tracking-wider mb-2">Comparison</h5>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-xl font-bold text-white mb-2">Traditional Land</p>
                                        <p className="text-sm text-gray-500">Value rises with foot traffic, activity, and visibility.</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-[#4640fa] mb-2">Kubic</p>
                                        <p className="text-sm text-gray-400">Value rises with posts, engagement, and global exposure.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#1a1540] to-[#4640fa]/40 p-10 rounded-3xl border border-[#4640fa]/30 relative overflow-hidden text-center group">
                                <div className="absolute top-0 right-0 p-3 opacity-20">
                                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Trade the Surface of the World</h4>
                                <p className="text-blue-200 mb-8 relative z-10">
                                    Bid. Trade. Own.<br />
                                    Track value growth in real time.
                                </p>
                                <button className="px-8 py-3 bg-[#4640fa] text-white font-bold rounded-full hover:bg-white hover:text-[#4640fa] transition-colors relative z-10">
                                    Explore Marketplace
                                </button>
                                <div className="absolute inset-0 bg-[#4640fa]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* --- SECTION 5: GLOBAL EXPLORATION & CTA --- */}
            <section className="global-section w-full h-[80vh] relative flex items-center justify-center overflow-hidden bg-black">
                {/* Parallax Background Effect via fixed bg or separate div */}
                <div className="absolute inset-0 opacity-40">
                    {/* Reusing Globe Particles Concept visually if possible, or just a static starfield/map bg */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#050505] to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-10">
                    <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-[#4640fa] to-white leading-tight">
                        Are You Ready?
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-300 font-light">
                        Join the movement that connects<br />
                        <span className="text-white font-bold">Reality, Content, and Value.</span>
                    </p>

                    <div className="pt-10">
                        <button className="px-12 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-[#4640fa] hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(70,64,250,0.6)]">
                            Join Beta Now
                        </button>
                    </div>

                    <div className="pt-20 opacity-70">
                        <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
                            KLATOO : The Operating System of the Digital Earth
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
