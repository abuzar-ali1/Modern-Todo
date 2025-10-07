"use client";
import React, { useEffect, useState } from "react";
import { Container, Stack, Button, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Add } from "@mui/icons-material";
import TodoCard from "./TodoCard";
import TodoModal from "./TodoModal";

const STORAGE_KEY = "todos_v1";

export default function TodoPage() {
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
    if (values.id) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === values.id ? { ...t, title: values.title, desc: values.desc, updatedAt: new Date().toISOString() } : t
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
    // keep this immediate; AnimatePresence will run exit animation before DOM removal
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  // animation variants for list items — reused for consistency
  const itemVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      // you can also add rotate or x for flair
      // rotate: -2,
    },
  };

  return (
    <Box sx={{ py: 6, maxWidth: "1000px" }}>
      <Box sx={{ mb: 3 }}>
        <Button
          size="large"
          sx={{
            justifyContent: "flex-start",
            bgcolor: "#3f3f3fff",
            color: "#9CA3AF",
            textTransform: "none",
            "&:hover": { bgcolor: "grey.700" },
          }}
          variant="contained"
          fullWidth
          startIcon={<Add />}
          onClick={openAddModal}
        >
          Add a new task
        </Button>
      </Box>

<Stack spacing={2}>
  {todos.length === 0 ? (
    <Box sx={{ color: "#9CA3AF", textAlign: "center", p: 4, border: "1px dashed #374151", borderRadius: 2 }}>
      No tasks yet — add one!
    </Box>
  ) : (
    <AnimatePresence initial={false}>
      {todos.map((t) => (
        <motion.div
          key={t.id}               // KEY must be here (wrapper)
          layout
          style={{ overflow: "hidden", display: "block" }} // important for collapse
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            height: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          transition={{
            default: { duration: 0.22, ease: "easeOut" },
            height: { duration: 0.28, ease: "easeInOut" },
            opacity: { duration: 0.16 },
          }}
        >
          {/* optional inner wrapper to preserve spacing control */}
          <Box sx={{ pb: 0.5 }}>
            <TodoCard
              todo={t}
              onToggleComplete={toggleComplete}
              onEdit={openEditModal}
              onDelete={deleteTodo}
            />
          </Box>
        </motion.div>
      ))}
    </AnimatePresence>
  )}
</Stack>

      <TodoModal open={isModalOpen} onClose={closeModal} initialValues={editingTodo} onSubmit={handleSubmit} />
    </Box>
  );
}
