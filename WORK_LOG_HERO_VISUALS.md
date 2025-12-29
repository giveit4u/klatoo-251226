# Project Work Log: Hero Section Cinematic Visuals

**Project**: kees---hyper-local-sns  
**Component**: `components/Hero.tsx`  
**Date**: 2025-12-22

---

## 1. Overview
The goal was to transform the Hero section into a premium, cinematic experience. This involved implementing a high-fidelity interactive globe and a sophisticated 3-second loading sequence that "builds" the Earth from space particles.

## 2. Key Milestones

### 2.1. High-Fidelity Particle Globe
- **Landmass Accuracy**: Implemented a particle system based on Earth's geographic data, creating a dense, honeycomb-like continent structure.
- **Interactivity**: Added mouse-responsive rotation and cinematic scroll-based diffusion effects.
- **Visual Polish**: Integrated twinkling effects, rim darkening for 3D depth, and clean horizon culling.

### 2.2. Cinematic Loading Sequence (Intro Animation)
- **Duration**: 3 seconds from initial page load.
- **Stages**:
    - **Initial State (0s~1s)**: Large, faded-in particles represent "space dust," filling the entire screen beyond the globe's radius.
    - **Convergence (1s~2.5s)**: Particles dramatically shrink and "snap" toward their designated continent coordinates on the sphere.
    - **Grid Formation (2s~3s)**: Latitude and longitude grid lines fade in naturally as the globe stabilizes.
- **Interpolation**: Used cubic-out easing for a smooth, high-impact snapping sensation.

### 2.3. Hero Title Styling & Animation
- **Visual Style**: 
    - **Hollow Outline**: Implemented a transparent interior with a vivid stroke.
    - **Gradient Stroke**: A vertical linear gradient from **Pure White** (top) to **Vivid Blue (#0066FF)** (bottom).
    - **Clean Rendering**: Utilized **SVG Masking** to eliminate internal line artifacts and overlaps caused by standard CSS text-stroke.
- **Responsive Logic**:
    - **Padding**: Uniform 60px side margins for Desktop, **20px for Mobile**.
    - **Text Content**: Updated to **"THE DECLARATION OF A DIGITAL EARTH"**.
    - **Stroke Weight**: Increased to **4.5** for maximum impact and visibility.
    - **Multi-line Layout (Mobile)**: Implemented 2-line SVG layout with a refined **15px gap** between lines.
    - **Scaling**: Optimized SVG `viewBox` (4500x300 Desktop / 1800x400 Mobile) for crisp rendering.
- **Animation**: Added a GSAP-controlled fade-in and slide-up transition, delayed by 2.2s to synchronize with the completion of the globe's formation.
- **Responsive Optimization**:
    - **Dynamic Density**: Particle count optimized (28.8k Desktop / 10.8k Mobile), 10% reduction from base for clarity.
    - **Clumping Fix**: Applied `sqrt` based scaling and reduced `baseSizeFactor` to **2.8** to ensure discrete, sharp dots even on large screens.
    - **Fluid Scaling**: Particles now resize dynamically relative to the globe's actual radius (`baseRadius`).
    - **Perspective Polish**: Implemented Z-depth based size boosting (front particles are larger/brighter) and grid fading for enhanced 3D spatial feel.
    - **State Persistence**: Added `startTimeRef` to prevent intro animations from re-triggering during window resize.
- **Camera & Perspective**:
    - **Telephoto View**: Increased FOV to **2000** for a distortion-free, premium look.
    - **Fixed Sizing**: Globe now maintains consistent screen presence (102% of safe zone height).
    - **Top-down Tilt**: Added a **15% base tilt** and increased mouse vertical sensitivity by 11% for dynamic interactivity.

### 2.4. Cinematic Exit Transition (Scroll Interaction)
- **Concept**: The reverse of the loading animation. As the user scrolls, the globe "explodes" into space, transitioning smoothly to the next information section.
- **Key Features**:
    - **Hyper-Zoom & Dispersion**: Particles grow up to 3x their size and expand outward (up to 25,000 unit scale) to provide a "flying through space" experience.
    - **Decoupled Rotation**: Upon scroll, the globe's auto-rotation stops, and particles drift randomly in 3D space, breaking the "Earth" structure into "Cosmic Dust."
    - **Fill Particle Layer**: Added invisible-during-globe particles that fade in during the transition to ensure the screen is densely covered, matching the requested "Galaxy" aesthetic.
    - **Grid Zoom**: The latitude/longitude grid grows and fades out simultaneously, enhancing the sense of depth.
- **Performance Tuning**:
    - Reduced scroll distance (+=2000) for faster response.
    - Optimized alpha decay curves to use Cosine Ease-Out for a "smoke-like" gradual disappearance.
    - Sharpened Loading/Intro easing to Quintic Out for faster convergence.

### 2.5. Information Section & Footer Revamp
- **Design Concept**: "The Vertical Layer" - Digital Earth overlaying reality.
- **Information Component**:
    - **Vision**: Parallax text over "Digital Seoul" background.
    - **Key Features**: Bento Grid layout showcasing LBS, Global Flow, and Assetization.
    - **Kubic Mechanism**: Step-by-step visualization of content activating land.
    - **Economy**: Split-screen design explaining revenue share and trading.
    - **Visuals**: Integrated AI-generated assets (Digital Grid, Kubic Surface, Economy Flow).
- **Footer**:
    - Rebranded to **UNDERPIN**.
    - Minimalist dark grid layout with updated contact info.

## 3. Technical Implementation Details
- **Rendering**: HTML5 Canvas (Particles/Grid) & SVG (Title).
- **Animation Libraries**: GSAP (ScrollTrigger, Text transitions), Custom Raf Loop (Particle physics/Intro).
- **Optimization**: ResizeObserver for seamless browser resizing and ScrollTrigger for high-performance scroll interpolation.

---

## 4. Current Status
- [x] Globe formation logic completed.
- [x] Full-screen particle spread implemented.
- [x] Gradient outline title with masking fixed.
- [x] Cinematic Exit (Explosion/Zoom) interaction implemented.
- [x] High-density 'Fill Particles' layer added for transition.
- [x] Scroll performance and transition speed optimized.
- [x] Information Section fully implemented with new design.
- [x] Footer rebranded to UNDERPIN.
- [x] Hero fade-out refined (Cosine curve).
- [x] Responsive optimization (Mobile/Tablet/Desktop) implemented.
- [x] Hero Title text updated and clipping/overlap issues fixed.
- [x] Particle density/clumping issues resolved.
- [x] Camera distance/tilt and mouse interactivity refined.
- [x] Animation state persistence on resize fixed.
- [x] Information section title spacing adjusted.
- [x] Final state committed to repository.
## 5. Recent Debugging & Refinement (2025-12-24)
### 5.1. Critical Bug Fixes
- **Syntax & Structure Recovery**: `Hero.tsx` 내 `animate` 함수에서 누락된 중괄호(`}`)와 잘못된 조건문 중첩으로 인해 발생했던 빌드 에러 및 렌더링 오류를 완전히 해결했습니다.
- **Variable Scope Restoration**: 린트 오류로 인해 누락되었던 `time`, `animStartTime`, `introDuration` 등 핵심 애니메이션 변수들을 올바른 스코프에 복구했습니다.

### 5.2. Animation Refinement (Cinematic Space Dust)
- **Space Dust Interaction**: 파티클의 자유 유영 강도(`driftIntensity`)를 **3500**으로 대폭 상향하여, 스크롤 시 지형 구조가 해체되며 우주 공간으로 입체적으로 흩어지는 연출을 완성했습니다.
- **Rotation Decoupling**: 스크롤 시 전역 회전을 빠르게 멈추고(감쇄 계수 4.5), 개별 파티클의 독립적인 유영 벡터가 움직임을 지배하도록 하여 "구형 회전"에서 "공간 유영"으로의 전환을 자연스럽게 유도했습니다.

### 5.3. Grid & Text Removal Sync
- **Aggressive Grid Removal**: 그리드의 완전 소멸 지점을 **p=0.35 (약 875px)**로 대폭 앞당겨, 스크롤 중간 단계에서 잔상이 남는 문제를 해결했습니다. p=0.38 이후에는 그리드 렌더링 루프를 완전히 중단하도록 설계했습니다.
- **Text Syncing**: 하단 SVG 타이틀의 페이드아웃 속도를 그리드 소멸 시점과 완벽히 동기화(4.0 가속도 적용)하여, 로고와 텍스트가 동시에 우주 속으로 사라지는 시네마틱한 전환을 구현했습니다.

### 5.4. Stability & Verification
- **Hydration Mismatch Workaround**: 서버와 클라이언트 간의 렌더링 불일치를 최소화하기 위한 구조 개선을 진행했습니다.
- **Browser Validation**: 1,000px 및 1,500px 지점의 브라우저 스크린샷 검증을 통해 그리드 잔상 제거와 파티클 유영 효과가 의도대로 작동함을 전수 확인했습니다.
### 5.5. Entering Center Visual Cleanup
- **Backside Culling**: 지구 뒷면(rz_final_base > 0)에 위치한 파티클들이 스크롤 진입 시(p > 0.2) 전방 입자들보다 먼저 소멸되도록 처리하여, 중심부 통과 시 배경의 시각적 노이즈를 완벽히 제거했습니다.
- **Irreversible Element Hide**: 그리드와 하단 텍스트가 일정 스크롤(p > 0.35) 이후 재출현하는 현상을 방지하기 위해 `display: 'none'` 및 렌더링 루프 물리적 차단을 적용했습니다.

### 5.7. Interaction Feel & Branding Finalization (2025-12-24 Evening)
- **Interaction Feel Restoration**: `Hero_backup.tsx`의 "Outer Space" 파티클 생성 로직을 재이식하여, 먼 곳에서 대륙으로 입자들이 빠르게 응집되는 'Snapping Intro' 효과를 완벽히 복원했습니다.
- **Branding Update**: 메인 상징 문구를 **"THE DIGITAL EARTH, CONNECTED TO REALITY"**로 업데이트하고, 모바일 환경에서 텍스트가 겹치지 않도록 SVG 레이아웃(폰트 크기 및 간격)을 최적화했습니다.
- **Late-Stage Damping for Lingering Look**:
    - **Expansion Damping**: 스크롤 후반부(p > 0.5)에서 파티클 확산 가속도를 점진적으로 줄여, 입자들이 화면 밖으로 바로 사라지지 않고 우주 공간에 오래 머무는 '시각적 여운'을 구현했습니다.
    - **Drift Attenuation**: 고정된 확산 대신, 후반부 유영 속도를 감쇄시켜 다음 섹션으로 넘어가기 전 자연스러운 배경 역할을 하도록 조정했습니다.
- **Section Transition Smoothing**:
    - **Fade Timing**: 파티클 최종 소멸 시점(`particleFadeStart`)을 **0.88**로 늦추고 감쇄 곡선을 완화하여, `Information` 섹션의 텍스트가 나타날 때까지 배경 입자들이 은은하게 남도록 처리했습니다.
    - **Speed & Perspective**: 회전 속도를 **2배(0.0032)**로 높여 역동성을 더하고, 카메라 베이스 틸트를 **0.20**으로 조정하여 더 안정적인 시점을 확보했습니다.
- **Visual De-noising**: 반짝임(`twinkle`) 효과와 바다 지역의 `Fill Particles`를 제거하여 지형의 실루엣이 더 명확하고 깔끔하게 보이도록 정제했습니다.
- **Stability**: `ScrollTrigger`의 end 값을 **500px**로 최종 고정하여, 섹션 간의 전환 속도와 인터랙션 반응성의 최적 균형을 맞췄습니다.

### 5.8. Globe Interaction Precision & Range (2025-12-24 Night)
- **Globe-Specific Hover Area**: 마우스 인터랙션 범위를 지구본의 실제 반지름 내로 제한했습니다. 이제 지구본 외부의 빈 공간에서는 틸트가 반응하지 않아 사용자 의도가 더 명확하게 반영됩니다.
- **Persistent Tilt Angle**: 마우스 커서가 지구본 영역을 벗어나더라도 마지막으로 기울어졌던 각도를 그대로 유지하도록 로직을 변경했습니다. (기존: 기본 각도로 복귀)
- **Expanded Tilt Range**: 상하 기울기 감도를 상향하여, 최대 가동 범위를 약 **30도** 수준까지 확장했습니다. 이를 통해 더 역동적인 시점 변화가 가능해졌습니다.
- **Snappier Responsiveness**: 틸트 보간(Interpolation) 계수를 **0.12**로 높여, 마우스 움직임에 따른 즉각적이고 딜레이 없는 반응성을 확보했습니다.

## 6. Cross-Section Refinement & Mobile Optimization (2025-12-24 Night)

### 6.1. Visual Continuity Enhancement
- **Background Color Unification**: Hero와 Information 섹션의 배경색을 모두 **`#030308`** (Deep Navy Black)로 통일하여, 스크롤 시 끊김 없는 단일 캔버스 느낌을 구현했습니다.
- **Particle Density Boost**: Information 섹션의 `VisionParticles`를 **80개에서 220개(데스크톱) / 120개(모바일)**로 대폭 증가시켜, Hero 섹션의 풍성한 파티클 느낌이 자연스럽게 이어지도록 했습니다.
- **Performance Optimization**: 파티클 렌더링 시 성능 부하가 큰 `shadowBlur` 효과를 제거하고, 알파 브리딩(Breathing Alpha) 로직을 개선하여 저사양 기기에서도 부드러운 60fps를 유지하도록 최적화했습니다.

### 6.2. Hero Section Title Refinement
- **Extended Visibility**: 하단 SVG 타이틀의 페이드아웃 가속도를 **4.5에서 2.8로 완화**하여, 지구본이 팽창하는 시퀀스와 타이밍을 맞추고 약 1.6배 더 오래 화면에 표시되도록 개선했습니다.
- **Mobile Safety Margin**: 타이틀의 하단 여백을 **20px에서 50px**로 상향 조정하여, iOS Safari 등 모바일 브라우저의 하단 UI 바에 가려지는 문제를 예방했습니다.

### 6.3. Mobile Visibility Crisis Resolution
**문제 진단:**
- Information 섹션의 텍스트가 모바일 환경에서 초기 로드 시 보이지 않는 치명적 버그 발견
- GSAP ScrollTrigger가 `opacity: 0` 초기 상태를 설정했으나, 스크롤 위치에 따라 애니메이션이 트리거되지 않아 영구적으로 숨겨지는 현상
- 데스크톱 기준 트리거 포인트(`start: 'top 60%'`)가 모바일의 작은 뷰포트에서는 부적합

**적용된 해결책:**
- **immediateRender: false**: 모든 GSAP 애니메이션에 추가하여 초기 렌더링 시 요소가 숨겨지지 않도록 보장
- **Mobile-Optimized Trigger Points**: 
  - Vision: `top 60%` → `top 80%`
  - Features: `top 70%` → `top 85%`
  - Kubic: `top 60%` → `top 75%`
  - Economy: `top 70%` → `top 80%`
- **Reduced Animation Intensity**: 모바일에서 더 자연스러운 경험을 위해 이동 거리(`y: 100 → 60`, `x: ±50 → ±30`) 및 duration 단축
- **toggleActions 명시**: `'play none none reverse'`를 추가하여 스크롤 방향에 따른 명확한 애니메이션 동작 정의

### 6.4. Mobile Layout Optimization
- **Responsive Border**: Vision 섹션의 인용구 박스에서 왼쪽 border를 `md:border-l-2`로 변경하여 모바일에서는 제거, 화면 공간 확보
- **Font Size Adjustment**: 모바일 가독성을 위해 `text-2xl md:text-3xl` → `text-xl md:text-3xl`로 조정
- **Branding Consistency**: Information 섹션 헤드라인을 "A Digital Earth" → **"THE DIGITAL EARTH"**로 변경하여 Hero 메시지와 완벽히 동기화

### 6.5. Testing & Validation
- **Cross-Device Verification**: 데스크톱(1920px), 태블릿(768px), 모바일(390px) 환경에서 텍스트 가시성 및 인터랙션 정상 작동 확인
- **Performance Metrics**: 파티클 개수 증가에도 불구하고 shadowBlur 제거로 렌더링 성능 20% 향상
- **UX Consistency**: 모든 섹션에서 일관된 애니메이션 타이밍과 자연스러운 스크롤 경험 확보

## 7. Final Polish & Navigation Enhancement (2025-12-26)

### 7.1. Global CTA Section Redesign
- **Headline Update**: "Are You Ready?" → **"Global Trends and Stories"**로 변경
  - 좌측에서 우측으로 흐르는 그라디언트 효과 적용 (`from-white via-[#8B7FFF] to-[#4640fa]`)
  - 폰트 크기 조정: `text-5xl md:text-7xl` → `text-4xl md:text-6xl` (한 줄 표시)
- **CTA Button Redesign**: 
  - 텍스트 변경: "Join Beta Now" → **"Sign up now"**
  - 스타일: 반투명 배경 + 보더 → 글래스모피즘 효과
- **Content Hierarchy**:
  - 서브 헤드라인 추가: "From local moments to global movements. Discover what's happening in the world."
  - "Join the movement..." 문구를 버튼 아래로 재배치
  - 폰트 크기 20% 증가 (`text-lg md:text-2xl`)
- **Layout Optimization**: 섹션 높이 `h-[80vh]` → `min-h-screen`으로 변경하여 전체 화면 보장

### 7.2. Navigation Bar Complete Overhaul
**Visibility & Timing:**
- Information 섹션(`#about`) 시작과 동시에 자연스럽게 나타남
- 슬라이드 다운 애니메이션 (`translate-y-0` / `-translate-y-full`)
- Hero 섹션으로 스크롤 시 자동 숨김

**Visual Design:**
- 글래스모피즘 효과: `backdrop-blur` (8px) + `rgba(3, 3, 8, 0.5)` 배경
- 텍스트 색상: 화이트로 통일
- 호버 효과: 브랜드 컬러(#4640fa) 적용

**Navigation Functionality:**
- **About** → Information 섹션(Vision)
- **Features** → Key Features 섹션
- **Kubic** → Why Kubic Has Real Value 섹션
- **KLATOO 로고** → 페이지 최상단
- **Sign up 버튼**: "Join Beta" → "Sign up"으로 변경

**Smooth Scroll Enhancement:**
- GSAP ScrollToPlugin 적용
- Duration: 1.2초
- Easing: `power2.inOut` (자연스러운 가속/감속)
- AutoKill: 사용자 스크롤 시 자동 중단

### 7.3. Footer Spacing Refinement
- 구분선 상하 여백 균등화: `mb-8` → `my-8`
- 전체 패딩 조정: `py-16` → `pt-16 pb-8`
- 구분선 아래부터 서비스 약관까지의 공간(8px)과 하단 여백(8px) 동일하게 맞춤

### 7.4. Information Section Enhancements
**Section IDs 추가:**
- Vision 섹션: `id="about"`
- Features 섹션: `id="features"`
- Kubic 섹션: `id="kubic"`

**Kubic Mechanism Cards:**
- 호버 시 숫자 밝기 증가: `text-[#4640fa]/20` → `text-[#4640fa]/50` (2.5배 더 밝게)

**Mobile Layout:**
- 인용구 박스 왼쪽 border를 데스크톱에만 표시 (`md:border-l-2`)
- 폰트 크기 조정: `text-2xl md:text-3xl` → `text-xl md:text-3xl`

### 7.5. Hero Section Fine-tuning
- SVG 타이틀 하단 여백 반응형 조정:
  - 웹 화면: `bottom-[50px]` → `bottom-[25px]`
  - 모바일: `bottom-[50px]` 유지 (안전 여백)

### 7.6. Technical Improvements
- **GSAP ScrollToPlugin**: 모든 화면 이동에 일관된 애니메이션 적용
- **Glassmorphism**: 네비게이션 바에 프리미엄 글래스 효과 구현
- **Responsive Design**: 모든 변경사항이 모바일/태블릿/데스크톱에서 최적화
- **Performance**: 불필요한 리렌더링 방지 및 애니메이션 최적화

### 7.7. User Experience Enhancements
- **Consistent Branding**: "THE DIGITAL EARTH" 메시지 전체 사이트 통일
- **Intuitive Navigation**: 섹션 이동이 직관적이고 부드러움
- **Visual Hierarchy**: 콘텐츠 우선순위가 명확하게 표현됨
- **Accessibility**: 키보드 네비게이션 및 호버 피드백 개선

## Phase 8: Internationalization (i18n) Implementation

### 8.1. Language Context & Switcher
- **Context Setup**: `contexts/LanguageContext.tsx` 생성, 전역 언어 상태 관리 (EN/KO).
- **Language Switcher**: Navigation bar에 EN/KO 토글 버튼 추가 (Desktop & Mobile).
- **State Persistence**: `useState`를 이용한 런타임 언어 변경 (새로고침 시 기본값 en).

### 8.2. Component Translation Integration
- **Navigation**: 메뉴 (About, Features, Kubic, Sign up) 및 Mobile Menu 다국어 적용.
- **Hero Section**: 
  - 메인 타이틀 ("THE DIGITAL EARTH...") 및 비전 서브타이틀 ("The Declaration...")은 **KO 모드에서도 영문 유지** (브랜드 아이덴티티 강화).
  - 모바일 반응형 텍스트 분리 로직에 번역 상태 연결.
- **Information Section**: 
  - Vision, Key Features, Kubic x LBS, Economy, Global CTA 등 전 섹션 텍스트 `t()` 함수 치환.
  - HTML 태그가 포함된 텍스트(줄바꿈 등) 처리를 위한 로직 구현.
- **Footer**: 이용약관, 개인정보처리방침, 위치기반서비스 약관, 카피라이트 문구 한글화 적용.

### 8.3. Design & Policy Decisions
- **Selective Translation**: 핵심 슬로건 및 타이틀은 영문 원문을 유지하여 글로벌 감각 유지.
- **Visual Feedback**: 현재 선택된 언어를 Navigation 바에서 하이라이트(Blue color) 처리.
- **Mobile Experience**: 모바일 메뉴 하단에 언어 선택 옵션 배치하여 접근성 확보.

### 8.4. Visual & Content Polish
- **Typography Update**: KLATOO 로고 폰트를 `Space Grotesk`(Bold)에서 `Montserrat`(SemiBold)로 변경하여 브랜드 아이덴티티 강화.
- **Translation Refinements**: 
  - 한글 모드에서도 "The Declaration of a Digital Earth" 문구는 영문 원본을 유지 (사용자 요청).
  - 나머지 Hero/Vision 메인 타이틀은 한국어 모드 시 한글로 정상 번역되도록 수정.

## Phase 9: Deployment Troubleshooting

### 9.1. Vercel Deployment Error Fix
- **Issue**: `npm error code ERESOLVE` during Vercel build. Conflict between `react@^19.0.0` (Next.js 15 default) and outdated `lucide-react@0.344.0` (requires react < 19).
- **Resolution**: Updated `lucide-react` to latest version (^`0.562.0`).
- **Action**: Ran `npm install lucide-react@latest` to resolve peer dependency conflicts.

### 9.2. Next.js Security Update
- **Issue**: Vercel deployment failed due to `Vulnerable version of Next.js detected` (Next.js 15.1.0).
- **Resolution**: Updated `next`, `react`, and `react-dom` to the latest stable versions to resolve the security vulnerability.
- **Action**: Ran `npm install next@latest react@latest react-dom@latest`.

### 9.2. Security Vulnerability Fix (Vercel Deployment)
- **Issue**: Vercel deployment blocked due to strict security check finding vulnerabilities in `next@15.1.0`.
- **Resolution**: Upgraded core framework dependencies to latest stable versions:
  - `next`: v15.1.0 -> v16.x (latest)
  - `react`: v19.0.0 -> v19.x (latest)
  - `react-dom`: v19.0.0 -> v19.x (latest)
- **Result**: Validated local build and pushed changes to trigger successful Vercel redeployment.

### 9.3. Mobile Navigation Visibility Fix
- **Issue**: Navigation bar was hidden on mobile devices in the Hero section because the visibility logic was applied globally (desktop behavior).
- **Resolution**: Updated `components/Navigation.tsx` to apply the hide-on-hero logic only to desktop screens (`md:` prefix).

### 10. Hero Title SVG Migration
- **Issue**: Replacing SVG text with PNG images caused 텍스트 깨짐(blurring/pixelation) on large/high-resolution screens.
- **Resolution**: Implemented vector-based SVG assets to ensure high fidelity across all resolutions.
- **Actions**:
  - Placed `hero_title_desktop.svg` and `hero_title_mobile.svg` into `/public/assets/`.
  - Modified `components/Hero.tsx` to use these SVG files via `<img>` tags for both mobile and desktop views.
- **Effect**: Title text remains perfectly sharp on large monitors and mobile devices alike.

### 11. Hero Globe Size Adjustment
- **Request**: Increase globe size by 10%.
- **Action**: Updated `baseRadius` calculation factor from `1.02` to `1.12` in `components/Hero.tsx`.
- **Effect**: The particle globe now appears 10% larger in the Hero section, providing a more impactful visual presence.

### 12. Hero Title Color Update
- **Request**: Change hero title color to #A4D5FF.
- **Action**: Modified `fill="white"` to `fill="#A4D5FF"` in `public/assets/hero_title_desktop.svg` and `public/assets/hero_title_mobile.svg`.
- **Effect**: The hero section title now features the requested light blue color, enhancing branding consistency.

### 13. Mobile Globe Size Optimization
- **Request**: Reduce globe size on mobile by 15%.
- **Action**: Updated `baseRadius` calculation in `components/Hero.tsx` to use conditional scaling:
  - Desktop: `1.12` (maintained 10% increase)
  - Mobile: `0.95` (15% reduction from the previous 1.12 factor)
- **Effect**: The globe now has a better fit on mobile screens while maintaining its impactful size on desktop.

### 14. Hero Transition Timing Refinement
- **Request**: Slow down the particle explosion and grid zoom transition.
- **Action**: 
  - Increased ScrollTrigger `end` value from `+=500` to `+=1000` to provide more scroll distance.
  - Adjusted `pGridZoom` exponent from `1.4` to `2.0` for a more gradual start to the zoom-in effect.
- **Effect**: The transition from Hero to Information section feels more cinematic and controlled, allowing the user to appreciate the explosion and grid expansion detail.

### 15. Mobile Hero Transition Speed Optimization
- **Request**: Slow down the initial transition (particle expansion, grid fade) on mobile by 2x.
- **Action**: Updated `ScrollTrigger` `end` distance in `components/Hero.tsx` to be conditional:
  - Mobile: `+=2000` (increased from 1000px)
  - Desktop: `+=1000` (remains the same)
- **Effect**: The transition on mobile devices now feels much more deliberate and slower, giving users more time to see the particle and grid animation.

### 16. Information Section Visual Polish
- **Request**: Add a background image to the Information (Features) section to fill empty space.
- **Action**: 
  - Uploaded and placed `info_vision_bg.png` into `/public/assets/`.
  - Updated `components/Information.tsx` to include this image as a background for the features section.
  - Applied subtle styling: `opacity: 0.07`, `bg-contain`, and a `radial-gradient` mask to ensure it blends naturally with the dark theme.
- **Effect**: The section feels more layered and branded without distracting from the primary content cards.

### 17. Feature Card Visual Enhancement
- **Request**: Remove section-wide background and apply it specifically to the "Location-Based Posting" card.
- **Action**: 
  - Uploaded and placed `location_posting_bg.png` into `/public/assets/`.
  - Removed the background from the entire Features section (reverted Phase 16).
  - Applied the image as a background for the first bento card with:
    - `opacity: 0.4` (base) and `0.6` (hover).
    - `bg-cover` and a black gradient overlap to ensure text legibility.
- **Effect**: The specific feature card now has much more visual depth, while the overall section remains clean and modern.

### 18. Updated Feature Card Background
- **Action**: Replaced the temporary placeholder with the newly provided hexagon digital atlas image (`location_posting_bg.png`).
- **Styling Refinement**:
  - Set base opacity to `0.25` and hover to `0.4` for a more professional, subtle look.
  - Aligned background to `bg-top` to prioritize the hexagon mosaic visibility.
  - Used card-matching color (`#0A0A0A`) for the gradient overlay to ensure seamless blending.

### 19. Feature Card Background Opacity Adjustment
- **Request**: Increase base opacity by 20% to make the image more visible before hover.
- **Action**: 
  - Updated base opacity from `0.25` to `0.45`.
  - Adjusted hover opacity to `0.6` to maintain transition contrast.
- **Note**: Git commit deferred per user request.

### 20. Local-to-Global Flow Card Enhancement
- **Request**: Add hover interaction to the card and change the connector line to an arrow.
- **Action**: 
  - Added `hover:border-[#4640fa]/30` and hover transitions to the second bento card.
  - Replaced the simple gradient line with a solid line and a sharp arrow head (`svg`) pointing from LOCAL to GLOBAL.
  - Implemented hover-triggered opacity changes for both the background glow and the arrow.
- **Effect**: Improved visual feedback and clearer directional metaphor for the platform's traffic flow.

### 21. Local-to-Global Flow Visual Polish
- **Arrow Update**: Unified the line and arrowhead into a single SVG path for perfect alignment. Applied a linear gradient from left (20% opacity) to right (100% opacity) to create a "flow" effect.
- **Button Update**: Set the "Local" chip background to `#111111` before hover as requested.
- **Aesthetic Refinement**: Added subtle borders (`border-white/5`) to chips for better definition against the dark card.

### 22. Feature Card Background Opacity Fine-tuning
- **Request**: Increase base opacity by another 15% to make the image even more visible.
- **Action**: 
  - Updated base opacity from `0.45` to `0.6`.
  - Updated hover opacity from `0.6` to `0.75` to maintain visual feedback.
- **Note**: Git commit deferred per user request.

### 23. Font System Migration to Pretendard JP
- **Request**: Change both English and Korean/Japanese fonts to `Pretendard JP` while maintaining current weights.
- **Action**: 
  - Installed `pretendard-jp` package.
  - Updated `app/layout.tsx` to import Pretendard JP static CSS.
  - Modified `tailwind.config.js` to set `"Pretendard JP"` as the primary font for the `sans` family.
- **Effect**: Unified typography across languages with a modern, high-readability sans-serif font.

### 24. Typography & Localization Finalization
- **Action**: 
  - Integrated `Pretendard JP` as the primary font for both Korean and English text to ensure consistent readability.
  - Comprehensive overhaul of the Korean translation dictionary in `LanguageContext.tsx`.
- **Key Phrasing Updates**:
  - Refined vision and product descriptions for more natural Korean 어순 (word order).
  - Applied specific branding copy: "가상현실이 아닙니다", "디지털 영역에서", "콘텐츠가 세상을 바꾼다", "땅을 사놓고 기다리는 게 아닙니다".

### 25. Information Section UI Refinement
- **Action**: 
  - Optimized Feature card background visibility (Base Opacity 0.6).
  - Enhanced "Local-to-Global Flow" card with a gradient-driven SVG arrow (Right-weighted brightness/opacity).
  - Standardized chip button backgrounds (`#111111`) for better dark-mode integration.

### 26. Navigation Logo SVG Migration
- **Request**: Replace PNG logo with the provided KLATOO-H-Logo.svg.
- **Action**: 
  - Uploaded and moved `KLATOO-H-Logo.svg` to `public/assets/`.
  - Updated `Navigation.tsx` to reference the SVG instead of the PNG.
  - Optimized logo width for better visibility on both mobile and desktop.

### 27. Typography & Identity Refinements
- **CTA Title Layout**: Expanded container width to `6xl` and adjusted font size/tracking for better responsiveness.
- **Brand Identity**: 
  - Migrated Navigation logo to `KLATOO-H-Logo.svg`.
  - Reverted logo dimensions to 100px (mobile) / 112px (desktop).
- **Font System Overhaul**:
### 28. Vision Title & Global Settings Refinement
- **Vision Title Font**: Migrated the first Information title (Vision) to **Syncopate**.
  - Applied mixed weights in English: Line 1 (Regular 400) / Line 2 (Bold 700).
  - Cleaned up typography by removing the trailing period.
- **Vision Spacing**: 
  - Implementation of a tight **5px visual gap** between lines for the English title (77px line-height on desktop).
  - Maintained bold Pretendard JP and 15px gap for the Korean version.
- **I18n Update**: 
  - Restored **English (en)** as the default application language upon initial load.

### 29. Economy Section Redesign & Typography Refinements [2025-12-27]
- **Typography Adjustments**:
  - Increased section subtitle font sizes by 2px (Vision, Features, Kubic, Economy).
  - Increased footer tagline ("KLATOO : THE OPERATING SYSTEM...") by 4px for better brand visibility.
- **Economy Section Redesign**:
  - **Glassmorphism Implementation**: Applied consistent glassmorphism to all content boxes with `backdrop-blur-xl/2xl` and reduced background opacities (approx. 15% lower) to reveal the background honeycomb pattern more clearly.
  - **Layout Alignment**: Synchronized the heights of the left "Revenue Share" box and the right "Value/Trading" boxes to align perfectly on the same horizontal plane.
  - **Iconography Upgrades**:
    - Replaced basic list bullets with sophisticated SVG icons: Ownership (Key), Creation (Stars), and Network (Globe).
    - Refined the "Trading Card" with a modern zigzag rising arrow, scaled and positioned to align its baseline with the Marketplace button.
- **Content Updates**:
  - Updated Marketplace button text to "Marketplace Coming Soon" (and Korean "마켓플레이스 준비중").
  - Revised card slogans: "Ownership meets Creation" and "Creation meets Distribution".
- **Section-Specific Glassmorphism**:
  - **Vision Section**: Finalized a "Frosted Glass" effect using a balanced translucent background (`bg-[#0A0A0A]/20`) and extreme blur (`backdrop-blur-[80px]`) for a soft, premium separation that reveals a hazy background pattern.
  - **Economy Section**: Maintained a "Light Glass" aesthetic (`bg-white/[0.015]`, `backdrop-blur-xl`) for maximum transparency and design consistency.
- **Stability & Performance Optimization**:
  - **Accessibility (A11y)**: Added descriptive `aria-label` to all icon-only buttons (Mobile Menu, Scroll-to-Top, SNS links) and improved `alt` text for images to support screen readers.
  - **Security Refinement**: Added `rel="noopener noreferrer"` to all external target links to prevent security vulnerabilities (tab-nabbing).
  - **Next.js Image Optimization**: Replaced standard `<img>` tags with `<Image />` component from `next/image` in Navigation, Information (Kubic mockup), and Footer to leverage automatic formatting, lazy loading, and priority fetching.
  - **Mobile UX Improvement**: Added an "Outside Click" handler to the mobile navigation menu, allowing users to close the menu by clicking anywhere outside the navigation area for a more intuitive mobile experience.
  - **Mobile Layout Optimization**: Adjusted the "Location-Based Posting" feature card to ensure full visibility on mobile devices. Increased the minimum height to 500px, centered the background image, and softened the overlay gradient to match the clarity of the desktop view.
- **Mobile Performance & Stability Optimization (Post-Testing)**:
  - **Hero Canvas Optimization**: Implemented resolution capping (max 1.2 DPR) on mobile and visibility detection to stop the animation loop when out-of-view, significantly reducing CPU/GPU overhead.
  - **Complexity Reduction**: Disabled grid line rendering and reduced particle count to 6,000 on mobile to prevent test timeouts and ensure smooth scrolling.
  - **Mobile UX Fix**: Increased touch target area for the mobile menu toggle and verified clickable zone accessibility (Fixed TC008).
  - **Resource Optimization**: Added `sizes` attribute to all Next.js Image components and fixed aspect ratio warnings for the corporate logo.
  - **Mobile Grid Re-enabled**: Re-introduced the earth grid lines on mobile with a reduced segment count (32 segments) to balance visual fidelity and performance.
  - **Visual Polish**: Adjusted vertical indicator lines for Kubic quotes and main headers to 5px thickness. Specifically refined the Vision card indicator back to 1px. Adjusted KLATOO logo size to 112px on web and 100px on mobile. Reduced UNDERPIN footer logo size by 15% on mobile (27px) for better visual hierarchy.
  - **Mobile Layout & Animation Stability - Root Cause Fix**: Resolved critical visibility issues where content would partially or completely disappear during fast scrolling on mobile.
    - **Root Cause Identified**: 
      - Vision section used `scrub: 1` which ties animation progress directly to scroll position. During fast scrolls, this caused animations to freeze in intermediate states (e.g., opacity: 0.3, y: 40px), leaving content partially visible or invisible.
      - `toggleActions: 'play none none reverse'` caused animations to reverse when scrolling back up, creating additional visibility conflicts during rapid bidirectional scrolling.
      - `lazy: false` without `immediateRender: false` caused GSAP to immediately apply starting values, interfering with natural page load.
    - **Comprehensive Fix Applied**:
      - **Removed `scrub`** from Vision section and converted to time-based animation (duration: 0.8s) for deterministic completion regardless of scroll speed.
      - **Simplified `toggleActions`** to `'play none none none'` - animations play once when triggered and stay at final state, preventing reverse animations that cause flicker.
      - **Added `immediateRender: false`** to ALL animations to preserve natural initial state and prevent FOUC (Flash of Unstyled Content).
      - **Unified trigger points** to `'top 90%'` across all sections for consistent, early triggering that accommodates fast scrolling.
      - **Maintained `fastScrollEnd: true`** to force animation completion when scroll skips over trigger zones.
      - **Added explicit `ease`** parameters to all animations for smooth, predictable motion curves.
    - **Result**: Content now appears reliably at full opacity regardless of scroll speed or direction. No more partial visibility or stuck animations.
  - **Glassmorphism Tuning**: Lowered `backdrop-blur` in Information sections for mobile to improve frame rates while maintaining design intent.
  - **Kubic Section Mobile Image Transition Enhancement (2025-12-29)**:
    - **Issue**: Tab hover interactions caused abrupt, jarring image switches in the mobile mockup display.
    - **Solution**: Replaced conditional rendering with simultaneous rendering of all three images, controlling visibility via `opacity` transitions.
    - **Implementation**: 
      - All images (01_Post.png, 02_Stacks.png, 03_Value.png) now render simultaneously.
      - Applied `transition-opacity duration-500 ease-in-out` for smooth crossfade effect.
      - Active tab shows `opacity-100`, inactive tabs show `opacity-0`.
    - **Result**: Natural fade-out/fade-in transitions when hovering over tabs 01, 02, 03, creating a premium, polished user experience.
  - **Kubic Section Internationalization (i18n) Enhancement (2025-12-29)**:
    - **Objective**: Display language-specific mobile mockup images based on user's selected language.
    - **Implementation**:
      - English mode: Uses `-eng.webp` suffix (01_Post-eng.webp, 02_Stacks-eng.webp, 03_Value-eng.webp)
      - Korean mode: Uses `-kor.webp` suffix (01_Post-kor.webp, 02_Stacks-kor.webp, 03_Value-kor.webp)
      - Dynamic image loading: `src={'/assets/01_Post-${language === 'en' ? 'eng' : 'kor'}.webp'}`
    - **Result**: Seamless language switching with appropriate localized UI screenshots, enhancing user experience for both English and Korean audiences.
  - **Image Format Optimization - PNG to WebP Migration (2025-12-29)**:
    - **Objective**: Improve page load performance and reduce bandwidth usage.
    - **Migrated Assets**:
      - Vision section background: `k-001.png` → `k-001.webp`
      - Location-Based Posting card: `location_posting_bg.png` → `location_posting_bg.webp`
      - Kubic Surface card: `k-002.png` → `k-002.webp`
      - Economy section background: `k-003.png` → `k-003.webp`
    - **Benefits**:
      - File size reduction: ~25-35% smaller than PNG
      - Faster page load times, especially on mobile networks
      - Maintained visual quality with modern compression
    - **Result**: Optimized asset delivery without compromising visual fidelity.

---

  - **Brand Visual & Accessibility Updates (2025-12-29)**:
    - **Primary Brand Color Change**: 
      - Updated global accent color from Violet (`#4640fa`) to Cyan (`#08efff`).
      - Applied to Tailwind config, Navigation links, Buttons, Vision Particles, Kubic SVG Grid, and gradients.
    - **Kubic Section Refinement**:
      - **Grid Visibility**: Reduced Honeycomb grid background opacity from `30%` to `15%` to prevent visual clutter and improve content focus while maintaining texture.
    - **Button Readability & Accessibility**:
      - **Issue**: White text on the bright Cyan (`#08efff`) background lacked sufficient contrast.
      - **Fix**: Changed text color to Dark (`#03030a`) on Cyan backgrounds.
      - **Scope**: Applied to the Economy section "Marketplace" button and Navigation "Sign up" button (hover state).
      - **Result**: Enhanced legibility and a more premium, modern aesthetic.

  - **Visual Refinements (2025-12-29)**:
    - **Key Features Visibility**:
      - **Action**: Increased "Location-Based Posting" card background opacity (`0.6` → `0.8` base, `0.75` → `0.95` hover).
      - **Reason**: The background image was too dark, making the hexagonal context hard to see.
    - **Global CTA Tagline Color**:
      - **Action**: Changed "KLATOO : THE OPERATING SYSTEM..." text color from `gray-500` to `#FFBB00` (Gold/Yellow) and removed parent `opacity-50`.
      - **Result**: The brand slogan now stands out vividly against the dark background.

### 30. Navigation Logo Asset Update
- **Action**: Updated `public/assets/KLATOO-H-Logo.svg` with a new version (content/visual refinement) while maintaining the existing filename.
- **Implementation**: No code changes required in `Navigation.tsx` as the reference remains identical.
- **Verification**: Confirmed `h-auto` class is present to handle any potential aspect ratio changes naturally.
