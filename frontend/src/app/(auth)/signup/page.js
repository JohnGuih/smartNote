"use client"

import Connect from "@/api/connect";
import SignupAPI from "@/api/signup";
import formDataAsJSON from "@/utils/formDataAsJSON";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
    const route = useRouter();

    function onSubmit(event) {
        event.preventDefault();
        const formData = formDataAsJSON(event);

        SignupAPI({
            name: formData.name,
            email: formData.email,
            password: formData.password
        }).then((response) => {
            if (response.token) {
                const token = response.token;
                Connect.Token.set("api", token);

                route.push('/dashboard');
            }
        });
    }


    return <>
        <h1 className="text-3xl my-6 tracking-wide font-thin">
            Sign up
        </h1>
        <form className="flex flex-col items-center mb-3 mx-3 w-full" onSubmit={onSubmit}>
            <div className="flex flex-col items-center w-full">
                <label htmlFor="name" className="text-lg font-thin">Name</label>
                <input type="name" name="name" id="name" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <div className="flex flex-col items-center w-full">
                <label htmlFor="email" className="text-lg font-thin">Email</label>
                <input type="email" name="email" id="email" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <div className="flex flex-col items-center my-4 w-full">
                <label htmlFor="password" className="text-lg font-thin">Password</label>
                <input type="password" name="password" id="password" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <button type="submit" className="w-full max-w-80 h-10 bg-black text-white rounded-md">Create Account</button>
            <Link href="/signin" className="flex items-center justify-center w-full max-w-80 h-10 text-center text-blue-500 underline font-bold hover:text-blue-700">
                already have an account? Sign in
            </Link>
        </form>
    </>
}

export default Signup;