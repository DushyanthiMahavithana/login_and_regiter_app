import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name,email,password})
        .then(result => {console.log(result)
            navigate('/login')
        
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded w-25"  style={{background: "#FFFDD0", border: "1px solid #ccc" }}>
                <h2 style={{ textAlign: "center" }}>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" name="name" className="form-control" autoComplete="off" onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Register
                    </button>
                </form>
                <p style={{ textAlign: "center" }}>Already Have an Account?</p>
                    <Link to="/login" className="btn btn-secondary btn-block">Login</Link>
            </div>
        </div>
    );
}

export default Signup;
