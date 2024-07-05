"use client";

import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <main className="flex min-h-full flex-col items-center justify-between">
        <Navbar />
        <div className="h-full w-full bg-[#0c1f1e] flex align-middle text-left flex-col">
          <h1 className="text-white text-2xl md:text-4xl md:mt-[200px] mt-[150px] md:ml-[100px] ml-20">
            Cookie Policy
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            This Cookie Policy explains how our website uses cookies to enhance
            user experience, analyze website traffic, and personalize content.
            By using our website, you consent to the use of cookies in
            accordance with this policy.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            What are Cookies?
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            Cookies are small text files that are stored on your device when you
            visit a website. They are widely used to make websites work more
            efficiently and provide information to website owners.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Types of Cookies We Use
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            Essential Cookies: These cookies are necessary for the website to
            function properly. They enable core functionalities such as page
            navigation and access to secure areas of the website. <br />
            <br />
            Analytical Cookies: These cookies help us analyze website traffic
            and track user interactions to improve our website performance and
            user experience. <br />
            <br />
            Advertising Cookies: These cookies are used to deliver personalized
            advertisements based on your browsing behavior and interests.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Managing Cookies
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            You can control and manage cookies in your browser settings. Most
            web browsers allow you to block or delete cookies, or be notified
            when a cookie is being placed on your device. Please note that
            blocking cookies may affect the functionality of the website.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Third-Party Cookies
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            We may use third-party services that use cookies to provide
            analytics, advertising, and social media features. These third-party
            cookies are subject to the respective privacy policies of the
            service providers.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Changes to the Cookie Policy
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 ">
            We reserve the right to update this Cookie Policy to reflect changes
            in our cookie practices or legal requirements. We recommend checking
            this page periodically for any updates.
          </h1>

          <h1 className="text-white text-2xl md:text-4xl md:mt-[100px] mt-[100px] md:ml-[100px] ml-20">
            Contact Us
          </h1>
          <h1 className="text-white text-md md:ml-[100px] mx-20 md:mt-10 pb-20">
            If you have any questions or concerns about our Cookie Policy,
            please contact us at info@ittsy.co
          </h1>
        </div>
        <Footer />
      </main>
    </>
  );
}
