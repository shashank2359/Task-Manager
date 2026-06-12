import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const login = async ()=>{

        const res = await api.post("/auth/login",{
            email,
            password
        });

        localStorage.setItem("token",res.data.token);
        navigate("/dashboard");

        alert("Login Successful");
    }

    return (
    <div className="container">

        <h1>Login</h1>

        <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={login}>
            Login
        </button>

        <p>
            New User?
            <a href="/register"> Register</a>
        </p>

    </div>
)
}

export default Login;