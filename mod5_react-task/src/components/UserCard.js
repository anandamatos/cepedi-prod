// src/components/UserCard.js
import React from 'react';

const UserCard = ({ nome, cargo, isOnline }) => {
  // URL estável para o avatar baseada no nome
  const fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&background=1351b4&color=fff&size=128`;

  return (
    <div className="br-card" style={{ 
      width: '280px', 
      border: '1px solid #E6E6E6',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 3px 6px rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '25px', textAlign: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '15px' }}>
          <img 
            src={fotoUrl} 
            alt={nome} 
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '3px solid #F8F9FA' 
            }} 
          />
          {/* Indicador de Status Online fixado na imagem */}
          <span style={{
            position: 'absolute',
            bottom: '5px',
            right: '5px',
            height: '14px',
            width: '14px',
            backgroundColor: isOnline ? '#168821' : '#E52207',
            borderRadius: '50%',
            border: '2px solid white'
          }}></span>
        </div>

        <h4 style={{ color: '#1351b4', margin: '0 0 4px 0', fontSize: '18px' }}>{nome}</h4>
        <p style={{ color: '#666', fontSize: '13px', margin: '0' }}>{cargo}</p>
      </div>
    </div>
  );
};

export default UserCard;