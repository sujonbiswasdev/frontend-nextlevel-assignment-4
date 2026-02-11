"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonProps {
    children: string;
    onClick?: React.MouseEventHandler;
}

const NotFoundPage: React.FC<ButtonProps> = ({ children, onClick }) => {

    const handleClick = () => {
        history.back()
    };
    return (
        <div>
            
        </div>
    )
}

export default NotFoundPage


