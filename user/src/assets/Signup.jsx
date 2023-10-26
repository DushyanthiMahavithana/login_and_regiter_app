import { useState } from "react";

function Signup() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded w-25"  style={{background: "#FFFDD0", border: "1px solid #ccc" }}>
                <h2 style={{ textAlign: "center" }}>Register Form</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" name="name" className="form-control" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" autoComplete="off"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Register
                    </button>
                    <p style={{ textAlign: "center" }}>Already Have an Account?</p>
                    <button className="btn btn-secondary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
