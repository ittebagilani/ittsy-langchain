"use client";

import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";


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
