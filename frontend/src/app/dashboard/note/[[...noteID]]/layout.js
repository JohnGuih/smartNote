"use client"

import Head from "next/head";
import "../../../globals.css";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
    const route = useRouter();

    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/img/smartnote-miniature.png" />
            </Head>
            <body className="bg-slate-950 text-white w-screen h-screen">
                <nav className="p-4 h-15">
                    <div className="container mx-auto flex justify-between items-center">
                        <div>
                            <button onClick={() => route.back}>
                                <MdArrowBack className="text-white" />
                            </button>
                        </div>
                        <div>
                            <button type="submit" form="myForm">
                                Save
                            </button>
                        </div>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}