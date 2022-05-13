import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {
  createTheme,
  ThemeProvider
} from '@mui/material'
import { 
  Home,
  Login,
  Signup
} from "./pages/index"
import { 
  Navbar
} from "./components/index"
import './App.css';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0e7490',
    },
    secondary: {
      main: '#BD5D78',
    },
    success: {
      main: '#00d09c',
      dark: '#66e3c4',
    },
    warning: {
      main: '#FF9800',
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
  },
})

const notify = (toastMessageText:string) => toast(toastMessageText,{ position: toast.POSITION.BOTTOM_RIGHT});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/"         element={<Home/>} />
            <Route path="/login"    element={<Login/>} />
            <Route path="/signup"    element={<Signup/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export { notify }
export default App;