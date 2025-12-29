import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Information from '../components/Information';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="w-full relative bg-black text-white font-sans selection:bg-[#08efff] selection:text-white">
            <Navigation />
            <Hero />
            <Information />
            <Footer />
        </main>
    );
}
