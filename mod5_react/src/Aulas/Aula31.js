import React, { useState, useEffect } from 'react';

// --- COMPONENTES AUXILIARES ---
const TaskItem = ({ tarefa, onConcluir, onRemover }) => (
  <div className="br-item">
    <div className="row align-items-center">
      <div className="col-auto">
        <div className="br-checkbox">
          <input 
            id={`task-${tarefa.id}`} 
            type="checkbox" 
            checked={tarefa.concluida} 
            onChange={() => onConcluir(tarefa.id)} 
          />
          <label htmlFor={`task-${tarefa.id}`}></label>
        </div>
      </div>
      <div className="col">
        <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
          {tarefa.texto}
        </span>
      </div>
      <div className="col-auto">
        <button className="br-button circle secondary small" onClick={() => onRemover(tarefa.id)} aria-label="Remover">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
);

const Aula31 = () => {
  const [abaInterna, setAbaInterna] = useState('passo4');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [tarefas, setTarefas] = useState([]);

  // --- LOGICA DE SINCRONIZAÇÃO (PÁG. 28) ---
  useEffect(() => {
    const salvas = localStorage.getItem('tasks_v31');
    if (salvas) setTarefas(JSON.parse(salvas));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks_v31', JSON.stringify(tarefas));
    const pendentes = tarefas.filter(t => !t.concluida).length;
    document.title = `TaskMaster (${pendentes} pendentes)`;
  }, [tarefas]);

  // --- LOGICA DE DEBOUNCE (PÁG. 24) ---
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(email));
      } else {
        setIsValid(null);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [email]);

  const adicionarTarefa = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setTarefas([...tarefas, { id: Date.now(), texto: e.target.value, concluida: false }]);
      e.target.value = '';
    }
  };

  return (
    <div className="br-card">
      <div className="card-header">
        <div className="br-tab">
          <nav className="tab-nav">
            <ul>
              <li className={`tab-item ${abaInterna === 'passo1' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo1')}>1. Debounce</button>
              </li>
              <li className={`tab-item ${abaInterna === 'passo2' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo2')}>2. Persistência</button>
              </li>
              <li className={`tab-item ${abaInterna === 'passo3' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo3')}>3. Título Dinâmico</button>
              </li>
              <li className={`tab-item ${abaInterna === 'passo4' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo4')}>4. App Completa</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="card-content p-3">
        {/* EXERCÍCIO 1: DEBOUNCE (Aparece no Passo 1 e no Passo 4) */}
        {(abaInterna === 'passo1' || abaInterna === 'passo4') && (
          <div className="br-input mb-4 border-bottom pb-3">
            <label htmlFor="email">Validação de Email (Debounce 500ms):</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="aluno@exemplo.com"
            />
            {isValid !== null && (
              <span className={`br-tag ${isValid ? 'success' : 'danger'} mt-1`}>
                {isValid ? 'Email Válido' : 'Email Inválido'}
              </span>
            )}
          </div>
        )}

        {/* GERENCIADOR EVOLUTIVO (Passos 2, 3 e 4) */}
        {abaInterna !== 'passo1' && (
          <>
            <div className="br-list mb-3">
              <div className="header"><div className="title">ProjectList: Projeto Capacita</div></div>
            </div>

            <div className="br-input mb-3">
              <label htmlFor="new-task">TaskForm: Digite e aperte Enter</label>
              <input id="new-task" type="text" onKeyDown={adicionarTarefa} placeholder="Nova tarefa..." />
            </div>

            <div className="br-list">
              <div className="header">
                <div className="title">
                  TaskList { (abaInterna === 'passo3' || abaInterna === 'passo4') && 
                    `(${tarefas.filter(t=>!t.concluida).length} pendentes)` 
                  }
                </div>
              </div>
              {tarefas.map(t => (
                <TaskItem 
                  key={t.id} 
                  tarefa={t} 
                  onConcluir={(id) => setTarefas(tarefas.map(x => x.id === id ? {...x, concluida: !x.concluida} : x))}
                  onRemover={(id) => setTarefas(tarefas.filter(x => x.id !== id))}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Aula31;