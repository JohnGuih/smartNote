import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "SmartNote",
  description: "An powefull notepad engine, capable of using Artificial Intelligence to help you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/img/smartnote-miniature.png" />
      </Head>
      <body className="">
        {/* <Nav /> */}
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
