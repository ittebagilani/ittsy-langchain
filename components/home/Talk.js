import Link from "next/link";


export default function Talk() {
  return (
    <>
      <div className="bg-[#faecd8] h-full w-full">
        <div>
          <h1 className="text-center font-black text-[#090a0a] text-5xl md:text-7xl pt-[50px] md:pt-[100px]">
            Which solution is right for you?
          </h1>
        </div>
        <div>
          <h1 className="text-center text-[#1a4131] mt-10 text-xl pl-2 pr-2 md:pl-[200px] md:pr-[200px]">
            We take your ideas and transform them into pathways that pave the
            way for the expansion of your business.
          </h1>
        </div>
        <div className="flex flex-row pb-20">
          <Link href="/contact" className="m-auto">
            <button className="btn hover:bg-transparent hover:text-black rounded-full text-white m-auto pt-2 pb-2 pl-4 pr-4 text-center flex mt-10 font-extralight text-base">
              Talk to Team
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
