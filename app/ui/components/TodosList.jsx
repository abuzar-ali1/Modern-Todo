"use client";
import React from "react";
import { Box, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import TodoCard from "./TodoCard";

export default function TodosList({ items = [], onEdit, onDelete, onToggleComplete }) {
  // animation variants
  const itemVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  };

  return (
    // scrollable area: adjust maxHeight to fit your layout
    <Box
      sx={{
        maxHeight: "60vh",
        overflowY: "auto",
        pr: 1,
        "&::-webkit-scrollbar": { width: 8 },
        "&::-webkit-scrollbar-thumb": { background: "rgba(255,255,255,0.06)", borderRadius: 2 },
        "&::-webkit-scrollbar-track": { background: "transparent" },
      }}
    >
      <Stack sx={{mt:1}} spacing={2}>
        {items.length === 0 ? (
          <Box sx={{ color: "#9CA3AF", textAlign: "center", p: 4, border: "1px dashed #374151", borderRadius: 2 }}>
            No tasks here
          </Box>
        ) : (
          <AnimatePresence initial={false}>
            {items.map((t) => (
              <motion.div
                key={t.id}
                layout
                style={{ overflow: "hidden", display: "block" }}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  default: { duration: 0.22, ease: "easeOut" },
                  height: { duration: 0.28, ease: "easeInOut" },
                  opacity: { duration: 0.16 },
                }}
              >
                <Box sx={{  }}>
                  <TodoCard todo={t} onToggleComplete={onToggleComplete} onEdit={onEdit} onDelete={onDelete} />
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </Stack>
    </Box>
  );
}
