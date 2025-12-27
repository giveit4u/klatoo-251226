import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Montserrat } from 'next/font/google';
import 'pretendard-jp/dist/web/static/pretendard-jp.css';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
    title: 'KLATOO | Hyper Local SNS',
    description: 'Hyper Local SNS Application',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} ${montserrat.variable} font-sans`}>
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
