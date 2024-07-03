import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselArch() {
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

          One on one or group discussions to understand the business goals and
          requirements that the technology solution needs to address.
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            Design high-level structure, components, modules, interfaces, and
            data flows to ensure that the solution aligns with the organizations
            goals and technical standards.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            With your own technology stack or let Ittsys professionals recommend
            the appropriate technologies, frameworks and tools that best fit the
            requirements of the solution
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            Ittsy professionals will create detailed technical specifications,
            architecture diagrams, and documentation that outline the design and
            implementation details of the solution which will serve as a guide
            for developers and other team members.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            Ittsy will ensure that the solution meets quality standards,
            performance requirements, and compliance regulations.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            Ittsy will assess and mitigate risks associated with the solution,
            such as technical challenges, security vulnerabilities, and
            scalability issues and proactively identify potential risks and
            develop strategies to address them.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-[450px] md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] md:pt-[60px] pt-[50px] -mt-20 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          <span className="text-sm md:text-base">
            Engage/Re-engage Ittsy professional to stay up-to-date on emerging
            technologies, industry trends, and best practices to continuously
            improve the architecture and design of solutions.
          </span>
        </h1>
      </div>
    </Carousel>
  );
}
