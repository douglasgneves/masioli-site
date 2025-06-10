// src/app/page.tsx

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    // O <main> é o container principal para o conteúdo da página.
    // O Next.js recomenda usar <main> em vez de <div> aqui.
    <main>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}