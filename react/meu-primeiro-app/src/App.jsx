// src/App.jsx

import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (inputValue.trim() === '') return;
    setTasks([...tasks, inputValue]);
    setInputValue('');
  }

  // Passo 1: Criar a função de remover
  // Ela recebe o índice da tarefa que queremos remover
  function handleRemoveTask(indexToRemove) {
    // Usamos .filter para criar um novo array
    // contendo apenas os itens que NÃO têm o índice a ser removido
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* Passo 2: Adicionar o botão de remover */}
            <button onClick={() => handleRemoveTask(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;