/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                kees: {
                    bg: '#FAFAF8', // Off-white paper feel
                    gold: '#D4AF37',
                    dark: '#1A1A1A',
                    purple: '#6D28D9',
                    accent: '#E5E7EB'
                }
            }
        },
    },
    plugins: [],
}
