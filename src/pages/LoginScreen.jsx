import React from "react";
import image from "../assets/desktop_bg.jpg";
import LoginBox from "../components/LoginScreen/LoginBox";
import TopBar from "../components/LoginScreen/TopBar";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/desktop");
    };

    return (
        <div
            className="h-screen w-screen bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="flex flex-col items-center bg-black/30 backdrop-blur-sm h-screen w-screen">
                <div className="h-10%">
                    <TopBar />
                </div>
                <div className="h-[90%] w-screen  flex flex-col justify-center items-center">
                    <p className="text-white font-medium p-2 text-4xl mb-3">
                        Login
                    </p>
                    <LoginBox handleLogin={handleLogin} />
                </div>
            </div>
        </div>
    );
}
