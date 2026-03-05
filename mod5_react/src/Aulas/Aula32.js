import React, { useState, createContext, useContext, useEffect, useReducer } from 'react';

// --- CONTEXTOS ---
const ThemeContext = createContext();
const TaskContext = createContext();

// --- REDUCER PARA O CARRINHO (Pág. 36) ---
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.payload];
    case 'REMOVE_ITEM': return state.filter(item => item.id !== action.payload);
    default: return state;
  }
};

// --- COMPONENTES ADAPTADOS PARA O TEMA ---

const StatusHeader = () => {
  const { tarefas } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);
  const pendentes = tarefas.filter(t => !t.concluida).length;
  
  // No modo dark, usamos a variante 'warning' ou mantemos 'info' com ajuste de contraste
  return (
    <div className={`br-message ${theme === 'dark' ? 'warning' : 'info'} mb-3`} role="alert">
      <div className="content">
        Você tem <strong>{pendentes}</strong> tarefas pendentes.
      </div>
    </div>
  );
};

const TaskItem = ({ tarefa }) => {
  const { dispatchTasks } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`br-item ${theme === 'dark' ? 'dark-mode' : ''}`} 
         style={{ backgroundColor: theme === 'dark' ? '#2d2d2d' : '', color: theme === 'dark' ? '#fff' : '' }}>
      <div className="row align-items-center">
        <div className="col">
          <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
            {tarefa.texto}
          </span>
        </div>
        <div className="col-auto">
          <button className={`br-button circle small ${theme === 'dark' ? 'inverted' : 'secondary'}`} 
                  onClick={() => dispatchTasks({type: 'REMOVE', id: tarefa.id})}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

const Aula32 = () => {
  const [abaInterna, setAbaInterna] = useState('passo4');
  const [theme, setTheme] = useState('light');
  const [tarefas, setTarefas] = useState([]);
  const [carrinho, dispatchCart] = useReducer(cartReducer, []);

  // Lógica de Dispatch para Tarefas
  const dispatchTasks = (action) => {
    if(action.type === 'REMOVE') setTarefas(tarefas.filter(t => t.id !== action.id));
  };

  // Estilos de Contraste conforme DSGOV (Escuro: #1a1a1a, Texto: #fff)
  const containerStyle = {
    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff',
    color: theme === 'dark' ? '#ffffff' : '#333',
    padding: '24px',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const inputStyle = {
    backgroundColor: theme === 'dark' ? '#3e3e3e' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    borderColor: theme === 'dark' ? '#555' : '#ccc'
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TaskContext.Provider value={{ tarefas, dispatchTasks }}>
        
        <div className="br-card" style={{ border: theme === 'dark' ? '1px solid #444' : '' }}>
          <div className="card-header">
            <div className="br-tab">
              <nav className="tab-nav">
                <ul>
                  {['passo1', 'passo2', 'passo3', 'passo4'].map((p, i) => (
                    <li key={p} className={`tab-item ${abaInterna === p ? 'active' : ''}`}>
                      <button type="button" onClick={() => setAbaInterna(p)}>
                        {i+1}. {p === 'passo1' ? 'Theme' : p === 'passo2' ? 'Redux' : p === 'passo3' ? 'Status' : 'Global'}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="card-content" style={containerStyle}>
            
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="br-h5 m-0">Gerenciador {theme === 'dark' ? '(Modo Escuro)' : '(Modo Claro)'}</span>
              <button 
                className={`br-button circle ${theme === 'dark' ? 'inverted' : 'primary'}`}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
              </button>
            </div>

            {abaInterna === 'passo2' && (
              <div className="mb-4">
                <p>Simulação Redux Carrinho</p>
                <button className="br-button secondary" onClick={() => dispatchCart({type: 'ADD_ITEM', payload: {id: Date.now(), nome: 'Item' }})}>
                  Add Item
                </button>
                <div className="mt-2">Itens: {carrinho.length}</div>
              </div>
            )}

            {(abaInterna === 'passo3' || abaInterna === 'passo4') && <StatusHeader />}

            {abaInterna === 'passo4' && (
              <>
                <div className="br-input mb-4">
                  <label htmlFor="input-32" style={{ color: theme === 'dark' ? '#fff' : '' }}>Nova Tarefa:</label>
                  <input 
                    id="input-32" 
                    type="text" 
                    style={inputStyle}
                    placeholder="Digite e pressione Enter..." 
                    onKeyDown={(e) => {
                      if(e.key === 'Enter'){
                        setTarefas([...tarefas, {id: Date.now(), texto: e.target.value, concluida: false}]);
                        e.target.value = '';
                      }
                    }} 
                  />
                </div>

                <div className="br-list" style={{ border: theme === 'dark' ? '1px solid #444' : '' }}>
                  <div className="header" style={{ backgroundColor: theme === 'dark' ? '#333' : '' }}>
                    <div className="title" style={{ color: theme === 'dark' ? '#fff' : '' }}>Lista de Projetos</div>
                  </div>
                  {tarefas.length === 0 ? (
                    <p className="p-3">Nenhuma tarefa.</p>
                  ) : (
                    tarefas.map(t => <TaskItem key={t.id} tarefa={t} />)
                  )}
                </div>
              </>
            )}
          </div>
        </div>

      </TaskContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Aula32;