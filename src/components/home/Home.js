import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <section className="flex justify-center h-screen">
            <div className="flex flex-col justify-end gap-4 px-[1.5rem] py-6 w-[375px] max-w-full border-2 bg-[#F7F8F9]">
                <h1 className="text-3xl font-semibold">Welcome to PopX</h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit,
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => navigate('/sign-up')}
                        className="pointer flex items-center justify-center bg-[#6C25FF] text-white font-medium rounded-[6px] p-[.8rem] hover:shadow-lg duration-[.4s]"
                    >
                        Create Account
                    </button>
                    <button
                        onClick={() => navigate('/sign-in')}
                        className="pointer flex items-center justify-center bg-[#6C25FF4B] text-[#1D2226] font-medium rounded-[6px] p-[.8rem] hover:shadow-lg duration-[.4s]"
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
