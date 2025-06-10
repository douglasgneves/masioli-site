// src/components/CtaSection.tsx
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-green-500">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Pronto para começar sua transformação?</h2>
        <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
          Junte-se à comunidade MasiHealth hoje mesmo e dê o primeiro passo para uma vida mais plena e saudável.
        </p>
        <div className="mt-8">
          <Link
            href="/login" // Futuramente, isso levará para a página de cadastro
            className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg"
          >
            Criar minha conta
          </Link>
        </div>
      </div>
    </section>
  );
}