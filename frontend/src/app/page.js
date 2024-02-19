"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import checkAuth from "@/utils/checkAuth";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!checkAuth()) {
      router.replace("/signin");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-default-image filter grayscale bg-50%">
      <div className="bg-black bg-opacity-80 w-full h-full flex flex-col justify-center items-center flex flex-col">
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[14rem]">
              <Image src="/img/smartnote-bold.png" alt="SmartNote" width="300" height="300" objectFit="contain"
                style={{ filter: 'brightness(150%)' }} />
            </div>
            <div className="w-[3rem]">
              <Image src="/img/smartnote-miniature.png" alt="SmartNote" width="100" height="100" objectFit="contain"
                style={{ filter: 'brightness(150%)' }} />
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-full rounded-tl-[4rem] flex flex-col items-center">
          <h1 className="text-3xl my-6 tracking-wide font-thin">
            Login 
          </h1>
          <form className="flex flex-col items-center mb-3 mx-3 w-full">
            <div className="flex flex-col items-center w-full">
              <label htmlFor="email" className="text-lg font-thin">Email</label>
              <input type="email" name="email" id="email" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <div className="flex flex-col items-center my-4 w-full">
              <label htmlFor="password" className="text-lg font-thin">Password</label>
              <input type="password" name="password" id="password" className="w-full max-w-80 h-10 border-2 border-gray-300 rounded-md px-2" />
            </div>
            <button type="submit" className="w-full max-w-80 h-10 bg-black text-white rounded-md">Login</button>
            <Link href="/signup" className="flex items-center justify-center w-full max-w-80 h-10 text-center text-blue-500 underline font-bold hover:text-blue-700">
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;