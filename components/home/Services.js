import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="bg-[#0c1f1e] h-full w-full">
        <div className="w-full">
          <h1 className="text-4xl leading-10 md:text-7xl text-center font-bold text-[#b0a58b] p-10">
            Leverage Ittsy to grow your business.
          </h1>
        </div>

        {/* Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center pt-10 pl-10 pr-10 m-auto pb-20">
          <Link href="/services/#ai" className="w-5/6 h-full m-auto">
            <div className="card w-full bg-[#fce9cc] shadow-xl m-auto text-black">
              <div className="card-body">
                <h2 className="card-title m-auto">AI & Gen AI</h2>
                <p>
                  Customized Artificial Business Intelligence and machine
                  learning solutions.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/services/#architecture" className="w-5/6 h-full m-auto">
            <div className="card w-full bg-[#fce9cc] shadow-xl m-auto text-black">
              <div className="card-body">
                <h2 className="card-title m-auto">Solution Architecture</h2>
                <p>
                  Build a solution that meet your design
                  requirements, secure and scalable enough to meet the evolving
                  needs.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/#saas" className="w-5/6 h-full m-auto">
            <div className="card w-full bg-[#fce9cc] shadow-xl m-auto text-black">
              <div className="card-body">
                <h2 className="card-title m-auto">SaaS</h2>
                <p>
                  Utilize the power of internet to unleash your software for the
                  whole world to use.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/services/#data" className="w-5/6 h-full m-auto">
            <div className="card w-full bg-[#fce9cc] shadow-xl m-auto text-black">
              <div className="card-body">
                <h2 className="card-title m-auto">Data/API Integration</h2>
                <p>
                  No matter the source of your data, we can seamlessly integrate
                  it anywhere.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </>
  );
}
