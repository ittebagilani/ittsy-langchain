import Carousel from "./Carousel";


export default function Promise() {
  return (
    <>
      <div className="bg-[#122f2d] h-[full] w-full pt-10 pb-20 relative">
        <div className="bg-[#fce9cc] w-11/12 m-auto rounded-3xl h-[250px] md:h-[500px] md:mt-[70px]">
          <div className="md:pt-[120px]">
            <h1 className="text-5xl md:text-7xl text-center md:text-left font-semibold text-[#0c1f1e] pt-10 pl-10 pr-10 pb-2">
              Our Promise
            </h1>
          </div>
          <div className="pb-10 ">
            <p className="text-[#0c1f1e] mt-2 md:mt-10 text-md md:pl-10 md:pr-10 text-center md:text-left">
              We take great pride in delivering only the highest quality
              solutions tailored to our clients requirements.
            </p>
          </div>

          <div className="md:pt-[50px] pt-[10px] z-10 overflow-hidden">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
