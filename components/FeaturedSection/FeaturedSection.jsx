import React from "react";
import SocialLinks from "./SocialLinks";
import ProjectImages from "./ProjectImages";
import TechStack from "./TechStack";
import Target from "./Target";
import CopyEmail from "./CopyEmail";
import { GlowingEffect } from "../../components/ui/glowing-effect";

export default function FeaturedSection() {
  return (
    <div className="grid grid-cols-6 grid-rows-12 gap-5 w-[85%] p-4 mx-auto">
      <div
        className={`col-start-1 col-end-3 row-start-10 relative row-end-13 text-white overflow-hidden rounded-2xl`}
      >
        <CopyEmail />
      </div>
      <div
        className="col-start-1 relative col-end-3 overflow-hidden row-start-7 rounded-2xl  bg-[#05091e] border border-[#3637499d]
       row-end-10 text-white"
      >
        <Target />
      </div>
      <div
        className={` col-start-1 col-end-4 row-start-1 row-end-7 relative text-white rounded-2xl`}
      >
        <ProjectImages />
      </div>
      <div className="col-start-3 col-end-7 relative row-start-7 rounded-2xl row-end-13 bg-[#05091e] border border-[#3637499d] text-white">
        <div className="relative h-full rounded-2xl p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            blur={0}
            borderWidth={2}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <h1 className="text-2xl font-semibold p-5 mt-16">
            Currently building a <br /> JS Animation library
          </h1>
          <div className="w-[60%] absolute bottom-0 right-0">
            <img src="/b5.svg" className="object-cover" alt="" />
          </div>
        </div>
      </div>
      <div
        className="col-start-4 col-end-7 row-start-4 row-end-7 border-t border-[#363749dc]
       bg-[#04071d] rounded-2xl text-white"
      >
        <div className="relative rounded-2xl">
          <GlowingEffect
            blur={0}
            borderWidth={2}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <TechStack />
        </div>
      </div>
      <div
        className="col-start-4 col-end-7 row-start-1 relative row-end-4 text-white rounded-2xl 
      flex items-end border-t-[1.5px] border-l-[1.5px] border-[#3637497D]"
      >
        <div className=" rounded-2xl">
          <GlowingEffect
            blur={0}
            borderWidth={2}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
