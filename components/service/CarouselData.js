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
          <span className="text-sm md:text-base">
            Data integration is a process of collecting a variety of data from
            multiple sources and loading into target systems for further
            consumption. A good integration strategy is to explicitly define
            your target systems as the business logic processing may depend in
            it.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center   ">
          <span className="text-sm md:text-base">
            Ittsy has the expertise and experience in any leading data
            integration platforms but our product of reliable choice and
            recommendation would be Talend Data Integration platform. It offers
            a robust suite of tools to connect, access, and transform both
            standard and Big Data in a multi-cloud and on-premises environments.
            More than 1000 connectors and components allow integration with
            virtually any data source.
          </span>
        </h1>
      </div>
    </Carousel>
  );
}
