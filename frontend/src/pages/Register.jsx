import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async ()=>{

        const res = await api.post("/auth/register",{
            name,
            email,
            password
        });

        localStorage.setItem("token",res.data.token);
        navigate("/dashboard");

        alert("Registered Successfully");
    }

    return (
    <div className="container">
            <h1>Register</h1>

            <input
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
            />

            <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Register
            </button>
            <p>

Already have an account?

<a href="/">
 Login
</a>

</p>
            </div>
)
}

export default Register;