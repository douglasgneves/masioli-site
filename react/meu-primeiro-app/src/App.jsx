import { useState } from 'react'

function App() {
  // [variável de estado, função para atualizar] = useState(valor inicial)
  const [count, setCount] = useState(0);

  // Função que será chamada quando o botão for clicado
  function handleIncrement() {
    // Usamos a função para dizer ao React qual o novo valor do estado
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Meu Contador React</h1>
      {/* Exibimos o valor atual do estado */}
      <h2>Contagem atual: {count}</h2>
      {/* Quando o botão é clicado, chamamos nossa função */}
      <button onClick={handleIncrement}>
        Aumentar
      </button>
    </div>
  )
}

export default App