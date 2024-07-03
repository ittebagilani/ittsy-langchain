import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselData() {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      dynamicHeight={false}
      interval={10000}
      className="w-full h-full"
    >
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">Salesforce CRM</span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">Microsoft CRM</span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">Workforce ADP</span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">
            SAP Succcessfactor, Business Warehouse or any ecosystem
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">Oracle ERP</span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">Workday HR System</span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">
            Any custom software systems
          </span>
        </h1>
      </div>
    </Carousel>
  );
}
