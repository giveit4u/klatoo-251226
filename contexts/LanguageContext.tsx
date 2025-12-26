'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
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
        'info.vision.title2': 'THE DIGITAL EARTH.',
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
        'info.economy.right.card.desc1': 'Bid. Trade. Own.',
        'info.economy.right.card.desc2': 'Track value growth in real time.',
        'info.economy.button': 'Explore Marketplace',

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
        'footer.copyright': 'All rights reserved',
    },
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.features': '기능',
        'nav.kubic': '큐빅',
        'nav.signup': '가입하기',

        // Hero
        'hero.title': 'THE DIGITAL EARTH, CONNECTED TO REALITY',

        // Information - Vision
        'info.vision.subtitle': 'The Declaration of a Digital Earth',
        'info.vision.title1': '우리는 만들고 있습니다',
        'info.vision.title2': '디지털 지구를.',
        'info.vision.description': '현실에 뿌리를 두고, 진정한 가치를 위해 설계되었습니다.',
        'info.vision.card1.title': '가상의 판타지가 아닙니다',
        'info.vision.card1.desc': 'KLATOO는 실제 장소, 실제 사람들, 그리고 실제 활동을 기반으로 구축되어 디지털 지구에 충실히 반영됩니다. 우리는 현실을 벗어나는 것이 아니라, 디지털 세계를 현실 위에 직접 겹쳐 놓는 것입니다.',
        'info.vision.card2.quote1': '"디지털 레이어에서',
        'info.vision.card2.quote2': '현실이 겹치고',
        'info.vision.card2.quote3': ', 가치가 축적됩니다."',

        // Features
        'info.features.subtitle': '주요 기능',
        'info.features.title': '로컬에서 글로벌로, 자산화가 내장되어 있습니다.',
        'info.features.card1.title': '위치 기반 게시',
        'info.features.card1.desc': '모든 콘텐츠는 그것이 발생한 장소에서 시작됩니다. 순간을 실제 좌표에 고정하세요.',
        'info.features.card2.title': '로컬에서 글로벌로',
        'info.features.card2.desc': '하나의 로컬 게시물이 글로벌 가시성으로 확장될 수 있습니다. 트래픽은 수익 공유로 전환됩니다.',
        'info.features.card2.local': '로컬',
        'info.features.card2.global': '글로벌',
        'info.features.card3.title': '자산으로서의 콘텐츠',
        'info.features.card3.desc': '게시물은 단순한 콘텐츠가 아닙니다 — 그 아래의 땅을 활성화하여 거래 가능한 가치를 창출합니다.',

        // Kubic (Section 3)
        'info.kubic.subtitle': 'KUBIC x LBS 포스팅',
        'info.kubic.title': '콘텐츠가 땅을 빚어냅니다.',
        'info.kubic.description1': 'KLATOO에서 콘텐츠는 콘텐츠로 끝나지 않습니다. 의미 있는 게시물이 축적되면 해당 위치에 연결된 큐빅이 활성화되고 그 가치가 증가합니다.',
        'info.kubic.quote1': '"땅을 사서 기다리지 마세요.',
        'info.kubic.quote2': '땅을 활성화하고 성장시키세요."',
        'info.kubic.step1.title': '크리에이터가 게시',
        'info.kubic.step1.desc': '실제 장소에서 생성된 짧은 형식의 콘텐츠.',
        'info.kubic.step2.title': '참여도 누적',
        'info.kubic.step2.desc': '조회수, 상호작용, 공유가 큐빅에 쌓입니다.',
        'info.kubic.step3.title': '큐빅 가치 상승',
        'info.kubic.step3.desc': '실제 활동이 있는 땅은 자연스럽게 더 가치 있게 됩니다.',

        // Economy (Section 4)
        'info.economy.subtitle': '큐빅이 진정한 가치를 갖는 이유',
        'info.economy.title': '새로운 경제적 차원',
        'info.economy.left.title': '수익은 추출되지 않고 공유됩니다',
        'info.economy.left.desc': '가치는 포획되는 것이 아니라 공유됩니다. 큐빅은 가치가 다음으로 흐르도록 설계되었습니다:',
        'info.economy.list1': '큐빅 소유자',
        'info.economy.list2': '콘텐츠 크리에이터',
        'info.economy.list3': '플랫폼 생태계',
        'info.economy.left.quote1': '소유가 창작을 만나고.',
        'info.economy.left.quote2': '창작이 분배를 만납니다.',
        'info.economy.right.box.title': '비교',
        'info.economy.right.box.row1.title': '전통적인 땅',
        'info.economy.right.box.row1.desc': '유동 인구, 활동, 가시성에 따라 가치가 상승합니다.',
        'info.economy.right.box.row2.title': '큐빅',
        'info.economy.right.box.row2.desc': '게시물, 참여도, 글로벌 노출에 따라 가치가 상승합니다.',
        'info.economy.right.card.title': '세상의 표면을 거래하세요',
        'info.economy.right.card.desc1': '입찰. 거래. 소유.',
        'info.economy.right.card.desc2': '가치 성장을 실시간으로 추적하세요.',
        'info.economy.button': '마켓플레이스 탐색',

        // Global CTA
        'info.cta.title': '글로벌 트렌드와 스토리',
        'info.cta.subtitle1': '로컬 순간에서 글로벌 움직임으로.',
        'info.cta.subtitle2': '세계에서 일어나는 일을 발견하세요.',
        'info.cta.button': '지금 가입하기',
        'info.cta.description1': '연결하는 움직임에 동참하세요',
        'info.cta.description2': '현실, 콘텐츠, 그리고 가치.',
        'info.cta.tagline': 'KLATOO : 디지털 지구의 운영 체제',

        // Footer
        'footer.privacy': '개인정보 처리방침',
        'footer.terms': '서비스 약관',
        'footer.location': '위치기반서비스 이용약관',
        'footer.copyright': '모든 권리 보유',
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
