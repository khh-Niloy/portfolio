import React from "react";
import ProjectCard from "./components/ProjectCard";
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

export default function Projects() {
  const project4IconArr = [
    <FaReact className="text-[#58C4DC]" />,
    <SiTailwindcss className="text-[#00BCFF]" />,
    <SiReactrouter className="text-[white]" />,
    <SiExpress className="text-[white]" />,
    <BiLogoMongodb className="text-[#27FF82]" />,
    <IoLogoFirebase className="text-[#FFC400]" />,
  ];
  const project3IconArr = [
    <FaReact className="text-[#58C4DC]" />,
    <SiTailwindcss className="text-[#00BCFF]" />,
    <SiReactrouter className="text-[white]" />,
    <SiExpress className="text-[white]" />,
    <BiLogoMongodb className="text-[#27FF82]" />,
    <IoLogoFirebase className="text-[#FFC400]" />,
    <SiJsonwebtokens className="text-[white]" />,
  ];
  const project2IconArr = [
    <FaReact className="text-[#58C4DC]" />,
    <SiTailwindcss className="text-[#00BCFF]" />,
    <SiReactrouter className="text-[white]" />,
    <SiExpress className="text-[white]" />,
    <BiLogoMongodb className="text-[#27FF82]" />,
    <IoLogoFirebase className="text-[#FFC400]" />,
    <SiJsonwebtokens className="text-[white]" />,
  ];
  const project1IconArr = [
    <FaReact className="text-[#58C4DC]" />,
    <SiTailwindcss className="text-[#00BCFF]" />,
    <SiReactrouter className="text-[white]" />,
    <SiExpress className="text-[white]" />,
    <BiLogoMongodb className="text-[#27FF82]" />,
    <IoLogoFirebase className="text-[#FFC400]" />,
    <SiJsonwebtokens className="text-[white]" />,
  ];

  return (
    <div className="text-white pt-32 pb-20">
      <h1 className="text-4xl text-center font-semibold">
        A showcase of projects I have built <br />{" "}
        <span className="text-[#CBACF9]">using modern technologies.</span>
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-16">
        <ProjectCard
          image={"ai.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={project1IconArr}
          liveSite={"https://madchef-1487d.web.app/"}
          isRunning={true}
        />
        <ProjectCard
          image={"FastPathao.png"}
          projectName={"FastPathao - Efficient Parcel Management"}
          shortDes={
            "FastPathao is a parcel management system with role-based dashboards (users, admins, and delivery man). It enables parcel creation, tracking, and delivery updates."
          }
          iconArr={project2IconArr}
          liveSite={"https://parceltracker-7e596.web.app/"}
          isRunning={false}
        />
        <ProjectCard
          image={"madchef.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={project3IconArr}
          liveSite={"https://madchef-1487d.web.app/"}
          isRunning={false}
        />
        <ProjectCard
          image={"EquiSports.png"}
          projectName={"EquiSports - Redefining Sports Management"}
          shortDes={
            "EquiSports offers a seamless, secure shopping experience for sports gear with real-time updates, authentication, and responsive design."
          }
          iconArr={project4IconArr}
          liveSite={"https://equisports-1c3a0.web.app/"}
          isRunning={false}
        />
      </div>
    </div>
  );
}
