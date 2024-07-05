"use client";

import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";


export default function Page() {
  return (
    <>
        <main className="flex min-h-full flex-col items-center justify-between">
        <Navbar />
          <div className="h-screen w-full bg-white flex align-middle text-center justify-center">
            <h1 className="text-black text-lg md:text-xl md:mt-[200px] mt-[200px]">We are not currently hiring. Please come back later!</h1>
          </div>
          <Footer />
        </main>
    </>
  );
}
