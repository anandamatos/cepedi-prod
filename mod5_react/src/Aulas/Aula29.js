import React, { useState } from 'react';

const Aula29 = () => {
  // Estado para controlar qual exercício exibir
  const [abaAtiva, setAbaAtiva] = useState('ex1');

  // Estado do Exercício 1 (Contador)
  const [contador, setContador] = useState(0);

  // Dados do Exercício 2 (Ficha Cadastral)
  const usuario = {
    nomeCompleto: "Seu Nome de Aluno",
    idade: 2026 - 1998,
    profissao: "Desenvolvedor Front-end em Formação",
    setor: "CEPEDI / Governo Digital",
    estaAtivo: true
  };

  return (
    <div className="br-card">
      <div className="card-header">
        <div className="br-h4">Aula 29: Práticas Iniciais</div>
        
        {/* Menu de Navegação entre Exercícios */}
        <div className="br-tab mt-3">
          <nav className="tab-nav">
            <ul>
              <li className={`tab-item ${abaAtiva === 'ex1' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaAtiva('ex1')}>
                  <span className="name">Exercício 1: Contador</span>
                </button>
              </li>
              <li className={`tab-item ${abaAtiva === 'ex2' ? 'active' : ''}`}>
                <button type="button" onClick={() => setAbaAtiva('ex2')}>
                  <span className="name">Exercício 2: Ficha</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="card-content">
        {/* Exercício 1 */}
        {abaAtiva === 'ex1' && (
          <div className="text-center p-4">
            <div className="br-h1 mb-4" style={{ fontSize: '4rem' }}>{contador}</div>
            <div className="br-group d-flex justify-content-center">
              <button className="br-button primary mr-2" onClick={() => setContador(contador + 1)}>
                <i className="fas fa-plus mr-1"></i> Adicionar
              </button>
              <button className="br-button secondary mr-2" onClick={() => setContador(contador - 1)}>
                <i className="fas fa-minus mr-1"></i> Subtrair
              </button>
              <button className="br-button danger" onClick={() => setContador(0)}>
                <i className="fas fa-undo mr-1"></i> Resetar
              </button>
            </div>
          </div>
        )}

        {/* Exercício 2 */}
        {abaAtiva === 'ex2' && (
          <div className="p-2">
            <div className="br-list">
              <div className="br-item">
                <div className="row align-items-center">
                  <div className="col-auto"><i className="fas fa-user"></i></div>
                  <div className="col"><strong>Nome:</strong> {usuario.nomeCompleto}</div>
                </div>
              </div>
              <div className="br-item">
                <div className="row align-items-center">
                  <div className="col-auto"><i className="fas fa-calendar-alt"></i></div>
                  <div className="col"><strong>Idade:</strong> {usuario.idade} anos</div>
                </div>
              </div>
              <div className="br-item">
                <div className="row align-items-center">
                  <div className="col-auto"><i className="fas fa-briefcase"></i></div>
                  <div className="col"><strong>Cargo:</strong> {usuario.profissao}</div>
                </div>
              </div>
              <div className="br-item">
                <div className="row align-items-center">
                  <div className="col-auto"><i className="fas fa-info-circle"></i></div>
                  <div className="col">
                    <strong>Status:</strong> 
                    <span className={`br-tag ml-2 ${usuario.estaAtivo ? 'success' : 'danger'}`}>
                      {usuario.estaAtivo ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="br-message info" role="alert">
          <div className="icon"><i className="fas fa-info-circle"></i></div>
          <div className="content">Exercícios renderizados dinamicamente.</div>
        </div>
      </div>
    </div>
  );
};

export default Aula29;