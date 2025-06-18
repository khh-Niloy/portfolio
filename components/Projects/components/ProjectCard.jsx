import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ProjectCard({
  image,
  projectName,
  shortDes,
  iconArr,
  liveSite,
}) {
  return (
    <div
      className="w-full bg-gradient-to-br from-[#04071D] to-[#0C0E23]
             border border-[#3637497D] rounded-xl p-5"
    >
      <div className="bg-[#13162d] rounded-xl relative overflow-hidden h-52 mb-6">
        <img src="/projectDivImage.png" alt="" className="w-full" />
        <img
          src={`/${image}`}
          alt={image}
          className="absolute top-8 w-[90%] rotate-2 left-6 rounded-xl"
        />
      </div>
      <h1 className="text-xl font-semibold">{projectName}</h1>
      <p className="text-[#BEC1DD] text-xs mt-2 font-light">{shortDes}</p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex">
          {iconArr.map((icon) => (
            <div className="p-2 rounded-full border border-[#66699C6E]">
              {icon}
            </div>
          ))}
        </div>

        <div>
          <a
            href={liveSite}
            target="_blank"
            className="hover:underline decoration-[#CBACF9]"
          >
            <h1 className="text-[#CBACF9] text-sm flex items-center">
              Check Live Site <ArrowUpRight />
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
