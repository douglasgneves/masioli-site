// src/components/Header.tsx

// A tag 'Link' do Next.js é usada para navegação entre páginas
// sem recarregar a página inteira. É mais performático que um <a>.
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-400">
          MasiHealth
        </Link>

        {/* Navegação Principal */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-400 transition-colors">Início</Link>
          <Link href="/sobre" className="hover:text-green-400 transition-colors">Sobre Nós</Link>
          <Link href="/produtos" className="hover:text-green-400 transition-colors">Produtos</Link>
          <Link href="/cursos" className="hover:text-green-400 transition-colors">Cursos</Link>
        </nav>

        {/* Botão de Login */}
        <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Entrar
        </Link>
      </div>
    </header>
  );
}