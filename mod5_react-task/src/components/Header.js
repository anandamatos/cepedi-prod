// src/components/Header.js
import React from 'react';

const Header = () => (
  <header style={{ 
    backgroundColor: '#1351b4', 
    borderBottom: '4px solid #FFCD07', // Faixa amarela institucional
    padding: '15px 40px', 
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }}>
    <img 
      src="https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/EGD2020/imagens/logo-white.png" 
      alt="gov.br" 
      style={{ height: '40px', width: 'auto' }} // Mantém a proporção
    />
    <div style={{ color: 'white' }}>
      <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Gerenciador de Tarefas</h1>
      <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>Sala de controle de projetos do serviço público</p>
    </div>
  </header>
);

export default Header;