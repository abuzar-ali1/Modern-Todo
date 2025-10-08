"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { motion, AnimatePresence } from "framer-motion";
import TodoForm from "./TodoForm";

const boxStyle = {
  width: 420,
  bgcolor: "#111827",
  border: "3px solid #374151",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const MotionBox = motion(Box);

export default function TodoModal({ open, onClose, initialValues, onSubmit }) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 300 } }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw", outline: "none" }}>
        <AnimatePresence>
          {open && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              sx={boxStyle}
            >
              <TodoForm initialValues={initialValues} onSubmit={onSubmit} onClose={onClose} />
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </Modal>
  );
}
