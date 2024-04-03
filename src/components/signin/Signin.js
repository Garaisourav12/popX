import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    }

    return (
        <section className="flex justify-center h-screen">
            <div className="flex flex-col gap-4 px-[1.5rem] py-10 w-[375px] max-w-full border-2">
                <h1 className="text-3xl font-semibold">
                    Signin to your <br /> PopX account
                </h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit,
                </p>
                <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit} >
                    <TextField
                        required
                        // id="outlined-required"
                        label="Email Address"
                        placeholder="Enter Email Address"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        // id="outlined-required"
                        label="Password"
                        placeholder="Email Password"
                        type="password"
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}
                    />
                    <button type="submit"
                        className="pointer flex items-center justify-center bg-[#6C25FF4B] text-[#1D2226] font-medium rounded-[6px] p-[.8rem] hover:shadow-lg duration-[.4s]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Signin;
