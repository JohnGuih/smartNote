import Head from "next/head";
import "../globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata = {
  title: "SmartNode Dashboard",
  description: "An powefull notepad engine, capable of using Artificial Intelligence to help you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/img/smartnote-miniature.png" />
      </Head>
      <body className="bg-slate-950 text-white w-screen h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}