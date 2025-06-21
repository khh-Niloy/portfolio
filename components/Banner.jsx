import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowUpRight } from "lucide-react";
import BannerTiltImage from "./BannerTiltImage/BannerTiltImage";
// import { Link as ScrollLink } from "react-scroll";
import ScrollButton from "./BannerCompo/ScrollButton";

export default function Banner() {
  return (
    <>
      <div className="w-full py-20 text-center">
        <div
          className="flex lg:flex-row md:flex-row flex-col text-center items-center lg:w-[75%] xl:w-[56%] sm:w-[90%] w-[85%] gap-12 mx-auto 
        "
        >
          <div className="xl:w-[39%] lg:w-[35%] md:w-[65%] sm:w-[46%] w-[67%] ">
            <BannerTiltImage />
          </div>
          <div className="xl:w-[61%] lg:w-[65%] w-full flex flex-col items-start">
            <TextGenerateEffect
              words="Obsessed with the 'Why', |br| Committed to the 'How'"
              speed={50}
              delay={500}
            />
            <h1 className="text-[#ebf0fbf9] mt-5 text-left text-[14px] font-light">
              Hi! I'm Niloy, a developer focused on writing clean, efficient,
              and maintainable code that follows best practices.
            </h1>
            <div className="flex gap-3 items-center">
              <ScrollButton />

              <a
                href="https://drive.google.com/file/d/1tLjS4wrb4EkijVjYMIUV0FIiA6JE4tAo/view?usp=sharing"
                target="_blank"
              >
                <button
                  className={`mt-5 rounded-xl py-3 px-6 bg-gradient-to-r from-[#161A31] to-[#06091F] 
                font-light border-t border-l border-[#6971A266] text-white text-[14px] hover:bg-gradient-to-r
                 hover:from-[#22284a]
                 hover:to-[#06091F] hover:duration-300 hover:transition-all  transition-transform duration-500 
                hover:scale-[1.02] cursor-pointer group`}
                >
                  <div className="flex justify-center items-center gap-2">
                    Resume
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
