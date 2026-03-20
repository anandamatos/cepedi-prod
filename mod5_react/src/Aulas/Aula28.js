import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// --- 1. COMPONENTES ESTILIZADOS ---
const BasicCard = styled.div`
  background: #f0f4f8;
  color: #1351b4;
  border: 1px solid #1351b4;
  padding: 15px;
  border-radius: 4px;
`;

const ThemedCard = styled.div`
  background-color: ${props => props.theme.bg || '#ffffff'};
  color: ${props => props.theme.text || '#333333'};
  border: 2px solid ${props => props.theme.primary || '#1351b4'};
  padding: 20px;
  border-radius: 8px;
  transition: all 0.4s ease;
`;

const Aula28 = () => {
  const [abaInterna, setAbaInterna] = useState('ex1');
  const [isDark, setIsDark] = useState(false);

  const themes = {
    light: { primary: '#1351b4', bg: '#ffffff', text: '#333' },
    dark: { primary: '#f2cd44', bg: '#333333', text: '#ffffff' }
  };

  const renderConteudo = () => {
    switch (abaInterna) {
      case 'ex1':
        return (
          <div className="p-3 border rounded shadow-sm">
            <h5>Exercício 1: CSS Modules</h5>
            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
              <p>Estilo isolado via arquivo <code>.module.css</code> para evitar vazamentos globais.</p>
            </div>
          </div>
        );

      case 'ex2':
        return (
          <div className="p-3">
            <h5>Exercício 2: Styled Components (Básico)</h5>
            <BasicCard>
              <p>Este card foi criado usando a sintaxe <code>styled.div</code> do Styled Components.</p>
            </BasicCard>
          </div>
        );

      case 'ex3':
        return (
          <div className="container-fluid">
            <h5>Exercício 3: Grid Responsivo (Tailwind Style)</h5>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <div className="br-card p-3 bg-primary text-white text-center">Coluna 1</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <div className="br-card p-3 bg-secondary text-white text-center">Coluna 2</div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                <div className="br-card p-3 bg-success text-white text-center">Coluna 3</div>
              </div>
            </div>
          </div>
        );

      case 'ex4':
        return (
          <div className="p-3">
            <h5>Exercício 4: Comparativo de Abordagens</h5>
            <div className="table-responsive">
              <table className="table border">
                <thead>
                  <tr className="bg-light">
                    <th>Tecnologia</th>
                    <th>Exemplo Visual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CSS Modules</td>
                    <td><button className="br-button primary">GovBR Style</button></td>
                  </tr>
                  <tr>
                    <td>Styled Components</td>
                    <td><BasicCard style={{padding: '5px 10px'}}>Styled</BasicCard></td>
                  </tr>
                  <tr>
                    <td>Tailwind CSS</td>
                    <td><button className="bg-blue-600 text-white px-3 py-1 rounded">Utility</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'ex5':
        return (
          <ThemeProvider theme={isDark ? themes.dark : themes.light}>
            <div className="p-3">
              <h5>Exercício 5: Temas Dinâmicos</h5>
              <button 
                className={`br-button ${isDark ? 'inverted' : 'primary'} mb-4`} 
                onClick={() => setIsDark(!isDark)}
              >
                Mudar para Tema {isDark ? 'Claro' : 'Escuro'}
              </button>
              <ThemedCard>
                <h3 style={{ color: isDark ? '#f2cd44' : '#1351b4' }}>Card Dinâmico</h3>
                <p>Este componente reage ao ThemeProvider do Styled Components.</p>
              </ThemedCard>
            </div>
          </ThemeProvider>
        );

      case 'ex6':
        return (
          <div className="p-3">
            <h5>Exercício 6: Refatoração de CSS Global</h5>
            <div className="br-message info" role="alert">
              <div className="content">
                <strong>Otimização:</strong> Migramos classes genéricas para módulos, removendo conflitos de especificidade.
              </div>
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="br-card p-4">
      <div className="br-h4 mb-4">Aula 28: Estratégias de Estilização</div>

      <div className="br-tab">
        <nav className="tab-nav">
          <ul>
            <li className={`tab-item ${abaInterna === 'ex1' ? 'active' : ''}`}>
              <button onClick={() => setAbaInterna('ex1')}>1. Modules</button>
            </li>
            <li className={`tab-item ${abaInterna === 'ex2' ? 'active' : ''}`}>
              <button onClick={() => setAbaInterna('ex2')}>2. Styled</button>
            </li>
            <li className={`tab-item ${abaInterna === 'ex3' ? 'active' : ''}`}>
              <button onClick={() => setAbaInterna('ex3')}>3. Grid</button>
            </li>
            <li className={`tab-item ${abaInterna === 'ex4' ? 'active' : ''}`}>
              <button onClick={() => setAbaInterna('ex4')}>4. Comp.</button>
            </li>
            <li className={`tab-item ${abaInterna === 'ex5' ? 'active' : ''}`}>
              <button onClick={() => setAbaInterna('ex5')}>5. Temas</button>
            </li>
            <li className={`tab-item ${abaInterna === 'ex6' ? 'active' : ''}`}>
              <button onClick={() => setAbaInterna('ex6')}>6. Refat.</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-4" style={{ minHeight: '350px' }}>
        {renderConteudo()}
      </div>
    </div>
  );
};

export default Aula28;