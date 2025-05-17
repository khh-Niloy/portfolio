import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowUpRight } from "lucide-react";
import BannerTiltImage from "./BannerTiltImage/BannerTiltImage";

export default function Banner() {
  return (
    <>
      <div className="w-full py-20 text-center">
        <div className="flex text-center items-center w-[56%] gap-12 mx-auto">
          <div className="w-[39%]">
            <BannerTiltImage />
          </div>
          <div className="w-[61%] flex flex-col items-start">
            <TextGenerateEffect
              // Obsessed with the Why |br| Committed to the How
              words="Obsessed with the 'Why', |br| Committed to the 'How'"
              speed={50}
              delay={500}
            />
            <h1 className="text-[#ebf0fbf9] mt-5 text-left text-[14px] font-light">
              Hi! I'm Niloy, a developer focused on writing clean, efficient,
              and maintainable code that follows best practices.
            </h1>
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
        </div>
      </div>
    </>
  );
}
