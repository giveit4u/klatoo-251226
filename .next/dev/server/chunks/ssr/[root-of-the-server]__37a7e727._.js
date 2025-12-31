module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function SmoothScroll() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2
        });
        lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].update);
        const update = (time)=>{
            lenis.raf(time * 1000);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(update);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(update);
            lenis.destroy();
        };
    }, []);
    return null;
}
}),
"[project]/contexts/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Translation dictionary
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.features': 'Features',
        'nav.kubic': 'Kubic',
        'nav.signup': 'Sign up',
        // Hero
        'hero.title': 'THE DIGITAL EARTH, CONNECTED TO REALITY',
        // Information - Vision
        'info.vision.subtitle': 'The Declaration of a Digital Earth',
        'info.vision.title1': 'We Are Building',
        'info.vision.title2': 'THE DIGITAL EARTH',
        'info.vision.description': 'Rooted in reality. Designed for real value.',
        'info.vision.card1.title': 'Not a Virtual Fantasy',
        'info.vision.card1.desc': 'KLATOO is built on real locations, real people, and real-world activity — faithfully mirrored onto a digital earth. We are not escaping reality. We are layering a digital world directly on top of it.',
        'info.vision.card2.quote1': '"On the digital layer,',
        'info.vision.card2.quote2': 'reality overlaps',
        'info.vision.card2.quote3': ', and value accumulates."',
        // Features
        'info.features.subtitle': 'Key Features',
        'info.features.title': 'From Local to Global, With Assetization Built In.',
        'info.features.card1.title': 'Location-Based Posting',
        'info.features.card1.desc': 'Every piece of content begins with where it happens. Anchor your moments to real coordinates.',
        'info.features.card2.title': 'Local-to-Global Flow',
        'info.features.card2.desc': 'A single local post can scale into global visibility. Traffic turns into revenue share.',
        'info.features.card2.local': 'Local',
        'info.features.card2.global': 'Global',
        'info.features.card3.title': 'Content as Asset',
        'info.features.card3.desc': 'Your posts aren\'t just content — they activate the land beneath them, creating tradable value.',
        // Kubic (Section 3)
        'info.kubic.subtitle': 'KUBIC x LBS Posting',
        'info.kubic.title': 'Content Shapes The Land.',
        'info.kubic.description1': 'On KLATOO, content does not end as content. As meaningful posts accumulate, the Kubic tied to that location becomes active — and its value grows.',
        'info.kubic.quote1': '"You don\'t buy land and wait.',
        'info.kubic.quote2': 'You activate land and grow it."',
        'info.kubic.step1.title': 'Creators Post',
        'info.kubic.step1.desc': 'Short-form content created at real-world places.',
        'info.kubic.step2.title': 'Engagement Stacks',
        'info.kubic.step2.desc': 'Views, interactions, and sharing stack onto the Kubic.',
        'info.kubic.step3.title': 'Kubic Gains Value',
        'info.kubic.step3.desc': 'Land with real activity naturally becomes more valuable.',
        // Economy (Section 4)
        'info.economy.subtitle': 'Why Kubic Has Real Value',
        'info.economy.title': 'A New Economic Dimension',
        'info.economy.left.title': 'Revenue Is Shared, Not Extracted',
        'info.economy.left.desc': 'Value is shared — not captured. Kubic is designed so that value flows to:',
        'info.economy.list1': 'Kubic Owners',
        'info.economy.list2': 'Content Creators',
        'info.economy.list3': 'The Platform Ecosystem',
        'info.economy.left.quote1': 'Ownership meets Creation.',
        'info.economy.left.quote2': 'Creation meets Distribution.',
        'info.economy.right.box.title': 'Comparison',
        'info.economy.right.box.row1.title': 'Traditional Land',
        'info.economy.right.box.row1.desc': 'Value rises with foot traffic, activity, and visibility.',
        'info.economy.right.box.row2.title': 'Kubic',
        'info.economy.right.box.row2.desc': 'Value rises with posts, engagement, and global exposure.',
        'info.economy.right.card.title': 'Trade the Surface of the World',
        'info.economy.right.card.desc1': 'Ownership meets Creation.',
        'info.economy.right.card.desc2': 'Creation meets Distribution.',
        'info.economy.button': 'Marketplace Coming Soon',
        // Global CTA
        'info.cta.title': 'Global Trends and Stories',
        'info.cta.subtitle1': 'From local moments to global movements.',
        'info.cta.subtitle2': 'Discover what\'s happening in the world.',
        'info.cta.button': 'Sign up now',
        'info.cta.description1': 'Join the movement that connects',
        'info.cta.description2': 'Reality, Content, and Value.',
        'info.cta.tagline': 'KLATOO : THE OPERATING SYSTEM OF THE DIGITAL EARTH',
        // Footer
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.location': 'Terms for location based services',
        'footer.copyright': 'All rights reserved'
    },
    ko: {
        // Navigation
        'nav.about': '서비스 소개',
        'nav.features': '주요 기능',
        'nav.kubic': '큐빅(Kubic)',
        'nav.signup': '가입하기',
        // Hero
        'hero.title': 'THE DIGITAL EARTH, CONNECTED TO REALITY',
        // Information - Vision
        'info.vision.subtitle': '디지털 지구의 미래를 선언하다',
        'info.vision.title1': '우리가 꿈꾸는 세상,',
        'info.vision.title2': '새로운 디지털 지구',
        'info.vision.description': '현실의 가치를 디지털로 연결하여, 모두를 위한 새로운 경제 생태계를 구축합니다.',
        'info.vision.card1.title': '가상현실이 아닙니다',
        'info.vision.card1.desc': 'KLATOO는 실제 장소와 사람, 그리고 현실의 활동을 디지털 환경에 그대로 투영합니다. 현실을 외면하는 가상이 아니라, 현실 위에 디지털 세계를 정교하게 겹쳐 새로운 가치를 창출합니다.',
        'info.vision.card2.quote1': '"디지털 영역에서,',
        'info.vision.card2.quote2': '현실과 완벽히 결합되어',
        'info.vision.card2.quote3': '새로운 가치를 축적합니다."',
        // Features
        'info.features.subtitle': '주요 기능',
        'info.features.title': '로컬의 경험이 글로벌 자산으로<br />연결되는 시스템',
        'info.features.card1.title': '위치 기반 포스팅',
        'info.features.card1.desc': '모든 콘텐츠는 실제 장소에서 시작됩니다. 당신의 소중한 순간을 실제 좌표 위에 기록하세요.',
        'info.features.card2.title': '로컬에서 글로벌로',
        'info.features.card2.desc': '지역의 작은 소식이 전 세계로 확산됩니다. 발생한 트래픽은 모두에게 수익으로 돌아옵니다.',
        'info.features.card2.local': '로컬',
        'info.features.card2.global': '글로벌',
        'info.features.card3.title': '자산이 되는 콘텐츠',
        'info.features.card3.desc': '게시물은 단순한 기록을 넘어, 그 장소의 가치를 활성화하고 거래 가능한 자산을 만듭니다.',
        // Kubic (Section 3)
        'info.kubic.subtitle': 'KUBIC x LBS 포스팅',
        'info.kubic.title': '콘텐츠가 세상을 바꾼다.',
        'info.kubic.description1': 'KLATOO에서 콘텐츠는 기록으로 끝나지 않습니다. 의미 있는 활동이 쌓이면 해당 장소의 큐빅이 활성화되어 실제 가치가 상승합니다.',
        'info.kubic.quote1': '"땅을 사놓고 기다리는 게 아닙니다.',
        'info.kubic.quote2': '이제 땅을 직접 활성화하고 키우세요."',
        'info.kubic.step1.title': '크리에이터 포스팅',
        'info.kubic.step1.desc': '실제 장소에서 생성되는 숏폼 콘텐츠.',
        'info.kubic.step2.title': '인게이지먼트 누적',
        'info.kubic.step2.desc': '조회수, 상호작용, 공유 등 모든 활동이 큐빅에 축적됩니다.',
        'info.kubic.step3.title': '큐빅 가치 극대화',
        'info.kubic.step3.desc': '실제 활동이 활발한 장소의 가치는 폭발적으로 성장합니다.',
        // Economy (Section 4)
        'info.economy.subtitle': '왜 큐빅인인가?',
        'info.economy.title': '새로운 경제적 차원',
        'info.economy.left.title': '수익의 독점이 아닌 진정한 분배',
        'info.economy.left.desc': '창출된 가치는 플랫폼이 독점하지 않습니다. 큐빅 생태계의 모든 참여자에게 선순환되도록 설계되었습니다.',
        'info.economy.list1': '큐빅(Land) 소유자',
        'info.economy.list2': '콘텐츠 크리에이터',
        'info.economy.list3': '플랫폼 생태계 참여자',
        'info.economy.left.quote1': '소유가 창작으로 연결됩니다.',
        'info.economy.left.quote2': '창작이 유통으로 확장됩니다.',
        'info.economy.right.box.title': '가치의 차이',
        'info.economy.right.box.row1.title': '기존 부동산',
        'info.economy.right.box.row1.desc': '유동 인구와 물리적 환경에 의존하는 제한적 가치',
        'info.economy.right.box.row2.title': '큐빅(Kubic)',
        'info.economy.right.box.row2.desc': '콘텐츠, 데이터, 글로벌 확산력에 기반한 무한한 가치',
        'info.economy.right.card.title': '지구의 표면을 소유하고 거래하세요',
        'info.economy.right.card.desc1': '소유와 창작의 결합',
        'info.economy.right.card.desc2': '창작과 유통의 연결',
        'info.economy.button': '마켓플레이스 준비중',
        // Global CTA
        'info.cta.title': '전 세계의 트렌드와 이야기를 만나보세요',
        'info.cta.subtitle1': '로컬의 순간들이 모여 글로벌의 흐름이 됩니다.',
        'info.cta.subtitle2': '지금 이 순간, 세계 곳곳의 생생한 소식을 발견하세요.',
        'info.cta.button': '지금 가입하기',
        'info.cta.description1': '단순한 소셜 네트워크를 넘어',
        'info.cta.description2': '현실, 콘텐츠, 가치가 하나되는 여정에 동참하세요.',
        'info.cta.tagline': 'KLATOO : 디지털 지구의 새로운 운영체제',
        // Footer
        'footer.privacy': '개인정보 처리방침',
        'footer.terms': '서비스 이용약관',
        'footer.location': '위치기반서비스 이용약관',
        'footer.copyright': 'All rights reserved.'
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/LanguageContext.tsx",
        lineNumber: 189,
        columnNumber: 9
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37a7e727._.js.map