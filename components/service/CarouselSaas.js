import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselSaas() {
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
          If you are looking to reduce IT support or quickly deploy applications
          and scale up and down its resources so that you can focus more on your
          core business functions, then Ittsy can help you achieve that goal.
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            You just describe your problem and critical business objectives, we
            will lay out the plan and execute it for you. Worry free support
            available 24/7 as well.
          </span>
        </h1>
      </div>
    </Carousel>
  );
}
