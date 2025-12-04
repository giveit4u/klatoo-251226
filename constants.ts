import { FeatureItem } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'lbsns',
    title: 'Short-form SNS',
    shortDescription: 'Impactful 15s to 3min video content.',
    fullDescription: 'KEES optimizes for the modern attention span. Create and consume short-form videos (15s-3min) that deliver key messages quickly. Perfectly tuned for high engagement and rapid information sharing.',
    icon: 'video',
    stats: [{ label: 'Engagement', value: '+30%' }, { label: 'Duration', value: '15s-3m' }]
  },
  {
    id: 'hyperlocal',
    title: 'Hyper Local',
    shortDescription: 'Connect global users to local stories.',
    fullDescription: 'Seamlessly move between global trends and local whispers. Discover what is happening in your neighborhood or explore a city halfway across the world through the lens of locals.',
    icon: 'map-pin',
    stats: [{ label: 'Coverage', value: 'Global' }, { label: 'Focus', value: 'Local' }]
  },
  {
    id: 'kubic',
    title: 'Kubic',
    shortDescription: 'Hexagonal digital real estate.',
    fullDescription: 'The core of the KEES ecosystem. Kubics are hexagonal digital assets (~45m²) mapped 1:1 to real-world locations. Own a piece of the digital earth and earn from activity within your hexagon.',
    icon: 'hexagon',
    stats: [{ label: 'Area', value: '45m²' }, { label: 'Type', value: 'NFT' }]
  },
  {
    id: 'cnft',
    title: 'C-NFT',
    shortDescription: 'Automated Content NFTs.',
    fullDescription: 'A new paradigm for creators. Every video generated is authenticated with location metadata and minted as a C-NFT. Separate ownership from revenue rights to trade content like assets.',
    icon: 'file-check',
    stats: [{ label: 'Minting', value: 'Auto' }, { label: 'Rights', value: 'Tradeable' }]
  },
  {
    id: 'kubicnomics',
    title: 'Kubicnomics',
    shortDescription: 'Transparent revenue sharing.',
    fullDescription: 'A fair economic model where revenue from ads, curation, and events is shared between Kubic Owners, the Platform, and Top Creators (5:2:3 ratio).',
    icon: 'coins',
    stats: [{ label: 'Owner Share', value: '50%' }, { label: 'Creator Share', value: '30%' }]
  },
  {
    id: 'ai',
    title: 'AI Integration',
    shortDescription: 'Breaking language barriers.',
    fullDescription: 'Global-to-Local AI translation and recommendation engines ensure that content transcends borders. Communicate with anyone, anywhere, without language friction.',
    icon: 'cpu',
    stats: [{ label: 'Translation', value: 'Real-time' }, { label: 'Matching', value: 'Smart' }]
  }
];