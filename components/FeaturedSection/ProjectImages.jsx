import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";

export default function ProjectImages() {
  return (
    <>
      <div
        className="w-full h-full rounded-2xl 
        bg-gradient-to-bl from-[#0C0E2300] to-[#04061b] absolute z-50"
      ></div>
      <GlowingEffect
        blur={0}
        borderWidth={2}
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div
        className="w-full h-full rounded-2xl 
        bg-gradient-to-bl from-[#0C0E2300] to-[#04061b48] absolute z-50"
      ></div>
      <h1 className="absolute text-2xl font-semibold bottom-8 left-8 z-50">
        Code Meets Clarity, <br /> Every Pixel Counts
      </h1>
      <img
        src={"/grp.png"}
        className="w-full object-cover rounded-2xl xl:scale-105 lg:scale-[1.24] xl:translate-y-0 lg:translate-y-7 lg:-translate-x-2 xl:-translate-x-0"
        alt=""
      />
    </>
  );
}
