"use client"
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState } from "react";
import LeftContainer from "./ui/components/LeftContainer";
import React, { useEffect, useMemo } from "react";
import Sidebar from "./ui/components/Sidebar";


const STORAGE_KEY = "todos_v1";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here, e.g., filter data
    console.log('Searching for:', searchQuery);
  };

  const [value, setValue] = useState("1");

  // app state (single source of truth)
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTodos(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load todos", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error("Failed to save todos", e);
    }
  }, [todos]);

  const all = todos;
  const active = useMemo(() => todos.filter((t) => !t.completed), [todos]);
  const completed = useMemo(() => todos.filter((t) => t.completed), [todos]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Modal control
  function openAddModal() {
    setEditingTodo(null);
    setModalOpen(true);
  }
  function openEditModal(todo) {
    setEditingTodo(todo);
    setModalOpen(true);
  }
  function closeModal() {
    setEditingTodo(null);
    setModalOpen(false);
  }

  // CRUD handlers
  function handleSubmit(values) {
    // values: { id?, title, desc }
    if (values.id) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === values.id
            ? { ...t, title: values.title, desc: values.desc || "", updatedAt: new Date().toISOString() }
            : t
        )
      );
    } else {
      const newTodo = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: values.title,
        desc: values.desc || "",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTodos((prev) => [newTodo, ...prev]);
    }
    closeModal();
  }

  function toggleComplete(id) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed, updatedAt: new Date().toISOString() } : t)));
  }

  function deleteTodo(id) {
    // confirmation optional
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }


  return (
    <Box sx={{ margin: "5px" }}>
      <Box
        sx={{
          border: "3px solid #374151",
          borderRadius: "12px",
          minHeight: "100vh",
          p: '20px'
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{
                border: "3px solid #374151",
                minHeight: "100vh",
                borderRadius: '12px', p: 3
              }} >
                <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
                  Todo App
                </Typography>
                <LeftContainer openAddModal={openAddModal} all={all} active={active} completed={completed} openEditModal={openEditModal} deleteTodo={deleteTodo} toggleComplete={toggleComplete} isModalOpen={isModalOpen} closeModal={closeModal} editingTodo={editingTodo} handleSubmit={handleSubmit} value={value} handleChange={handleChange}/>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{
                border: "3px solid #374151", minHeight: "100vh",
                borderRadius: '12px', p: 3
              }} >
                <Sidebar  all={all} active={active} completed={completed}/>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Box>
  );
}

