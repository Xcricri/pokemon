import React from "react";
import Logo from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <div className="navbar bg-base-100 p-4">
                    <div className="navbar-start">
                    </div>
                        
                    <div className="navbar-center">
                        <Link to="/about">
                            <img src={Logo} alt="Logo" className="w-full h-20" />
                        </Link>
                    </div>
                        
                    <div className="navbar-end">
                    </div>
                </div>
            </header>
        </>
    );
}
