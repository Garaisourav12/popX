import {
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [company, setCompany] = useState("");
    const [isAgency, setIsAgency] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/profile");
    };

    return (
        <section className="flex justify-center h-screen">
            <div className="flex flex-col gap-4 px-[1.5rem] py-6 w-[375px] max-w-full h-full border-2">
                <h1 className="text-3xl font-semibold">
                    Create your <br /> PopX account
                </h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit,
                </p>
                <form
                    action=""
                    className="h-full flex flex-col justify-between"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-3">
                        <TextField
                            required
                            // id="outlined-required"
                            label="Full Name"
                            placeholder="Enter Full Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            required
                            // id="outlined-required"
                            label="Phone Number"
                            placeholder="Enter Phone Number"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            required
                            // id="outlined-required"
                            label="Email Address"
                            placeholder="Enter Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            required
                            // id="outlined-required"
                            label="Password"
                            placeholder="Enter Password"
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <TextField
                            required
                            // id="outlined-required"
                            label="Company Name"
                            placeholder="Enter Company Name"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />

                        <div className="flex flex-col">
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Are you an Agency?
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={isAgency}
                                onChange={(e) => setIsAgency(e.target.value)}
                            >
                                <FormControlLabel
                                    value="Yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="No"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="pointer flex items-center justify-center bg-[#6C25FF] text-white font-medium rounded-[6px] p-[.8rem] hover:shadow-lg duration-[.4s]"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Signup;
