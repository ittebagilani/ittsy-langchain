"use client";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <main className="flex min-h-full flex-col items-center justify-between">
        <Navbar />
        <div className="h-full w-full bg-[#fcf0d5] flex align-middle text-left flex-col">
            <h1 className="text-3xl md:text-7xl font-black text-[#0c1f1e] mt-[10%] md:pt-0 pt-20 pl-20 md:px-20">About Us</h1>
          <h1 className="text-[#0c1f1e] text-lg md:text-xl md:p-20 py-10 px-20">
            Ittsy Systems is a technology solution provider specializing in
            customized software design and development services. Our primary
            offerings include Data Integration, Solution Architecture, and AI,
            with a focus on Generative AI solutions.
            <br />
            <br />
            The team at Ittsy consists of seasoned professionals with over two
            decades of experience in the Services Industry, complemented by
            fresh university graduates who introduce emerging technologies to
            create innovative solutions tailored to customer needs.
            <br />
            <br />
            Ittsy Systems is committed to delivering effective and scalable
            solutions, emphasizing customer support during and after delivery.
            We offer both project-based and product-based solutions.
            <br />
            <br />
            Continuously evolving, Ittsy aims to build excellent customer
            relationships through communication, collaboration, and innovation,
            expanding its services to meet diverse client requirements.
          </h1>
        </div>
        <Footer />
      </main>
    </>
  );
}
