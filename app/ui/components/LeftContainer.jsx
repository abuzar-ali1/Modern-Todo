"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import SearchBar from "./SearchBar";
import { useState } from 'react';
import LabTabs from './LabTabs';


export default function LeftContainer() {
     const [searchQuery, setSearchQuery] = useState('');

      const handleSearch = () => {
        // Implement your search logic here, e.g., filter data
        console.log('Searching for:', searchQuery);
      }; 
  return (
   <Box>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>    
    {/* Other components can be added here */}
    <LabTabs/>
   </Box>
  );
}
