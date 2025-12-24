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

### 5.6. Complete Rotation Decoupling
- **Identity Matrix Blending**: 스크롤이 깊어짐에 따라 전역 회전 행렬의 영향력을 0으로 수렴(p=0.5에서 완전 정지)시켜, 파티클들이 기존의 궤도에 구속되지 않고 순수하게 개별 벡터로 자유 유영하도록 개선했습니다.
