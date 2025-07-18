import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, CssBaseline } from '@mui/material'
import { useMemo } from 'react'
import './App.css'
import { themeSettings } from './theme/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "@/views/navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
 

  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar/>
          <Routes>
            <Route path='/' element={<div>Home Page</div>} />
            <Route path='/dashboard' element={<div>Dashboard Page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
