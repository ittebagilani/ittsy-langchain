"use client";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/contact/contact";


export default function Page() {
  return (
    <>
        <main className="flex min-h-full flex-col items-center justify-between">
          <Navbar />
          <Contact />
          <Footer />
        </main>
    </>
  );
}
