import React from "react";
import SocialLinks from "./SocialLinks";
import ProjectImages from "./ProjectImages";
import Education from "./Education";
import Target from "./Target";
import CopyEmail from "./CopyEmail";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import TechStack from "./TechStack/TechStack";

export default function FeaturedSection() {
  return (
    <div
      className="grid xl:grid-cols-12 xl:grid-rows-12 lg:grid-cols-12 lg:grid-rows-10
   w-full p-4 mx-auto gap-5"
    >
      <div
        className="bg-[url(/bg.png)] xl:col-span-4 xl:row-span-3 xl:row-start-10
        lg:col-span-6 lg:row-span-2 lg:col-start-7 lg:row-start-5
      relative text-white overflow-hidden rounded-2xl border border-[#3637499d] lg:h-full h-36"
      >
        <CopyEmail />
      </div>
      <div
        className="xl:col-span-4 xl:row-span-3 xl:col-start-1 xl:row-start-7
        lg:col-span-6 lg:row-span-2 lg:row-start-5
      overflow-hidden rounded-2xl bg-[#05091e] border border-[#3637499d] xl:row-end-10
       text-white"
      >
        <Target />
      </div>
      <div
        className="xl:col-span-6 xl:row-span-6 lg:col-span-6 lg:row-span-4 relative
       text-white rounded-2xl overflow-hidden"
      >
        <ProjectImages />
      </div>
      <div
        className="xl:col-span-8 xl:row-span-6 xl:col-start-5 xl:row-start-7
        lg:col-span-12 lg:row-span-4 lg:row-start-7 rounded-2xl bg-[#05091e] border
         border-[#3637499d] text-white"
      >
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
          <TechStack />
        </div>
      </div>
      <div
        className="xl:col-span-6 xl:row-span-3 xl:col-start-7 xl:row-start-4
        lg:col-span-6 lg:row-span-2 lg:col-start-7 lg:row-start-3
      border-t border-[#363749dc] bg-[#04071d] rounded-2xl text-white"
      >
        <div className="relative rounded-2xl h-full">
          <GlowingEffect
            blur={0}
            borderWidth={2}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <Education />
        </div>
      </div>
      <div
        className="xl:col-span-6 xl:row-span-3 xl:col-start-7
        lg:col-span-6 lg:row-span-2 lg:col-start-7 
      text-white rounded-2xl flex flex-col py-3 relative border-t-[1.5px] border-l-[1.5px] border-[#3637497D]"
      >
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
  );
}
