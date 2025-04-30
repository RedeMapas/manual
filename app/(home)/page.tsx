import Link from 'next/link';
import Footer from '@/components/Footer';
import FeaturedHome from '@/components/FeaturedHome';
import HeroHome from '@/components/HeroHome';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <HeroHome />
      <FeaturedHome />
      <Footer />
    </main>
  );
}
