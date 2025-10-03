"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NewTask from './NewTask';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: '100%', typography: 'body1', mt: 2 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
          <TabList sx={{
           
          }}
            onChange={handleChange} aria-label="lab API tabs example">
            <Tab  sx={{color :  "#9CA3AF", textTransform: 'none' }} label="All" value="1" />
            <Tab  sx={{color :  "#9CA3AF", textTransform: 'none'}} label="Active" value="2" />
            <Tab   sx={{color :  "#9CA3AF", textTransform: 'none'}} label="Completed" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{ p: '10px 0px '}} value="1">
          <NewTask/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
