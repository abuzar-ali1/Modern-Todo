"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography
        sx={{ textAlign: "center" }}
        id="modal-modal-title"
        variant="h4"
        component="h2"
      >
        New Task
      </Typography>
      <TextField
        sx={{ backgroundColor: "#1f2937", borderRadius: "5px"  ,  input: { color: 'white' },
      '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' } },
      '& .MuiInputLabel-root': { color: '#9CA3AF' },
      '& .MuiInputLabel-root.Mui-focused': { color: '#9CA3AF' }
   }}
        required
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
  required
  id="outlined-required"
  label="Description"
/>

      <Button variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default Form;


