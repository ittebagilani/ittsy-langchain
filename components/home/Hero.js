import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="h-full w-full text-center">
        <div className="bg-[#f3e3bf] from-[#fce9cc] to-[#a58e62]  h-[600px] md:h-[900px] m-auto scroll-smooth ">
          <h1 className="pt-[150px] md:pt-[200px] text-black font-black text-5xl md:text-8xl text-center">
            Ittsy Systems
          </h1>
          <h1 className="pt-[50px] md:pt-[100px] text-black font-md text-2xl md:text-4xl text-center">
            From vision to life,<span className="block md:inline"></span>
          </h1>
          <h1 className="pt-2 text-black font-bold text-2xl md:text-4xl text-center">
            one idea at a time.
          </h1>
          <div className="pt-[100px] text-[#363232]">
            <FaArrowDown className="text-3xl text-center m-auto animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
}
