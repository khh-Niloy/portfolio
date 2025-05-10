import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function FeaturedSection() {
  return (
    <div className="grid grid-cols-6 grid-rows-12 gap-5 w-[85%] p-4 mx-auto">
      <div
        className={` col-start-1 col-end-3 row-start-10 row-end-13 text-white p-4`}
      >
        Div 1
      </div>
      <div className="col-start-1 col-end-3 row-start-7 row-end-10 bg-gray-800 text-white p-4">
        Div 2
      </div>
      <div
        className={` col-start-1 col-end-4 row-start-1 row-end-7 relative text-white rounded-2xl`}
      >
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
      </div>
      <div className="col-start-3 col-end-7 row-start-7 row-end-13 bg-gray-800 text-white p-4">
        Div 4
      </div>
      <div className="col-start-4 col-end-7 row-start-4 row-end-7 bg-gray-800 text-white p-4">
        Div 5
      </div>
      <div
        className="col-start-4 col-end-7 row-start-1 relative row-end-4 text-white rounded-2xl 
      flex items-end border-t-[1.5px] border-l-[1.5px] border-[#3637497D]"
      >
        <div className="absolute top-22 left-8 z-50 grid grid-cols-3 gap-7">
          <div className="flex items-center justify-center flex-col gap-1.5">
            <a
              href="https://github.com/khh-Niloy"
              target="_blank"
              className="z-50"
            >
              <div
                className="p-3 bg-gradient-to-r from-[#161A31] to-[#06091F]
              hover:bg-gradient-to-r hover:from-[#22284a] cursor-pointer rounded-xl
                 hover:to-[#06091F] border-t border-l border-[#6971A266]"
              >
                <FaGithub className="text-2xl" />
              </div>
            </a>
            <h1 className="text-[10px] font-light text-white/85">Github</h1>
          </div>

          <div className="flex items-center justify-center flex-col gap-1.5">
            <a
              href="https://www.linkedin.com/in/hasibhossain-niloy01/"
              target="_blank"
              className="z-50"
            >
              <div
                className="p-3 bg-gradient-to-r from-[#161A31] to-[#06091F]
              hover:bg-gradient-to-r hover:from-[#22284a] cursor-pointer rounded-xl
                 hover:to-[#06091F] border-t border-l border-[#6971A266]"
              >
                <FaLinkedin className="text-2xl" />
              </div>
            </a>
            <h1 className="text-[10px] font-light text-white/85">Linkedin</h1>
          </div>

          <div className="flex items-center justify-center flex-col gap-1.5">
            <a
              href="https://www.facebook.com/khhniloy.niloy/"
              target="_blank"
              className="z-50"
            >
              <div
                className="p-3 bg-gradient-to-r from-[#161A31] to-[#06091F]
              hover:bg-gradient-to-r hover:from-[#22284a] cursor-pointer rounded-xl
                 hover:to-[#06091F] border-t border-l border-[#6971A266]"
              >
                <FaFacebook className="text-2xl" />
              </div>
            </a>
            <h1 className="text-[10px] font-light text-white/85">Facebook</h1>
          </div>
        </div>
        <h1 className="absolute text-2xl font-semibold left-8 top-8">
          Let's Link Up
        </h1>
        <img
          src={"/network.png"}
          className="w-full object-cover rounded-2xl"
          alt=""
        />
        <img
          src={"/netwrobg-Photoroom2.png"}
          className="absolute bottom-0 w-full opacity-20 rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
}
