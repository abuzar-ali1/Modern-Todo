"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Form = ({ initialValues = null, onSubmit, onClose, submitLabel = "Add" })  => {

  const [title , setTitle] = useState("")
  const [desc , setDesc] = useState("")

   // When initialValues change (open for edit), populate the fields
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
    if (initialValues?.id) values.id = initialValues.id; // preserve id for edits
    onSubmit?.(values);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
     <Typography sx={{ textAlign: "center" }} id="modal-modal-title" variant="h4" component="h2">
        {initialValues ? "Edit Task" : "New Task"}
      </Typography>

      <TextField
        sx={{ backgroundColor: "#1f2937", borderRadius: "5px"  ,  input: { color: 'white' },
      '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' } },
      '& .MuiInputLabel-root': { color: '#9CA3AF' },
      '& .MuiInputLabel-root.Mui-focused': { color: '#9CA3AF' }
   }}
        required
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        id="outlined-required"
        label="Title"
      />
      <TextField
  sx={{
    backgroundColor: "#1f2937",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "none" },
      "& .MuiInputBase-input": { color: "white" },
    },
    "& .MuiInputLabel-root": { color: "#9CA3AF" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#9CA3AF" },
  }}
  multiline
  value={desc}
  onChange={(e)=>setDesc(e.target.value)}
  id="outlined-required"
  label="Description"
/>

  <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 1 }}>
        <Button variant="outlined" onClick={onClose} sx={{ color: "#9CA3AF", borderColor: "#374151" }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {initialValues ? "Update" : submitLabel}
        </Button>
      </Box>

    </Box>
  );
};

export default Form;


