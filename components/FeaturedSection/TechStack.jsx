import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";

export default function TechStack() {
  return (
    <>
      <div className="px-8 py-5">
        <h1 className="text-lg font-semibold">My Tech Stack</h1>
        <div className="flex gap-3 mt-3 -translate-x-2">
          <div className=" flex flex-col items-center justify-center w-12">
            <FaReact className="text-[1.6rem] text-[#58C4DC] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              React
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center w-12">
            <SiTailwindcss className="text-[1.6rem] text-[#00BCFF] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              Tailwind
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center w-12">
            <BiLogoMongodb className="text-[1.6rem] text-[#27FF82] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              MongoDB
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center w-12">
            <SiExpress className="text-[1.6rem] text-[white] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              Express.js
            </span>
          </div>
        </div>
      </div>
      <div
        className="px-8 flex items-center justify-start gap-7 border-[0.1px] border-emerald-500/75
       bg-emerald-500/10 py-2 rounded-2xl "
      >
        <h1 className="text-lg font-semibold text-emerald-500">
          Currently learning
        </h1>
        <div className="flex gap-5">
          <div className=" flex flex-col items-center justify-center w-12">
            <RiNextjsFill className="text-[1.6rem] text-[white] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              Next.js
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center w-12">
            <BiLogoTypescript className="text-[1.6rem] text-[#3178C6] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              TypeScript
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center w-12">
            <BiLogoPostgresql className="text-[1.6rem] text-[#336791] " />
            <span className="text-[10px] mt-1.5 text-white/90 font-light  ">
              PostgreSQL
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
