"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function TodoForm({ initialValues = null, onSubmit, onClose }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setDesc(initialValues.desc || "");
    } else {
      setTitle("");
      setDesc("");
    }
  }, [initialValues]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    const values = { title: title.trim(), desc: desc.trim() };
    if (initialValues?.id) values.id = initialValues.id;
    onSubmit?.(values);
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography sx={{ textAlign: "center" }} variant="h5">{initialValues ? "Edit Task" : "New Task"}</Typography>

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        label="Title"
        sx={{
          backgroundColor: "#1f2937",
          borderRadius: "6px",
          input: { color: "white" },
          "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
          "& .MuiInputLabel-root": { color: "#9CA3AF" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#9CA3AF" },
        }}
      />

      <TextField
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        multiline
        rows={3}
        label="Description"
        sx={{
          backgroundColor: "#1f2937",
          borderRadius: "6px",
          "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "& .MuiInputBase-input": { color: "white" } },
          "& .MuiInputLabel-root": { color: "#9CA3AF" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#9CA3AF" },
        }}
      />

      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 1 }}>
        <Button variant="outlined" onClick={onClose} sx={{ color: "#9CA3AF", borderColor: "#374151" }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained"> {initialValues ? "Update" : "Add"} </Button>
      </Box>
    </Box>
  );
}
