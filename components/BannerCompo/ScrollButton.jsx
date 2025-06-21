"use client"; // This file must be client to access DOM APIs

import { ArrowUpRight } from "lucide-react";

export default function ScrollButton() {
  function scrollToTech() {
    const el = document.getElementById("tech");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTech}
      className="mt-5 rounded-xl py-3 px-6 bg-gradient-to-r from-[#161A31] to-[#06091F]
        font-light border-t border-l border-[#6971A266] text-white text-[14px] hover:bg-gradient-to-r
        hover:from-[#22284a] hover:to-[#06091F] hover:duration-300 hover:transition-all
        transition-transform duration-500 hover:scale-[1.02] cursor-pointer group"
    >
      <div className="flex justify-center items-center gap-1">
        See my work{" "}
        <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform duration-500" />
      </div>
    </button>
  );
}
