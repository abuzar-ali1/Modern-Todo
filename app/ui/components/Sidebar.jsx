"use client";
import React from "react";
import { Box, Paper, Typography, Grid, Button, Stack } from "@mui/material";

export default function Sidebar({ all , active , completed }) {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Quick Stats card */}
     <Paper
  elevation={2}
  sx={{
    background: "#111827",
    borderRadius: 3,
    p: 2.5,
    border: "1px solid #374151",
    boxShadow: "0 6px 18px rgba(13,16,30,0.06)",
  }}
>
  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#E6EEF8" }}>
    Quick Stats
  </Typography>

  <Grid container spacing={1.25} sx={{ mt: 1.5 }}>
    <Grid item xs={4}>
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: "#0b1220",
          border: "1px solid #374151",
        }}
      >
        <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, color: "#E6EEF8" }}>
          {all.length}
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={4}>
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: "#0b1220",
          border: "1px solid #374151",
        }}
      >
        <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
          Active
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, color: "#E6EEF8" }}>
          {active.length}
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={4}>
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: "#0b1220",
          border: "1px solid #374151",
        }}
      >
        <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
          Done
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, color: "#E6EEF8" }}>
          {completed.length}
        </Typography>
      </Paper>
    </Grid>
  </Grid>

  <Stack direction="row" spacing={1} sx={{ mt: 2.5, flexWrap: "wrap" }}>
    <Button
      onClick={() => onSetFilter("all")}
      sx={{
        bgcolor: "transparent",
        color: "#E6EEF8",
        border: "1px solid #374151",
        textTransform: "none",
        px: 2,
        py: 0.6,
        borderRadius: 1.25,
        "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
      }}
      size="small"
    >
      All
    </Button>

    <Button
      onClick={() => onSetFilter("active")}
      sx={{
        bgcolor: "transparent",
        color: "#E6EEF8",
        border: "1px solid #374151",
        textTransform: "none",
        px: 2,
        py: 0.6,
        borderRadius: 1.25,
        "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
      }}
      size="small"
    >
      Active
    </Button>

    <Button
      onClick={() => onSetFilter("completed")}
      sx={{
        bgcolor: "transparent",
        color: "#E6EEF8",
        border: "1px solid #374151",
        textTransform: "none",
        px: 2,
        py: 0.6,
        borderRadius: 1.25,
        "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
      }}
      size="small"
    >
      Completed
    </Button>
  </Stack>
</Paper>

      {/* Shortcuts */}
      <Paper
        elevation={1}
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 3,
          border: "1px solid #374151",
          bgcolor: "#0b1220", // matches dark app feel
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#E6EEF8" }}>
          Shortcuts
        </Typography>

        <Stack spacing={1.25} sx={{ mt: 1.5 }}>
          <Button
            onClick={() => {
              setTitle("Plan project structure");
              setDesc("Break tasks down and assign time");
            }}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#cbd5e1",
              bgcolor: "transparent",
              px: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
            }}
            size="small"
          >
            Insert prompt task
          </Button>

          <Button
            onClick={() => {
              setTitle("Review PRs");
              setDesc("");
            }}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#cbd5e1",
              bgcolor: "transparent",
              px: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
            }}
            size="small"
          >
            Insert review task
          </Button>

          <Button
            onClick={() => {
              setTitle("Daily standup notes");
              setDesc("");
            }}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#cbd5e1",
              bgcolor: "transparent",
              px: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
            }}
            size="small"
          >
            Insert standup
          </Button>
        </Stack>
      </Paper>

      <Typography variant="caption" sx={{ display: "block", mt: 2, textAlign: "center", color: "#9CA3AF" }}>
        Built with ✨ Framer Motion • MUI • Next.js by  Abuzar Ali
      </Typography>
    </Box>
  );
}
