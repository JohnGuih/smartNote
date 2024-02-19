import Head from "next/head";
import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "SmartNode Auth",
  description: "An powefull notepad engine, capable of using Artificial Intelligence to help you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/img/smartnote-miniature.png" />
      </Head>
      <body className="">
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-default-image filter grayscale bg-50%">
          <div className="bg-black bg-opacity-80 w-full h-full flex flex-col justify-center items-center transition-all duration-500">
            <div className="flex-grow min-h-[20%] max-h-[50%] w-full flex justify-center items-center transition-all duration-500">
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
            <div className="min-h-[50%] bg-white w-full rounded-tl-[4rem] flex flex-col items-center transition-all duration-500">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}