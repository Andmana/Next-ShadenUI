"use client";

import { Input } from "../ui/input";
import { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const PasswordInput = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible((prevState) => !prevState);
    };
    return (
        <div className="relative">
            <Input
                type={isVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Input password"
                className="pe-9"
            />
            <button
                type="button" // Important for accessibility
                onClick={handleVisible}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100"
            >
                {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
        </div>
    );
};

export default PasswordInput;
