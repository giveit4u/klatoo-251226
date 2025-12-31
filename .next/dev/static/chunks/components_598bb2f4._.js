(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const Navigation = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            // Use GSAP for smoother scroll animation
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(window, {
                duration: 1.2,
                scrollTo: {
                    y: element,
                    offsetY: 0,
                    autoKill: true
                },
                ease: 'power2.inOut'
            });
        }
        setIsMenuOpen(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            // Show navigation when Information section (about) starts
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                trigger: '#about',
                start: 'top top',
                onEnter: {
                    "Navigation.useEffect": ()=>setIsVisible(true)
                }["Navigation.useEffect"],
                onLeaveBack: {
                    "Navigation.useEffect": ()=>setIsVisible(false)
                }["Navigation.useEffect"]
            });
            return ({
                "Navigation.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAll().forEach({
                        "Navigation.useEffect": (trigger)=>trigger.kill()
                    }["Navigation.useEffect"]);
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleClickOutside = {
                "Navigation.useEffect.handleClickOutside": (event)=>{
                    if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
                        setIsMenuOpen(false);
                    }
                }
            }["Navigation.useEffect.handleClickOutside"];
            if (isMenuOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "Navigation.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], [
        isMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: `fixed top-0 left-0 w-full z-50 py-4 md:py-6 transition-all duration-500 backdrop-blur ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:-translate-y-full md:opacity-0'}`,
        style: {
            backgroundColor: isVisible ? 'rgba(3, 3, 8, 0.5)' : 'transparent'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(window, {
                                duration: 1.2,
                                scrollTo: 0,
                                ease: 'power2.inOut'
                            }),
                        className: "hover:opacity-80 transition-opacity cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/KLATOO-H-Logo.svg",
                            alt: "KLATOO Logo",
                            width: 112,
                            height: 30,
                            className: "w-[100px] md:w-[112px] h-auto",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection('about'),
                                className: "text-sm font-medium text-white hover:text-[#08efff] transition-colors duration-300",
                                children: t('nav.about')
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection('features'),
                                className: "text-sm font-medium text-white hover:text-[#08efff] transition-colors duration-300",
                                children: t('nav.features')
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection('kubic'),
                                className: "text-sm font-medium text-white hover:text-[#08efff] transition-colors duration-300",
                                children: t('nav.kubic')
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm ml-2 mr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage('en'),
                                        className: `font-medium transition-colors duration-300 ${language === 'en' ? 'text-[#08efff]' : 'text-white/60 hover:text-white'}`,
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage('ko'),
                                        className: `font-medium transition-colors duration-300 ${language === 'ko' ? 'text-[#08efff]' : 'text-white/60 hover:text-white'}`,
                                        children: "KO"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-[#08efff] hover:text-[#03030a] transition-all duration-300",
                                children: t('nav.signup')
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-white transition-colors duration-500 p-2 relative z-50",
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        "aria-label": isMenuOpen ? "Close Menu" : "Open Menu",
                        children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 139,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 w-full bg-[#030308] border-b border-white/10 p-6 md:hidden flex flex-col space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection('about'),
                        className: "text-lg font-medium text-white text-left",
                        children: t('nav.about')
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection('features'),
                        className: "text-lg font-medium text-white text-left",
                        children: t('nav.features')
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection('kubic'),
                        className: "text-lg font-medium text-white text-left",
                        children: t('nav.kubic')
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLanguage('en'),
                                className: `text-lg font-medium ${language === 'en' ? 'text-[#08efff]' : 'text-white/60'}`,
                                children: "English"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLanguage('ko'),
                                className: `text-lg font-medium ${language === 'ko' ? 'text-[#08efff]' : 'text-white/60'}`,
                                children: "한국어"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-white text-black px-6 py-3 rounded-full text-lg font-medium w-full hover:bg-[#08efff] hover:text-[#03030a] transition-all",
                        children: t('nav.signup')
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navigation.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navigation, "UMjfWJJ+8jFUYX3zOVPvfcAIrE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTINENTS",
    ()=>CONTINENTS,
    "distanceToPolygonEdge",
    ()=>distanceToPolygonEdge,
    "isPointInPolygon",
    ()=>isPointInPolygon,
    "noise",
    ()=>noise
]);
// --- NOISE UTIL ---
const perm = new Uint8Array(512);
const p = new Uint8Array(256);
for(let i = 0; i < 256; i++)p[i] = i;
for(let i = 255; i > 0; i--){
    const r = Math.floor(Math.random() * (i + 1));
    const t = p[i];
    p[i] = p[r];
    p[r] = t;
}
for(let i = 0; i < 512; i++)perm[i] = p[i & 255];
function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(t, a, b) {
    return a + t * (b - a);
}
function grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}
function noise(x, y, z) {
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
const CONTINENTS = [
    // ========== NORTH AMERICA ==========
    {
        name: 'North America',
        density: 1.2,
        points: [
            // Alaska & NW Canada
            {
                lat: 71,
                lon: -156
            },
            {
                lat: 70,
                lon: -168
            },
            {
                lat: 65,
                lon: -168
            },
            {
                lat: 60,
                lon: -164
            },
            {
                lat: 56,
                lon: -158
            },
            {
                lat: 58,
                lon: -137
            },
            {
                lat: 60,
                lon: -135
            },
            {
                lat: 69,
                lon: -140
            },
            {
                lat: 70,
                lon: -130
            },
            {
                lat: 72,
                lon: -120
            },
            {
                lat: 78,
                lon: -95
            },
            {
                lat: 82,
                lon: -70
            },
            // NE Canada & Greenland gap
            {
                lat: 75,
                lon: -60
            },
            {
                lat: 65,
                lon: -60
            },
            {
                lat: 55,
                lon: -56
            },
            // US East Coast & Florida
            {
                lat: 48,
                lon: -52
            },
            {
                lat: 44,
                lon: -68
            },
            {
                lat: 40,
                lon: -74
            },
            {
                lat: 35,
                lon: -76
            },
            {
                lat: 30,
                lon: -81
            },
            {
                lat: 26,
                lon: -80
            },
            {
                lat: 25,
                lon: -81
            },
            {
                lat: 25,
                lon: -82.5
            },
            // Gulf of Mexico
            {
                lat: 29,
                lon: -83
            },
            {
                lat: 30,
                lon: -88
            },
            {
                lat: 29,
                lon: -95
            },
            {
                lat: 26,
                lon: -97
            },
            {
                lat: 22,
                lon: -97
            },
            {
                lat: 20,
                lon: -90
            },
            {
                lat: 21,
                lon: -87
            },
            {
                lat: 18,
                lon: -88
            },
            // Central America
            {
                lat: 15,
                lon: -89
            },
            {
                lat: 10,
                lon: -83
            },
            {
                lat: 8,
                lon: -78
            },
            {
                lat: 7,
                lon: -80
            },
            {
                lat: 9,
                lon: -85
            },
            // Mexico & Baja California
            {
                lat: 16,
                lon: -95
            },
            {
                lat: 20,
                lon: -105
            },
            {
                lat: 23,
                lon: -110
            },
            {
                lat: 28,
                lon: -115
            },
            {
                lat: 32,
                lon: -117
            },
            {
                lat: 30,
                lon: -113
            },
            {
                lat: 24,
                lon: -109
            },
            {
                lat: 25,
                lon: -107
            },
            // US West Coast
            {
                lat: 34,
                lon: -120
            },
            {
                lat: 38,
                lon: -123
            },
            {
                lat: 45,
                lon: -124
            },
            {
                lat: 49,
                lon: -125
            },
            {
                lat: 55,
                lon: -133
            },
            {
                lat: 60,
                lon: -145
            }
        ]
    },
    // ========== SOUTH AMERICA ==========
    {
        name: 'South America',
        density: 1.1,
        points: [
            {
                lat: 12,
                lon: -72
            },
            {
                lat: 11,
                lon: -74
            },
            {
                lat: 8,
                lon: -77
            },
            {
                lat: 5,
                lon: -77
            },
            {
                lat: 2.5,
                lon: -80
            },
            {
                lat: -2,
                lon: -81
            },
            {
                lat: -10,
                lon: -79
            },
            {
                lat: -15,
                lon: -75
            },
            {
                lat: -25,
                lon: -71
            },
            {
                lat: -35,
                lon: -73
            },
            {
                lat: -45,
                lon: -75
            },
            {
                lat: -53,
                lon: -75
            },
            {
                lat: -55,
                lon: -70
            },
            {
                lat: -55,
                lon: -67
            },
            {
                lat: -50,
                lon: -66
            },
            {
                lat: -40,
                lon: -60
            },
            {
                lat: -30,
                lon: -50
            },
            {
                lat: -20,
                lon: -40
            },
            {
                lat: -10,
                lon: -35
            },
            {
                lat: -5,
                lon: -35
            },
            {
                lat: -2,
                lon: -40
            },
            {
                lat: 0,
                lon: -50
            },
            {
                lat: 5,
                lon: -55
            },
            {
                lat: 8,
                lon: -60
            },
            {
                lat: 10,
                lon: -68
            }
        ]
    },
    // ========== AFRICA ==========
    {
        name: 'Africa',
        density: 1.15,
        points: [
            // North Coast (Mediterranean)
            {
                lat: 37,
                lon: -6
            },
            {
                lat: 37,
                lon: 3
            },
            {
                lat: 36,
                lon: 10
            },
            {
                lat: 34,
                lon: 18
            },
            {
                lat: 32,
                lon: 25
            },
            {
                lat: 31,
                lon: 32
            },
            // Red Sea
            {
                lat: 28,
                lon: 34
            },
            {
                lat: 22,
                lon: 36
            },
            {
                lat: 15,
                lon: 42
            },
            {
                lat: 12,
                lon: 43
            },
            // Horn of Africa
            {
                lat: 11,
                lon: 51
            },
            {
                lat: 4,
                lon: 42
            },
            // East Coast
            {
                lat: 0,
                lon: 40
            },
            {
                lat: -5,
                lon: 39
            },
            {
                lat: -10,
                lon: 40
            },
            {
                lat: -15,
                lon: 40
            },
            {
                lat: -20,
                lon: 35
            },
            {
                lat: -26,
                lon: 33
            },
            // South Coast
            {
                lat: -34,
                lon: 26
            },
            {
                lat: -34,
                lon: 18
            },
            // West Coast
            {
                lat: -30,
                lon: 17
            },
            {
                lat: -25,
                lon: 15
            },
            {
                lat: -20,
                lon: 13
            },
            {
                lat: -15,
                lon: 12
            },
            {
                lat: -10,
                lon: 13
            },
            {
                lat: -5,
                lon: 12
            },
            {
                lat: 0,
                lon: 9
            },
            {
                lat: 4,
                lon: 9
            },
            {
                lat: 6,
                lon: 3
            },
            {
                lat: 10,
                lon: -5
            },
            {
                lat: 14,
                lon: -14
            },
            {
                lat: 18,
                lon: -16
            },
            {
                lat: 21,
                lon: -17
            },
            {
                lat: 26,
                lon: -13
            },
            {
                lat: 30,
                lon: -10
            },
            {
                lat: 34,
                lon: -7
            }
        ]
    },
    // ========== EUROPE ==========
    {
        name: 'Europe',
        density: 0.9,
        points: [
            // Scandinavia
            {
                lat: 71,
                lon: 26
            },
            {
                lat: 70,
                lon: 30
            },
            {
                lat: 66,
                lon: 29
            },
            {
                lat: 60,
                lon: 28
            },
            {
                lat: 56,
                lon: 21
            },
            {
                lat: 55,
                lon: 13
            },
            {
                lat: 58,
                lon: 11
            },
            {
                lat: 62,
                lon: 6
            },
            {
                lat: 69,
                lon: 18
            },
            // Russia North
            {
                lat: 70,
                lon: 33
            },
            {
                lat: 68,
                lon: 52
            },
            // Russia / Kazakhstan connection
            {
                lat: 55,
                lon: 48
            },
            {
                lat: 50,
                lon: 48
            },
            {
                lat: 45,
                lon: 42
            },
            // Black Sea
            {
                lat: 44,
                lon: 38
            },
            {
                lat: 42,
                lon: 28
            },
            // Mediterranean
            {
                lat: 40,
                lon: 26
            },
            {
                lat: 38,
                lon: 23
            },
            {
                lat: 36,
                lon: 15
            },
            {
                lat: 38,
                lon: 9
            },
            {
                lat: 40,
                lon: 3
            },
            {
                lat: 43,
                lon: -1
            },
            // Iberia
            {
                lat: 44,
                lon: -9
            },
            {
                lat: 42,
                lon: -9
            },
            {
                lat: 37,
                lon: -8
            },
            {
                lat: 36,
                lon: -6
            },
            // Atlantic Coast
            {
                lat: 38,
                lon: -9
            },
            {
                lat: 44,
                lon: -1
            },
            {
                lat: 48,
                lon: -5
            },
            // British Isles
            {
                lat: 50,
                lon: -5
            },
            {
                lat: 54,
                lon: -3
            },
            {
                lat: 58,
                lon: -3
            },
            {
                lat: 59,
                lon: -1
            },
            {
                lat: 56,
                lon: 2
            },
            {
                lat: 52,
                lon: 2
            },
            // North Coast
            {
                lat: 51,
                lon: 4
            },
            {
                lat: 53,
                lon: 7
            },
            {
                lat: 54,
                lon: 9
            }
        ]
    },
    // ========== ASIA ==========
    {
        name: 'Asia',
        density: 1.5,
        points: [
            {
                lat: 68,
                lon: 52
            },
            {
                lat: 73,
                lon: 75
            },
            {
                lat: 78,
                lon: 100
            },
            {
                lat: 75,
                lon: 130
            },
            {
                lat: 70,
                lon: 160
            },
            {
                lat: 65,
                lon: 175
            },
            {
                lat: 60,
                lon: 165
            },
            {
                lat: 55,
                lon: 155
            },
            {
                lat: 50,
                lon: 145
            },
            // China & East Asia
            {
                lat: 40,
                lon: 125
            },
            {
                lat: 38,
                lon: 122
            },
            {
                lat: 32,
                lon: 121
            },
            {
                lat: 25,
                lon: 120
            },
            {
                lat: 22,
                lon: 115
            },
            {
                lat: 20,
                lon: 110
            },
            // SE Asia / Indochina
            {
                lat: 15,
                lon: 108
            },
            {
                lat: 10,
                lon: 105
            },
            {
                lat: 5,
                lon: 102
            },
            // Malay Peninsula
            {
                lat: 2,
                lon: 102
            },
            {
                lat: 5,
                lon: 100
            },
            {
                lat: 10,
                lon: 98
            },
            {
                lat: 15,
                lon: 96
            },
            {
                lat: 20,
                lon: 94
            },
            {
                lat: 22,
                lon: 90
            },
            // India
            {
                lat: 25,
                lon: 88
            },
            {
                lat: 20,
                lon: 85
            },
            {
                lat: 14,
                lon: 80
            },
            {
                lat: 8,
                lon: 77
            },
            {
                lat: 15,
                lon: 72
            },
            {
                lat: 22,
                lon: 68
            },
            // Middle East / Caspian
            {
                lat: 25,
                lon: 60
            },
            {
                lat: 35,
                lon: 55
            },
            {
                lat: 45,
                lon: 50
            },
            {
                lat: 55,
                lon: 50
            },
            {
                lat: 60,
                lon: 53
            }
        ]
    },
    // ========== KOREA (한국) ==========
    {
        name: 'Korea',
        density: 1.5,
        points: [
            {
                lat: 38.5,
                lon: 128.5
            },
            {
                lat: 38,
                lon: 129.5
            },
            {
                lat: 36,
                lon: 130
            },
            {
                lat: 35,
                lon: 129.5
            },
            {
                lat: 34,
                lon: 128
            },
            {
                lat: 34.5,
                lon: 126
            },
            {
                lat: 36,
                lon: 126
            },
            {
                lat: 37,
                lon: 126.5
            },
            {
                lat: 38,
                lon: 124.5
            },
            {
                lat: 40,
                lon: 124
            },
            {
                lat: 42,
                lon: 124
            },
            {
                lat: 43,
                lon: 130
            }
        ]
    },
    // ========== OCEANIA (Australia) ==========
    {
        name: 'Australia',
        density: 1.0,
        points: [
            // North Coast
            {
                lat: -10,
                lon: 142
            },
            {
                lat: -12,
                lon: 136
            },
            {
                lat: -13,
                lon: 130
            },
            {
                lat: -12,
                lon: 127
            },
            {
                lat: -16,
                lon: 124
            },
            {
                lat: -20,
                lon: 119
            },
            // West Coast
            {
                lat: -26,
                lon: 113
            },
            {
                lat: -32,
                lon: 115
            },
            {
                lat: -35,
                lon: 118
            },
            // South Coast
            {
                lat: -35,
                lon: 135
            },
            {
                lat: -38,
                lon: 141
            },
            {
                lat: -39,
                lon: 146
            },
            // East Coast
            {
                lat: -37,
                lon: 150
            },
            {
                lat: -33,
                lon: 151
            },
            {
                lat: -28,
                lon: 153
            },
            {
                lat: -23,
                lon: 151
            },
            {
                lat: -17,
                lon: 146
            },
            {
                lat: -11,
                lon: 143
            }
        ]
    },
    // ========== JAPAN (일본) ==========
    {
        name: 'Japan',
        density: 1.1,
        points: [
            // Hokkaido (홋카이도)
            {
                lat: 45.5,
                lon: 141.5
            },
            {
                lat: 45,
                lon: 143
            },
            {
                lat: 43,
                lon: 145
            },
            {
                lat: 42,
                lon: 145
            },
            {
                lat: 41.5,
                lon: 141
            },
            {
                lat: 42.5,
                lon: 140
            },
            {
                lat: 43.5,
                lon: 141
            },
            // Honshu (혼슈) - North
            {
                lat: 41,
                lon: 140.5
            },
            {
                lat: 40,
                lon: 140
            },
            {
                lat: 39,
                lon: 141.5
            },
            {
                lat: 38.5,
                lon: 141
            },
            {
                lat: 37,
                lon: 141
            },
            {
                lat: 36,
                lon: 140.5
            },
            // Honshu - Kanto
            {
                lat: 35.5,
                lon: 140
            },
            {
                lat: 35,
                lon: 139.5
            },
            {
                lat: 34.5,
                lon: 137
            },
            // Honshu - West
            {
                lat: 35,
                lon: 135.5
            },
            {
                lat: 35.5,
                lon: 134
            },
            {
                lat: 36,
                lon: 133
            },
            {
                lat: 36.5,
                lon: 137
            },
            {
                lat: 37.5,
                lon: 138
            },
            {
                lat: 38,
                lon: 139.5
            },
            // Kyushu (규슈)
            {
                lat: 34,
                lon: 131
            },
            {
                lat: 33,
                lon: 130
            },
            {
                lat: 32,
                lon: 130.5
            },
            {
                lat: 31,
                lon: 131
            },
            {
                lat: 32,
                lon: 132
            },
            {
                lat: 33.5,
                lon: 132
            },
            // Shikoku (시코쿠)
            {
                lat: 34,
                lon: 133.5
            },
            {
                lat: 33.5,
                lon: 134
            },
            {
                lat: 34,
                lon: 134.5
            }
        ]
    },
    // ========== UNITED KINGDOM (영국) ==========
    {
        name: 'UK',
        density: 0.95,
        points: [
            // Scotland (스코틀랜드)
            {
                lat: 58.5,
                lon: -3
            },
            {
                lat: 57.5,
                lon: -2
            },
            {
                lat: 57,
                lon: -2
            },
            {
                lat: 56,
                lon: -3
            },
            {
                lat: 55.5,
                lon: -4.5
            },
            {
                lat: 55,
                lon: -6
            },
            {
                lat: 56,
                lon: -5.5
            },
            {
                lat: 57,
                lon: -6
            },
            {
                lat: 58,
                lon: -5
            },
            {
                lat: 58.5,
                lon: -4
            },
            // England (잉글랜드)
            {
                lat: 55,
                lon: -2
            },
            {
                lat: 54,
                lon: -0.5
            },
            {
                lat: 53,
                lon: 0
            },
            {
                lat: 52,
                lon: 1.5
            },
            {
                lat: 51.5,
                lon: 1
            },
            {
                lat: 50.5,
                lon: -1
            },
            {
                lat: 50,
                lon: -5
            },
            {
                lat: 51,
                lon: -5
            },
            {
                lat: 52,
                lon: -4.5
            },
            {
                lat: 53,
                lon: -3
            },
            {
                lat: 54,
                lon: -3
            }
        ]
    },
    // ========== NEW ZEALAND (뉴질랜드) ==========
    {
        name: 'New Zealand',
        density: 1.0,
        points: [
            // North Island (북섬)
            {
                lat: -34.5,
                lon: 173
            },
            {
                lat: -35,
                lon: 174
            },
            {
                lat: -36.5,
                lon: 175
            },
            {
                lat: -38,
                lon: 178
            },
            {
                lat: -39,
                lon: 178
            },
            {
                lat: -40,
                lon: 176
            },
            {
                lat: -41,
                lon: 175
            },
            {
                lat: -40.5,
                lon: 173
            },
            {
                lat: -39,
                lon: 174
            },
            {
                lat: -37,
                lon: 174.5
            },
            {
                lat: -35.5,
                lon: 173.5
            },
            // South Island (남섬)
            {
                lat: -40.5,
                lon: 173
            },
            {
                lat: -42,
                lon: 174
            },
            {
                lat: -43.5,
                lon: 172.5
            },
            {
                lat: -45,
                lon: 170
            },
            {
                lat: -46,
                lon: 168
            },
            {
                lat: -46.5,
                lon: 168
            },
            {
                lat: -45.5,
                lon: 170.5
            },
            {
                lat: -44,
                lon: 171
            },
            {
                lat: -42.5,
                lon: 171.5
            },
            {
                lat: -41,
                lon: 172
            }
        ]
    },
    // ========== INDONESIA ISLANDS (인도네시아 주요 섬) ==========
    {
        name: 'Indonesia - Java',
        density: 1.15,
        points: [
            // Java (자바)
            {
                lat: -6,
                lon: 105.5
            },
            {
                lat: -6.5,
                lon: 106
            },
            {
                lat: -7,
                lon: 108
            },
            {
                lat: -8,
                lon: 111
            },
            {
                lat: -8.5,
                lon: 114
            },
            {
                lat: -8.5,
                lon: 115
            },
            {
                lat: -8,
                lon: 114
            },
            {
                lat: -7.5,
                lon: 112
            },
            {
                lat: -6.5,
                lon: 110
            },
            {
                lat: -6,
                lon: 107
            }
        ]
    },
    {
        name: 'Indonesia - Sumatra',
        density: 1.1,
        points: [
            // Sumatra (수마트라)
            {
                lat: 6,
                lon: 95
            },
            {
                lat: 4,
                lon: 97
            },
            {
                lat: 2,
                lon: 99
            },
            {
                lat: 0,
                lon: 101
            },
            {
                lat: -1,
                lon: 103
            },
            {
                lat: -3,
                lon: 104
            },
            {
                lat: -5,
                lon: 105
            },
            {
                lat: -6,
                lon: 104
            },
            {
                lat: -4,
                lon: 102
            },
            {
                lat: -2,
                lon: 101
            },
            {
                lat: 0,
                lon: 98
            },
            {
                lat: 2,
                lon: 96
            },
            {
                lat: 4,
                lon: 95
            },
            {
                lat: 5.5,
                lon: 95.5
            }
        ]
    },
    {
        name: 'Indonesia - Borneo',
        density: 1.1,
        points: [
            // Borneo (보르네오/칼리만탄)
            {
                lat: 7,
                lon: 117
            },
            {
                lat: 6,
                lon: 116
            },
            {
                lat: 4,
                lon: 115
            },
            {
                lat: 2,
                lon: 109
            },
            {
                lat: 0,
                lon: 109
            },
            {
                lat: -1,
                lon: 110
            },
            {
                lat: -3,
                lon: 111
            },
            {
                lat: -4,
                lon: 115
            },
            {
                lat: -4,
                lon: 117
            },
            {
                lat: -2,
                lon: 118
            },
            {
                lat: 0,
                lon: 118
            },
            {
                lat: 2,
                lon: 117.5
            },
            {
                lat: 4,
                lon: 118
            },
            {
                lat: 6,
                lon: 117.5
            }
        ]
    },
    {
        name: 'Indonesia - Sulawesi',
        density: 1.0,
        points: [
            // Sulawesi (술라웨시)
            {
                lat: 2,
                lon: 120
            },
            {
                lat: 1,
                lon: 122
            },
            {
                lat: -1,
                lon: 121
            },
            {
                lat: -3,
                lon: 120
            },
            {
                lat: -5,
                lon: 119.5
            },
            {
                lat: -5.5,
                lon: 120
            },
            {
                lat: -4,
                lon: 121
            },
            {
                lat: -2,
                lon: 122
            },
            {
                lat: 0,
                lon: 123
            },
            {
                lat: 1,
                lon: 124
            },
            {
                lat: 1.5,
                lon: 125
            },
            {
                lat: 1,
                lon: 124
            }
        ]
    },
    // ========== PHILIPPINES (필리핀) ==========
    {
        name: 'Philippines',
        density: 1.05,
        points: [
            // Luzon (루손)
            {
                lat: 19,
                lon: 121
            },
            {
                lat: 18.5,
                lon: 122
            },
            {
                lat: 17,
                lon: 122
            },
            {
                lat: 15,
                lon: 121
            },
            {
                lat: 14,
                lon: 120.5
            },
            {
                lat: 14.5,
                lon: 120
            },
            {
                lat: 16,
                lon: 120
            },
            {
                lat: 17.5,
                lon: 120.5
            },
            {
                lat: 18.5,
                lon: 120.5
            },
            // Mindanao (민다나오)
            {
                lat: 9,
                lon: 125
            },
            {
                lat: 7,
                lon: 126
            },
            {
                lat: 6,
                lon: 125.5
            },
            {
                lat: 6,
                lon: 124
            },
            {
                lat: 7,
                lon: 123.5
            },
            {
                lat: 8,
                lon: 124
            },
            {
                lat: 9,
                lon: 124.5
            },
            // Visayas
            {
                lat: 12,
                lon: 123
            },
            {
                lat: 11,
                lon: 124
            },
            {
                lat: 10.5,
                lon: 122.5
            },
            {
                lat: 11,
                lon: 122
            },
            {
                lat: 12,
                lon: 122.5
            }
        ]
    },
    // ========== SRI LANKA (스리랑카) ==========
    {
        name: 'Sri Lanka',
        density: 1.0,
        points: [
            {
                lat: 9.5,
                lon: 80
            },
            {
                lat: 9,
                lon: 80
            },
            {
                lat: 7.5,
                lon: 79.7
            },
            {
                lat: 6,
                lon: 80
            },
            {
                lat: 6,
                lon: 81.5
            },
            {
                lat: 7,
                lon: 81.8
            },
            {
                lat: 8,
                lon: 81.2
            },
            {
                lat: 9,
                lon: 81
            },
            {
                lat: 9.5,
                lon: 80.5
            }
        ]
    },
    // ========== MADAGASCAR (마다가스카르) ==========
    {
        name: 'Madagascar',
        density: 1.05,
        points: [
            {
                lat: -12,
                lon: 49.5
            },
            {
                lat: -14,
                lon: 50
            },
            {
                lat: -16,
                lon: 50
            },
            {
                lat: -20,
                lon: 48
            },
            {
                lat: -23,
                lon: 47
            },
            {
                lat: -25,
                lon: 45
            },
            {
                lat: -25.5,
                lon: 44
            },
            {
                lat: -24,
                lon: 43.5
            },
            {
                lat: -22,
                lon: 43.5
            },
            {
                lat: -18,
                lon: 44
            },
            {
                lat: -15,
                lon: 46
            },
            {
                lat: -13,
                lon: 48
            },
            {
                lat: -12.5,
                lon: 49
            }
        ]
    },
    // ========== GREENLAND (그린란드 / 북극권 지형) ==========
    {
        name: 'Greenland',
        density: 1.0,
        points: [
            {
                lat: 83,
                lon: -30
            },
            {
                lat: 82,
                lon: -15
            },
            {
                lat: 80,
                lon: -12
            },
            {
                lat: 75,
                lon: -18
            },
            {
                lat: 70,
                lon: -22
            },
            {
                lat: 65,
                lon: -35
            },
            {
                lat: 60,
                lon: -45
            },
            {
                lat: 60,
                lon: -50
            },
            {
                lat: 65,
                lon: -55
            },
            {
                lat: 70,
                lon: -55
            },
            {
                lat: 75,
                lon: -70
            },
            {
                lat: 80,
                lon: -70
            },
            {
                lat: 83,
                lon: -60
            },
            {
                lat: 83.5,
                lon: -40
            }
        ]
    },
    // ========== HAWAII (하와이 열도) ==========
    {
        name: 'Hawaii',
        density: 2.5,
        points: [
            {
                lat: 22.5,
                lon: -160
            },
            {
                lat: 21.5,
                lon: -158
            },
            {
                lat: 21,
                lon: -154.5
            },
            {
                lat: 18.9,
                lon: -154.5
            },
            {
                lat: 19.5,
                lon: -156
            },
            {
                lat: 21.5,
                lon: -160.5
            }
        ]
    },
    // ========== PACIFIC ISLANDS (피지, 바누아투 등) ==========
    {
        name: 'Pacific Islands - Fiji/Vanuatu',
        density: 2.0,
        points: [
            {
                lat: -15,
                lon: 167
            },
            {
                lat: -18,
                lon: 168
            },
            {
                lat: -21,
                lon: 169
            },
            {
                lat: -20,
                lon: 178
            },
            {
                lat: -16,
                lon: 180
            },
            {
                lat: -15,
                lon: 178
            }
        ]
    },
    {
        name: 'Pacific Islands - French Polynesia',
        density: 2.0,
        points: [
            {
                lat: -14,
                lon: -150
            },
            {
                lat: -17.5,
                lon: -149
            },
            {
                lat: -19,
                lon: -151
            },
            {
                lat: -18,
                lon: -153
            },
            {
                lat: -15,
                lon: -153
            }
        ]
    },
    // ========== ANTARCTICA (남극 대륙) ==========
    {
        name: 'Antarctica',
        density: 1.2,
        points: [
            {
                lat: -60,
                lon: 0
            },
            {
                lat: -62,
                lon: 30
            },
            {
                lat: -65,
                lon: 60
            },
            {
                lat: -68,
                lon: 90
            },
            {
                lat: -70,
                lon: 120
            },
            {
                lat: -71,
                lon: 150
            },
            {
                lat: -72,
                lon: 180
            },
            {
                lat: -71,
                lon: -150
            },
            {
                lat: -70,
                lon: -120
            },
            {
                lat: -68,
                lon: -90
            },
            {
                lat: -65,
                lon: -60
            },
            {
                lat: -62,
                lon: -30
            },
            // Antarctic Peninsula (남극 반도)
            {
                lat: -63,
                lon: -55
            },
            {
                lat: -60,
                lon: -60
            },
            {
                lat: -62,
                lon: -65
            },
            {
                lat: -65,
                lon: -65
            }
        ]
    }
];
function isPointInPolygon(lat, lon, polygon) {
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].lon, yi = polygon[i].lat;
        const xj = polygon[j].lon, yj = polygon[j].lat;
        const intersect = yi > lat !== yj > lat && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function distanceToPolygonEdge(lat, lon, polygon) {
    let minDist = 999;
    // 극지방 경도 왜곡 보정 (위도에 비례하여 경도 차이 축소)
    const latRad = lat * Math.PI / 180;
    const lonScale = Math.cos(latRad);
    for(let i = 0; i < polygon.length; i++){
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeroData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
const Hero = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        progress: 0
    });
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const checkMobile = {
                "Hero.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["Hero.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!canvasRef.current || !containerRef.current || !sectionRef.current) return;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (!context) return;
            // --- RESPONSIVE CONFIG ---
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
            // 파티클 밀도 10% 감소 (28800)
            // 파티클 밀도 최적화: 모바일 성능 확보를 위해 6000으로 대폭 하향 조정
            const baseParticleCount = isMobile ? 6000 : isTablet ? 18000 : 28800;
            // 기본 크기 기준값 통일 (지구본 크기에 따라 동적으로 스케일링됨)
            const baseSizeFactor = 2.8;
            const colors = [
                '#00F0FF',
                '#00D1FF',
                '#00A8FF',
                '#0077FF',
                '#0044AA'
            ];
            const opacities = [
                0.9,
                0.7,
                0.5
            ];
            let canvasWidth = 0;
            let canvasHeight = 0;
            const updateCanvasSize = {
                "Hero.useEffect.updateCanvasSize": ()=>{
                    const rect = containerRef.current.getBoundingClientRect();
                    const dpr = window.devicePixelRatio || 1;
                    // 모바일에서는 연산 부하를 줄이기 위해 해상도 배율을 1.2로 제한
                    const cap = isMobile ? 1.2 : 2.0;
                    const finalDpr = Math.min(dpr, cap);
                    canvas.width = rect.width * finalDpr;
                    canvas.height = rect.height * finalDpr;
                    context.scale(finalDpr, finalDpr);
                    canvasWidth = rect.width;
                    canvasHeight = rect.height;
                }
            }["Hero.useEffect.updateCanvasSize"];
            updateCanvasSize();
            const resizeObserver = new ResizeObserver(updateCanvasSize);
            resizeObserver.observe(containerRef.current);
            // --- 1. GENERATE CONTINENT PARTICLES (POLYGON-BASED) ---
            const particles = [];
            for(let i = 0; i < baseParticleCount; i++){
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
                for (const continent of __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTINENTS"]){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPointInPolygon"])(lat, lon, continent.points)) {
                        isLand = true;
                        continentDensity = continent.density;
                        break;
                    }
                }
                if (!isLand) {
                    for (const continent of __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTINENTS"]){
                        const edgeDist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceToPolygonEdge"])(lat, lon, continent.points);
                        const noiseVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noise"])(x * 6.0 + 50, y * 6.0 + 50, z * 6.0 + 50);
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
                        x,
                        y,
                        z,
                        startX,
                        startY,
                        startZ,
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
            const gridLines = [];
            const gridSegments = isMobile ? 32 : 64; // 모바일 성능 최적화: 세그먼트 수 절반으로 감소
            for(let lat = -80; lat <= 80; lat += 20){
                const path = [];
                const latRad = lat * Math.PI / 180;
                const y = Math.sin(latRad);
                const r = Math.cos(latRad);
                for(let i = 0; i <= gridSegments; i++){
                    const theta = i / gridSegments * Math.PI * 2;
                    const x = r * Math.sin(theta);
                    const z = r * Math.cos(theta);
                    path.push({
                        x,
                        y,
                        z
                    });
                }
                gridLines.push({
                    path
                });
            }
            for(let lon = 0; lon < 360; lon += 20){
                const path = [];
                const lonRad = lon * Math.PI / 180;
                for(let i = 0; i <= gridSegments; i++){
                    const latPart = i / gridSegments * Math.PI - Math.PI / 2;
                    const y = Math.sin(latPart);
                    const r = Math.cos(latPart);
                    const x = r * Math.sin(lonRad);
                    const z = r * Math.cos(lonRad);
                    path.push({
                        x,
                        y,
                        z
                    });
                }
                gridLines.push({
                    path
                });
            }
            let currentRotY = 4.2; // Atlantic start
            let targetRotX = 0.20; // 카메라 높이 하향 조정된 상태
            let currentRotX = 0.20;
            const handleMouseMove = {
                "Hero.useEffect.handleMouseMove": (e)=>{
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
                    const baseRadius = limitingDimension / 2 * (isMobile ? 0.95 : 1.12);
                    // Only react when hovering over the globe area
                    if (dist < baseRadius) {
                        // Increased sensitivity to reach ~30 degrees (0.52 rad) at max vertical distance
                        const mouseY = dy * 0.001;
                        targetRotX = 0.20 + mouseY;
                    }
                // If outside, targetRotX is maintained at its last state
                }
            }["Hero.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                trigger: sectionRef.current,
                start: 'top top',
                end: isMobile ? '+=1200' : '+=600',
                pin: true,
                scrub: 1,
                onUpdate: {
                    "Hero.useEffect": (self)=>{
                        scrollState.current.progress = self.progress;
                    }
                }["Hero.useEffect"]
            });
            let animationFrameId;
            let time = 0;
            const animStartTime = startTimeRef.current;
            const introDuration = 2200; // Snappy 2.2s intro
            let isHeroVisible = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                onToggle: {
                    "Hero.useEffect": (self)=>{
                        isHeroVisible = self.isActive;
                    }
                }["Hero.useEffect"]
            });
            const animate = {
                "Hero.useEffect.animate": ()=>{
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
                    const expansionFactor = transP < 0.5 ? Math.pow(transP, 1.8) * 1.5 // 2.5에서 1.5로 낮춰 초기 팽창 속도 감속
                     : Math.pow(0.5, 1.8) * 1.5 + (transP - 0.5) * 3.0; // 8.0에서 3.0으로 낮춰 피크 속도 감속
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
                        textRef.current.style.display = p > 0.35 || textOpacity <= 0 ? 'none' : 'block';
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
                    const baseRadius = limitingDimension / 2 * (isMobile ? 0.95 : 1.12);
                    // --- DRAW GRID (Heavy Duty Removal) ---
                    // 스크롤 35% 지점(p=0.35) 이후에는 그리드 렌더링 루프를 물리적으로 제거
                    // 모바일에서도 그리드 표시하도록 수정 (세그먼트 최적화 적용됨)
                    const shouldDrawGrid = fadeProgress < 1.0 && p < 0.35;
                    if (shouldDrawGrid) {
                        gridLines.forEach({
                            "Hero.useEffect.animate": (line)=>{
                                for(let j = 0; j < line.path.length - 1; j++){
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
                                    const gridRadius = baseRadius + gridExpansion;
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
                            }
                        }["Hero.useEffect.animate"]);
                    }
                    // --- DRAW PARTICLES ---
                    const introProgress = Math.min(1, (now - animStartTime) / introDuration);
                    const easeIntro = 1 - Math.pow(1 - introProgress, 5); // Quintic Out Snap
                    const renderbuf = [];
                    for(let i = 0; i < particles.length; i++){
                        const pt = particles[i];
                        // 1. Position Interpolation (Random Outer Space -> Globe Continent)
                        const curX_base = pt.startX + (pt.x - pt.startX) * easeIntro;
                        const curY_base = pt.startY + (pt.y - pt.startY) * easeIntro;
                        const curZ_base = pt.startZ + (pt.z - pt.startZ) * easeIntro;
                        // 2. Size & Alpha Interpolation (Intro Scaling)
                        const introSizeScale = 5.0 - 4.0 * easeIntro; // 대형 먼지에서 입자로 축소
                        const introAlpha = Math.min(1, introProgress * 1.5);
                        const scatter = pExplosion * 45000 * pt.phase;
                        const currentRadius = baseRadius + particleExpansion + scatter;
                        // "사방팔방 자유 유영" 효과 (후반부엔 유영 속도를 늦춰 화면 내 체류시간 증대)
                        const driftIntensity = p < 0.6 ? p * 3800 : 0.6 * 3800 + (p - 0.6) * 1200;
                        const driftX = pt.driftDir.x * driftIntensity;
                        const driftY = pt.driftDir.y * driftIntensity;
                        const driftZ = pt.driftDir.z * driftIntensity;
                        const curveX = Math.sin(time * 0.4 + pt.phase) * (driftIntensity * 0.5);
                        const curveY = Math.cos(time * 0.5 + pt.phase * 2) * (driftIntensity * 0.5);
                        const curveZ = Math.sin(time * 0.3 + pt.phase * 1.5) * (driftIntensity * 0.4);
                        const morphFactor = Math.min(1.0, p * 1.8);
                        const x = curX_base * currentRadius * (1 - morphFactor * 0.3) + driftX + curveX;
                        const y = curY_base * currentRadius * (1 - morphFactor * 0.3) + driftY + curveY;
                        const z = curZ_base * currentRadius * (1 - morphFactor * 0.3) + driftZ + curveZ;
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
                        const perspectiveFactor = 1.0 - rz_f / baseRadius * 0.2;
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
                        if (depthRatio > 0.1) alpha *= 1 - depthRatio * 0.75;
                        if (introProgress > 0.85) {
                            const distFromCenter = Math.sqrt(rx * rx + ry * ry);
                            const normalizedDist = distFromCenter / (baseRadius * (fov / zDepth));
                            if (normalizedDist > 0.7) {
                                alpha *= 1 - (normalizedDist - 0.7) * 2.5;
                            }
                        }
                        // 그리드 소멸 시점(0.35)과 완벽히 동기화하여 지루한 후반부 삭제
                        const particleFadeStart = 0.3;
                        if (p > particleFadeStart) {
                            const pfProgress = (p - particleFadeStart) / (1 - particleFadeStart);
                            alpha *= 1 - Math.pow(pfProgress, 2.5); // 더 긴 꼬리를 갖는 부드러운 소멸
                        }
                        if (alpha < 0.05) continue; // 투명한 파티클 렌더링 스킵 (연산 절약)
                        renderbuf.push({
                            x: screenX,
                            y: screenY,
                            z: zDepth,
                            size,
                            color: finalColor,
                            alpha,
                            rx,
                            ry,
                            rz: rz_f,
                            rad: currentRadius
                        });
                    }
                    renderbuf.sort({
                        "Hero.useEffect.animate": (a, b)=>b.z - a.z
                    }["Hero.useEffect.animate"]);
                    const hexAngles = [
                        {
                            c: 0.866,
                            s: -0.5
                        },
                        {
                            c: 0,
                            s: -1
                        },
                        {
                            c: -0.866,
                            s: -0.5
                        },
                        {
                            c: -0.866,
                            s: 0.5
                        },
                        {
                            c: 0,
                            s: 1
                        },
                        {
                            c: 0.866,
                            s: 0.5
                        }
                    ];
                    for(let i = 0; i < renderbuf.length; i++){
                        const b = renderbuf[i];
                        context.globalAlpha = b.alpha > 1 ? 1 : b.alpha < 0 ? 0 : b.alpha;
                        context.fillStyle = b.color;
                        const rz = b.rz;
                        const rad = b.rad;
                        const rx = b.rx;
                        const ry = b.ry;
                        const squash = Math.abs(rz / rad);
                        const rLen = Math.sqrt(rx * rx + ry * ry);
                        const dx = rLen > 0.01 ? rx / rLen : 1;
                        const dy = rLen > 0.01 ? ry / rLen : 0;
                        const px = -dy;
                        const py = dx;
                        context.beginPath();
                        for(let j = 0; j < 6; j++){
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
                }
            }["Hero.useEffect.animate"];
            animationFrameId = requestAnimationFrame(animate);
            return ({
                "Hero.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    resizeObserver.disconnect();
                    // Only kill ScrollTriggers created by this component
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAll().forEach({
                        "Hero.useEffect": (t)=>{
                            if (t.vars.trigger === sectionRef.current) t.kill();
                        }
                    }["Hero.useEffect"]);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative w-full z-10 bg-[#030308]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full sticky top-0 overflow-hidden",
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "block w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 503,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: textRef,
                    className: `absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center mix-blend-screen w-full transition-opacity duration-100 ease-linear ${isMobile ? 'bottom-[50px]' : 'bottom-[25px]'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full ${isMobile ? 'px-[20px]' : 'px-[60px]'}`,
                        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/hero_title_mobile.svg",
                            alt: "THE DIGITAL EARTH, CONNECTED TO REALITY",
                            className: "w-full h-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 512,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/hero_title_desktop.svg",
                            alt: "THE DIGITAL EARTH, CONNECTED TO REALITY",
                            className: "w-full h-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 518,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 502,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 501,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "gXkSvfwA/s0EqOxKEKaPmb+h3jY=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TypingSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const TypingSection = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isFinished, setIsFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fullText = "DIFFERENT,\nBEYOND";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TypingSection.useEffect": (entries)=>{
                    entries.forEach({
                        "TypingSection.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                let count = 0;
                                const timer = setInterval({
                                    "TypingSection.useEffect.timer": ()=>{
                                        count++;
                                        setDisplayText(fullText.substring(0, count));
                                        if (count >= fullText.length) {
                                            clearInterval(timer);
                                            setIsFinished(true);
                                        }
                                    }
                                }["TypingSection.useEffect.timer"], 50);
                                observer.unobserve(entry.target);
                            }
                        }
                    }["TypingSection.useEffect"]);
                }
            }["TypingSection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "TypingSection.useEffect": ()=>{
                    observer.disconnect();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "TypingSection.useEffect": (t)=>{
                            if (t.vars.trigger === sectionRef.current) t.kill();
                        }
                    }["TypingSection.useEffect"]);
                }
            })["TypingSection.useEffect"];
        }
    }["TypingSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "w-full h-[800px] bg-[#030308] flex items-center justify-center overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[#9185ff] text-[24px] md:text-[32px] font-accent tracking-[0.4em] md:tracking-[0.6em] text-center px-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150px] md:-translate-y-[300px] whitespace-pre-line md:whitespace-nowrap",
            children: [
                displayText,
                !isFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "animate-pulse ml-1",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/components/TypingSection.tsx",
                    lineNumber: 56,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/TypingSection.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/TypingSection.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TypingSection, "RjC4CcckOY6ybT6XuO1cW2GVoLE=");
_c = TypingSection;
const __TURBOPACK__default__export__ = TypingSection;
var _c;
__turbopack_context__.k.register(_c, "TypingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Information.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Information
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// --- Vision Background Particle Component ---
const VisionParticles = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisionParticles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let w = canvas.width = window.innerWidth;
            let h = canvas.height = window.innerHeight;
            const particles = [];
            const particleCount = window.innerWidth < 768 ? 30 : 120;
            for(let i = 0; i < particleCount; i++){
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    s: Math.random() * 2 + 0.5,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    a: Math.random() * 0.4 + 0.1,
                    curA: 0
                });
            }
            const handleResize = {
                "VisionParticles.useEffect.handleResize": ()=>{
                    w = canvas.width = window.innerWidth;
                    h = canvas.height = window.innerHeight;
                }
            }["VisionParticles.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            let animationFrameId;
            const render = {
                "VisionParticles.useEffect.render": ()=>{
                    ctx.clearRect(0, 0, w, h);
                    particles.forEach({
                        "VisionParticles.useEffect.render": (p)=>{
                            p.x += p.vx;
                            p.y += p.vy;
                            if (p.x < 0) p.x = w;
                            if (p.x > w) p.x = 0;
                            if (p.y < 0) p.y = h;
                            if (p.y > h) p.y = 0;
                            // Subtle breathing alpha
                            p.curA = p.a * (0.5 + Math.sin(Date.now() * 0.001 + p.x * 0.01) * 0.5);
                            ctx.fillStyle = `rgba(8, 239, 255, ${p.curA})`;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }["VisionParticles.useEffect.render"]);
                    animationFrameId = requestAnimationFrame(render);
                }
            }["VisionParticles.useEffect.render"];
            render();
            return ({
                "VisionParticles.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationFrameId);
                }
            })["VisionParticles.useEffect"];
        }
    }["VisionParticles.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 pointer-events-none z-[5]"
    }, void 0, false, {
        fileName: "[project]/components/Information.tsx",
        lineNumber: 74,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VisionParticles, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = VisionParticles;
function Information() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { language, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Asset Paths (assuming images are placed in public/assets or similar - utilizing generated ones)
    // For this environment, we'll assume they need to be moved to the public folder by the user or are served correctly.
    // Using absolute paths for now as placehodlers or the actual generated paths if we could access them via a server route.
    // Since we are in a dev environment without a proper public folder mapping shown yet, I will use the paths provided but ideally these should be in /public.
    // I will use colors and layout to convey the theme primarily, using the images as backgrounds if possible.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Information.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Information.useEffect.ctx": ()=>{
                    // 1. Vision Parallax & Fade - Mobile optimized (scrub removed for fast scroll stability)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.vision-text', {
                        scrollTrigger: {
                            trigger: '.vision-section',
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                            fastScrollEnd: true
                        },
                        y: 60,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'power2.out',
                        immediateRender: false
                    });
                    // 2. Bento Grid Stagger - Mobile optimized
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.bento-item', {
                        scrollTrigger: {
                            trigger: '.features-section',
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                            fastScrollEnd: true
                        },
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: 'power2.out',
                        immediateRender: false
                    });
                    // 3. Kubic Cycle - Mobile optimized with deterministic fromTo
                    const mechanismTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: '.kubic-section',
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                            fastScrollEnd: true
                        }
                    });
                    mechanismTl.fromTo('.kubic-tab', {
                        y: 30,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: 'power3.out',
                        clearProps: "transform",
                        immediateRender: false
                    }).fromTo('.kubic-mobile', {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        immediateRender: false
                    }, "-=0.4");
                    // 4. Economy Split - Mobile optimized
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.economy-left', {
                        scrollTrigger: {
                            trigger: '.economy-section',
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                            fastScrollEnd: true
                        },
                        x: -30,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        immediateRender: false
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.economy-right', {
                        scrollTrigger: {
                            trigger: '.economy-section',
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                            fastScrollEnd: true
                        },
                        x: 30,
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.15,
                        ease: 'power2.out',
                        immediateRender: false
                    });
                    // 5. Kubic Section Scanline Animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo('.kubic-scanline', {
                        top: '0%'
                    }, {
                        top: '100%',
                        duration: 4,
                        repeat: -1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.kubic-section',
                            start: 'top bottom'
                        }
                    });
                    // Ensure layout positions are calibrated after initial paint/load
                    setTimeout({
                        "Information.useEffect.ctx": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                        }
                    }["Information.useEffect.ctx"], 500);
                }
            }["Information.useEffect.ctx"], containerRef);
            return ({
                "Information.useEffect": ()=>ctx.revert()
            })["Information.useEffect"];
        }
    }["Information.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full bg-[#030308] text-white overflow-hidden relative font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "vision-section relative w-full min-h-[800px] flex flex-col justify-center items-center px-6 py-32 md:py-64 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-[url('/assets/k-001.webp')] bg-cover bg-center"
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisionParticles, {}, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-5xl w-full text-center space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vision-text space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[#08efff] tracking-[0.2em] text-[16px] md:text-[18px] font-bold uppercase",
                                        children: t('info.vision.subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: `text-4xl md:text-7xl tracking-tight text-white ${language === 'ko' ? 'leading-[1.3] md:leading-[87px] font-extrabold' : 'leading-[41px] md:leading-[77px]'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: language === 'en' ? 'font-accent font-normal' : '',
                                                children: t('info.vision.title1')
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 224,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 224,
                                                columnNumber: 130
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: language === 'en' ? 'font-accent font-bold' : '',
                                                children: t('info.vision.title2')
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 225,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-lg md:text-xl max-w-2xl mx-auto pt-4",
                                        children: t('info.vision.description')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vision-text grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-[#0A0A0A]/20 backdrop-blur-[12px] md:backdrop-blur-[80px] p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white",
                                                children: t('info.vision.card1.title')
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 234,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 leading-relaxed",
                                                children: t('info.vision.card1.desc')
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 235,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 233,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 flex flex-col justify-center md:border-l-[1px] border-[#08efff]/50 md:pl-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl md:text-3xl font-light text-white leading-snug",
                                            children: [
                                                t('info.vision.card2.quote1'),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 64
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[#08efff]",
                                                    children: t('info.vision.card2.quote2')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 33
                                                }, this),
                                                t('info.vision.card2.quote3')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 240,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Information.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                className: "features-section w-full px-6 py-40 md:py-72 bg-[#050505]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-4 mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "bento-item text-[#08efff] font-bold tracking-widest uppercase text-[18px]",
                                    children: t('info.features.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 255,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `bento-item text-4xl md:text-5xl leading-[1.3] md:leading-[63px] ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`,
                                    dangerouslySetInnerHTML: {
                                        __html: t('info.features.title').replace('\n', '<br />')
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 256,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Information.tsx",
                            lineNumber: 254,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bento-item col-span-1 md:col-span-1 row-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-white/5 hover:border-[#08efff]/30 transition-colors duration-500 overflow-hidden group relative min-h-[500px] md:min-h-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0 opacity-100 pointer-events-none transition-opacity duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-[url('/assets/location_posting_bg.webp')] bg-cover bg-center"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-[#0A0A0A]/20 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 263,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#08efff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col justify-between relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-[#08efff] rounded-full flex items-center justify-center mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-6 h-6 text-black",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 127
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 283
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-bold mb-4",
                                                            children: t('info.features.card1.title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Information.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400",
                                                            children: t('info.features.card1.desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Information.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 261,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bento-item col-span-1 md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-[#08efff]/30 transition-all duration-500 relative overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: t('info.features.card2.title')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 max-w-md",
                                                    children: t('info.features.card2.desc')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 285,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex items-center space-x-4 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-4 py-2 bg-[#111111] rounded-full text-xs uppercase tracking-wider text-[#08efff] group-hover:bg-[#08efff]/10 transition-colors border border-white/5",
                                                    children: t('info.features.card2.local')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "48",
                                                        height: "12",
                                                        viewBox: "0 0 48 12",
                                                        fill: "none",
                                                        className: "opacity-60 group-hover:opacity-100 transition-opacity duration-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M0 6H45M45 6L40 2M45 6L40 10",
                                                                stroke: "url(#flowGradient)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                    id: "flowGradient",
                                                                    x1: "0",
                                                                    y1: "6",
                                                                    x2: "45",
                                                                    y2: "6",
                                                                    gradientUnits: "userSpaceOnUse",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                            stopColor: "#08efff",
                                                                            stopOpacity: "0.2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Information.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                            offset: "1",
                                                                            stopColor: "#08efff"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Information.tsx",
                                                                            lineNumber: 297,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Information.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-4 py-2 bg-white/10 rounded-full text-xs uppercase tracking-wider text-white group-hover:bg-white/20 transition-colors border border-white/5",
                                                    children: t('info.features.card2.global')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bento-item col-span-1 md:col-span-2 bg-[#080808] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center cursor-pointer group hover:bg-[#0C0C0C] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-[url('/assets/k-002.webp')] bg-cover bg-center"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 310,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 309,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-3xl font-bold mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#08efff]",
                                                            children: "Kubic."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Information.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 73
                                                        }, this),
                                                        " ",
                                                        t('info.features.card3.title')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: t('info.features.card3.desc')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 313,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 mt-6 md:mt-0 md:ml-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 group-hover:border-[#08efff] group-hover:text-[#08efff] transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 116
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 318,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 317,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 307,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Information.tsx",
                            lineNumber: 259,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Information.tsx",
                    lineNumber: 253,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Information.tsx",
                lineNumber: 252,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "kubic-section w-full py-40 md:py-72 bg-black relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-15 pointer-events-none",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='42' viewBox='0 0 24 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0 L0 7 V21 L12 28 V42 M12 0 L24 7 M24 21 L12 28' fill='none' stroke='%2308efff' stroke-width='1.2'/%3E%3C/svg%3E")`,
                            backgroundSize: '36px 63px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kubic-scanline absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#08efff15] to-transparent z-[1] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 337,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[#08efff] font-bold tracking-widest uppercase text-[16px]",
                                        children: t('info.kubic.subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 342,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-4xl md:text-5xl leading-[1.2] ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`,
                                        dangerouslySetInnerHTML: {
                                            __html: t('info.kubic.title').replace('\n', '<br />')
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 343,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-lg leading-relaxed",
                                        children: t('info.kubic.description1')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 344,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-6 border-l-[5px] border-[#08efff]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 italic text-lg leading-relaxed",
                                            children: [
                                                t('info.kubic.quote1'),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/Information.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 57
                                                }, this),
                                                t('info.kubic.quote2')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 348,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 347,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 341,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 flex justify-center items-center py-10 kubic-mobile",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-[320px] aspect-[9/18.5] perspective-1000",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 overflow-hidden rounded-[2.5rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `/assets/01_Post-${language === 'en' ? 'eng' : 'kor'}.webp`,
                                                alt: "Step 1",
                                                fill: true,
                                                className: `object-cover transition-opacity duration-500 ease-in-out ${activeTab === 0 ? 'opacity-100' : 'opacity-0'}`,
                                                sizes: "(max-width: 768px) 100vw, 50vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 361,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `/assets/02_Stacks-${language === 'en' ? 'eng' : 'kor'}.webp`,
                                                alt: "Step 2",
                                                fill: true,
                                                className: `object-cover transition-opacity duration-500 ease-in-out ${activeTab === 1 ? 'opacity-100' : 'opacity-0'}`,
                                                sizes: "(max-width: 768px) 100vw, 50vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 369,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `/assets/03_Value-${language === 'en' ? 'eng' : 'kor'}.webp`,
                                                alt: "Step 3",
                                                fill: true,
                                                className: `object-cover transition-opacity duration-500 ease-in-out ${activeTab === 2 ? 'opacity-100' : 'opacity-0'}`,
                                                sizes: "(max-width: 768px) 100vw, 50vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 377,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 359,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 357,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-4",
                                children: [
                                    {
                                        step: "01",
                                        title: t('info.kubic.step1.title'),
                                        desc: t('info.kubic.step1.desc')
                                    },
                                    {
                                        step: "02",
                                        title: t('info.kubic.step2.title'),
                                        desc: t('info.kubic.step2.desc')
                                    },
                                    {
                                        step: "03",
                                        title: t('info.kubic.step3.title'),
                                        desc: t('info.kubic.step3.desc')
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(i),
                                        onMouseEnter: ()=>setActiveTab(i),
                                        className: `kubic-tab w-full text-left p-6 rounded-2xl border transition-[background-color,border-color,box-shadow] duration-500 flex items-start gap-6 group backdrop-blur-sm
                                    ${activeTab === i ? 'bg-white/[0.08] border-[#08efff]/50 shadow-[0_8px_32px_0_rgba(8,239,255,0.15)] opacity-100' : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-4xl font-bold transition-colors duration-500
                                    ${activeTab === i ? 'text-[#08efff]' : 'text-white/10 group-hover:text-white/20'}`,
                                                children: item.step
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 406,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: `text-xl font-bold transition-colors duration-500
                                        ${activeTab === i ? 'text-white' : 'text-white/50'}`,
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm leading-relaxed transition-colors duration-500
                                        ${activeTab === i ? 'text-gray-400' : 'text-gray-400/40'}`,
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 410,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 396,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 390,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 339,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Information.tsx",
                lineNumber: 329,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "kubic",
                className: "economy-section w-full min-h-[850px] py-40 md:py-72 bg-[#030303] relative flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-[url('/assets/k-003.webp')] bg-cover bg-center"
                        }, void 0, false, {
                            fileName: "[project]/components/Information.tsx",
                            lineNumber: 431,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 430,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 w-full relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[#08efff] font-bold tracking-widest uppercase mb-4 text-[18px]",
                                        children: t('info.economy.subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 436,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-4xl md:text-6xl leading-[1.3] md:leading-[75px] ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`,
                                        children: t('info.economy.title')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 437,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 435,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "economy-left h-full bg-white/[0.015] backdrop-blur-xl rounded-3xl p-10 border border-white/10 space-y-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-[#08efff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 444,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-2xl font-bold mb-4 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-[5px] h-8 bg-[#08efff] mr-4 rounded-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 37
                                                            }, this),
                                                            t('info.economy.left.title')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 leading-relaxed text-lg",
                                                        children: t('info.economy.left.desc')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-6 space-y-6",
                                                        children: [
                                                            {
                                                                text: t('info.economy.list1'),
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 1.5,
                                                                    d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Information.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 80
                                                                }, this)
                                                            },
                                                            {
                                                                text: t('info.economy.list2'),
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 1.5,
                                                                    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Information.tsx",
                                                                    lineNumber: 456,
                                                                    columnNumber: 80
                                                                }, this)
                                                            },
                                                            {
                                                                text: t('info.economy.list3'),
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 1.5,
                                                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Information.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 80
                                                                }, this)
                                                            } // Globe/Network
                                                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center text-white/90 font-medium group/item hover:text-white transition-colors duration-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 group-hover/item:border-[#08efff]/50 group-hover/item:bg-[#08efff]/10 transition-all duration-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-[#08efff]",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: item.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Information.tsx",
                                                                            lineNumber: 461,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Information.tsx",
                                                                        lineNumber: 460,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    item.text
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 41
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-8 border-t border-white/10 mt-10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl text-left text-gray-200",
                                                            children: [
                                                                t('info.economy.left.quote1'),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/Information.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 72
                                                                }, this),
                                                                t('info.economy.left.quote2')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Information.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 445,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 443,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "economy-right h-full flex flex-col gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-white/[0.015] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl group/box relative overflow-hidden flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "text-gray-400 uppercase text-[14px] tracking-wider mb-6 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-1 h-1 rounded-full bg-[#08efff]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Information.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    t('info.economy.right.box.title')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xl font-bold text-white mb-2",
                                                                                children: t('info.economy.right.box.row1.title')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Information.tsx",
                                                                                lineNumber: 489,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-500",
                                                                                children: t('info.economy.right.box.row1.desc')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Information.tsx",
                                                                                lineNumber: 490,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Information.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xl font-bold text-[#08efff] mb-2",
                                                                                children: t('info.economy.right.box.row2.title')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Information.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-400",
                                                                                children: t('info.economy.right.box.row2.desc')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Information.tsx",
                                                                                lineNumber: 494,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Information.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 480,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-gradient-to-br from-[#1a1540]/25 to-[#08efff]/05 p-10 rounded-3xl border border-[#08efff]/30 relative overflow-hidden text-left group backdrop-blur-2xl shadow-2xl hover:shadow-[#08efff]/10 transition-all duration-500 flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-3xl font-bold text-white mb-4 relative z-10",
                                                        children: t('info.economy.right.card.title')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 mb-8 relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-blue-200 text-lg",
                                                                children: t('info.economy.right.card.desc1')
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-blue-200 text-lg",
                                                                children: t('info.economy.right.card.desc2')
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-8 py-3 bg-[#08efff] text-[#03030a] font-bold rounded-full hover:bg-white hover:text-[#03030a] transition-colors shadow-lg shadow-[#08efff]/20",
                                                            children: t('info.economy.button')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Information.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-[34px] right-[10%] opacity-[0.15] group-hover:opacity-[0.25] transition-all duration-700 pointer-events-none transform group-hover:scale-110 group-hover:translate-y-[-5px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-32 h-32 text-white",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 0.8,
                                                                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Information.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Information.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-[#08efff]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Information.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 500,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 479,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 440,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 434,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Information.tsx",
                lineNumber: 428,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "global-section w-full min-h-[700px] py-40 md:py-72 relative flex items-center justify-center overflow-hidden bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"
                        }, void 0, false, {
                            fileName: "[project]/components/Information.tsx",
                            lineNumber: 535,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 534,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center px-6 max-w-6xl mx-auto space-y-16 py-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-3xl md:text-5xl lg:text-[3.5rem] md:whitespace-nowrap break-keep text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8B7FFF] to-[#08efff] py-4 leading-[1.3] lg:leading-[71px] tracking-tight ${language === 'ko' ? 'font-bold' : 'font-display font-normal'}`,
                                        children: t('info.cta.title')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 541,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
                                        children: [
                                            t('info.cta.subtitle1'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/Information.tsx",
                                                lineNumber: 545,
                                                columnNumber: 54
                                            }, this),
                                            t('info.cta.subtitle2')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Information.tsx",
                                        lineNumber: 544,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 540,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-10 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
                                    children: t('info.cta.button')
                                }, void 0, false, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 552,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 551,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-2xl text-gray-300",
                                    children: [
                                        t('info.cta.description1'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 560,
                                            columnNumber: 57
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white",
                                            children: t('info.cta.description2')
                                        }, void 0, false, {
                                            fileName: "[project]/components/Information.tsx",
                                            lineNumber: 561,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 559,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 558,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] md:text-[18px] tracking-[0.3em] uppercase text-[#FFBB00]",
                                    children: t('info.cta.tagline')
                                }, void 0, false, {
                                    fileName: "[project]/components/Information.tsx",
                                    lineNumber: 567,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Information.tsx",
                                lineNumber: 566,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Information.tsx",
                        lineNumber: 538,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Information.tsx",
                lineNumber: 532,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Information.tsx",
        lineNumber: 207,
        columnNumber: 9
    }, this);
}
_s1(Information, "zxUND/Qqb4kqXLLipm1V+XywC1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = Information;
var _c, _c1;
__turbopack_context__.k.register(_c, "VisionParticles");
__turbopack_context__.k.register(_c1, "Information");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Footer() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const scrollToTop = (e)=>{
        e.preventDefault();
        // Standard window scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Fallback for document element
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-[#171717] text-[#888] pt-16 pb-8 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        onClick: scrollToTop,
                                        className: "inline-block cursor-pointer hover:opacity-80 transition-opacity",
                                        "aria-label": "Scroll to top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/underpin_logo.svg",
                                            alt: "UNDERPIN Logo",
                                            width: 120,
                                            height: 32,
                                            className: "h-[27px] md:h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "83 Uisadang-daero, Yeongdeungpo-gu, Seoul, Republic of Korea"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-x-6 gap-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "070-7537-2017"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:cs@underpin.kr",
                                                            className: "hover:text-white transition-colors",
                                                            children: "cs@underpin.kr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mt-8 md:mt-0",
                            children: [
                                {
                                    src: 'facebook.png',
                                    alt: 'Facebook'
                                },
                                {
                                    src: 'x.png',
                                    alt: 'X'
                                },
                                {
                                    src: 'youtube.png',
                                    alt: 'YouTube'
                                },
                                {
                                    src: 'instagram.png',
                                    alt: 'Instagram'
                                },
                                {
                                    src: 'telegram.png',
                                    alt: 'Telegram'
                                }
                            ].map((sns)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group transition-all",
                                    "aria-label": sns.alt,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: `/assets/sns/${sns.src}`,
                                        alt: `${sns.alt} icon`,
                                        width: 22,
                                        height: 22,
                                        className: "h-[22px] w-[22px] object-contain filter grayscale brightness-[0.8] opacity-70 group-hover:grayscale-0 group-hover:brightness-110 group-hover:opacity-100 transition-all duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                }, sns.alt, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[1px] bg-white/10 my-8"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center text-xs tracking-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: t('footer.privacy')
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: t('footer.terms')
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: t('footer.location')
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "opacity-60 text-center md:text-right",
                            children: [
                                t('footer.copyright'),
                                " © ",
                                new Date().getFullYear(),
                                " UNDERPIN."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Footer, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_598bb2f4._.js.map