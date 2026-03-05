import React, { useState } from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';

// --- COMPONENTES AUXILIARES ---
const Home = () => <div className="p-3"><h3>🏠 Home</h3><p>Bem-vindo à introdução ao React Router.</p></div>;
const Sobre = () => <div className="p-3"><h3>📖 Sobre</h3><p>Aplicação SPA desenvolvida no Programa Capacita.</p></div>;

const PostDetalhe = () => {
  const { id } = useParams();
  return (
    <div className="p-3">
      <h3>Post ID: {id}</h3>
      <p className="text-muted">Este conteúdo foi carregado dinamicamente via URL usando useParams.</p>
    </div>
  );
};

const Pagina404 = () => (
  <div className="p-3 text-center">
    <h3 className="text-danger">404 - Página Não Encontrada</h3>
    <NavLink to="/aula33/">Voltar ao início</NavLink>
  </div>
);

// --- COMPONENTE PRINCIPAL COM EVOLUÇÃO ---

const Aula33 = () => {
  const [abaInterna, setAbaInterna] = useState('passo4');

  // Estilo para Link Ativo (Exercício 1 - Pág. 25)
  const navActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: isActive ? '3px solid #1351b4' : 'none',
    color: isActive ? '#1351b4' : '#666',
    padding: '8px 12px',
    textDecoration: 'none'
  });

  return (
    <div className="br-card">
      <div className="card-header">
        <div className="br-tab">
          <nav className="tab-nav">
            <ul>
              <li className={`tab-item ${abaInterna === 'passo1' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo1')}>1. NavLinks</button>
              </li>
              <li className={`tab-item ${abaInterna === 'passo2' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo2')}>2. Rotas Dinâmicas</button>
              </li>
              <li className={`tab-item ${abaInterna === 'passo3' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo3')}>3. Página 404</button>
              </li>
              <li className={`tab-item ${abaInterna === 'passo4' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaInterna('passo4')}>4. Gerenciador SPA</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="card-content" style={{ minHeight: '350px' }}>
        
        {/* MENU DE NAVEGAÇÃO DA AULA (NavLink com Style Active) */}
        <nav className="d-flex bg-light mb-3 p-2 border-bottom" style={{ gap: '15px' }}>
          <NavLink style={navActiveStyle} to="/aula33/" end>Início</NavLink>
          <NavLink style={navActiveStyle} to="/aula33/sobre">Sobre</NavLink>
          <NavLink style={navActiveStyle} to="/aula33/posts/1">Post 1</NavLink>
          <NavLink style={navActiveStyle} to="/aula33/posts/2">Post 2</NavLink>
          {abaInterna === 'passo4' && (
            <>
              <NavLink style={navActiveStyle} to="/aula33/projects">Projetos</NavLink>
              <NavLink style={navActiveStyle} to="/aula33/completed">Concluídas</NavLink>
            </>
          )}
        </nav>

        {/* DEFINIÇÃO DAS ROTAS (Switch de componentes baseado na URL) */}
        <Routes>
          {/* Evolução 1 & 2 */}
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="posts/:id" element={<PostDetalhe />} />

          {/* Evolução 4: Gerenciador de Tarefas (Pág 30) */}
          <Route path="projects" element={
            <div className="p-3">
              <h3>📂 Projetos</h3>
              <div className="br-list">
                <NavLink className="br-item" to="/aula33/projects/react">Projeto React</NavLink>
                <NavLink className="br-item" to="/aula33/projects/api">Integração API</NavLink>
              </div>
            </div>
          } />
          <Route path="projects/:id" element={
            <div className="p-3">
              <h3>📋 Detalhes do Projeto</h3>
              <PostDetalhe /> {/* Reutilizando lógica de params */}
            </div>
          } />
          <Route path="completed" element={<div className="p-3"><h3>✅ Tarefas Concluídas</h3><p>Filtro global de histórico.</p></div>} />

          {/* Evolução 3: Rota 404 (Sempre por último) */}
          <Route path="*" element={abaInterna === 'passo3' || abaInterna === 'passo4' ? <Pagina404 /> : <Home />} />
        </Routes>

        {/* MENSAGEM EXPLICATIVA SOBRE O PASSO ATUAL */}
        <div className="p-3 mt-4 border-top">
          {abaInterna === 'passo1' && <span className="br-tag info">Exercício 1: Note como o menu acima muda de cor ao ser clicado (NavLink Active).</span>}
          {abaInterna === 'passo2' && <span className="br-tag warning">Exercício 2: Clique em 'Post 1' ou 'Post 2' para ver a Rota Dinâmica em ação.</span>}
          {abaInterna === 'passo3' && <span className="br-tag danger">Exercício 2: Tente digitar uma URL inexistente para ver o componente 404.</span>}
          {abaInterna === 'passo4' && <span className="br-tag success">Gerenciador: Navegação completa entre Projetos, Tarefas e Sobre.</span>}
        </div>

      </div>
    </div>
  );
};

export default Aula33;