import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselAI() {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      // autoPlay={true}
      dynamicHeight={false}
      interval={10000}
      className="w-full h-full"
    >
      <div className="bg-[#122f2d] w-full h-fit md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10">
        <h1 className="text-[#e7d5be] md:pt-[50px] p-2 md:leading-7 text-sm md:text-base px-4 md:px-10 text-center">
          Ittsy can assist you to make the most out of your business in a
          cost-effective and most efficient way through the use of this
          technology combo. Connect your internal resources regardless of the
          resource type and get answers quickly, interactively, and on-demand.{" "}
          <br />
          <br />
          We can scan hundreds of thousands of documents within subseconds or
          mine data from any of your datastore and respond to your questions
          about the content without compromising security.
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-full md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] text-xl text-center md:pt-[10px] pt-4 md:leading-7">
          Executive Management Team <br />
          <br />
          <span className="text-sm md:text-base leading-7">
            Members of the Executive Teams can get business insights from the
            palm of their hands whether they are chairing a meeting in the
            office or they are traveling for a business trip outside.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-full md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] text-xl text-center md:pt-[20px] pt-4 md:leading-7">
          Business Managers <br />
          <br />
          <span className="text-sm md:text-base leading-7">
            Business Managers can focus on what they do the best: grow business.
            They don’t need to be technical. They can simply ask questions in
            plain English about any of the business domains they are leading and
            get answers quickly to move on with their business objectives and
            priorities.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-full md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] text-xl text-center md:pt-[5px] pt-4 md:leading-7">
          Data Analysts <br />
          <br />
          <span className="text-sm md:text-base leading-7">
            Data Analysts can slice and dice the data to identify trends and
            patterns without writing any piece of code.
          </span>
        </h1>
      </div>
      <div className="bg-[#122f2d] w-full h-full md:h-[400px] rounded-lg flex items-center justify-center md:mt-0 mt-10 px-4 md:px-10">
        <h1 className="text-[#e7d5be] text-xl text-center md:pt-[10px] pt-4 md:leading-7">
          Business Users <br />
          <br />
          <span className="text-sm md:text-base leading-7">
            Business Users can interact with the data and other contents to
            conduct quality assurance and testing and help improve functionality
            and overall user experience.
          </span>
        </h1>
      </div>
    </Carousel>
  );
}
