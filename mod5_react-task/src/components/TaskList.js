import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tarefas = [], titulo, onToggleTask, onDeleteTask, onEditTask }) => (
  <section className="gov-card task-area">
    <div className="task-header">
      <h2>{titulo}</h2>
      <span>{tarefas.length} {tarefas.length === 1 ? 'tarefa' : 'tarefas'}</span>
    </div>

    {tarefas.length === 0 ? (
      <p style={{ color: '#666' }}>Nenhuma tarefa cadastrada para este projeto.</p>
    ) : (
      tarefas.map((t) => (
        <TaskItem
          key={t.id}
          {...t}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
        />
      ))
    )}
  </section>
);

export default TaskList;
