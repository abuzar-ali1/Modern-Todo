"use client"
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState } from "react";
import LeftContainer from "./ui/components/LeftContainer";



export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here, e.g., filter data
    console.log('Searching for:', searchQuery);
  };

  return (
    <Box sx={{ margin: "5px" }}>
      <Box
        sx={{
          border: "3px solid #374151",
          borderRadius: "12px",
          minHeight: "100vh",
          p: '30px 30px '
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{
                border: "1px solid #374151", minHeight: "100vh",
                borderRadius: '12px', minHeight: '80vh', p: 3
              }} >
                <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
                  Todo App
                </Typography>
                <LeftContainer />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{
                border: "1px solid #374151", minHeight: "100vh",
                borderRadius: '12px', p: 3
              }} >
                Sidebar
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Box>
  );
}

