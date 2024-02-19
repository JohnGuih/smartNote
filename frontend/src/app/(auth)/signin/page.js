"use client"

import Auth from "@/api/auth";
import Connect from "@/api/connect";
import formDataAsJSON from "@/utils/formDataAsJSON";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signin = () => {
    const route = useRouter();

    function onSubmit(event) {
        event.preventDefault();
        const formData = formDataAsJSON(event);

        Auth({
            login: formData.email,
            password: formData.password
        }).then((response) => {
            if(response.token) {
                console.log(response.token);
                const token = response.token;
                Connect.Token.set("api", token);

                route.push('/dashboard');
            }
        });
    }


    return <>
        <h1 className="text-3xl my-6 tracking-wide font-thin">
            Login
        </h1>
        <form className="flex flex-col items-center mb-3 mx-3 w-full" onSubmit={onSubmit}>
            <div className="flex flex-col items-center w-full">
                <label htmlFor="email" className="text-lg font-thin">Email</label>
                <input type="email" name="email" id="email" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <div className="flex flex-col items-center my-4 w-full">
                <label htmlFor="password" className="text-lg font-thin">Password</label>
                <input type="password" name="password" id="password" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <button type="submit" className="w-full max-w-80 h-10 bg-black text-white rounded-md">Sign in</button>
            <Link href="/signup" className="flex items-center justify-center w-full max-w-80 h-10 text-center text-blue-500 underline font-bold hover:text-blue-700">
                Sign up
            </Link>
        </form>
    </>
}

export default Signin;