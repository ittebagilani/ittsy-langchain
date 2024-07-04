'use client';

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="m-auto text-2xl pl-20">
              <div className="rounded-full m-auto w-[200px] text-center">Auditable</div>
            </li>

            <li className="m-auto text-2xl pl-20">
              <div className="rounded-full m-auto w-[200px] text-center">Ethical</div>
            </li>
            <li className="m-auto text-2xl pl-20">
              <div className="rounded-full m-auto w-[200px] text-center">Sustainable</div>
            </li>
            <li className="m-auto text-2xl pl-20">
              <div className="rounded-full m-auto w-[200px] text-center">Reliable</div>
            </li>
            <li className="m-auto text-2xl pl-20">
              <div className="rounded-full m-auto w-[200px] text-center">Efficient</div>
            </li>
              <li className="m-auto text-2xl pl-20">
              <div className="rounded-full m-auto w-[200px] text-center">Transparent</div>
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
