import { Typography, Button } from "@mui/material"
import React, { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import {
    notify
} from "../../App"
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "../../assets/react-icons"
import './userAuth.css'

const Signup = () => {

    const [termsAndConditionsCheckbox, setTermsAndConditionsCheckbox] = useState(false)
    const [newUserName     , setNewUserName]     = useState('')
    const [newUserEmail    , setNewUserEmail]    = useState('')
    const [newUserPassword , setNewUserPassword] = useState('')
    const [newPasswordType, setNewPasswordType] = useState('password')

    const navigate = useNavigate()

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

    function signupUser(event: React.FormEvent)
    {
        event.preventDefault();
        axios.post(
            "https://quiztron-app.herokuapp.com/api/signup",
            {
                newUserName: `${newUserName}`,
                newUserEmail: `${newUserEmail}`,
                newUserPassword : `${newUserPassword}`
            }
        )
        .then(res => {
            if(res.data.status==='ok')
            {
                //User created successfully, navigate to Login Page
                notify("New user created successfully!")
                navigate('/login')
            }
            else
            {
                throw new Error("Error occured while creating new user")
            }
        })
        .catch(err=>{
            notify("Error creating new user. Please try again!")
        })
    }

    return (
        <div className='user-auth-page'>
            <div className="user-auth-content-container">
                <form onSubmit={(e)=>signupUser(e)} 
                    className="user-auth-form"
                >
                    <h2 className="auth-form-heading">Signup</h2>
                
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-name"><h4>Name </h4></label>
                        <input 
                            id="user-auth-input-name" 
                            className="user-auth-form-input" 
                            type="text" 
                            placeholder="Name" 
                            value={newUserName}
                            onChange={(event)=>setNewUserName(event.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-email"><h4>Email address</h4></label>
                        <input 
                            id="user-auth-input-email" 
                            className="user-auth-form-input" 
                            type="email" 
                            placeholder="Email" 
                            value={newUserEmail}
                            onChange={(event)=>setNewUserEmail(event.target.value)}
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
                                value={newUserPassword}
                                onChange={(event)=>setNewUserPassword(event.target.value)}
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

                    <div className="accept-terms-container">
                        <input 
                            type="checkbox" 
                            id="accept-terms" 
                            checked={termsAndConditionsCheckbox}
                            onChange={()=>setTermsAndConditionsCheckbox(prevState=>!prevState)}
                        />
                        <label htmlFor="accept-terms">I accept all terms and conditions</label>
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
                        disabled={termsAndConditionsCheckbox?false:true}
                    >
                        Signup
                    </Button>

                    <div className="new-user-container">
                        <Link to="/login" className="links-with-blue-underline" id="new-user-link">
                            Already have an account &nbsp; 
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export { Signup }