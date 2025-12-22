'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- NOISE UTIL ---
const perm = new Uint8Array(512);
const p = new Uint8Array(256);
for (let i = 0; i < 256; i++) p[i] = i;
for (let i = 255; i > 0; i--) {
  const r = Math.floor(Math.random() * (i + 1));
  const t = p[i]; p[i] = p[r]; p[r] = t;
}
for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(t: number, a: number, b: number) { return a + t * (b - a); }
function grad(hash: number, x: number, y: number, z: number) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}
function noise(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);
  const u = fade(x), v = fade(y), w = fade(z);
  const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
  const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
  return lerp(w, lerp(v, lerp(u, grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z)), lerp(u, grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z))), lerp(v, lerp(u, grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1)), lerp(u, grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1))));
}

// --- DETAILED CONTINENT POLYGONS ---
interface ContinentPolygon {
  name: string;
  points: { lat: number; lon: number }[];
  density: number; // 파티클 밀도
}

const CONTINENTS: ContinentPolygon[] = [
  // ========== NORTH AMERICA ==========
  {
    name: 'North America',
    density: 1.2,
    points: [
      { lat: 71, lon: -156 }, { lat: 70, lon: -168 }, { lat: 65, lon: -168 },
      { lat: 60, lon: -164 }, { lat: 56, lon: -158 }, { lat: 58, lon: -137 },
      { lat: 60, lon: -135 }, { lat: 69, lon: -140 }, { lat: 70, lon: -130 },
      { lat: 72, lon: -120 }, { lat: 78, lon: -95 }, { lat: 82, lon: -70 },
      { lat: 75, lon: -60 }, { lat: 65, lon: -60 }, { lat: 55, lon: -56 },
      { lat: 48, lon: -52 }, { lat: 44, lon: -68 }, { lat: 40, lon: -74 },
      { lat: 35, lon: -76 }, { lat: 30, lon: -81 }, { lat: 26, lon: -80 },
      { lat: 25, lon: -81 }, { lat: 25, lon: -82.5 },
      { lat: 29, lon: -83 }, { lat: 30, lon: -88 }, { lat: 29, lon: -95 },
      { lat: 26, lon: -97 }, { lat: 22, lon: -97 }, { lat: 20, lon: -90 },
      { lat: 21, lon: -87 }, { lat: 18, lon: -88 },
      { lat: 15, lon: -89 }, { lat: 10, lon: -83 }, { lat: 8, lon: -78 },
      { lat: 7, lon: -80 }, { lat: 9, lon: -85 },
      { lat: 16, lon: -95 }, { lat: 20, lon: -105 }, { lat: 23, lon: -110 },
      { lat: 28, lon: -115 }, { lat: 32, lon: -117 }, { lat: 30, lon: -113 },
      { lat: 24, lon: -109 }, { lat: 25, lon: -107 },
      { lat: 34, lon: -120 }, { lat: 38, lon: -123 }, { lat: 45, lon: -124 },
      { lat: 49, lon: -125 }, { lat: 55, lon: -133 }, { lat: 60, lon: -145 }
    ]
  },
  {
    name: 'South America',
    density: 1.1,
    points: [
      { lat: 12, lon: -72 }, { lat: 11, lon: -74 }, { lat: 8, lon: -77 },
      { lat: 5, lon: -77 }, { lat: 2.5, lon: -80 }, { lat: -2, lon: -81 },
      { lat: -10, lon: -79 }, { lat: -15, lon: -75 }, { lat: -25, lon: -71 },
      { lat: -35, lon: -73 }, { lat: -45, lon: -75 }, { lat: -53, lon: -75 },
      { lat: -55, lon: -70 }, { lat: -55, lon: -67 }, { lat: -50, lon: -66 },
      { lat: -40, lon: -60 }, { lat: -30, lon: -50 }, { lat: -20, lon: -40 },
      { lat: -10, lon: -35 }, { lat: -5, lon: -35 }, { lat: -2, lon: -40 },
      { lat: 0, lon: -50 }, { lat: 5, lon: -55 }, { lat: 8, lon: -60 },
      { lat: 10, lon: -68 }
    ]
  },
  {
    name: 'Africa',
    density: 1.15,
    points: [
      { lat: 37, lon: -6 }, { lat: 37, lon: 3 }, { lat: 36, lon: 10 },
      { lat: 34, lon: 18 }, { lat: 32, lon: 25 }, { lat: 31, lon: 32 },
      { lat: 28, lon: 34 }, { lat: 22, lon: 36 }, { lat: 15, lon: 42 },
      { lat: 12, lon: 43 }, { lat: 11, lon: 51 }, { lat: 4, lon: 42 },
      { lat: 0, lon: 40 }, { lat: -5, lon: 39 }, { lat: -10, lon: 40 },
      { lat: -15, lon: 40 }, { lat: -20, lon: 35 }, { lat: -26, lon: 33 },
      { lat: -34, lon: 26 }, { lat: -34, lon: 18 },
      { lat: -30, lon: 17 }, { lat: -25, lon: 15 }, { lat: -20, lon: 13 },
      { lat: -15, lon: 12 }, { lat: -10, lon: 13 }, { lat: -5, lon: 12 },
      { lat: 0, lon: 9 }, { lat: 4, lon: 9 }, { lat: 6, lon: 3 },
      { lat: 10, lon: -5 }, { lat: 14, lon: -14 }, { lat: 18, lon: -16 },
      { lat: 21, lon: -17 }, { lat: 26, lon: -13 }, { lat: 30, lon: -10 },
      { lat: 34, lon: -7 }
    ]
  },
  {
    name: 'Europe',
    density: 0.9,
    points: [
      { lat: 71, lon: 26 }, { lat: 70, lon: 30 }, { lat: 66, lon: 29 },
      { lat: 60, lon: 28 }, { lat: 56, lon: 21 }, { lat: 55, lon: 13 },
      { lat: 58, lon: 11 }, { lat: 62, lon: 6 }, { lat: 69, lon: 18 },
      { lat: 70, lon: 33 }, { lat: 68, lon: 52 },
      { lat: 55, lon: 48 }, { lat: 50, lon: 48 }, { lat: 45, lon: 42 },
      { lat: 44, lon: 38 }, { lat: 42, lon: 28 },
      { lat: 40, lon: 26 }, { lat: 38, lon: 23 }, { lat: 36, lon: 15 },
      { lat: 38, lon: 9 }, { lat: 40, lon: 3 }, { lat: 43, lon: -1 },
      { lat: 44, lon: -9 }, { lat: 42, lon: -9 }, { lat: 37, lon: -8 },
      { lat: 36, lon: -6 },
      { lat: 38, lon: -9 }, { lat: 44, lon: -1 }, { lat: 48, lon: -5 },
      { lat: 50, lon: -5 }, { lat: 54, lon: -3 }, { lat: 58, lon: -3 },
      { lat: 59, lon: -1 }, { lat: 56, lon: 2 }, { lat: 52, lon: 2 },
      { lat: 51, lon: 4 }, { lat: 53, lon: 7 }, { lat: 54, lon: 9 }
    ]
  },
  {
    name: 'Asia',
    density: 1.5,
    points: [
      { lat: 68, lon: 52 }, { lat: 73, lon: 75 }, { lat: 78, lon: 100 },
      { lat: 75, lon: 130 }, { lat: 70, lon: 160 }, { lat: 65, lon: 175 },
      { lat: 60, lon: 165 }, { lat: 55, lon: 155 }, { lat: 50, lon: 145 },
      { lat: 40, lon: 125 }, { lat: 38, lon: 122 }, { lat: 32, lon: 121 },
      { lat: 25, lon: 120 }, { lat: 22, lon: 115 }, { lat: 20, lon: 110 },
      { lat: 15, lon: 108 }, { lat: 10, lon: 105 }, { lat: 5, lon: 102 },
      { lat: 2, lon: 102 }, { lat: 5, lon: 100 }, { lat: 10, lon: 98 },
      { lat: 15, lon: 96 }, { lat: 20, lon: 94 }, { lat: 22, lon: 90 },
      { lat: 25, lon: 88 }, { lat: 20, lon: 85 }, { lat: 14, lon: 80 },
      { lat: 8, lon: 77 }, { lat: 15, lon: 72 }, { lat: 22, lon: 68 },
      { lat: 25, lon: 60 }, { lat: 35, lon: 55 }, { lat: 45, lon: 50 },
      { lat: 55, lon: 50 }, { lat: 60, lon: 53 }
    ]
  },
  {
    name: 'Korea',
    density: 1.5,
    points: [
      { lat: 38.5, lon: 128.5 }, { lat: 38, lon: 129.5 }, { lat: 36, lon: 130 },
      { lat: 35, lon: 129.5 }, { lat: 34, lon: 128 }, { lat: 34.5, lon: 126 },
      { lat: 36, lon: 126 }, { lat: 37, lon: 126.5 }, { lat: 38, lon: 124.5 },
      { lat: 40, lon: 124 }, { lat: 42, lon: 124 }, { lat: 43, lon: 130 }
    ]
  },
  {
    name: 'Arctic - Central Cap', density: 3.5,
    points: [
      { lat: 88, lon: 0 }, { lat: 88, lon: 90 }, { lat: 88, lon: 180 },
      { lat: 88, lon: -90 }, { lat: 90, lon: 0 }
    ]
  },
  {
    name: 'Arctic - Euro Sector', density: 2.2,
    points: [
      { lat: 75, lon: 10 }, { lat: 82, lon: 50 }, { lat: 85, lon: 90 },
      { lat: 78, lon: 110 }, { lat: 72, lon: 60 }
    ]
  },
  {
    name: 'Arctic - American Sector', density: 2.2,
    points: [
      { lat: 75, lon: -60 }, { lat: 82, lon: -100 }, { lat: 85, lon: -140 },
      { lat: 78, lon: -160 }, { lat: 72, lon: -90 }
    ]
  },
  {
    name: 'Arctic - Siberian Edge', density: 2.0,
    points: [
      { lat: 74, lon: 120 }, { lat: 80, lon: 140 }, { lat: 82, lon: 170 },
      { lat: 76, lon: 180 }, { lat: 73, lon: 150 }
    ]
  },
  {
    name: 'Arctic - Atlantic Edge', density: 2.0,
    points: [
      { lat: 74, lon: -10 }, { lat: 80, lon: -30 }, { lat: 82, lon: -50 },
      { lat: 76, lon: -60 }, { lat: 73, lon: -30 }
    ]
  },
  {
    name: 'Pacific - Hawaii Cluster', density: 2.5,
    points: [
      { lat: 18, lon: -154 }, { lat: 24, lon: -158 }, { lat: 22, lon: -162 },
      { lat: 19, lon: -160 }, { lat: 18, lon: -156 }
    ]
  },
  {
    name: 'Pacific - Polynesian Triangle', density: 2.0,
    points: [
      { lat: -10, lon: -140 }, { lat: -25, lon: -130 }, { lat: -22, lon: -155 },
      { lat: -15, lon: -150 }
    ]
  },
  {
    name: 'Pacific - Micronesia Belt', density: 1.8,
    points: [
      { lat: 0, lon: 135 }, { lat: 12, lon: 150 }, { lat: 8, lon: 165 },
      { lat: 2, lon: 160 }
    ]
  },
  {
    name: 'Pacific - Galapagos Zone', density: 2.2,
    points: [
      { lat: 3, lon: -90 }, { lat: 0, lon: -88 }, { lat: -3, lon: -92 },
      { lat: 1, lon: -94 }
    ]
  },
  {
    name: 'Australia',
    density: 1.0,
    points: [
      { lat: -10, lon: 142 }, { lat: -12, lon: 136 }, { lat: -13, lon: 130 },
      { lat: -12, lon: 127 }, { lat: -16, lon: 124 }, { lat: -20, lon: 119 },
      { lat: -26, lon: 113 }, { lat: -32, lon: 115 }, { lat: -35, lon: 118 },
      { lat: -35, lon: 135 }, { lat: -38, lon: 141 }, { lat: -39, lon: 146 },
      { lat: -37, lon: 150 }, { lat: -33, lon: 151 }, { lat: -28, lon: 153 },
      { lat: -23, lon: 151 }, { lat: -17, lon: 146 }, { lat: -11, lon: 143 }
    ]
  },
  {
    name: 'Japan',
    density: 1.1,
    points: [
      { lat: 45.5, lon: 141.5 }, { lat: 45, lon: 143 }, { lat: 43, lon: 145 },
      { lat: 42, lon: 145 }, { lat: 41.5, lon: 141 }, { lat: 42.5, lon: 140 },
      { lat: 43.5, lon: 141 }, { lat: 41, lon: 140.5 }, { lat: 40, lon: 140 },
      { lat: 39, lon: 141.5 }, { lat: 38.5, lon: 141 }, { lat: 37, lon: 141 },
      { lat: 36, lon: 140.5 }, { lat: 35.5, lon: 140 }, { lat: 35, lon: 139.5 },
      { lat: 34.5, lon: 137 }, { lat: 35, lon: 135.5 }, { lat: 35.5, lon: 134 },
      { lat: 36, lon: 133 }, { lat: 36.5, lon: 137 }, { lat: 37.5, lon: 138 },
      { lat: 38, lon: 139.5 }, { lat: 34, lon: 131 }, { lat: 33, lon: 130 },
      { lat: 32, lon: 130.5 }, { lat: 31, lon: 131 }, { lat: 32, lon: 132 },
      { lat: 33.5, lon: 132 }, { lat: 34, lon: 133.5 }, { lat: 33.5, lon: 134 },
      { lat: 34, lon: 134.5 }
    ]
  },
  {
    name: 'UK',
    density: 0.95,
    points: [
      { lat: 58.5, lon: -3 }, { lat: 57.5, lon: -2 }, { lat: 57, lon: -2 },
      { lat: 56, lon: -3 }, { lat: 55.5, lon: -4.5 }, { lat: 55, lon: -6 },
      { lat: 56, lon: -5.5 }, { lat: 57, lon: -6 }, { lat: 58, lon: -5 },
      { lat: 58.5, lon: -4 }, { lat: 55, lon: -2 }, { lat: 54, lon: -0.5 },
      { lat: 53, lon: 0 }, { lat: 52, lon: 1.5 }, { lat: 51.5, lon: 1 },
      { lat: 50.5, lon: -1 }, { lat: 50, lon: -5 }, { lat: 51, lon: -5 },
      { lat: 52, lon: -4.5 }, { lat: 53, lon: -3 }, { lat: 54, lon: -3 }
    ]
  },
  {
    name: 'New Zealand',
    density: 1.0,
    points: [
      { lat: -34.5, lon: 173 }, { lat: -35, lon: 174 }, { lat: -36.5, lon: 175 },
      { lat: -38, lon: 178 }, { lat: -39, lon: 178 }, { lat: -40, lon: 176 },
      { lat: -41, lon: 175 }, { lat: -40.5, lon: 173 }, { lat: -39, lon: 174 },
      { lat: -37, lon: 174.5 }, { lat: -35.5, lon: 173.5 }, { lat: -40.5, lon: 173 },
      { lat: -42, lon: 174 }, { lat: -43.5, lon: 172.5 }, { lat: -45, lon: 170 },
      { lat: -46, lon: 168 }, { lat: -46.5, lon: 168 }, { lat: -45.5, lon: 170.5 },
      { lat: -44, lon: 171 }, { lat: -42.5, lon: 171.5 }, { lat: -41, lon: 172 }
    ]
  },
  {
    name: 'Indonesia - Java',
    density: 1.15,
    points: [
      { lat: -6, lon: 105.5 }, { lat: -6.5, lon: 106 }, { lat: -7, lon: 108 },
      { lat: -8, lon: 111 }, { lat: -8.5, lon: 114 }, { lat: -8.5, lon: 115 },
      { lat: -8, lon: 114 }, { lat: -7.5, lon: 112 }, { lat: -6.5, lon: 110 },
      { lat: -6, lon: 107 }
    ]
  },
  {
    name: 'Indonesia - Sumatra',
    density: 1.1,
    points: [
      { lat: 6, lon: 95 }, { lat: 4, lon: 97 }, { lat: 2, lon: 99 },
      { lat: 0, lon: 101 }, { lat: -1, lon: 103 }, { lat: -3, lon: 104 },
      { lat: -5, lon: 105 }, { lat: -6, lon: 104 }, { lat: -4, lon: 102 },
      { lat: -2, lon: 101 }, { lat: 0, lon: 98 }, { lat: 2, lon: 96 },
      { lat: 4, lon: 95 }, { lat: 5.5, lon: 95.5 }
    ]
  },
  {
    name: 'Indonesia - Borneo',
    density: 1.1,
    points: [
      { lat: 7, lon: 117 }, { lat: 6, lon: 116 }, { lat: 4, lon: 115 },
      { lat: 2, lon: 109 }, { lat: 0, lon: 109 }, { lat: -1, lon: 110 },
      { lat: -3, lon: 111 }, { lat: -4, lon: 115 }, { lat: -4, lon: 117 },
      { lat: -2, lon: 118 }, { lat: 0, lon: 118 }, { lat: 2, lon: 117.5 },
      { lat: 4, lon: 118 }, { lat: 6, lon: 117.5 }
    ]
  },
  {
    name: 'Indonesia - Sulawesi',
    density: 1.0,
    points: [
      { lat: 2, lon: 120 }, { lat: 1, lon: 122 }, { lat: -1, lon: 121 },
      { lat: -3, lon: 120 }, { lat: -5, lon: 119.5 }, { lat: -5.5, lon: 120 },
      { lat: -4, lon: 121 }, { lat: -2, lon: 122 }, { lat: 0, lon: 123 },
      { lat: 1, lon: 124 }, { lat: 1.5, lon: 125 }, { lat: 1, lon: 124 }
    ]
  },
  {
    name: 'Philippines',
    density: 1.05,
    points: [
      { lat: 19, lon: 121 }, { lat: 18.5, lon: 122 }, { lat: 17, lon: 122 },
      { lat: 15, lon: 121 }, { lat: 14, lon: 120.5 }, { lat: 14.5, lon: 120 },
      { lat: 16, lon: 120 }, { lat: 17.5, lon: 120.5 }, { lat: 18.5, lon: 120.5 },
      { lat: 9, lon: 125 }, { lat: 7, lon: 126 }, { lat: 6, lon: 125.5 },
      { lat: 6, lon: 124 }, { lat: 7, lon: 123.5 }, { lat: 8, lon: 124 },
      { lat: 9, lon: 124.5 }, { lat: 12, lon: 123 }, { lat: 11, lon: 124 },
      { lat: 10.5, lon: 122.5 }, { lat: 11, lon: 122 }, { lat: 12, lon: 122.5 }
    ]
  },
  {
    name: 'Antarctica - Palmer',
    density: 1.5,
    points: [
      { lat: -63, lon: -58 }, { lat: -64, lon: -62 }, { lat: -66, lon: -60 }
    ]
  },
  {
    name: 'Antarctica - Maven',
    density: 1.5,
    points: [
      { lat: -70, lon: 78 }, { lat: -71, lon: 82 }, { lat: -73, lon: 80 }
    ]
  },
  {
    name: 'Antarctica - Scott',
    density: 1.5,
    points: [
      { lat: -75, lon: 168 }, { lat: -76, lon: 172 }, { lat: -78, lon: 170 }
    ]
  }
];


// 점이 폴리곤 내부에 있는지 확인 (Ray Casting Algorithm)
function isPointInPolygon(lat: number, lon: number, polygon: { lat: number; lon: number }[]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lon, yi = polygon[i].lat;
    const xj = polygon[j].lon, yj = polygon[j].lat;

    const intersect = ((yi > lat) !== (yj > lat))
      && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}


const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const requestRef = useRef<number>(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollState = useRef({ progress: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Configuration - 밀도 극대화 (20,000개)
    const baseParticleCount = 20000;

    const colors = ['#00F0FF', '#00D1FF', '#00A8FF', '#0077FF', '#0044AA'];
    const opacities = [0.9, 0.7, 0.5];

    let canvasWidth = 0;
    let canvasHeight = 0;

    const updateCanvasSize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || !rect.width || !rect.height) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvasWidth = rect.width;
      canvasHeight = rect.height;
    };
    updateCanvasSize();
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(containerRef.current);

    // --- 1. GENERATE CONTINENT PARTICLES (POLYGON-BASED) ---
    const particles: any[] = [];
    for (let i = 0; i < baseParticleCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / baseParticleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * (i + 0.5);
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
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
      const isFill = !isLand && Math.random() < 0.25; // Create background particles for screen-filling transition

      if (isLand || isFill) {
        // Create random "Outer Space" starting positions for the intro
        const randPhi = Math.random() * Math.PI * 2;
        const randTheta = Math.random() * Math.PI;
        const dist = 2.0 + Math.random() * 10.0;
        const startX = Math.sin(randTheta) * Math.cos(randPhi) * dist;
        const startY = Math.cos(randTheta) * dist;
        const startZ = Math.sin(randTheta) * Math.sin(randPhi) * dist;

        particles.push({
          x, y, z,
          startX, startY, startZ,
          isFill, // Flag for transition-only particles
          colorCode: Math.floor(Math.random() * colors.length),
          baseAlpha: opacities[Math.floor(Math.random() * opacities.length)],
          size: (Math.random() * 0.5 + 0.6) * 3.0,
          driftSpeed: Math.random() * 0.4 + 0.1,
          phase: Math.random() * Math.PI * 2,
          isTwinkle: Math.random() < 0.16
        });
      }
    }

    // --- 2. GENERATE GLOBE GRID LINES ---
    const gridLines: { path: any[] }[] = [];
    for (let lat = -80; lat <= 80; lat += 20) {
      const path = [];
      const latRad = lat * Math.PI / 180;
      const y = Math.sin(latRad);
      const r = Math.cos(latRad);
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        const x = r * Math.sin(theta);
        const z = r * Math.cos(theta);
        path.push({ x, y, z });
      }
      gridLines.push({ path });
    }
    for (let lon = 0; lon < 360; lon += 20) {
      const path = [];
      const lonRad = lon * Math.PI / 180;
      for (let i = 0; i <= 64; i++) {
        const latPart = (i / 64) * Math.PI - Math.PI / 2;
        const y = Math.sin(latPart);
        const r = Math.cos(latPart);
        const x = r * Math.sin(lonRad);
        const z = r * Math.cos(lonRad);
        path.push({ x, y, z });
      }
      gridLines.push({ path });
    }


    let currentRotY = 4.2;
    let targetRotX = 0;
    let currentRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasWidth) return;
      const rect = canvas.getBoundingClientRect();
      const cy = rect.height / 2;
      const mouseY = (e.clientY - rect.top - cy) * 0.0001;
      targetRotX = mouseY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=2000', // Reduced from 4000 for faster section transition
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        scrollState.current.progress = self.progress;
      }
    });

    // --- 3. TEXT FADE-IN ANIMATION (Synchronized with intro) ---
    // Fade in starting at 2s, finishing at 3s when particles settle.
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 2.2,
          ease: "power3.out"
        }
      );
    }

    let time = 0;
    const animStartTime = Date.now();
    const introDuration = 2200; // Shortened from 3s to 2.2s for snappier feel
    const animate = () => {
      time += 0.002;
      const p = scrollState.current.progress;
      // Define cinematic transition progress (faster response)
      const transitionStart = 0.1; // Starts earlier (at 10% scroll)
      const transP = Math.max(0, (p - transitionStart) / (1 - transitionStart));
      const easeTrans = transP * transP;

      // Stop auto-rotation quickly as we transition to "Space Dust"
      const rotSpeedScale = Math.max(0, 1 - transP * 4.0);
      currentRotY += 0.0008 * rotSpeedScale;
      currentRotX += (targetRotX - currentRotX) * 0.05 * rotSpeedScale;

      context.clearRect(0, 0, canvasWidth, canvasHeight);

      const minDim = Math.min(canvasWidth, canvasHeight);
      if (minDim === 0) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      const baseRadius = Math.min(minDim * 0.35, 500);
      const fov = 1600;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      // --- DRAW GRID ---
      context.lineWidth = 1.0;

      gridLines.forEach(line => {
        let prevX = 0, prevY = 0, prevDepth = 0;
        let isFirst = true;

        for (const pt of line.path) {
          let rx = pt.x * cosY - pt.z * sinY;
          let rz = pt.z * cosY + pt.x * sinY;
          let ry = pt.y * cosX - rz * sinX;
          let rz_f = rz * cosX + pt.y * sinX;

          // TRANSITION: Grid fades out and grows as we zoom in
          const gridOutFade = Math.max(0, 1 - transP * 3.0);
          const gridZoom = 1 + easeTrans * 4.0;

          const rz_scaled = rz_f * gridZoom;
          const zDepth = fov + rz_scaled * baseRadius;
          if (zDepth < 10) { isFirst = true; continue; }

          const s = fov / zDepth;
          const sx = rx * baseRadius * gridZoom * s + canvasWidth / 2;
          const sy = ry * baseRadius * gridZoom * s + canvasHeight / 2;

          const safeBs = baseRadius || 1;
          let normD = (rz_scaled * baseRadius + safeBs) / (2 * safeBs);
          normD = Math.max(0, Math.min(1, normD));

          if (!isFirst) {
            const avgDepth = (prevDepth + normD) / 2;
            const alpha = 0.35 * (1 - avgDepth * 0.9);

            // INTRO: Grid fades in naturally toward the end of the 3s intro
            const currentTime = Date.now() - animStartTime;
            const introProgress = Math.min(1, currentTime / introDuration);
            const gridIntroFade = Math.max(0, (introProgress - 0.7) * 3.33);

            const clampedAlpha = Math.max(0, alpha * gridIntroFade * gridOutFade);

            if (clampedAlpha > 0.01) {
              context.beginPath();
              context.strokeStyle = `rgba(0, 240, 255, ${clampedAlpha})`;
              context.moveTo(prevX, prevY);
              context.lineTo(sx, sy);
              context.stroke();
            }
          }

          prevX = sx;
          prevY = sy;
          prevDepth = normD;
          isFirst = false;
        }
      });

      // --- DRAW PARTICLES ---
      const renderbuf: any[] = [];
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];

        // --- CINEMATIC INTRO PROGRESSION (0 to 1 over 3s) ---
        const currentTime = Date.now() - animStartTime;
        const introProgress = Math.min(1, currentTime / introDuration);
        // Sharpened easing (Quintic Out) for maximum initial speed and a snappy "snap"
        const easeIntro = introProgress < 1 ? 1 - Math.pow(1 - introProgress, 5) : 1;

        // 1. Position Interpolation (Random Space -> Globe Continent)
        const curX = pt.startX + (pt.x - pt.startX) * easeIntro;
        const curY = pt.startY + (pt.y - pt.startY) * easeIntro;
        const curZ = pt.startZ + (pt.z - pt.startZ) * easeIntro;

        // 2. Size Interpolation (Large Space Dust -> Fine Continent Particle)
        // Starts much larger (5x) to ensure screen-filling density at start
        const introSizeScale = 5.0 - (4.0 * easeIntro);

        // 3. Alpha Fade In
        const introAlpha = Math.min(1, introProgress * 1.5);

        // --- TRANSITION: EXPLOSION & ZOOM ---
        // Balanced expansion to keep particles within screen bounds longer
        const explosionExpansion = easeTrans * 14000 * pt.driftSpeed;

        // Use standard rotation, which now freezes because rotSpeedScale -> 0
        const pCosY = cosY;
        const pSinY = sinY;
        const pCosX = cosX;
        const pSinX = sinX;

        // Floating Space Dust: Subtle random drift to keep density high
        const floatScale = (transP * 18.0);
        const floatX = Math.sin(time * 1.5 + pt.phase) * 80 * floatScale;
        const floatY = Math.cos(time * 1.2 + pt.phase) * 80 * floatScale;
        const floatZ = Math.sin(time * 1.8 + pt.phase) * 80 * floatScale;

        // Radius grows moderately to maintain screen-filling density
        const currentRadius = baseRadius + explosionExpansion + (easeTrans * 3500);
        const x_e = curX * currentRadius + floatX;
        const y_e = curY * currentRadius + floatY;
        const z_e = curZ * currentRadius + floatZ;

        let rx = x_e * pCosY - z_e * pSinY;
        let rz = z_e * pCosY + x_e * pSinY;
        let ry = y_e * pCosX - rz * pSinX;
        let rz_f = rz * pCosX + y_e * pSinX;

        const zDepth = fov + rz_f;
        if (zDepth < 10) continue;

        const scale = fov / zDepth;
        const screenX = rx * scale + canvasWidth / 2;
        const screenY = ry * scale + canvasHeight / 2;

        const safeBaseRadius = baseRadius || 1;
        const normDepth = (rz_f + safeBaseRadius) / (2 * safeBaseRadius);

        // Responsive size multiplier to maintain visual density
        const responsiveSizeScale = baseRadius / 280;

        // Capped Size Growth: 1.0 -> 3.0x as requested
        const transSizeScale = 1.0 + easeTrans * 2.0;

        let alpha = pt.baseAlpha * introAlpha;

        // FILL PARTICLES logic: fade in during transition, invisible during globe state
        if (pt.isFill) {
          alpha *= Math.min(1.0, transP * 3.0);
        }

        // Aggressive Exponential Fade-out for clear section transition
        const transAlphaScale = Math.max(0, 1 - Math.pow(transP, 1.8));
        alpha *= transAlphaScale;

        let size = pt.size * scale * responsiveSizeScale * introSizeScale * transSizeScale;
        let drawColor = colors[pt.colorCode];

        // Depth Fading
        if (normDepth > 0.5) {
          alpha *= (1 - (normDepth - 0.5) * 1.8);
        }

        // RIM DARKENING
        const distFromCenter = Math.sqrt(rx * rx + ry * ry);
        const maxDist = baseRadius || 1;
        const rimRatio = distFromCenter / maxDist;

        if (rimRatio > 0.6 && rz_f < 0) {
          const fadeStrength = (rimRatio - 0.6) * 2.5;
          alpha *= Math.max(0, 1 - fadeStrength);
          size *= (1 - (rimRatio - 0.6) * 0.8);
        }

        // --- CENTER-FOCUSED WHITE TWINKLE LOGIC ---
        let finalColor = drawColor;
        if (pt.isTwinkle) {
          // Sharp, intense twinkle pulse
          const twinklePulse = Math.pow(Math.sin(time * 7.8 + pt.phase * 12) * 0.5 + 0.5, 4);

          const dist = Math.sqrt(rx * rx + ry * ry);
          const centerFactor = Math.max(0, 1 - dist / (baseRadius * 0.8));

          // White flash at peak
          if (twinklePulse > 0.8) {
            finalColor = '#FFFFFF';
          }

          const intensity = 0.5 + (twinklePulse * (1.2 + centerFactor * 1.5));
          alpha *= intensity;
          // Apply horizontal scaling factor here too if needed, but it's already in base 'size'
          size *= (1.0 + twinklePulse * 0.2);
        }

        const mode = rz_f > 0 ? 'D' : 'L';

        // --- FRONT/BACK DIFFERENTIATED TRANSPARENCY ---
        if (mode === 'L') {
          // Front: Maximum visibility (increase alpha and cap at 1.0)
          alpha = Math.min(1.0, alpha * 1.8);
        } else {
          // Back: Keep current subtle transparency
          alpha *= 0.6;
        }

        renderbuf.push({
          x: screenX, y: screenY, z: zDepth, size, color: finalColor, alpha, mode
        });
      }

      renderbuf.sort((a, b) => b.z - a.z);

      renderbuf.forEach(b => {
        if (b.alpha <= 0.02) return;

        // Dark mode (backside) handling
        let drawAlpha = b.alpha;
        if (b.mode === 'D') drawAlpha *= 0.7;

        context.globalAlpha = Math.min(1, Math.max(0.01, drawAlpha));
        context.fillStyle = b.color;

        context.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = Math.PI / 3 * j - Math.PI / 6;
          const px = b.x + b.size * Math.cos(angle);
          const py = b.y + b.size * Math.sin(angle);
          if (j === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        context.closePath();
        context.fill();
      });

      context.globalAlpha = 1;

      // --- TITLE FADE OUT ---
      if (titleRef.current) {
        const titleFade = Math.max(0, 1 - p * 6.0); // Faster fade-out
        titleRef.current.style.opacity = titleFade.toString();
        titleRef.current.style.transform = `translateY(${-p * 300}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []); // Dimensions are handled internally by ResizeObserver

  return (
    <section ref={sectionRef} className="relative w-full z-10 bg-[#050510]">
      <div className="h-screen w-full sticky top-0 overflow-hidden" ref={containerRef}>
        <canvas ref={canvasRef} className="block w-full h-full" />

        <div
          className="absolute bottom-[40px] left-0 z-20 pointer-events-none text-center mix-blend-screen w-full px-[100px]"
          ref={titleRef}
          style={{ opacity: 0 }}
        >
          <svg
            viewBox="0 0 2400 150"
            className="w-full h-auto overflow-visible"
            style={{ filter: 'drop-shadow(0 0 12px rgba(0, 100, 255, 0.4))' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="#0066FF" />
              </linearGradient>

              <mask id="textMask">
                <text
                  x="1200"
                  y="75"
                  dy=".35em"
                  textAnchor="middle"
                  className="uppercase font-extrabold"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  style={{ fontSize: '100px', letterSpacing: '0.02em' }}
                >
                  The Digital Earth, Connected to Reality
                </text>
                <text
                  x="1200"
                  y="75"
                  dy=".35em"
                  textAnchor="middle"
                  className="uppercase font-extrabold"
                  fill="black"
                  stroke="black"
                  strokeWidth="0"
                  style={{ fontSize: '100px', letterSpacing: '0.02em' }}
                >
                  The Digital Earth, Connected to Reality
                </text>
              </mask>
            </defs>

            <rect
              x="0"
              y="0"
              width="2400"
              height="150"
              fill="url(#textGradient)"
              mask="url(#textMask)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
