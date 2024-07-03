"use client";

import CarouselAI from "./CarouselAI";
import CarouselData from "./CarouselData";
import CarouselArch from "./CarouselArch";
import CarouselSaas from "./CarouselSaas";
import CarouselAPI from "./CarouselAPI";

export default function Service() {
  return (
    <>
      <div className="bg-[#e7d5be] h-full w-full pt-[150px] pb-[80px] md:pt-[110px] md:pb-[100px]  text-center">
        <div>
          <h1 className="text-black font-black text-4xl md:text-7xl">
            Our Offerings.
          </h1>
        </div>

        <div
          className="w-full h-5/6 flex flex-col md:flex-row items-center justify-center mt-6 pt-6"
          id="ai"
        >
          <div className="card bg-[#0c1f1e] w-11/12 m-4 shadow-xl h-full flex flex-col items-center justify-center">
            <div className="w-full flex-col">
              <h1 className="text-3xl md:text-5xl pt-12 text-[#e7d5be] text-center">
                AI & GEN AI
              </h1>
              <h1 className="text-lg md:px-[150px] px-4 mt-10 text-[#a39685]">
                AI and Gen AI have paved the way for Artificial Business
                Intelligence (ABI), driving business insights and growth. While
                AI has existed for years, Gen AI has revolutionized the field.
              </h1>
            </div>
            <div className="w-4/5 h-[550px] flex items-center justify-center m-auto rounded-lg md:pt-10">
              <CarouselAI />
            </div>
          </div>
        </div>
        <div
          className="w-full h-5/6 flex flex-col md:flex-row items-center justify-center mt-6 pt-6"
          id="architecture"
        >
          <div className="card bg-[#0c1f1e] w-11/12 m-4 shadow-xl h-full flex flex-col items-center justify-center">
            <div className="w-full flex-col">
              <h1 className="text-3xl md:text-5xl pt-12 text-[#e7d5be] text-center">
                Solution Architecture
              </h1>
              <h1 className="text-lg md:px-[150px] px-4 mt-10 text-[#a39685]">
                Review, Rebuild or build from scratch a solution that meet your
                design requirements, secure and scalable enough to meet the
                evolving needs.
              </h1>
            </div>
            <div className="w-4/5 h-[550px] flex items-center justify-center m-auto rounded-lg md:pt-10">
              <CarouselArch />
            </div>
          </div>
        </div>
        <div
          className="w-full h-5/6 flex flex-col md:flex-row items-center justify-center mt-6 pt-6"
          id="saas"
        >
          <div className="card bg-[#0c1f1e] w-11/12 m-4 shadow-xl h-full flex flex-col items-center justify-center">
            <div className="w-full flex-col">
              <h1 className="text-3xl md:text-5xl pt-12 text-[#e7d5be] text-center">
                SaaS
              </h1>
              <h1 className="text-lg md:px-[150px] px-4 mt-10 text-[#a39685]">
                SaaS is a cloud-based model offering access to data and reports
                online, with no upfront costs for software, hardware,
                maintenance, or upgrades. Pay only for what you use; we handle
                security, availability, and performance.
              </h1>
            </div>
            <div className="w-4/5 h-[550px] flex items-center justify-center m-auto rounded-lg md:pt-10">
              <CarouselSaas />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div
            className="md:w-1/2 w-full h-5/6 flex flex-col md:flex-row items-center justify-center mt-6 pt-6"
            id="data"
          >
            <div className="card bg-[#0c1f1e] w-11/12 m-4 shadow-xl h-full flex flex-col items-center justify-center">
              <div className="w-full flex-col">
                <h1 className="text-3xl md:text-5xl pt-12 text-[#e7d5be] text-center">
                  Data Integration
                </h1>
                <h1 className="text-lg md:px-[150px] px-4 mt-10 text-[#a39685]">
                  Data integration involves collecting data from multiple
                  sources and loading it into target systems. A clear definition
                  of target systems is essential for accurate business logic
                  processing.
                </h1>
              </div>
              <div className="w-4/5 h-[550px] flex items-center justify-center m-auto rounded-lg md:pt-10">
                <CarouselData />
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 w-full h-5/6 flex flex-col md:flex-row items-center justify-center mt-6 pt-6"
            id="data"
          >
            <div className="card bg-[#0c1f1e] w-11/12 m-4 shadow-xl h-full flex flex-col items-center justify-center">
              <div className="w-full flex-col">
                <h1 className="text-3xl md:text-5xl pt-12 text-[#e7d5be] text-center">
                  API Integration
                </h1>
                <h1 className="text-lg md:px-[150px] px-4 mt-10 text-[#a39685]">
                  APIs are crucial nowadays, acting as middleware to
                  separate frontend and backend. They enable systems to
                  interact with data. Ittsy can develop REST
                  or SOAP APIs for integration with your systems.
                </h1>
              </div>
              <div className="w-4/5 h-[550px] flex items-center justify-center m-auto rounded-lg md:pt-10">
                <CarouselAPI />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
