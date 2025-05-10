import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <>
      <div className="absolute top-25 left-8 z-50 grid grid-cols-3 gap-5">
        <div className="flex items-center justify-center flex-col gap-1.5">
          <a
            href="https://github.com/khh-Niloy"
            target="_blank"
            className="z-50"
          >
            <div
              className="p-3 bg-gradient-to-r from-[#06091f] to-[#06091F]
                      hover:border hover:border-white/20 hover:duration-300 cursor-pointer rounded-xl
                         hover:to-[#06091F] hover:scale-[1.1] duration-300"
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
              className="p-3 bg-gradient-to-r from-[#06091f3b] to-[#06091F]
                      hover:border hover:border-white/20 hover:duration-300 cursor-pointer rounded-xl
                         hover:to-[#06091F] hover:scale-[1.1] duration-300"
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
              className="p-3 bg-gradient-to-r from-[#06091f3b] to-[#06091F]
                      hover:border hover:border-white/20 hover:duration-300 cursor-pointer rounded-xl
                         hover:to-[#06091F] hover:scale-[1.1] duration-300"
            >
              <FaFacebook className="text-2xl" />
            </div>
          </a>
          <h1 className="text-[10px] font-light text-white/85">Facebook</h1>
        </div>
      </div>
      <div className="left-8 top-8 absolute leading-5 z-50">
        <h1 className="text-2xl font-semibold">Let's Link Up 🔗</h1>
        <span className="text-xs text-white/90 font-light">
          Drop a message — I'll get back soon.
        </span>
      </div>
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
    </>
  );
}
