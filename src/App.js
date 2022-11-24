import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import ExercisesDetail from './Pages/ExercisesDetail/ExercisesDetail'




const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExercisesDetail />} />
      </Routes>

    </Box>
  );
}

export default App