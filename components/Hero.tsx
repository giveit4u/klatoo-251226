'use client';

import React, { useEffect, useRef, useState } from 'react';
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
// 각 대륙을 폴리곤으로 정의하여 실제 지형 형태 표현
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
      // Alaska & NW Canada
      { lat: 71, lon: -156 }, { lat: 70, lon: -168 }, { lat: 65, lon: -168 },
      { lat: 60, lon: -164 }, { lat: 56, lon: -158 }, { lat: 58, lon: -137 },
      { lat: 60, lon: -135 }, { lat: 69, lon: -140 }, { lat: 70, lon: -130 },
      { lat: 72, lon: -120 }, { lat: 78, lon: -95 }, { lat: 82, lon: -70 },
      // NE Canada & Greenland gap
      { lat: 75, lon: -60 }, { lat: 65, lon: -60 }, { lat: 55, lon: -56 },
      // US East Coast & Florida
      { lat: 48, lon: -52 }, { lat: 44, lon: -68 }, { lat: 40, lon: -74 },
      { lat: 35, lon: -76 }, { lat: 30, lon: -81 }, { lat: 26, lon: -80 },
      { lat: 25, lon: -81 }, { lat: 25, lon: -82.5 },
      // Gulf of Mexico
      { lat: 29, lon: -83 }, { lat: 30, lon: -88 }, { lat: 29, lon: -95 },
      { lat: 26, lon: -97 }, { lat: 22, lon: -97 }, { lat: 20, lon: -90 },
      { lat: 21, lon: -87 }, { lat: 18, lon: -88 },
      // Central America
      { lat: 15, lon: -89 }, { lat: 10, lon: -83 }, { lat: 8, lon: -78 },
      { lat: 7, lon: -80 }, { lat: 9, lon: -85 },
      // Mexico & Baja California
      { lat: 16, lon: -95 }, { lat: 20, lon: -105 }, { lat: 23, lon: -110 },
      { lat: 28, lon: -115 }, { lat: 32, lon: -117 }, { lat: 30, lon: -113 },
      { lat: 24, lon: -109 }, { lat: 25, lon: -107 },
      // US West Coast
      { lat: 34, lon: -120 }, { lat: 38, lon: -123 }, { lat: 45, lon: -124 },
      { lat: 49, lon: -125 }, { lat: 55, lon: -133 }, { lat: 60, lon: -145 }
    ]
  },

  // ========== SOUTH AMERICA ==========
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

  // ========== AFRICA ==========
  {
    name: 'Africa',
    density: 1.15,
    points: [
      // North Coast (Mediterranean)
      { lat: 37, lon: -6 }, { lat: 37, lon: 3 }, { lat: 36, lon: 10 },
      { lat: 34, lon: 18 }, { lat: 32, lon: 25 }, { lat: 31, lon: 32 },
      // Red Sea
      { lat: 28, lon: 34 }, { lat: 22, lon: 36 }, { lat: 15, lon: 42 },
      { lat: 12, lon: 43 },
      // Horn of Africa
      { lat: 11, lon: 51 }, { lat: 4, lon: 42 },
      // East Coast
      { lat: 0, lon: 40 }, { lat: -5, lon: 39 }, { lat: -10, lon: 40 },
      { lat: -15, lon: 40 }, { lat: -20, lon: 35 }, { lat: -26, lon: 33 },
      // South Coast
      { lat: -34, lon: 26 }, { lat: -34, lon: 18 },
      // West Coast
      { lat: -30, lon: 17 }, { lat: -25, lon: 15 }, { lat: -20, lon: 13 },
      { lat: -15, lon: 12 }, { lat: -10, lon: 13 }, { lat: -5, lon: 12 },
      { lat: 0, lon: 9 }, { lat: 4, lon: 9 }, { lat: 6, lon: 3 },
      { lat: 10, lon: -5 }, { lat: 14, lon: -14 }, { lat: 18, lon: -16 },
      { lat: 21, lon: -17 }, { lat: 26, lon: -13 }, { lat: 30, lon: -10 },
      { lat: 34, lon: -7 }
    ]
  },

  // ========== EUROPE ==========
  {
    name: 'Europe',
    density: 0.9,
    points: [
      // Scandinavia
      { lat: 71, lon: 26 }, { lat: 70, lon: 30 }, { lat: 66, lon: 29 },
      { lat: 60, lon: 28 }, { lat: 56, lon: 21 }, { lat: 55, lon: 13 },
      { lat: 58, lon: 11 }, { lat: 62, lon: 6 }, { lat: 69, lon: 18 },
      // Russia North
      { lat: 70, lon: 33 }, { lat: 68, lon: 52 },
      // Russia / Kazakhstan connection
      { lat: 55, lon: 48 }, { lat: 50, lon: 48 }, { lat: 45, lon: 42 },
      // Black Sea
      { lat: 44, lon: 38 }, { lat: 42, lon: 28 },
      // Mediterranean
      { lat: 40, lon: 26 }, { lat: 38, lon: 23 }, { lat: 36, lon: 15 },
      { lat: 38, lon: 9 }, { lat: 40, lon: 3 }, { lat: 43, lon: -1 },
      // Iberia
      { lat: 44, lon: -9 }, { lat: 42, lon: -9 }, { lat: 37, lon: -8 },
      { lat: 36, lon: -6 },
      // Atlantic Coast
      { lat: 38, lon: -9 }, { lat: 44, lon: -1 }, { lat: 48, lon: -5 },
      // British Isles
      { lat: 50, lon: -5 }, { lat: 54, lon: -3 }, { lat: 58, lon: -3 },
      { lat: 59, lon: -1 }, { lat: 56, lon: 2 }, { lat: 52, lon: 2 },
      // North Coast
      { lat: 51, lon: 4 }, { lat: 53, lon: 7 }, { lat: 54, lon: 9 }
    ]
  },

  // ========== ASIA ==========
  {
    name: 'Asia',
    density: 1.5,
    points: [
      { lat: 68, lon: 52 }, { lat: 73, lon: 75 }, { lat: 78, lon: 100 },
      { lat: 75, lon: 130 }, { lat: 70, lon: 160 }, { lat: 65, lon: 175 },
      { lat: 60, lon: 165 }, { lat: 55, lon: 155 }, { lat: 50, lon: 145 },
      // China & East Asia
      { lat: 40, lon: 125 }, { lat: 38, lon: 122 }, { lat: 32, lon: 121 },
      { lat: 25, lon: 120 }, { lat: 22, lon: 115 }, { lat: 20, lon: 110 },
      // SE Asia / Indochina
      { lat: 15, lon: 108 }, { lat: 10, lon: 105 }, { lat: 5, lon: 102 },
      // Malay Peninsula
      { lat: 2, lon: 102 }, { lat: 5, lon: 100 }, { lat: 10, lon: 98 },
      { lat: 15, lon: 96 }, { lat: 20, lon: 94 }, { lat: 22, lon: 90 },
      // India
      { lat: 25, lon: 88 }, { lat: 20, lon: 85 }, { lat: 14, lon: 80 },
      { lat: 8, lon: 77 }, { lat: 15, lon: 72 }, { lat: 22, lon: 68 },
      // Middle East / Caspian
      { lat: 25, lon: 60 }, { lat: 35, lon: 55 }, { lat: 45, lon: 50 },
      { lat: 55, lon: 50 }, { lat: 60, lon: 53 }
    ]
  },

  // ========== KOREA (한국) ==========
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

  // ========== OCEANIA (Australia) ==========
  {
    name: 'Australia',
    density: 1.0,
    points: [
      // North Coast
      { lat: -10, lon: 142 }, { lat: -12, lon: 136 }, { lat: -13, lon: 130 },
      { lat: -12, lon: 127 }, { lat: -16, lon: 124 }, { lat: -20, lon: 119 },
      // West Coast
      { lat: -26, lon: 113 }, { lat: -32, lon: 115 }, { lat: -35, lon: 118 },
      // South Coast
      { lat: -35, lon: 135 }, { lat: -38, lon: 141 }, { lat: -39, lon: 146 },
      // East Coast
      { lat: -37, lon: 150 }, { lat: -33, lon: 151 }, { lat: -28, lon: 153 },
      { lat: -23, lon: 151 }, { lat: -17, lon: 146 }, { lat: -11, lon: 143 }
    ]
  },

  // ========== JAPAN (일본) ==========
  {
    name: 'Japan',
    density: 1.1,
    points: [
      // Hokkaido (홋카이도)
      { lat: 45.5, lon: 141.5 }, { lat: 45, lon: 143 }, { lat: 43, lon: 145 },
      { lat: 42, lon: 145 }, { lat: 41.5, lon: 141 }, { lat: 42.5, lon: 140 },
      { lat: 43.5, lon: 141 },
      // Honshu (혼슈) - North
      { lat: 41, lon: 140.5 }, { lat: 40, lon: 140 }, { lat: 39, lon: 141.5 },
      { lat: 38.5, lon: 141 }, { lat: 37, lon: 141 }, { lat: 36, lon: 140.5 },
      // Honshu - Kanto
      { lat: 35.5, lon: 140 }, { lat: 35, lon: 139.5 }, { lat: 34.5, lon: 137 },
      // Honshu - West
      { lat: 35, lon: 135.5 }, { lat: 35.5, lon: 134 }, { lat: 36, lon: 133 },
      { lat: 36.5, lon: 137 }, { lat: 37.5, lon: 138 }, { lat: 38, lon: 139.5 },
      // Kyushu (규슈)
      { lat: 34, lon: 131 }, { lat: 33, lon: 130 }, { lat: 32, lon: 130.5 },
      { lat: 31, lon: 131 }, { lat: 32, lon: 132 }, { lat: 33.5, lon: 132 },
      // Shikoku (시코쿠)
      { lat: 34, lon: 133.5 }, { lat: 33.5, lon: 134 }, { lat: 34, lon: 134.5 }
    ]
  },

  // ========== UNITED KINGDOM (영국) ==========
  {
    name: 'UK',
    density: 0.95,
    points: [
      // Scotland (스코틀랜드)
      { lat: 58.5, lon: -3 }, { lat: 57.5, lon: -2 }, { lat: 57, lon: -2 },
      { lat: 56, lon: -3 }, { lat: 55.5, lon: -4.5 }, { lat: 55, lon: -6 },
      { lat: 56, lon: -5.5 }, { lat: 57, lon: -6 }, { lat: 58, lon: -5 },
      { lat: 58.5, lon: -4 },
      // England (잉글랜드)
      { lat: 55, lon: -2 }, { lat: 54, lon: -0.5 }, { lat: 53, lon: 0 },
      { lat: 52, lon: 1.5 }, { lat: 51.5, lon: 1 }, { lat: 50.5, lon: -1 },
      { lat: 50, lon: -5 }, { lat: 51, lon: -5 }, { lat: 52, lon: -4.5 },
      { lat: 53, lon: -3 }, { lat: 54, lon: -3 }
    ]
  },

  // ========== NEW ZEALAND (뉴질랜드) ==========
  {
    name: 'New Zealand',
    density: 1.0,
    points: [
      // North Island (북섬)
      { lat: -34.5, lon: 173 }, { lat: -35, lon: 174 }, { lat: -36.5, lon: 175 },
      { lat: -38, lon: 178 }, { lat: -39, lon: 178 }, { lat: -40, lon: 176 },
      { lat: -41, lon: 175 }, { lat: -40.5, lon: 173 }, { lat: -39, lon: 174 },
      { lat: -37, lon: 174.5 }, { lat: -35.5, lon: 173.5 },
      // South Island (남섬)
      { lat: -40.5, lon: 173 }, { lat: -42, lon: 174 }, { lat: -43.5, lon: 172.5 },
      { lat: -45, lon: 170 }, { lat: -46, lon: 168 }, { lat: -46.5, lon: 168 },
      { lat: -45.5, lon: 170.5 }, { lat: -44, lon: 171 }, { lat: -42.5, lon: 171.5 },
      { lat: -41, lon: 172 }
    ]
  },

  // ========== INDONESIA ISLANDS (인도네시아 주요 섬) ==========
  {
    name: 'Indonesia - Java',
    density: 1.15,
    points: [
      // Java (자바)
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
      // Sumatra (수마트라)
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
      // Borneo (보르네오/칼리만탄)
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
      // Sulawesi (술라웨시)
      { lat: 2, lon: 120 }, { lat: 1, lon: 122 }, { lat: -1, lon: 121 },
      { lat: -3, lon: 120 }, { lat: -5, lon: 119.5 }, { lat: -5.5, lon: 120 },
      { lat: -4, lon: 121 }, { lat: -2, lon: 122 }, { lat: 0, lon: 123 },
      { lat: 1, lon: 124 }, { lat: 1.5, lon: 125 }, { lat: 1, lon: 124 }
    ]
  },

  // ========== PHILIPPINES (필리핀) ==========
  {
    name: 'Philippines',
    density: 1.05,
    points: [
      // Luzon (루손)
      { lat: 19, lon: 121 }, { lat: 18.5, lon: 122 }, { lat: 17, lon: 122 },
      { lat: 15, lon: 121 }, { lat: 14, lon: 120.5 }, { lat: 14.5, lon: 120 },
      { lat: 16, lon: 120 }, { lat: 17.5, lon: 120.5 }, { lat: 18.5, lon: 120.5 },
      // Mindanao (민다나오)
      { lat: 9, lon: 125 }, { lat: 7, lon: 126 }, { lat: 6, lon: 125.5 },
      { lat: 6, lon: 124 }, { lat: 7, lon: 123.5 }, { lat: 8, lon: 124 },
      { lat: 9, lon: 124.5 },
      // Visayas
      { lat: 12, lon: 123 }, { lat: 11, lon: 124 }, { lat: 10.5, lon: 122.5 },
      { lat: 11, lon: 122 }, { lat: 12, lon: 122.5 }
    ]
  },

  // ========== SRI LANKA (스리랑카) ==========
  {
    name: 'Sri Lanka',
    density: 1.0,
    points: [
      { lat: 9.5, lon: 80 }, { lat: 9, lon: 80 }, { lat: 7.5, lon: 79.7 },
      { lat: 6, lon: 80 }, { lat: 6, lon: 81.5 }, { lat: 7, lon: 81.8 },
      { lat: 8, lon: 81.2 }, { lat: 9, lon: 81 }, { lat: 9.5, lon: 80.5 }
    ]
  },

  // ========== MADAGASCAR (마다가스카르) ==========
  {
    name: 'Madagascar',
    density: 1.05,
    points: [
      { lat: -12, lon: 49.5 }, { lat: -14, lon: 50 }, { lat: -16, lon: 50 },
      { lat: -20, lon: 48 }, { lat: -23, lon: 47 }, { lat: -25, lon: 45 },
      { lat: -25.5, lon: 44 }, { lat: -24, lon: 43.5 }, { lat: -22, lon: 43.5 },
      { lat: -18, lon: 44 }, { lat: -15, lon: 46 }, { lat: -13, lon: 48 },
      { lat: -12.5, lon: 49 }
    ]
  },

  // ========== GREENLAND (그린란드 / 북극권 지형) ==========
  {
    name: 'Greenland',
    density: 1.0,
    points: [
      { lat: 83, lon: -30 }, { lat: 82, lon: -15 }, { lat: 80, lon: -12 },
      { lat: 75, lon: -18 }, { lat: 70, lon: -22 }, { lat: 65, lon: -35 },
      { lat: 60, lon: -45 }, { lat: 60, lon: -50 }, { lat: 65, lon: -55 },
      { lat: 70, lon: -55 }, { lat: 75, lon: -70 }, { lat: 80, lon: -70 },
      { lat: 83, lon: -60 }, { lat: 83.5, lon: -40 }
    ]
  },

  // ========== HAWAII (하와이 열도) ==========
  {
    name: 'Hawaii',
    density: 2.5, // 작은 섬이므로 밀도를 높임
    points: [
      { lat: 22.5, lon: -160 }, { lat: 21.5, lon: -158 }, { lat: 21, lon: -154.5 },
      { lat: 18.9, lon: -154.5 }, { lat: 19.5, lon: -156 }, { lat: 21.5, lon: -160.5 }
    ]
  },

  // ========== PACIFIC ISLANDS (피지, 바누아투 등) ==========
  {
    name: 'Pacific Islands - Fiji/Vanuatu',
    density: 2.0,
    points: [
      { lat: -15, lon: 167 }, { lat: -18, lon: 168 }, { lat: -21, lon: 169 },
      { lat: -20, lon: 178 }, { lat: -16, lon: 180 }, { lat: -15, lon: 178 }
    ]
  },

  {
    name: 'Pacific Islands - French Polynesia',
    density: 2.0,
    points: [
      { lat: -14, lon: -150 }, { lat: -17.5, lon: -149 }, { lat: -19, lon: -151 },
      { lat: -18, lon: -153 }, { lat: -15, lon: -153 }
    ]
  },

  // ========== ANTARCTICA (남극 대륙) ==========
  {
    name: 'Antarctica',
    density: 1.2,
    points: [
      { lat: -60, lon: 0 }, { lat: -62, lon: 30 }, { lat: -65, lon: 60 },
      { lat: -68, lon: 90 }, { lat: -70, lon: 120 }, { lat: -71, lon: 150 },
      { lat: -72, lon: 180 }, { lat: -71, lon: -150 }, { lat: -70, lon: -120 },
      { lat: -68, lon: -90 }, { lat: -65, lon: -60 }, { lat: -62, lon: -30 },
      // Antarctic Peninsula (남극 반도)
      { lat: -63, lon: -55 }, { lat: -60, lon: -60 }, { lat: -62, lon: -65 },
      { lat: -65, lon: -65 }
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

// 폴리곤 가장자리까지의 최소 거리 계산
function distanceToPolygonEdge(lat: number, lon: number, polygon: { lat: number; lon: number }[]): number {
  let minDist = 999;

  // 극지방 경도 왜곡 보정 (위도에 비례하여 경도 차이 축소)
  const latRad = lat * Math.PI / 180;
  const lonScale = Math.cos(latRad);

  for (let i = 0; i < polygon.length; i++) {
    const p1 = polygon[i];
    const p2 = polygon[(i + 1) % polygon.length];

    // 경도 차이 계산 (180도 경계선 처리)
    let dLon1 = Math.abs(lon - p1.lon);
    if (dLon1 > 180) dLon1 = 360 - dLon1;

    let dLon2 = Math.abs(lon - p2.lon);
    if (dLon2 > 180) dLon2 = 360 - dLon2;

    const dLat1 = lat - p1.lat;
    const dLat2 = lat - p2.lat;

    // 보정된 유클리드 거리 (근사치)
    const dist1 = Math.sqrt(Math.pow(dLat1, 2) + Math.pow(dLon1 * lonScale, 2));
    const dist2 = Math.sqrt(Math.pow(dLat2, 2) + Math.pow(dLon2 * lonScale, 2));

    minDist = Math.min(minDist, dist1, dist2);
  }
  return minDist;
}


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
    const baseParticleCount = isMobile ? 10800 : (isTablet ? 18000 : 28800);
    // 기본 크기 기준값 통일 (지구본 크기에 따라 동적으로 스케일링됨)
    const baseSizeFactor = 2.8;

    const colors = ['#00F0FF', '#00D1FF', '#00A8FF', '#0077FF', '#0044AA'];
    const opacities = [0.9, 0.7, 0.5];

    let canvasWidth = 0;
    let canvasHeight = 0;

    const updateCanvasSize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
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
          isTwinkle: false // 반짝임 제거
        });
      } else if (Math.random() < 0.24) {
        // Create Fill Particles (우주 공간 채우기용)
        const randPhi = Math.random() * Math.PI * 2;
        const randTheta = Math.random() * Math.PI;
        const dist = 3.0 + Math.random() * 20.0;
        const startX = Math.sin(randTheta) * Math.cos(randPhi) * dist;
        const startY = Math.cos(randTheta) * dist;
        const startZ = Math.sin(randTheta) * Math.sin(randPhi) * dist;

        particles.push({
          x, y, z,
          startX, startY, startZ,
          isFill: true,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: opacities[Math.floor(Math.random() * opacities.length)],
          size: (Math.random() * 0.5 + 0.6) * baseSizeFactor,
          driftDir: {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4,
            z: (Math.random() - 0.5) * 4
          },
          driftSpeed: Math.random() * 0.8 + 0.4,
          phase: Math.random() * Math.PI * 2,
          isTwinkle: false // 반짝임 제거
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


    let currentRotY = 4.2; // Atlantic start
    let targetRotX = 0;
    let currentRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasWidth) return;
      const rect = canvas.getBoundingClientRect();
      const cy = rect.height / 2;
      const mouseY = (e.clientY - rect.top - cy) * 0.0001; // 백업 파일의 정교한 반응성 복구
      targetRotX = mouseY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=1000', // 섹션 간 이동 거리를 60% 단축
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

    const animate = () => {
      const now = Date.now();
      time += 0.002;
      const p = scrollState.current.progress;

      // --- TRANSITION PARAMETERS (Compacted Timing) ---
      const transitionStart = 0.05;
      const transP = Math.max(0, (p - transitionStart) / (1 - transitionStart));
      const easeTrans = transP * transP;

      const pExplosion = easeTrans * 1.5;
      const particleExpansion = pExplosion * 35000;

      const pGridZoom = Math.pow(p, 1.4);
      const gridExpansion = pGridZoom * 42000;

      // 그리드와 텍스트 소멸 타이밍을 더 타이트하게 조정
      const gridFadeStart = 0.1;
      const gridFadeEnd = 0.25;
      const fadeProgress = p > gridFadeStart ? Math.min((p - gridFadeStart) / (gridFadeEnd - gridFadeStart), 1.0) : 0;

      if (textRef.current) {
        const textOpacity = Math.max(0, 1 - fadeProgress * 4.5);
        textRef.current.style.opacity = textOpacity.toString();
        // 백업 느낌을 위해 위로 슬라이딩 효과 추가
        const translateY = p * -300;
        textRef.current.style.transform = `translateX(-50%) translateY(${translateY}px)`;
        textRef.current.style.display = (p > 0.35 || textOpacity <= 0) ? 'none' : 'block';
      }

      // 전역 회전 감쇄 (회전 속도 2배 상향: 0.0016)
      const rotSpeedScale = Math.max(0, 1 - transP * 4.0);
      currentRotY += 0.0016 * rotSpeedScale;
      currentRotX += (targetRotX - currentRotX) * 0.05 * rotSpeedScale;

      // "한쪽 방향 회전" 느낌을 완벽히 지우기 위해 영향력 상쇄
      const rotationInfluence = Math.min(1, Math.max(0, 1 - (p - 0.2) * 4));
      const cosY = Math.cos(currentRotY) * rotationInfluence + (1 - rotationInfluence);
      const sinY = Math.sin(currentRotY) * rotationInfluence;
      const cosX = Math.cos(currentRotX) * rotationInfluence + (1 - rotationInfluence);
      const sinX = Math.sin(currentRotX) * rotationInfluence;

      context.clearRect(0, 0, canvasWidth, canvasHeight);

      const fov = 2000;
      const safeZoneHeight = canvasHeight - (isMobile ? 220 : 350);
      const baseRadius = (safeZoneHeight / 2) * 1.02;

      // --- DRAW GRID (Heavy Duty Removal) ---
      // 스크롤 35% 지점(p=0.35) 이후에는 그리드 렌더링 루프를 물리적으로 제거
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

            const gridRadius = (baseRadius + gridExpansion) * 0.985;
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
            let gridAlpha = 0.35 * (1 - Math.pow(fadeProgress, 2));

            // INTRO: 그리드 페이드인은 초반 응집이 어느정도 진행된 후 시작 (백업 로직)
            const introProgress = Math.min(1, (now - animStartTime) / introDuration);
            const gridIntroFade = Math.max(0, (introProgress - 0.7) * 3.33);

            // 0.32 이후에는 절대 투명 (3중 방어 및 재출현 방지)
            if (p > 0.32) gridAlpha = 0;
            if (midZ > 0 && fadeProgress < 0.1) gridAlpha = 0.35 * (1 - midZ * 0.82);

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

        // "사방팔방 자유 유영" 효과 (백업 파일의 floatX/Y/Z 느낌 차용)
        const driftIntensity = p * 3800;
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

        // 트랜지션 시 크기 팽창 로직 (백업의 transSizeScale 조절)
        const transSizeScale = 1.0 + easeTrans * 2.2;
        let size = pt.size * scale * perspectiveFactor * globeScale * introSizeScale * transSizeScale;

        let alpha = pt.baseAlpha * introAlpha;
        if (pt.isFill) {
          // Fill 입자는 트랜지션 시 나타남 (백업 기준)
          alpha *= (0.1 + transP * 2.5);
        }

        let finalColor = pt.color;
        // 반짝임 로직 제거 (twinklePulse 제거)

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

        // 최종 페이드아웃 (정보 섹션 도달 직전)
        const particleFadeStart = 0.9;
        if (p > particleFadeStart) {
          const pfProgress = (p - particleFadeStart) / (1 - particleFadeStart);
          alpha *= (1 - Math.pow(pfProgress, 1.5));
        }

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

      renderbuf.forEach(b => {
        context.globalAlpha = Math.min(1, Math.max(0, b.alpha));
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
      });
      context.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative w-full z-10 bg-[#050510]">
      <div className="h-screen w-full sticky top-0 overflow-hidden" ref={containerRef}>
        <canvas ref={canvasRef} className="block w-full h-full" />

        <div
          ref={textRef}
          className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center mix-blend-screen w-full transition-opacity duration-100 ease-linear"
        >
          <div className={`w-full ${isMobile ? 'px-[20px]' : 'px-[60px]'}`}>
            <svg viewBox={isMobile ? "0 0 1800 400" : "0 0 4500 300"} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0.7" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {isMobile ? (
                <>
                  <g filter="url(#glow)">
                    <text
                      x="50%"
                      y="30%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="font-black"
                      style={{ fontSize: '150px', fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '0.02em', paintOrder: 'stroke fill' }}
                      fill="#050510"
                      stroke="url(#textGradient)"
                      strokeWidth="4.5"
                      strokeLinejoin="round"
                    >
                      THE DECLARATION OF
                    </text>
                    <text
                      x="50%"
                      y="71.25%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="font-black"
                      style={{ fontSize: '150px', fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '0.02em', paintOrder: 'stroke fill' }}
                      fill="#050510"
                      stroke="url(#textGradient)"
                      strokeWidth="4.5"
                      strokeLinejoin="round"
                    >
                      A DIGITAL EARTH
                    </text>
                  </g>
                </>
              ) : (
                <g filter="url(#glow)">
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-black"
                    style={{ fontSize: '160px', fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '0.05em', paintOrder: 'stroke fill' }}
                    fill="#050510"
                    stroke="url(#textGradient)"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  >
                    THE DECLARATION OF A DIGITAL EARTH
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
