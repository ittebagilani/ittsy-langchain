import { FaArrowDown } from "react-icons/fa";


export default function Hero() {
  return (
    <>
      <div className="h-full w-full text-center">
        <div className="bg-[#f3e3bf] from-[#fce9cc] to-[#a58e62]  h-[600px] md:h-[900px] m-auto scroll-smooth ">
          <h1 className="pt-[250px] md:pt-[300px] text-black bg-clip-text bg-gradient-to-r from-[#2c4f76] to-[#112720] font-black text-4xl md:text-7xl text-center">
            From vision to life,<span className="block md:inline"></span>
          </h1>
          <h1 className="pt-2 text-black bg-clip-text bg-gradient-to-r from-[#2c4f76] leading-9 to-[#112720] font-black text-4xl md:text-7xl text-center">
            one idea at a time.
          </h1>
          <div className="pt-[100px] text-[#363232]">
            <FaArrowDown className="text-3xl text-center m-auto animate-bounce"/>
          </div>
        </div>
      </div>
    </>
  );
}
