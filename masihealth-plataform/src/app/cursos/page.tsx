// src/app/cursos/page.tsx
import Link from 'next/link';

// Dados de exemplo. No futuro, isso virá do seu banco de dados!
const sampleCourses = [
  { id: 1, title: 'Introdução à Nutrição Funcional', description: 'Aprenda os pilares de uma alimentação que cura.', author: 'Dr. João da Silva' },
  { id: 2, title: 'Mindfulness para o Dia a Dia', description: 'Técnicas para reduzir o estresse e aumentar o foco.', author: 'Dra. Ana Costa' },
  { id: 3, title: 'Treinamento de Força para Iniciantes', description: 'Construa uma base sólida de força e confiança.', author: 'Prof. Carlos Lima' },
];

export default function CursosPage() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto py-16 px-4 text-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">Explore Nossos Cursos</h1>
          <p className="mt-4 text-lg text-gray-300">Capacite-se com o conhecimento dos melhores especialistas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleCourses.map((course) => (
            <div key={course.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <p className="text-sm text-gray-500">Por: {course.author}</p>
              </div>
              <div className="p-6 bg-gray-800">
                <Link href={`/cursos/${course.id}`} className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors block">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}