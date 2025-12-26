import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

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
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
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
