"use client";

import React, { useState } from "react";
// import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Dropdown from "./Dropdown";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const menu = [
    { name: "Services", url: "/services" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const router = useRouter();

  const navigateTo = (url) => {
    router.push(url);
  };

  return (
    <>
      <nav className="w-screen bg-[#0c1f1e] shadow z-20 fixed h-20 pr-[5%] pl-[5%] pt-1 md:pt-0">
        <div className="justify-between px-10 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-2 md:block">
              <button onClick={() => navigateTo("/")}>
                <div className="avatar">
                  <div className="w-16 rounded-lg">
                    <Image
                      src="/Logo2.png"
                      width={50}
                      height={50}
                      alt="Ittsy Logo"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </button>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RxCross1 className="text-[#e7d5be]" />
                  ) : (
                    <AiOutlineMenu className="text-[#e7d5be]" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 bg-[#fff] text-center pt-2 pb-2 rounded-lg md:bg-transparent">
                {menu.map(({ name, url, dropdown }, index) => (
                  <li key={index} className="text-black md:text-[#e7d5be] z-20">
                    {dropdown ? (
                      <Dropdown name={name} dropdownItems={dropdown} />
                    ) : (
                      <button onClick={() => navigateTo(url)}>{name}</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
