import React from "react";
import profile from '../../assets/profile.png'
import camera from '../../assets/camera.png'

function Profile() {
    return (
        <section className="flex justify-center items-start h-screen">
            <div className="flex flex-col gap-6 w-[375px] max-w-full h-full border-2 bg-[#F7F8F9]">
                <div className="bg-white text-lg font-semibold text-[#1D2226] px-4 py-5">Account Settings</div>
                <div className="flex gap-6 px-4">
                    <div className="flex w-[5rem] relative  ">
                        <img src={profile} className="w-full" alt="" />
                        <img src={camera} className="w-[1.1rem] absolute top-[65%] right-[-3%]" alt="" />
                    </div>
                    <div className="name-email text-[#1D2226]">
                        <p className="text-sm font-medium">Marry Doe</p>
                        <p className="text-xs">Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className="px-4 pb-6 text-sm text-[#1D2226] border-b border-dashed border-gray-600">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                    Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                    Aliquyam Erat, Sed Diam
                </p>
            </div>
        </section>
    );
}

export default Profile;
