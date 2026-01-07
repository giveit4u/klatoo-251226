'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { CONTINENTS, isPointInPolygon, distanceToPolygonEdge, noise } from './HeroData';


const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const requestRef = useRef<number>(0);
  const scrollState = useRef({ progress: 0 });
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // --- RESPONSIVE CONFIG ---
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // 파티클 밀도 10% 감소 (28800)
    // 파티클 밀도 최적화: 모바일 비주얼 강화를 위해 8000으로 조정
    const baseParticleCount = isMobile ? 8000 : (isTablet ? 18000 : 28800);
    // 기본 크기 기준값 통일 (지구본 크기에 따라 동적으로 스케일링됨)
    const baseSizeFactor = 2.8;

    const colors = ['#00F0FF', '#00D1FF', '#00A8FF', '#0077FF', '#0044AA'];
    const opacities = [0.9, 0.7, 0.5];

    let canvasWidth = 0;
    let canvasHeight = 0;

    const updateCanvasSize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      // 모바일에서는 연산 부하를 줄이기 위해 해상도 배율을 1.2로 제한
      const cap = isMobile ? 1.2 : 2.0;
      const finalDpr = Math.min(dpr, cap);

      canvas.width = rect.width * finalDpr;
      canvas.height = rect.height * finalDpr;
      context.scale(finalDpr, finalDpr);

      canvasWidth = rect.width;
      canvasHeight = rect.height;
    };
    updateCanvasSize();
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(containerRef.current);

    // --- 1. GENERATE CONTINENT PARTICLES (POLYGON-BASED) ---
    const particles: any[] = [];

    for (let i = 0; i < baseParticleCount; i++) {
      // Fibonacci sphere for even distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / baseParticleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * (i + 0.5);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      // Convert to lat/lon (Y-up 기준)
      const lat = Math.asin(y) * 180 / Math.PI;
      const lon = Math.atan2(x, z) * 180 / Math.PI;

      let isLand = false;
      let continentDensity = 1.0;

      for (const continent of CONTINENTS) {
        if (isPointInPolygon(lat, lon, continent.points)) {
          isLand = true;
          continentDensity = continent.density;
          break;
        }
      }

      if (!isLand) {
        for (const continent of CONTINENTS) {
          const edgeDist = distanceToPolygonEdge(lat, lon, continent.points);
          const noiseVal = noise(x * 6.0 + 50, y * 6.0 + 50, z * 6.0 + 50);
          const threshold = 2.0 + noiseVal * 1.5;

          if (edgeDist < threshold) {
            isLand = true;
            continentDensity = continent.density * 0.8;
            break;
          }
        }
      }

      if (isLand) {
        if (Math.random() >= continentDensity) continue;

        // Create random "Outer Space" starting positions for the intro
        const randPhi = Math.random() * Math.PI * 2;
        const randTheta = Math.random() * Math.PI;
        const dist = 3.0 + Math.random() * 20.0;
        const startX = Math.sin(randTheta) * Math.cos(randPhi) * dist;
        const startY = Math.cos(randTheta) * dist;
        const startZ = Math.sin(randTheta) * Math.sin(randPhi) * dist;

        particles.push({
          x, y, z,
          startX, startY, startZ,
          isFill: false,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: opacities[Math.floor(Math.random() * opacities.length)],
          size: (Math.random() * 0.5 + 0.6) * baseSizeFactor,
          driftDir: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
            z: (Math.random() - 0.5) * 2
          },
          driftSpeed: Math.random() * 0.5 + 0.2,
          phase: Math.random() * Math.PI * 2,
          isTwinkle: false
        });
      }
    }

    // --- 2. GENERATE GLOBE GRID LINES ---
    const gridLines: { path: any[] }[] = [];
    const gridSegments = isMobile ? 32 : 64; // 모바일 성능 최적화: 세그먼트 수 절반으로 감소
    for (let lat = -80; lat <= 80; lat += 20) {
      const path = [];
      const latRad = lat * Math.PI / 180;
      const y = Math.sin(latRad);
      const r = Math.cos(latRad);
      for (let i = 0; i <= gridSegments; i++) {
        const theta = (i / gridSegments) * Math.PI * 2;
        const x = r * Math.sin(theta);
        const z = r * Math.cos(theta);
        path.push({ x, y, z });
      }
      gridLines.push({ path });
    }
    for (let lon = 0; lon < 360; lon += 20) {
      const path = [];
      const lonRad = lon * Math.PI / 180;
      for (let i = 0; i <= gridSegments; i++) {
        const latPart = (i / gridSegments) * Math.PI - Math.PI / 2;
        const y = Math.sin(latPart);
        const r = Math.cos(latPart);
        const x = r * Math.sin(lonRad);
        const z = r * Math.cos(lonRad);
        path.push({ x, y, z });
      }
      gridLines.push({ path });
    }


    let currentRotY = 4.2; // Atlantic start
    let targetRotX = 0.20; // 카메라 높이 하향 조정된 상태
    let currentRotX = 0.20;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasWidth) return;
      const rect = canvas.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const dx = e.clientX - rect.left - cx;
      const dy = e.clientY - rect.top - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const safeZoneHeight = rect.height - (isMobile ? 220 : 350);
      const safeZoneWidth = rect.width * (isMobile ? 0.9 : 0.85);
      const limitingDimension = Math.min(safeZoneHeight, safeZoneWidth);
      const baseRadius = (limitingDimension / 2) * (isMobile ? 0.95 : 1.12);

      // Only react when hovering over the globe area
      if (dist < baseRadius) {
        // Increased sensitivity to reach ~30 degrees (0.52 rad) at max vertical distance
        const mouseY = dy * 0.001;
        targetRotX = 0.20 + mouseY;
      }
      // If outside, targetRotX is maintained at its last state
    };
    window.addEventListener('mousemove', handleMouseMove);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: isMobile ? '+=800' : '+=400',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        scrollState.current.progress = self.progress;
      }
    });

    let animationFrameId: number;
    let time = 0;
    const animStartTime = startTimeRef.current;
    const introDuration = 2200; // Snappy 2.2s intro

    let isHeroVisible = true;
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom', // When the top of the section enters the bottom of the viewport
      end: 'bottom top',   // When the bottom of the section leaves the top of the viewport
      onToggle: (self) => { isHeroVisible = self.isActive; }
    });

    const animate = () => {
      // 렌더링 부하 방지: 화면 밖에 있을 때 연산 중단
      if (!isHeroVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const now = Date.now();
      time = (now - startTimeRef.current) / 1000; // Use elapsed time for consistent animation
      const p = scrollState.current.progress;

      // --- TRANSITION PARAMETERS (Damped Expansion for Lingering Look) ---
      const transitionStart = 0.05;
      const transP = Math.max(0, (p - transitionStart) / (1 - transitionStart));

      // 곡선을 더 완만하게 하여 빨려 들어가는 속도감을 아주 부드럽게 조정
      const expansionFactor = transP < 0.5
        ? Math.pow(transP, 1.8) * 1.5 // 2.5에서 1.5로 낮춰 초기 팽창 속도 감속
        : (Math.pow(0.5, 1.8) * 1.5) + (transP - 0.5) * 3.0; // 8.0에서 3.0으로 낮춰 피크 속도 감속

      const pExplosion = expansionFactor;
      const particleExpansion = pExplosion * 35000;

      // 지수와 곱연산 계수를 낮추어 줌인 모션을 더 정교하고 부드럽게 표현
      const pGridZoom = Math.pow(p, 1.8);
      const gridExpansion = pGridZoom * 28000;

      // 그리드와 텍스트 소멸 타이밍 복구
      const gridFadeStart = 0.08;
      const gridFadeEnd = 0.2;
      const fadeProgress = p > gridFadeStart ? Math.min((p - gridFadeStart) / (gridFadeEnd - gridFadeStart), 1.0) : 0;

      if (textRef.current) {
        const textOpacity = Math.max(0, 1 - fadeProgress * 2.8); // 4.5에서 2.8로 완화하여 더 오래 머무름
        textRef.current.style.opacity = textOpacity.toString();
        // 백업 느낌을 위해 위로 슬라이딩 효과 추가
        const translateY = p * -300;
        textRef.current.style.transform = `translateX(-50%) translateY(${translateY}px)`;
        textRef.current.style.display = (p > 0.35 || textOpacity <= 0) ? 'none' : 'block';
      }

      // 전역 회전 감쇄 (회전 속도 0.0032 복구)
      const rotSpeedScale = Math.max(0, 1 - transP * 4.0);
      currentRotY += 0.0032 * rotSpeedScale;
      currentRotX += (targetRotX - currentRotX) * 0.12 * rotSpeedScale; // Snappier response (increased from 0.05)

      // "한쪽 방향 회전" 느낌을 완벽히 지우기 위해 영향력 상쇄
      const rotationInfluence = Math.min(1, Math.max(0, 1 - (p - 0.2) * 4));
      const cosY = Math.cos(currentRotY) * rotationInfluence + (1 - rotationInfluence);
      const sinY = Math.sin(currentRotY) * rotationInfluence;
      const cosX = Math.cos(currentRotX) * rotationInfluence + (1 - rotationInfluence);
      const sinX = Math.sin(currentRotX) * rotationInfluence;

      context.clearRect(0, 0, canvasWidth, canvasHeight);

      const fov = 2000;
      const safeZoneHeight = canvasHeight - (isMobile ? 220 : 350);
      // 너비 제한 추가: 세로 화면(Vertical Desktop)에서 지구가 너무 커지는 것 방지
      const safeZoneWidth = canvasWidth * (isMobile ? 0.9 : 0.85);
      const limitingDimension = Math.min(safeZoneHeight, safeZoneWidth);
      const baseRadius = (limitingDimension / 2) * (isMobile ? 0.95 : 1.12);

      // --- DRAW GRID (Heavy Duty Removal) ---
      // 스크롤 35% 지점(p=0.35) 이후에는 그리드 렌더링 루프를 물리적으로 제거
      // 모바일에서도 그리드 표시하도록 수정 (세그먼트 최적화 적용됨)
      const shouldDrawGrid = fadeProgress < 1.0 && p < 0.35;
      if (shouldDrawGrid) {
        gridLines.forEach(line => {
          for (let j = 0; j < line.path.length - 1; j++) {
            const pt1 = line.path[j];
            const pt2 = line.path[j + 1];

            let rx1 = pt1.x * cosY - pt1.z * sinY;
            let rz1 = pt1.z * cosY + pt1.x * sinY;
            let ry1 = pt1.y * cosX - rz1 * sinX;
            let rz1_final = rz1 * cosX + pt1.y * sinX;

            let rx2 = pt2.x * cosY - pt2.z * sinY;
            let rz2 = pt2.z * cosY + pt2.x * sinY;
            let ry2 = pt2.y * cosX - rz2 * sinX;
            let rz2_final = rz2 * cosX + pt2.y * sinX;

            // 그리드와 파티클 밀착 상태 복구
            const gridRadius = (baseRadius + gridExpansion);
            const zDepth1 = fov + rz1_final * gridRadius;
            const zDepth2 = fov + rz2_final * gridRadius;

            // Z-Depth가 비정상적인 경우 렌더링 스킵 (그리드 폭발 방지)
            if (zDepth1 < 1 || zDepth2 < 1) continue;

            const scale1 = fov / zDepth1;
            const scale2 = fov / zDepth2;

            const screenX1 = rx1 * gridRadius * scale1 + canvasWidth / 2;
            const screenY1 = ry1 * gridRadius * scale1 + canvasHeight / 2;
            const screenX2 = rx2 * gridRadius * scale2 + canvasWidth / 2;
            const screenY2 = ry2 * gridRadius * scale2 + canvasHeight / 2;

            const midZ = (rz1_final + rz2_final) / 2;
            let gridAlpha = 0.30 * (1 - Math.pow(fadeProgress, 2));

            // INTRO: 그리드 페이드인은 초반 응집이 어느정도 진행된 후 시작 (백업 로직)
            const introProgress = Math.min(1, (now - animStartTime) / introDuration);
            const gridIntroFade = Math.max(0, (introProgress - 0.7) * 3.33);

            // 0.32 이후에는 절대 투명 (3중 방어 및 재출현 방지)
            if (p > 0.32) gridAlpha = 0;
            if (midZ > 0 && fadeProgress < 0.1) gridAlpha = 0.30 * (1 - midZ * 0.82);

            gridAlpha *= gridIntroFade; // 오프닝 시 지구본 완성된 후 그리드 출력

            if (gridAlpha > 0.001) {
              context.beginPath();
              context.lineWidth = 0.8 * (1 - fadeProgress * 0.6);
              context.strokeStyle = `rgba(0, 240, 255, ${gridAlpha})`;
              context.moveTo(screenX1, screenY1);
              context.lineTo(screenX2, screenY2);
              context.stroke();
            }
          }
        });
      }

      // --- DRAW PARTICLES ---
      const introProgress = Math.min(1, (now - animStartTime) / introDuration);
      const easeIntro = 1 - Math.pow(1 - introProgress, 5); // Quintic Out Snap

      const renderbuf = [];
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];

        // 1. Position Interpolation (Random Outer Space -> Globe Continent)
        const curX_base = pt.startX + (pt.x - pt.startX) * easeIntro;
        const curY_base = pt.startY + (pt.y - pt.startY) * easeIntro;
        const curZ_base = pt.startZ + (pt.z - pt.startZ) * easeIntro;

        // 2. Size & Alpha Interpolation (Intro Scaling)
        const introSizeScale = 5.0 - (4.0 * easeIntro); // 대형 먼지에서 입자로 축소
        const introAlpha = Math.min(1, introProgress * 1.5);

        const scatter = pExplosion * 45000 * pt.phase;
        const currentRadius = baseRadius + particleExpansion + scatter;

        // "사방팔방 자유 유영" 효과 (후반부엔 유영 속도를 늦춰 화면 내 체류시간 증대)
        const driftIntensity = p < 0.6
          ? p * 3800
          : (0.6 * 3800) + (p - 0.6) * 1200;
        const driftX = pt.driftDir.x * driftIntensity;
        const driftY = pt.driftDir.y * driftIntensity;
        const driftZ = pt.driftDir.z * driftIntensity;

        const curveX = Math.sin(time * 0.4 + pt.phase) * (driftIntensity * 0.5);
        const curveY = Math.cos(time * 0.5 + pt.phase * 2) * (driftIntensity * 0.5);
        const curveZ = Math.sin(time * 0.3 + pt.phase * 1.5) * (driftIntensity * 0.4);

        const morphFactor = Math.min(1.0, p * 1.8);
        const x = (curX_base * currentRadius) * (1 - morphFactor * 0.3) + driftX + curveX;
        const y = (curY_base * currentRadius) * (1 - morphFactor * 0.3) + driftY + curveY;
        const z = (curZ_base * currentRadius) * (1 - morphFactor * 0.3) + driftZ + curveZ;

        let rx = x * cosY - z * sinY;
        let rz = z * cosY + x * sinY;
        let ry = y * cosX - rz * sinX;
        let rz_f = rz * cosX + y * sinX;

        const zDepth = fov + rz_f;
        if (zDepth < 10) continue;

        const scale = fov / zDepth;
        const screenX = rx * scale + canvasWidth / 2;
        const screenY = ry * scale + canvasHeight / 2;

        const globeScale = Math.sqrt(baseRadius / 260);
        const perspectiveFactor = 1.0 - (rz_f / baseRadius) * 0.2;

        // 트랜지션 시 크기 팽창 로직 (확산 Factor 기반으로 동기화)
        const transSizeScale = 1.0 + expansionFactor * 1.0;
        let size = pt.size * scale * perspectiveFactor * globeScale * introSizeScale * transSizeScale;

        let alpha = pt.baseAlpha * introAlpha;
        // isFill 파티클 로직 제거됨

        let finalColor = pt.color;
        // 반짝임 로직 제거

        // --- BACKSIDE PARTICLE CULLING ---
        // rz_f > 0 이면 뒷면. p > 0.2 이후부터 뒷면 소멸 시작
        if (rz_f > 0 && p > 0.2) {
          const backAlphaReduction = rz_f / (baseRadius + particleExpansion);
          const backStrength = (p - 0.2) * 6.5;
          alpha *= Math.max(0, 1 - backAlphaReduction * backStrength);
        }

        const depthRatio = rz_f / baseRadius;
        if (depthRatio > 0.1) alpha *= (1 - depthRatio * 0.75);

        if (introProgress > 0.85) {
          const distFromCenter = Math.sqrt(rx * rx + ry * ry);
          const normalizedDist = distFromCenter / (baseRadius * (fov / zDepth));
          if (normalizedDist > 0.7) {
            alpha *= (1 - (normalizedDist - 0.7) * 2.5);
          }
        }

        // 그리드 소멸 시점(0.35)과 완벽히 동기화하여 지루한 후반부 삭제
        const particleFadeStart = 0.3;
        if (p > particleFadeStart) {
          const pfProgress = (p - particleFadeStart) / (1 - particleFadeStart);
          alpha *= (1 - Math.pow(pfProgress, 2.5)); // 더 긴 꼬리를 갖는 부드러운 소멸
        }

        if (alpha < 0.05) continue; // 투명한 파티클 렌더링 스킵 (연산 절약)

        renderbuf.push({
          x: screenX, y: screenY, z: zDepth, size, color: finalColor, alpha,
          rx, ry, rz: rz_f, rad: currentRadius
        });
      }

      renderbuf.sort((a, b) => b.z - a.z);

      const hexAngles = [
        { c: 0.866, s: -0.5 }, { c: 0, s: -1 }, { c: -0.866, s: -0.5 },
        { c: -0.866, s: 0.5 }, { c: 0, s: 1 }, { c: 0.866, s: 0.5 }
      ];

      for (let i = 0; i < renderbuf.length; i++) {
        const b = renderbuf[i];
        context.globalAlpha = b.alpha > 1 ? 1 : (b.alpha < 0 ? 0 : b.alpha);
        context.fillStyle = b.color;

        const rz = (b as any).rz;
        const rad = (b as any).rad;
        const rx = (b as any).rx;
        const ry = (b as any).ry;

        const squash = Math.abs(rz / rad);
        const rLen = Math.sqrt(rx * rx + ry * ry);
        const dx = rLen > 0.01 ? rx / rLen : 1;
        const dy = rLen > 0.01 ? ry / rLen : 0;
        const px = -dy;
        const py = dx;

        context.beginPath();
        for (let j = 0; j < 6; j++) {
          const { c, s } = hexAngles[j];
          const tx = (c * squash * dx + s * px) * b.size;
          const ty = (c * squash * dy + s * py) * b.size;
          if (j === 0) context.moveTo(b.x + tx, b.y + ty);
          else context.lineTo(b.x + tx, b.y + ty);
        }
        context.closePath();
        context.fill();
      }
      context.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      // Only kill ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === sectionRef.current) t.kill();
      });
    };

  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative w-full z-10 bg-[#030308]">
      <div className="h-screen w-full sticky top-0 overflow-hidden" ref={containerRef}>
        <canvas ref={canvasRef} className="block w-full h-full" />

        <div
          ref={textRef}
          className={`absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center mix-blend-screen w-full transition-opacity duration-100 ease-linear ${isMobile ? 'bottom-[50px]' : 'bottom-[25px]'
            }`}
        >
          <div className={`w-full ${isMobile ? 'px-[20px]' : 'px-[60px]'}`}>
            {isMobile ? (
              <img
                src="/assets/hero_title_mobile.svg"
                alt="THE DIGITAL EARTH, CONNECTED TO REALITY"
                className="w-full h-auto"
              />
            ) : (
              <img
                src="/assets/hero_title_desktop.svg"
                alt="THE DIGITAL EARTH, CONNECTED TO REALITY"
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
