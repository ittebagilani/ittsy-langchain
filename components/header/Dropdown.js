'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Dropdown = ({ name, dropdownItems }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (url) => {
    if (pathname === url) {
      // If the current URL is the same as the target URL, reload the page
      router.replace(url);
      setOpen(false); // Close the dropdown menu
    } else {
      router.push(url);
    }
  };

  useEffect(() => {
    setOpen(false); // Close the dropdown when the pathname changes
  }, [pathname]);

  return (
    <div className="dropdown dropdown-hover" onMouseLeave={() => setOpen(false)}>
      <label tabIndex={0} className="" onClick={() => setOpen(!open)}>
        {name}
      </label>
      <ul
        className={`dropdown-content z-20 menu p-2 shadow bg-black rounded-box w-52 ${
          open ? "block" : "hidden"
        }`}
      >
        {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url} onClick={() => handleLinkClick(url)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
