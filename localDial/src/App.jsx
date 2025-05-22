import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import theme from './utils/Theme';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminPanel />
      </ThemeProvider>
    </Router>
  );
}

export default App;