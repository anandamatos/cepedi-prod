import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // IMPORTANTE: Adicionado para as rotas funcionarem
import '@govbr-ds/core/dist/core.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importação das aulas
import Aula28 from './Aulas/Aula28';
import Aula29 from './Aulas/Aula29';
import Aula30 from './Aulas/Aula30';
import Aula31 from './Aulas/Aula31';
import Aula32 from './Aulas/Aula32';
import Aula33 from './Aulas/Aula33';

function App() {
  const [aulaAtiva, setAulaAtiva] = useState('33');

  return (
    // O BrowserRouter deve envolver tudo para que os hooks de rota (useParams, NavLink) funcionem
    <BrowserRouter>
      <div className="template-base">
        <header className="br-header mb-4">
          <div className="container-lg">
            <div className="header-top">
              <div className="header-logo">
                <img 
                  src="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/imagens/gov-br_logo-svg.png" 
                  alt="Logo Governo Federal" 
                />
                <span className="br-divider vertical mx-half mx-sm-1"></span>
                <div className="header-sign">Desenvolvimento React | CEPEDI</div>
              </div>
            </div>
            <div className="header-bottom">
              <div className="header-menu">
                <div className="header-title">
                  <span className="br-h3">Portal de Exercícios</span>
                </div>
              </div>
              <div className="header-actions">
                <div className="br-select">
                  <label htmlFor="select-aula">Selecione a Aula:</label>
                  <select 
                    id="select-aula" 
                    value={aulaAtiva} 
                    onChange={(e) => setAulaAtiva(e.target.value)}
                  >
                    <option value="28">Aula 28: Estilização (CSS/Styled/Tailwind)</option>
                    <option value="29">Aula 29: Fundamentos</option>
                    <option value="30">Aula 30: Props e Estado</option>
                    <option value="31">Aula 31: useEffect</option>
                    <option value="32">Aula 32: Context API</option>
                    <option value="33">Aula 33: React Router</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container-lg">
          {aulaAtiva === '28' && <Aula28 />}
          {aulaAtiva === '29' && <Aula29 />}
          {aulaAtiva === '30' && <Aula30 />}
          {aulaAtiva === '31' && <Aula31 />}
          {aulaAtiva === '32' && <Aula32 />}
          {aulaAtiva === '33' && <Aula33 />}
        </main>

        <footer className="br-footer mt-5">
          <div className="container-lg">
            <div className="info">
              <div className="text-center">
                Exercícios práticos de React - 2026
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;