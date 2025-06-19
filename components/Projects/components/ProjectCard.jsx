import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ProjectCard({
  image,
  projectName,
  shortDes,
  iconArr,
  liveSite,
  isRunning,
}) {
  return (
    <div
      className={`w-full bg-gradient-to-br from-[#04071D] to-[#0C0E23]
             border border-[#3637497D] rounded-xl ${
               isRunning ? "p-0" : "p-5"
             } relative`}
    >
      {isRunning && (
        <div className="absolute z-50 text-center w-full lg:top-1/2 top-[40%]">
          <h1 className="text-sm font-medium leading-6">
            Currently working on a project using Next.js, TypeScript, <br />{" "}
            Express, and Mongoose with integrated AI features.
          </h1>
        </div>
      )}
      <div
        className={`bg-[#13162d] rounded-xl relative overflow-hidden sm:h-52 h-40 mb-6 ${
          isRunning ? "blur-sm opacity-60" : ""
        }`}
      >
        <img src="/projectDivImage.png" alt="" className="w-full" />
        <img
          src={`/${image}`}
          alt={image}
          className="absolute xl:top-8 lg:top-20 top-8 sm:w-[90%] w-full rotate-2 sm:left-6 rounded-xl"
        />
      </div>
      <div className={`${isRunning ? "blur-sm opacity-60" : ""}`}>
        <h1 className="text-xl font-semibold">{projectName}</h1>
        <p className="text-[#BEC1DD] text-xs mt-2 font-light">{shortDes}</p>

        <div className="flex sm:flex-row flex-col items-start sm:gap-0 gap-3 justify-between sm:items-center mt-4">
          <div className="flex">
            {iconArr.map((icon) => (
              <div className="p-2 rounded-full border border-[#66699C6E] bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.0)_4%,_rgba(255,255,255,0.07)_100%)]">
                {icon}
              </div>
            ))}
          </div>

          <div>
            {isRunning === false && (
              <a
                href={liveSite}
                target="_blank"
                className="hover:underline decoration-[#CBACF9]"
              >
                <h1 className="text-[#CBACF9] text-sm flex items-center">
                  Check Live Site <ArrowUpRight />
                </h1>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
