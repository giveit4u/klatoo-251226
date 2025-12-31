import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Montserrat, Goldman, Syncopate } from 'next/font/google';
import 'pretendard-jp/dist/web/static/pretendard-jp.css';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const goldman = Goldman({ weight: '400', subsets: ['latin'], variable: '--font-goldman' });
const syncopate = Syncopate({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-syncopate' });

export const metadata: Metadata = {
    title: 'KLATOO : THE DIGITAL EARTH',
    description: "The Operating System of The Digital Earth. Connect with reality through KLATOO's hyper-local SNS platform.",
    icons: {
        icon: [
            { url: '/assets/KLATOO-32.png', sizes: '32x32', type: 'image/png' },
            { url: '/assets/KLATOO-256.png', sizes: '256x256', type: 'image/png' },
        ],
        apple: '/assets/KLATOO-256.png',
    },
    openGraph: {
        title: 'KLATOO : THE DIGITAL EARTH',
        description: "The Operating System of The Digital Earth.",
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} ${montserrat.variable} ${goldman.variable} ${syncopate.variable} font-sans`}>
                <LanguageProvider>
                    <SmoothScroll />
                    {children}
                </LanguageProvider>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        if ('scrollRestoration' in history) {
                            history.scrollRestoration = 'manual';
                        }
                        window.scrollTo(0, 0);
                    `
                }} />
            </body>
        </html>
    );
}
