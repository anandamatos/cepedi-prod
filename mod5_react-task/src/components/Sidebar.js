import React from 'react';
import UserCard from './UserCard';
import ProjectList from './ProjectList';

const Sidebar = ({ projetos, ativo, setAtivo, onAdd, onRename, onDelete }) => (
  <aside className="gov-sidebar">
    <UserCard
      nome="Ananda Matos"
      cargo="Analista GOV.BR"
      isOnline={true}
      foto="https://placehold.co/100x100/1351b4/ffffff?text=AM"
    />
    <section className="gov-card">
      <ProjectList
        projetos={projetos}
        ativo={ativo}
        setAtivo={setAtivo}
        onAddProject={onAdd}
        onRename={onRename}
        onDelete={onDelete}
      />
    </section>
  </aside>
);

export default Sidebar;