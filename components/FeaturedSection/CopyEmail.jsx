import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { Copy } from "lucide-react";

export default function CopyEmail() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute top-0 h-full w-full rounded-2xl bg-black/30 z-50"></div>
        <div className="absolute z-50 inset-0 flex items-center -bottom-10 justify-center h-full text-white font-semibold px-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="">
              Do you want to start <br /> a project together?
            </h1>
            <button className="mt-2 flex items-center gap-2 text-[10px] font-light bg-gradient-to-r from-[#161A31] to-[#06091fb8] px-3 py-2 rounded-md cursor-pointer">
              <Copy strokeWidth={1} size={13} />{" "}
              <span>Copy my email address</span>
            </button>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
