import { Typography, Button } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useAppDispatch } from "../../redux/hooks"
import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"
import {
    notify
} from "../../App"
import {
    setUserAsLoggedIn
} from "../../redux/index"
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "../../assets/react-icons"
import './userAuth.css'

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [userEmail    , setUserEmail]    = useState('')
    const [userPassword , setUserPassword] = useState('')
    const [newPasswordType, setNewPasswordType] = useState('password')

    function toggleNewPasswordAppearance()
    {
      if(newPasswordType==="password")
      {
        setNewPasswordType("text")
      }
      else
      {
        setNewPasswordType("password")
      }
    }

    function loginUser(event: React.FormEvent)
    {
        event.preventDefault();
        axios.post(
            "https://quiztron-server.vercel.app/api/login",
            {
                userEmail,
                userPassword
            }
        )
        .then(res => {
            if(res.data.user)
            {
                localStorage.setItem('quiztron-user-token',res.data.user)
                let loggedInUserDetails = jwt_decode(res.data.user) 
                notify("Logged in successfully!")
                dispatch(setUserAsLoggedIn())
                navigate('/')
            }
            else
            {
                throw new Error("Error in user login")
            }
        })
        .catch(err=>{
            notify("Error logging in user. Please try again!")
        })
    }

    return (
        <div className='user-auth-page'>
            <div className="user-auth-content-container">
                <form onSubmit={(e)=>loginUser(e)} className="user-auth-form">
                    <h2 className="auth-form-heading">Login</h2>
                    
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-email"><h4>Email address</h4></label>
                        <input 
                            id="user-auth-input-email" 
                            className="user-auth-form-input" 
                            type="email" 
                            placeholder="Email" 
                            value={userEmail}
                            onChange={(event)=>setUserEmail(event.target.value)}
                            required/>
                    </div>

                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-password"><h4>Password</h4></label>
                        <div className="password-field-container">
                            <input 
                                id="user-auth-input-password" 
                                className="user-auth-form-input" 
                                type={newPasswordType} 
                                placeholder="Password" 
                                value={userPassword}
                                onChange={(event)=>setUserPassword(event.target.value)}
                                required
                            />
                            {
                                (newPasswordType==="text") ?
                                (<AiOutlineEye onClick={toggleNewPasswordAppearance} size="2em" style={{cursor:'pointer'}}/>)
                                :
                                (<AiOutlineEyeInvisible onClick={toggleNewPasswordAppearance} size="2em" style={{cursor:'pointer'}}/>)
                            }
                        </div>
                    </div>

                    <div className="user-options-container">
                        <div className="remember-me-container">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">
                                <Typography variant="subtitle2">
                                    Remember Me
                                </Typography>
                            </label>
                        </div>
                        <div>
                            <Link to="#" className="links-with-blue-underline" id="forgot-password">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <Button 
                        type="submit"
                        variant="contained" 
                        color="success" 
                        disableElevation
                        sx={{  
                            mt:3,
                            mb:3,
                            width: '100%',
                            color: 'white'
                        }}
                    >
                        Login
                    </Button>

                    <div className="new-user-container">
                        <Link to="/signup" className="links-with-blue-underline" id="new-user-link">
                            Create new account &nbsp; 
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export { Login }