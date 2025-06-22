"use client";
import React from "react";
import { AnimatedTooltip } from "../../ui/animated-tooltip";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { GoArrowRight } from "react-icons/go";

export default function ProjectIconHoverEffect({ iconArr }) {
  let people = [];

  if (iconArr === 1 || iconArr === 2 || iconArr === 3) {
    people = [
      {
        id: 1,
        name: "React",
        image: <FaReact className="text-[#58C4DC]" />,
      },
      {
        id: 2,
        name: "Tailwind CSS",
        image: <SiTailwindcss className="text-[#00BCFF]" />,
      },
      {
        id: 3,
        name: "React Router",
        image: <SiReactrouter className="text-white" />,
      },
      {
        id: 4,
        name: "Express.js",
        image: <SiExpress className="text-white" />,
      },
      {
        id: 5,
        name: "MongoDB",
        image: <BiLogoMongodb className="text-[#27FF82]" />,
      },
      {
        id: 6,
        name: "Firebase",
        image: <IoLogoFirebase className="text-[#FFC400]" />,
      },
      {
        id: 7,
        name: "JWT",
        image: <SiJsonwebtokens className="text-white" />,
      },
    ];
  } else if (iconArr === 4) {
    people = [
      {
        id: 1,
        name: "React",
        image: <FaReact className="text-[#58C4DC]" />,
      },
      {
        id: 2,
        name: "Tailwind CSS",
        image: <SiTailwindcss className="text-[#00BCFF]" />,
      },
      {
        id: 3,
        name: "React Router",
        image: <SiReactrouter className="text-white" />,
      },
      {
        id: 4,
        name: "Express.js",
        image: <SiExpress className="text-white" />,
      },
      {
        id: 5,
        name: "MongoDB",
        image: <BiLogoMongodb className="text-[#27FF82]" />,
      },
      {
        id: 6,
        name: "Firebase",
        image: <IoLogoFirebase className="text-[#FFC400]" />,
      },
    ];
  }

  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
