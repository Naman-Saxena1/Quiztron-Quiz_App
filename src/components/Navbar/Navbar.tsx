import * as React from 'react';
import { useEffect} from 'react';
import { Link } from "react-router-dom"
import { setUserAsLoggedIn, setUserAsLoggedOut } from "../../redux/index"
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import jwt_decode from "jwt-decode"
import {
    notify
} from "../../App"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Navbar() {
  const { isUserLogin }= useAppSelector(state => state.userLoginReducer)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    const token=localStorage.getItem('socioztron-user-token')
    if(token)
    {
      const user = jwt_decode(token)
      if(!user)
      {
        localStorage.removeItem('socioztron-user-token')
        dispatch(setUserAsLoggedOut())
      }
      else
      {
        dispatch(setUserAsLoggedIn())  
      }
    }
  },[isUserLogin])

  function logoutUser()
  {
    localStorage.removeItem('socioztron-user-token')
    dispatch(setUserAsLoggedOut())
    localStorage.clear()
    notify("Logged out successfully!")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{
          justifyContent: 'space-between',
          padding: '8px',
          backgroundColor: 'transparent',
          color: 'primary.main'
        }}
      >
        <Toolbar 
            sx={{
              justifyContent: 'space-between',
              padding: '1rem'
            }}
        >
          <Link to="/" className='react-router-link-no-style'>
            <Typography 
              variant="h5" 
              component="div"
              sx={{
                marginLeft: '1rem'
              }}
            >
                Quiztron
            </Typography>
          </Link>
          {
            isUserLogin ? (
                <Button 
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={logoutUser}
                    sx={{
                      mr: 4,
                    }}
                    disableElevation
                >
                  Logout
                </Button>
            ):(
              <Link to="/login" className='react-router-link-no-style'>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                      mr: 4,
                    }}
                    disableElevation
                >
                  Login
                </Button>
              </Link>
            )
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
