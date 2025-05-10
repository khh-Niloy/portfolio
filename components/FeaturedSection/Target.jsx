import React from "react";

export default function Target() {
  return (
    <>
      <h1 className="p-6 text-md font-medium">
        I prioritize creating UML diagrams before coding and ensure <br /> my
        code aligns with <br />{" "}
        <span className="text-blue-500">industry best practices</span>.
      </h1>
      <img src="/grid.svg" className="w-4xl absolute -top-3 -right-26" alt="" />
      <div className="absolute -top-3 -right-26">
        <img
          src="/target.png"
          className="w-4xl opacity-15 -rotate-[15] scale-x-[-1]"
          alt=""
        />
      </div>
    </>
  );
}
