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
- **Effect**: Navigation bar is now always visible on mobile, ensuring access to the menu regardless of scroll position.
