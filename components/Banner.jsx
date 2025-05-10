import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowUpRight } from "lucide-react";

export default function Banner() {
  return (
    <>
      <div className="w-full py-20 text-center">
        <div className="flex flex-col text-center">
          <div className="flex items-center justify-center hidden">
            <img
              src="/git.jpg"
              className="w-26 h-26 mb-5 rounded-full"
              alt=""
            />
          </div>
          <TextGenerateEffect
            words="Transforming Concepts into |br| Seamless User Experiences"
            speed={50}
            delay={500}
          />
          <h1 className="text-[#E4ECFF] mt-5">
            Hi! I'm Niloy, a Next.js Developer based in Croatia.
          </h1>
        </div>
        <button
          className={`mt-5 rounded-xl py-3 px-6 bg-gradient-to-r from-[#161A31] to-[#06091F] 
            font-light border-t border-l border-[#6971A266] text-white text-[14px] hover:bg-gradient-to-r
             hover:from-[#22284a]
             hover:to-[#06091F] hover:duration-300 hover:transition-all  transition-transform duration-500 
            hover:scale-[1.02] cursor-pointer group`}
        >
          <div className="flex justify-center items-center gap-1">
            See my work{" "}
            <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform duration-500" />
          </div>
        </button>
      </div>
    </>
  );
}
