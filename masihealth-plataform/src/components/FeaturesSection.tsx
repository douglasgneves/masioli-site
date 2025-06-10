// src/components/FeaturesSection.tsx

// Vamos usar ícones! Primeiro, instale a biblioteca de ícones.
// No seu terminal, pare o servidor (Ctrl + C) e rode:
// npm install lucide-react
// Depois, reinicie o servidor com: npm run dev

import { BookOpen, ShoppingCart, Users } from 'lucide-react';

const features = [
  {
    name: 'Cursos Online',
    description: 'Aprenda com especialistas em nutrição, fitness e saúde mental no seu próprio ritmo.',
    icon: BookOpen,
  },
  {
    name: 'Loja de Produtos',
    description: 'Encontre produtos cuidadosamente selecionados para apoiar seu estilo de vida saudável.',
    icon: ShoppingCart,
  },
  {
    name: 'Comunidade Ativa',
    description: 'Conecte-se com outras pessoas, compartilhe suas vitórias e encontre motivação.',
    icon: Users,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-800 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tudo que você precisa em um só lugar</h2>
          <p className="mt-4 text-lg text-gray-400">Potencialize sua saúde física e mental com nossas ferramentas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center">
              <feature.icon className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}