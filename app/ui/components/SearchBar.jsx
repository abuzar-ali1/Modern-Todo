"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';    
    
let SearchBar;
    
export default SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <Box sx={{backgroundColor: "#3f3f3fff", borderRadius:'10px', color: 'white', display: 'flex', alignItems: 'center' , mt:2 }}>
      <IconButton  type="submit" aria-label="search" onClick={handleSearch}>
      <SearchIcon sx={{color : '#9CA3AF'}} />
      </IconButton>
       <TextField
       fullWidth
      id="filled-search"
      label="Search field"
      size='small'
      type="search"
      variant="outlined"
      color='primary'
      sx={{
      input: { color: 'white' },
      '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' } },
      '& .MuiInputLabel-root': { color: '#9CA3AF' },
      '& .MuiInputLabel-root.Mui-focused': { color: '#9CA3AF' }
      }}
    />
    </Box>
    );
};