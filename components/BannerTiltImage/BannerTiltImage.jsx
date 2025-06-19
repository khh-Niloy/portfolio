"use client";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function BannerTiltImage() {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });

      // Change glare color after init
      const glareElement = tiltRef.current.querySelector(
        ".js-tilt-glare-inner"
      );
      if (glareElement) {
        glareElement.style.background = "rgba(255, 0, 0, 0.3)"; // red
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={tiltRef}
        className="lg:mt-3 flex flex-col border-[10px] border-[#000319] items-center justify-center mx-auto rounded-full hover:shadow-2xl duration-500 relative overflow-hidden"
      >
        <div className="overflow-hidden border-[10px] border-[black]/30 w-full rounded-full h-[23rem]">
          <img
            className="hover:scale-[1.9] -translate-y-8 duration-300 scale-[1.7] translate-x-[0.7rem] w-full object-cover h-[23rem] rounded-full"
            src="/myimage.jpg"
            alt=""
          />
        </div>
        <div className="bg-gradient-to-t from-[#000000e6] to-[#00000000] rounded-full duration-300 mt-64 absolute w-full h-full flex"></div>
        <div className="bg-gradient-to-t from-[#000000e6] to-[#00000000] rounded-full duration-300 mt-64 absolute w-full h-full flex"></div>
        <div className="bg-gradient-to-t from-[#000000e6] to-[#00000000] rounded-full duration-300 mt-64 absolute w-full h-full flex"></div>
      </div>
    </div>
  );
}
