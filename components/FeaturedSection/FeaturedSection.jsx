import React from "react";
import SocialLinks from "./SocialLinks";
import ProjectImages from "./ProjectImages";
import TechStack from "./TechStack";
import Target from "./Target";

export default function FeaturedSection() {
  return (
    <div className="grid grid-cols-6 grid-rows-12 gap-5 w-[85%] p-4 mx-auto">
      <div
        className={` col-start-1 col-end-3 row-start-10 row-end-13 text-white p-4`}
      >
        Div 1
      </div>
      <div
        className="col-start-1 relative col-end-3 overflow-hidden row-start-7 rounded-2xl bg-[#05091e] border border-[#3637499d]
       row-end-10 text-white"
      >
        <Target />
      </div>
      <div
        className={` col-start-1 col-end-4 row-start-1 row-end-7 relative text-white rounded-2xl`}
      >
        <ProjectImages />
      </div>
      <div className="col-start-3 col-end-7 row-start-7 row-end-13 bg-gray-800 text-white p-4">
        Div 4
      </div>
      <div
        className="col-start-4 col-end-7 row-start-4 row-end-7 border-t border-[#363749dc]
       bg-[#04071d] rounded-2xl text-white"
      >
        <TechStack />
      </div>
      <div
        className="col-start-4 col-end-7 row-start-1 relative row-end-4 text-white rounded-2xl 
      flex items-end border-t-[1.5px] border-l-[1.5px] border-[#3637497D]"
      >
        <SocialLinks />
      </div>
    </div>
  );
}
