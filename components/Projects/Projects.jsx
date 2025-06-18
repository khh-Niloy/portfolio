import React from "react";
import { FaReact } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  const project1IconArr = [<FaReact />, <FaReact />, <FaReact />];

  return (
    <div className="text-white pt-32 pb-20">
      <h1 className="text-4xl text-center font-semibold">
        A showcase of projects I have built <br />{" "}
        <span className="text-[#CBACF9]">using modern technologies.</span>
      </h1>

      <div className="grid grid-cols-2 gap-5 mt-16">
        <ProjectCard
          image={"madchef.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={project1IconArr}
          liveSite={"https://madchef-1487d.web.app/"}
        />
        <ProjectCard
          image={"madchef.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={project1IconArr}
          liveSite={"https://madchef-1487d.web.app/"}
        />
        <ProjectCard
          image={"madchef.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={project1IconArr}
          liveSite={"https://madchef-1487d.web.app/"}
        />
        <ProjectCard
          image={"madchef.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={project1IconArr}
          liveSite={"https://madchef-1487d.web.app/"}
        />
      </div>
    </div>
  );
}
