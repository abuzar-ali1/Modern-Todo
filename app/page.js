"use client";
import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import {  Grid, Typography } from "@mui/material";
import Sidebar from "./ui/components/Sidebar";
import LeftContainer from "./ui/components/LeftContainer";
import SearchBar from "./ui/components/SearchBar";

const STORAGE_KEY = "todos_v1";

export default function Page() {

  const [searchQuery, setSearchQuery] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const [selectedTab, setSelectedTab] = useState("1");

  // load / persist
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

  // derived lists
  const all = todos;
  const active = useMemo(() => todos.filter((t) => !t.completed), [todos]);
  const completed = useMemo(() => todos.filter((t) => t.completed), [todos]);

  // SEarch functionalities
  const q = (searchQuery || "").trim().toLowerCase();
  const filteredAll = useMemo(() => {
    if (!q) return all;
    return all.filter((t) => (t.title || "").toLowerCase().includes(q) || (t.desc || "").toLowerCase().includes(q));
  }, [all, q]);

  const filteredActive = useMemo(() => {
    if (!q) return active;
    return active.filter((t) => (t.title || "").toLowerCase().includes(q) || (t.desc || "").toLowerCase().includes(q));
  }, [active, q]);

  const filteredCompleted = useMemo(() => {
    if (!q) return completed;
    return completed.filter((t) => (t.title || "").toLowerCase().includes(q) || (t.desc || "").toLowerCase().includes(q));
  }, [completed, q]);

  // map sidebar filters all|active| completed to tab values '1'|'2'|'3'
  function handleSidebarFilter(filter) {
    if (filter === "all") setSelectedTab("1");
    else if (filter === "active") setSelectedTab("2");
    else if (filter === "completed") setSelectedTab("3");
  }

  // Tab change handler (from LabTabs)
  function handleTabChange(event, newValue) {
    setSelectedTab(newValue);
  }
  // functions

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

  function handleSubmit(values) {
    // values: { id?, title, desc }
    if (values.id) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === values.id ? { ...t, title: values.title, desc: values.desc || "", updatedAt: new Date().toISOString() } : t
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
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function openWithPrefill(title = "", desc = "") {
    setEditingTodo({ id: undefined, title, desc });
    setModalOpen(true);
  }

  const stats = { total: all.length, active: active.length, completed: completed.length };

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
                <Box sx={{  }}>
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </Box>

                <LeftContainer
                  openAddModal={openAddModal}
                  all={filteredAll}               // <- pass filtered lists
                  active={filteredActive}
                  completed={filteredCompleted}
                  openEditModal={openEditModal}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                  isModalOpen={isModalOpen}
                  closeModal={closeModal}
                  editingTodo={editingTodo}
                  handleSubmit={handleSubmit}
                  value={selectedTab}
                  handleChange={handleTabChange}
                />

              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{
                border: "3px solid #374151", minHeight: "100vh",
                borderRadius: '12px', p: 3
              }} >
                <Sidebar
                  stats={stats}
                  onSetFilter={handleSidebarFilter}
                  onShortcut={(t, d) => openWithPrefill(t, d)}
                  selectedTab={selectedTab}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Box>
  );
}


