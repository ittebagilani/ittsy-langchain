"use client";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Service from "@/components/service/Service";

export default function Page() {
  return (
    <>
        <main className="flex min-h-full flex-col items-center justify-between">
          <Navbar />
          <Service />
          <Footer />
        </main>
    </>
  );
}
