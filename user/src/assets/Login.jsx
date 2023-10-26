import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email,password})
    .then(result => {
        console.log(result)
        if(result.data === "Success"){
            navigate('/home')
        }
        
    })
    .catch(err => console.log(err))
}


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded w-25"  style={{background: "#FFFDD0", border: "1px solid #ccc" }}>
                <h2 style={{ textAlign: "center" }}>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Sign Up
                    </button>
                </form>
                
            </div>
        </div>
  )
}

export default Login
