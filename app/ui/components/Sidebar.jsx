"use client";
import React from "react";
import { Box, Paper, Typography, Grid, Button, Stack } from "@mui/material";

export default function Sidebar({
  stats = { total: 0, active: 0, completed: 0 },
  onSetFilter = () => {},
  onShortcut = () => {},
  selectedTab = "1",
}) {
  // helper to decide active button style
  const activeStyle = {
    bgcolor: "#2563EB",
    color: "#FFF",
    border: "1px solid #2563EB",
    "&:hover": { bgcolor: "#1e40af" },
  };

  const inactiveStyle = {
    bgcolor: "transparent",
    color: "#E6EEF8",
    border: "1px solid #374151",
    "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
  };

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
                {stats.total}
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
                {stats.active}
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
                {stats.completed}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Stack direction="row" spacing={1} sx={{ mt: 2.5, flexWrap: "wrap" }}>
          <Button
            onClick={() => onSetFilter("all")}
            sx={selectedTab === "1" ? activeStyle : inactiveStyle}
            size="small"
          >
            All
          </Button>

          <Button
            onClick={() => onSetFilter("active")}
            sx={selectedTab === "2" ? activeStyle : inactiveStyle}
            size="small"
          >
            Active
          </Button>

          <Button
            onClick={() => onSetFilter("completed")}
            sx={selectedTab === "3" ? activeStyle : inactiveStyle}
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
          bgcolor: "#0b1220",
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#E6EEF8" }}>
          Shortcuts
        </Typography>

        <Stack spacing={1.25} sx={{ mt: 1.5 }}>
          <Button
            onClick={() => onShortcut("Plan project structure", "Break tasks down and assign time")}
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
            onClick={() => onShortcut("Review PRs", "")}
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
            onClick={() => onShortcut("Daily standup notes", "")}
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
        Built with ✨ Framer Motion • MUI • Next.js by Abuzar Ali
      </Typography>
    </Box>
  );
}
