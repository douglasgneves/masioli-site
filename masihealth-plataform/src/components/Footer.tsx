// src/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {currentYear} MasiHealth. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">
          Construindo um futuro mais saudável, juntos.
        </p>
      </div>
    </footer>
  );
}