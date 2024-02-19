"use client"

import Connect from "@/api/connect";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoggedIn(true);
        }
    }, [])

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <img src="/img/smartnote-miniature.png" alt="SmartNote" className="h-8"
                            style={{ filter: 'brightness(150%)' }} />
                    </Link>
                </div>
                {loggedIn ? (
                    <div>
                        <Link href="/login" className="text-white">Login</Link>
                        <Link href="/register" className="text-white ml-4">Register</Link>
                    </div>
                ) : (
                    <div>
                        <Link href="/dashboard" className={`text-white ${pathname === "/dashboard" ? 'active' : ''}`}>Dashboard</Link>
                        <Link href="/signin" className={`text-white ml-4`} onClick={() => {
                            Connect.Token.remove("api");
                        }}>Logout</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Nav;