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
        {/* Navegação Principal */}
<nav className="hidden md:flex space-x-6 items-center">
  {/* Link Externo para Odontologia */}
  <a 
    href="https://www.google.com" // SUBSTITUA PELO LINK REAL DO SEU SITE DE ODONTO
    target="_blank" // Abre em uma nova aba
    rel="noopener noreferrer" // Boas práticas de segurança para links externos
    className="hover:text-green-400 transition-colors"
  >
    Masioli Odontologia
  </a>

  <Link href="/masikids" className="hover:text-green-400 transition-colors">MasiKids</Link>
  <Link href="/cursos" className="hover:text-green-400 transition-colors">Mais Cursos</Link>
  <Link href="/loja" className="hover:text-green-400 transition-colors">Loja</Link>
</nav>

        {/* Botão de Login */}
        <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Entrar
        </Link>
      </div>
    </header>
  );
}