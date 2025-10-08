"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, IconButton, Typography, Box, Tooltip, Stack, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function TodoCard({ todo, onToggleComplete, onEdit, onDelete }) {
  const [dateString, setDateString] = useState("");
  useEffect(() => {
    if (todo?.createdAt) setDateString(new Date(todo.createdAt).toLocaleString());
    else setDateString("");
  }, [todo?.createdAt]);

  return (
    <Card elevation={0} sx={{ border: "1px solid #374151", borderRadius: "12px", backgroundColor: "#1f2937", color: "white" }}>
      <CardContent sx={{ display: "flex", gap: 2, alignItems: "flex-start", p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", pt: "4px" }}>
          <Checkbox
            checked={Boolean(todo.completed)}
            onChange={() => onToggleComplete?.(todo.id)}
            icon={<CheckCircleIcon sx={{ color: "#9CA3AF" }} />}
            checkedIcon={<CheckCircleIcon sx={{ color: "#2563EB" }} />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 26 }, p: 0, mr: 0.5 }}
            inputProps={{ "aria-label": `Mark ${todo.title} complete` }}
          />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="h6" noWrap sx={{ fontWeight: 600, fontSize: "1rem", color: todo.completed ? "#9CA3AF" : "white", textDecoration: todo.completed ? "line-through" : "none" }} title={todo.title}>
            {todo.title}
          </Typography>

          {todo.desc ? (
            <Typography variant="body2" sx={{ mt: 0.5, fontSize: "0.9rem", color: todo.completed ? "#6B7280" : "#D1D5DB", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>
              {todo.desc}
            </Typography>
          ) : null}

          <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#9CA3AF" }}>{dateString}</Typography>
        </Box>

        <Stack direction="row" spacing={0.5} alignItems="center">
          <Tooltip title={todo.completed ? "Mark as incomplete" : "Mark complete"}>
            <IconButton onClick={() => onToggleComplete?.(todo.id)} size="small" sx={{ bgcolor: "transparent", borderRadius: 1, "&:hover": { bgcolor: "rgba(255,255,255,0.04)" } }} aria-label="toggle-complete">
              <CheckCircleIcon sx={{ color: todo.completed ? "#2563EB" : "#9CA3AF", fontSize: 20 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton onClick={() => onEdit?.(todo)} size="small" sx={{ bgcolor: "transparent", borderRadius: 1, "&:hover": { bgcolor: "rgba(255,255,255,0.04)" } }} aria-label="edit">
              <EditIcon sx={{ color: "#D1D5DB", fontSize: 20 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton onClick={() => onDelete?.(todo.id)} size="small" sx={{ bgcolor: "transparent", borderRadius: 1, "&:hover": { bgcolor: "rgba(255,255,255,0.04)" } }} aria-label="delete">
              <DeleteIcon sx={{ color: "#F87171", fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </CardContent>
    </Card>
  );
}
