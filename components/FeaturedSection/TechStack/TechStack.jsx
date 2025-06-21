import React from "react";
import TechName from "./components/TechName";
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

export default function TechStack() {
  const languageArray = [
    {
      techName: "Javascript",
      techNameIcon: <IoLogoJavascript className="text-[#F3E224]" />,
      color: "#F3E224",
    },
    {
      techName: "Typescript",
      techNameIcon: <BiLogoTypescript className="text-[#0076C6] text-md" />,
      color: "#00D26A",
      isLearning: true,
    },
  ];

  const LibrariesandFrameworksArray = [
    {
      techName: "Reactjs",
      techNameIcon: <FaReact className="text-[#58C4DC]" />,
      color: "#58C4DC",
    },
    {
      techName: "React Router Dom",
      techNameIcon: <SiReactrouter className="text-[white]" />,
      color: "white",
    },
    {
      techName: "Nextjs",
      techNameIcon: <RiNextjsFill />,
      color: "#00D26A",
      isLearning: true,
    },
    {
      techName: "Tailwindcss",
      techNameIcon: <SiTailwindcss className="text-[#00BCFF]" />,
      color: "#00BCFF",
    },
    {
      techName: "Shadcn",
      techNameIcon: <SiShadcnui className="text-[white]" />,
      color: "white",
    },
  ];

  const BackendArray = [
    {
      techName: "Nodejs",
      techNameIcon: <FaNodeJs className="text-[#58A149]" />,
      color: "#58A149",
    },
    {
      techName: "Expressjs",
      techNameIcon: <SiExpress className="text-[white]" />,
      color: "#00D26A",
      isLearning: true,
    },
  ];

  const DB = [
    {
      techName: "MongoDB",
      techNameIcon: <BiLogoMongodb className="text-[#27FF82]" />,
      color: "#00D26A",
      isLearning: true,
    },
    {
      techName: "Mongoose",
      techNameIcon: <SiMongoose className="text-[#880000]" />,
      color: "#00D26A",
      isLearning: true,
    },
  ];

  const ToolsServicesArray = [
    {
      techName: "Git",
      techNameIcon: <FaGitAlt className="text-[#F05133]" />,
      color: "#F05133",
    },
    {
      techName: "Postman",
      techNameIcon: <SiPostman className="text-[#FF6C37]" />,
      color: "#FF6C37",
    },
    {
      techName: "JWT",
      techNameIcon: <SiJsonwebtokens className="text-[white]" />,
      color: "white",
    },
    {
      techName: "Firebase",
      techNameIcon: <IoLogoFirebase className="text-[#FFC400]" />,
      color: "#FFC400",
    },
    {
      techName: "Vite",
      techNameIcon: <SiVite className="text-[white]" />,
      color: "white",
    },
  ];

  return (
    <div className="px-5 pb-5 pt-3">
      <div className="flex lg:flex-row flex-col justify-between">
        <h1 className="text-2xl font-semibold mb-4">Skills</h1>
        <div className="text-sm flex items-center md:mb-0 mb-8">
          🟢 <GoArrowRight />{" "}
          <span className="ml-1.5">Currently working with and building</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 xl:mt-0 lg:mt-2">
        <div className="lg:hidden xl:block">
          <TechName
            headTitle={"Languages"}
            techArray={languageArray}
            give={2}
          />
        </div>

        <div className="lg:flex lg:flex-row flex-col gap-10 xl:hidden hidden">
          <TechName
            headTitle={"Languages"}
            techArray={languageArray}
            give={2}
          />
          <TechName headTitle={"Backend"} techArray={BackendArray} give={2} />
          <TechName headTitle={"Database and ODM"} techArray={DB} give={2} />
        </div>

        <TechName
          headTitle={"Libraries and Frameworks"}
          techArray={LibrariesandFrameworksArray}
          forMobile={true}
        />

        <div className="flex xl:flex-row gap-10 xl:flex lg:hidden">
          <TechName headTitle={"Backend"} techArray={BackendArray} />
          <TechName headTitle={"Database"} techArray={DB} />
        </div>

        <TechName
          headTitle={"Tools & Services"}
          techArray={ToolsServicesArray}
          forMobile={true}
        />
      </div>
    </div>
  );
}
