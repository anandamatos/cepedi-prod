import React, { useState } from 'react';

const TaskItem = ({ id, texto, concluida, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(texto);

  const handleSave = () => {
    if (newText.trim()) {
      onEdit(id, newText);
    }
    setIsEditing(false);
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '15px 0', 
      borderBottom: '1px solid #F0F0F0',
      transition: 'background-color 0.2s'
    }}>
      <input 
        type="checkbox" 
        checked={concluida} 
        onChange={() => onToggle(id)}
        style={{ width: '20px', height: '20px', cursor: 'pointer', marginRight: '15px' }} 
      />
      
      {isEditing ? (
        <input 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
          style={{ flex: 1, padding: '5px', border: '1px solid #1351b4' }}
        />
      ) : (
        <span style={{ 
          flex: 1, 
          fontSize: '16px', 
          color: concluida ? '#888' : '#333',
          textDecoration: concluida ? 'line-through' : 'none'
        }}>
          {texto}
        </span>
      )}
      
      <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
        <button onClick={() => setIsEditing(!isEditing)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✏️</button>
        <button onClick={() => onDelete(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E52207' }}>🗑️</button>
      </div>
    </div>
  );
};

// GARANTA QUE ESTA LINHA EXISTA:
export default TaskItem;