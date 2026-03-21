import React, { useState } from 'react';

const ProjectItem = ({ nome, ativo, onClick, onRename, onDelete }) => {
  const [hover, setHover] = useState(false);

  return (
    <li 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 15px', marginBottom: '4px', borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: ativo ? 'rgba(19, 81, 180, 0.1)' : 'transparent',
        borderLeft: ativo ? '4px solid #1351b4' : '4px solid transparent',
        color: ativo ? '#1351b4' : '#444',
        fontWeight: ativo ? '600' : '400'
      }}
    >
      <span>{nome}</span>
      <div style={{ display: 'flex', gap: '8px', opacity: hover ? 1 : 0 }}>
        <button onClick={(e) => { e.stopPropagation(); onRename(nome); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✏️</button>
        <button onClick={(e) => { e.stopPropagation(); onDelete(nome); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E52207' }}>🗑️</button>
      </div>
    </li>
  );
};

const ProjectList = ({ projetos = [], ativo, setAtivo, onRename, onDelete, onAddProject }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [novoNome, setNovoNome] = useState('');

  return (
    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '14px', color: '#1351b4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Projetos</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {projetos.map(p => (
          <ProjectItem key={p} nome={p} ativo={ativo === p} onClick={() => setAtivo(p)} onRename={onRename} onDelete={onDelete} />
        ))}
      </ul>
      
      {!showAdd ? (
        <button 
          onClick={() => setShowAdd(true)}
          style={{ width: '100%', marginTop: '10px', color: '#168821', background: 'none', border: '1px dashed #ccc', padding: '10px', cursor: 'pointer', borderRadius: '4px' }}
        >+ Adicionar Projeto</button>
      ) : (
        <div style={{ marginTop: '10px' }}>
          <input 
            autoFocus 
            style={{ width: '100%', marginBottom: '5px', height: '38px', padding: '0 10px' }} 
            value={novoNome} 
            onChange={e => setNovoNome(e.target.value)} 
            placeholder="Nome do projeto..."
          />
          <div style={{ display: 'flex', gap: '5px' }}>
            <button 
              style={{ backgroundColor: '#1351b4', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}
              onClick={() => { if(novoNome.trim()){ onAddProject(novoNome); setShowAdd(false); setNovoNome(''); } }}
            >Salvar</button>
            <button onClick={() => setShowAdd(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: '#666' }}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;