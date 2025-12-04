'use client';

import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Configuration
    const particleCount = 1800;
    const baseRadius = 360;
    let sphereRadius = baseRadius;
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    // Resize handler to make sphere responsive
    const resize = () => {
      width = containerRef.current?.clientWidth || window.innerWidth;
      height = containerRef.current?.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Responsive logic
      const minDim = Math.min(width, height);
      sphereRadius = Math.min(minDim * 0.35, baseRadius);
    };
    window.addEventListener('resize', resize);
    resize();

    // Palette: Gold and Brown tones
    const colors = [
      '#D4AF37', // Gold
      '#C19A6B', // Desert Sand (Brownish)
      '#A08060', // Muted Brown
      '#D2B48C', // Tan
      '#8B5A2B'  // Bronze
    ];

    // Opacity groups
    const opacities = [0.6, 0.4, 0.2];

    // Data Generation
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * (i + 0.5);

      const nx = Math.sin(phi) * Math.cos(theta);
      const ny = Math.sin(phi) * Math.sin(theta);
      const nz = Math.cos(phi);

      return {
        nx, ny, nz,
        size: (Math.random() * 3 + 1) * 4.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: opacities[Math.floor(Math.random() * opacities.length)],
        rotationOffset: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.02,

        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.02 + 0.005,
        floatAmp: Math.random() * 20 + 10
      };
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + width / 2;
      const cy = rect.top + height / 2;

      mouseX = e.clientX - cx;
      mouseY = e.clientY - cy;

      targetRotationY = (e.clientX - rect.left) * 0.0002;
      targetRotationX = (e.clientY - rect.top) * 0.0002;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.005;
      context.clearRect(0, 0, width, height);

      currentRotationY += (targetRotationY + time * 0.1 - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      const cosY = Math.cos(currentRotationY);
      const sinY = Math.sin(currentRotationY);
      const cosX = Math.cos(currentRotationX);
      const sinX = Math.sin(currentRotationX);

      const cameraDistance = sphereRadius * 1.5;
      const responsiveScale = sphereRadius / baseRadius;

      const projectedParticles = particles.map(p => {
        let x = p.nx * sphereRadius;
        let y = p.ny * sphereRadius;
        let z = p.nz * sphereRadius;

        const amp = p.floatAmp * responsiveScale;
        x += Math.sin(time * 3 + p.floatPhase) * amp;
        y += Math.cos(time * 2 + p.floatPhase) * amp;
        z += Math.sin(time * 4 + p.floatPhase) * amp;

        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;
        let y1 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        const scale = cameraDistance / (cameraDistance + z2);

        let projX = x1 * scale + width / 2;
        let projY = y1 * scale + height / 2;

        const dx = (mouseX + width / 2) - projX;
        const dy = (mouseY + height / 2) - projY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 250 * responsiveScale;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          projX += dx * force * 0.15;
          projY += dy * force * 0.15;
        }

        return {
          ...p,
          px: projX,
          py: projY,
          pz: z2,
          scale,
          alpha: p.baseAlpha * Math.min(1, scale)
        };
      });

      projectedParticles.sort((a, b) => b.pz - a.pz);

      projectedParticles.forEach(p => {
        if (p.scale > 0) {
          context.globalAlpha = p.alpha;
          context.fillStyle = p.color;

          context.save();
          context.translate(p.px, p.py);
          context.rotate(p.rotationOffset + time + p.rotationSpeed);

          const s = p.size * p.scale * responsiveScale;

          context.fillRect(-s / 2, -s / 2, s, s);
          context.restore();
        }
      });

      context.globalAlpha = 1;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-kees-bg">
      <div className="absolute inset-0 z-0" ref={containerRef}>
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      <div className="absolute bottom-12 w-full text-center z-20 pointer-events-none px-4">
        <h1 className="text-5xl md:text-8xl font-display font-bold text-kees-dark uppercase tracking-tight">
          Hyper Local SNS
        </h1>
        <p className="mt-4 text-kees-gold font-sans font-medium tracking-widest text-sm md:text-base uppercase">
          Connecting Earthlings
        </p>
      </div>
    </section>
  );
};

export default Hero;