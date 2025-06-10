// src/components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="text-white bg-gray-900">
      <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transforme sua Vida com a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            MasiHealth
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Sua jornada completa para o bem-estar começa aqui. Explore cursos, produtos e uma comunidade que te apoia.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/cursos"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
          >
            Explorar Cursos
          </Link>
          <Link
            href="/sobre"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
          >
            Saber Mais
          </Link>
        </div>
      </div>
    </section>
  );
}