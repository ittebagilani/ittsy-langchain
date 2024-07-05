"use client";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <main className="flex min-h-full flex-col items-center justify-between">
        <Navbar />
        <div className="h-full w-full bg-[#0c1f1e] flex align-middle text-left flex-col">
          <h1 className="text-white text-2xl md:text-4xl md:mt-[200px] mt-[150px] md:ml-[100px] ml-20">
            Privacy Policy
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you visit our website. By using our
            website, you agree to the terms outlined in this policy.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Information We Collect
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            Personal Information: When you interact with our website, we may
            collect personal information such as your name, email address, and
            contact details. This information is collected with your consent and
            used to provide you with the requested services. <br />
            <br />
            Usage Data: We may also collect non-personal information about your
            interactions with our website, including your IP address, browser
            type, and device information. This data is used to analyze website
            performance and improve user experience.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            How We Use Your Information
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            We use the information collected to personalize your experience on
            our website, respond to inquiries, and provide you with relevant
            information and updates. Your personal information may also be used
            for marketing and promotional purposes, such as sending newsletters
            or promotional offers. You have the option to opt out of receiving
            marketing communications at any time.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Data Security
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            We are committed to protecting your personal information and have
            implemented security measures to safeguard your data from
            unauthorized access, disclosure, or misuse.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Third-Party Services
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            We may use third-party services and tools on our website that
            collect data for analytics, advertising, or social media
            integration. These third-party services are governed by their own
            privacy policies and terms of service.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Your Rights
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            You have the right to access, update, or delete your personal
            information stored on our website. If you have any questions or
            requests regarding your data, please contact us at info@ittsy.co
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Changes to the Privacy Policy
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10">
            We reserve the right to update this Privacy Policy to reflect
            changes in our data practices or legal requirements. We recommend
            reviewing this page periodically for any updates.
          </h1>
          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Contact Us
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 pb-20">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at info@ittsy.co
          </h1>
        </div>
        <Footer />
      </main>
    </>
  );
}
