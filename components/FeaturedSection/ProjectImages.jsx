import React from "react";

export default function ProjectImages() {
  return (
    <>
      <div
        className="w-full h-full rounded-2xl 
        bg-gradient-to-bl from-[#0C0E2300] to-[#04061b] absolute"
      ></div>
      <div
        className="w-full h-full rounded-2xl 
        bg-gradient-to-bl from-[#0C0E2300] to-[#04061b48] absolute"
      ></div>
      <h1 className="absolute text-2xl font-semibold bottom-8 left-8">
        Code Meets Clarity, <br /> Every Pixel Counts
      </h1>
      <img
        src={"/grp.png"}
        className="w-full object-cover rounded-2xl"
        alt=""
      />
    </>
  );
}
