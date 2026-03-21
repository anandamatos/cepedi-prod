import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskArea = ({ tarefas = [], titulo, onAdd, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '25px', 
        borderBottom: '2px solid #F8F9FA', 
        paddingBottom: '15px' 
      }}>
        <h2 style={{ margin: 0, color: '#1351b4', fontSize: '22px' }}>{titulo}</h2>
        <span style={{ backgroundColor: '#eee', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          {tarefas.length} {tarefas.length === 1 ? 'tarefa' : 'tarefas'}
        </span>
      </div>

      <TaskForm onAdd={onAdd} />

      <div style={{ marginTop: '20px' }}>
        {tarefas.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📋</div>
            <p style={{ fontSize: '16px' }}>Nenhuma tarefa cadastrada para este projeto.</p>
          </div>
        ) : (
          tarefas.map(t => (
            <TaskItem 
              key={t.id} 
              {...t} 
              onToggle={onToggle} 
              onDelete={onDelete} 
              onEdit={onEdit} 
            />
          ))
        )}
      </div>
    </div>
  );
};

// GARANTA QUE ESTA LINHA EXISTA:
export default TaskArea;