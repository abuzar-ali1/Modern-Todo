"use client";
import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {  Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import TodosList from "./TodosList";
import TodoModal from "./TodoModal";


export default function LabTabs({openAddModal , all ,active, completed , openEditModal, deleteTodo ,toggleComplete ,isModalOpen , closeModal  , handleSubmit , value , handleChange , editingTodo})  {
 
  return (
    <Box sx={{ py: 4, maxWidth: "1000px" }}>
      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
        <Button
          size="large"
          sx={{
            justifyContent: "flex-start",
            bgcolor: "#3f3f3fff",
            color: "#9CA3AF",
            textTransform: "none",
            "&:hover": { bgcolor: "grey.700" },
            flex: 1,
          }}
          variant="contained"
          startIcon={<Add />}
          onClick={openAddModal}
        >
          Add a new task
        </Button>

        
      </Box>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="todos tabs example">
              <Tab sx={{ color: "#9CA3AF", textTransform: "none" }} label={`All`} value="1" />
              <Tab sx={{ color: "#9CA3AF", textTransform: "none" }} label={`Active`} value="2" />
              <Tab sx={{ color: "#9CA3AF", textTransform: "none" }} label={`Completed`} value="3" />
            </TabList>
          </Box>

          <TabPanel sx={{ p: 0 }} value="1">
            <TodosList
              items={all}
              onEdit={openEditModal}
              onDelete={deleteTodo}
              onToggleComplete={toggleComplete}
            />
          </TabPanel>

          <TabPanel sx={{ p: 0 }} value="2">
            <TodosList
              items={active}
              onEdit={openEditModal}
              onDelete={deleteTodo}
              onToggleComplete={toggleComplete}
            />
          </TabPanel>

          <TabPanel sx={{ p: 0 }} value="3">
            <TodosList
              items={completed}
              onEdit={openEditModal}
              onDelete={deleteTodo}
              onToggleComplete={toggleComplete}
            />
          </TabPanel>
        </TabContext>
      </Box>

      <TodoModal open={isModalOpen} onClose={closeModal} initialValues={editingTodo} onSubmit={handleSubmit} />
    </Box>
  );
}
