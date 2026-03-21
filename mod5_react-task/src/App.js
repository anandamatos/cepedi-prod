import React, { useState } from 'react'; // O useState PRECISA estar dentro das chaves
import Header from './components/Header';
import UserCard from './components/UserCard';
import ProjectList from './components/ProjectList';
import TaskArea from './components/TaskArea';
import './index.css';

function App() {
  // 1. ESTADOS (Devem ficar aqui, no início da função)
  const [projetos, setProjetos] = useState(['Geral', 'Trabalho', 'Estudos']);
  const [projetoAtivo, setProjetoAtivo] = useState('Geral');
  const [tarefas, setTarefas] = useState([]);
  
  // Estado para o feedback (Toast) - Apenas uma declaração!
  const [aviso, setAviso] = useState({ show: false, msg: '' });

  // 2. FUNÇÕES DE APOIO
  const dispararAviso = (msg) => {
    setAviso({ show: true, msg });
    setTimeout(() => setAviso({ show: false, msg: '' }), 3000);
  };

  // Funções de Tarefas
  const adicionarTarefa = (texto) => {
    const nova = { id: Date.now(), texto, concluida: false, projeto: projetoAtivo };
    setTarefas([...tarefas, nova]);
    dispararAviso("Tarefa adicionada com sucesso!");
  };

  const deletarTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
    dispararAviso("Tarefa removida.");
  };

  const alternarTarefa = (id) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const editarTarefa = (id, novoTexto) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, texto: novoTexto } : t));
  };

  // Funções de Projetos
  const adicionarProjeto = (nome) => {
    if (!projetos.includes(nome)) {
      setProjetos([...projetos, nome]);
      dispararAviso("Projeto criado!");
    }
  };

  const deletarProjeto = (nome) => {
    setProjetos(projetos.filter(p => p !== nome));
    setTarefas(tarefas.filter(t => t.projeto !== nome));
    if (projetoAtivo === nome) setProjetoAtivo('Geral');
    dispararAviso("Projeto excluído.");
  };

  const renomearProjeto = (antigo, novo) => {
    setProjetos(projetos.map(p => p === antigo ? novo : p));
    setTarefas(tarefas.map(t => t.projeto === antigo ? { ...t, projeto: novo } : t));
    if (projetoAtivo === antigo) setProjetoAtivo(novo);
  };

  // 3. RENDERIZAÇÃO
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F9FA' }}>
      <Header />
      
      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: '300px 1fr', 
        gap: '30px', 
        padding: '30px 40px', 
        maxWidth: '1440px', 
        margin: '0 auto' 
      }}>
        {/* Lado Esquerdo: Perfil e Projetos */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <UserCard 
            foto="https://avatar.iran.liara.run/public/32" 
            nome="Ananda Matos" 
            cargo="Senior Product Designer" 
            isOnline={true} 
          />
          <ProjectList 
            projetos={projetos} 
            ativo={projetoAtivo} 
            setAtivo={setProjetoAtivo} 
            onAddProject={adicionarProjeto}
            onRename={renomearProjeto}
            onDelete={deletarProjeto}
          />
        </aside>

        {/* Lado Direito: Área de Conteúdo */}
        <section style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '40px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          minHeight: '70vh'
        }}>
          <TaskArea 
            titulo={projetoAtivo}
            tarefas={tarefas.filter(t => t.projeto === projetoAtivo)}
            onAdd={adicionarTarefa}
            onToggle={alternarTarefa}
            onDelete={deletarTarefa}
            onEdit={editarTarefa}
          />
        </section>
      </main>

      {/* Componente Toast (Aviso Flutuante) */}
      {aviso.show && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#333',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '4px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          zIndex: 9999,
          fontSize: '14px',
          fontWeight: '600'
        }}>
          {aviso.msg}
        </div>
      )}
    </div>
  );
}

export default App;