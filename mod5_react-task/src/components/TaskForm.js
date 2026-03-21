import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [valor, setValor] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    if (valor.trim()) {
      onAdd(valor);
      setValor('');
    }
  };

  return (
    <form onSubmit={enviar} style={{ display: 'flex', gap: '12px', marginBottom: '30px' }}>
      <input 
        value={valor} 
        onChange={e => setValor(e.target.value)} 
        placeholder="Adicionar tarefa..." 
        style={{ 
          flex: 1, 
          height: '44px', 
          border: '1px solid #ccc', 
          borderRadius: '4px', 
          padding: '0 15px',
          fontSize: '16px' 
        }}
      />
      <button type="submit" style={{ 
        backgroundColor: '#168821', // Verde oficial do GOV.BR
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        padding: '0 25px', 
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '14px',
        textTransform: 'uppercase',
        transition: 'background-color 0.2s'
      }}>
        Adicionar
      </button>
    </form>
  );
};

// GARANTA QUE ESTA LINHA EXISTA:
export default TaskForm;