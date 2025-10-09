"use client";
import * as React from 'react';
import LabTabs from './LabTabs';


export default function LeftContainer({openAddModal , all  ,  active , completed , openEditModal, deleteTodo ,toggleComplete ,isModalOpen , closeModal  , handleSubmit , value , handleChange , editingTodo }) {
    
  return (
   <LabTabs
  openAddModal={openAddModal}
  all={all}               // <- pass filtered lists
  active={active}
  completed={completed}
  openEditModal={openEditModal}
  deleteTodo={deleteTodo}
  toggleComplete={toggleComplete}
  isModalOpen={isModalOpen}
  closeModal={closeModal}
  editingTodo={editingTodo}
  handleSubmit={handleSubmit}
  value={value}
  handleChange={handleChange}
/>

  );
}
