
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
export function noise(x: number, y: number, z: number) {
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
export interface ContinentPolygon {
    name: string;
    points: { lat: number; lon: number }[];
    density: number; // 파티클 밀도
}

export const CONTINENTS: ContinentPolygon[] = [
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
export function isPointInPolygon(lat: number, lon: number, polygon: { lat: number; lon: number }[]): boolean {
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
export function distanceToPolygonEdge(lat: number, lon: number, polygon: { lat: number; lon: number }[]): number {
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
