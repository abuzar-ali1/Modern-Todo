"use client";
import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar({ value = "", onChange = () => {}, placeholder = "Search todos..." }) {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      size="small"
      fullWidth
      variant="outlined"
      
      sx={{
         backgroundColor: "#3f3f3fff",
        borderRadius: "10px",
        mt: 1,
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          "& fieldset": { border : "none" },
          paddingRight: 0,
        },
        "& .MuiInputBase-input": { color: "#E6EEF8", padding: "12px 12px" },
        "& .MuiInputLabel-root": { color: "#9CA3AF" },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#9CA3AF" }} />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton onClick={() => onChange("")} size="small" sx={{ color: "#9CA3AF" }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
}
