import React from "react";
import { User } from "lucide-react";

function LoginBox({ handleLogin }) {
    return (
        <button
            className="p-5 flex justify-center items-center gap-2 bg-gray-900/100 rounded-2xl w-[22rem] box-border hover:bg-gray-900/85 transition-all duration-500 cursor-pointer"
            onClick={() => handleLogin()}
        >
            <User className="text-white text-center ml-2 mr-4" size={50} />
            <div className="w-[75%] pl-5 border-l border-gray-100">
                <p className="text-white text-4xl text-center">Guest</p>
            </div>
        </button>
    );
}

export default LoginBox;
