import React, { useState } from 'react';

// --- COMPONENTES AUXILIARES (EXERCÍCIO 1 & GERENCIADOR) ---

// TaskItem: Recebe dados via Props (Pág. 5 e 37)
const TaskItem = ({ tarefa, onConcluir, onRemover }) => {
  return (
    <div className="br-item">
      <div className="row align-items-center">
        <div className="col-auto">
          <div className="br-checkbox">
            <input 
              id={`check-${tarefa.id}`} 
              type="checkbox" 
              checked={tarefa.concluida} 
              onChange={() => onConcluir(tarefa.id)} 
            />
            <label htmlFor={`check-${tarefa.id}`}></label>
          </div>
        </div>
        <div className="col">
          <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
            {tarefa.texto}
          </span>
        </div>
        <div className="col-auto">
          <button className="br-button circle secondary small" onClick={() => onRemover(tarefa.id)} title="Remover">
            <i className="fas fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// TaskForm: Gerencia estado local do Input (Pág. 40)
const TaskForm = ({ onAdicionar }) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onAdicionar(texto);
    setTexto(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="br-input mb-3">
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Nova tarefa..." 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="br-button primary" type="submit" aria-label="Adicionar">
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

// --- COMPONENTE PRINCIPAL DA AULA ---

const Aula30 = () => {
  const [abaInterna, setAbaInterna] = useState('ex1');
  
  // Estado Global das Tarefas (Exercício 2 - Pág. 39)
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Aprender Props", concluida: false },
    { id: 2, texto: "Usar UseState", concluida: true }
  ]);

  // Lógica de manipulação (Elevação de Estado - Pág. 32)
  const adicionarTarefa = (texto) => {
    const nova = { id: Date.now(), texto, concluida: false };
    setTarefas([...tarefas, nova]);
  };

  const alternarTarefa = (id) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  return (
    <div className="br-card">
      <div className="card-header">
        <div className="br-tab">
          <nav className="tab-nav">
            <ul>
              <li className={`tab-item ${abaInterna === 'ex1' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('ex1')}>Ex 1: Props</button>
              </li>
              <li className={`tab-item ${abaInterna === 'ex2' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('ex2')}>Ex 2: State</button>
              </li>
              <li className={`tab-item ${abaInterna === 'task' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('task')}>Gerenciador</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="card-content">
        {/* EXERCÍCIO 1: Foco em passar dados via Props */}
        {abaInterna === 'ex1' && (
          <div className="p-3">
            <p className="br-h5">Renderização via Props</p>
            <TaskItem 
              tarefa={{id: 99, texto: "Sou uma tarefa passada por Props", concluida: false}} 
              onConcluir={() => alert('Alterando via Props!')}
              onRemover={() => {}}
            />
          </div>
        )}

        {/* EXERCÍCIO 2: Foco em manipular o Array no State */}
        {abaInterna === 'ex2' && (
          <div className="p-3">
            <p className="br-h5">Lista Dinâmica (useState)</p>
            <div className="br-list">
              {tarefas.map(t => (
                <TaskItem key={t.id} tarefa={t} onConcluir={alternarTarefa} onRemover={removerTarefa} />
              ))}
            </div>
          </div>
        )}

        {/* GERENCIADOR DE TAREFAS: União de tudo (Pág. 36) */}
        {abaInterna === 'task' && (
          <div className="p-3">
            <TaskForm onAdicionar={adicionarTarefa} />
            <div className="br-divider my-3"></div>
            <div className="br-list">
              <div className="header"><div className="title">Gerenciador Completo</div></div>
              {tarefas.length === 0 ? (
                <p className="p-3 text-center">Nenhuma tarefa pendente.</p>
              ) : (
                tarefas.map(t => (
                  <TaskItem key={t.id} tarefa={t} onConcluir={alternarTarefa} onRemover={removerTarefa} />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Aula30;