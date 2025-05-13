import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";

export default function Target() {
  return (
    <>
      <div className="relative overflow-hidden h-full">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <h1 className="p-6 text-md font-medium">
          I prioritize creating UML diagrams before coding and ensure <br /> my
          code aligns with <br />{" "}
          <span className="text-blue-500">industry best practices</span>.
        </h1>
        <img src="/grid.svg" className="absolute -top-3 -right-26" alt="" />
        <div className="absolute -top-3 -right-26">
          <img
            src="/target.png"
            className="w-4xl opacity-15 -rotate-[15] scale-x-[-1]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
