import React from "react";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <div className="text-white pt-32 pb-20">
      <h1 id="tech" className="text-4xl text-center font-semibold">
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
          iconArr={1}
          liveSite={"https://madchef-1487d.web.app/"}
          isRunning={true}
        />
        <ProjectCard
          image={"FastPathao.png"}
          projectName={"FastPathao - Efficient Parcel Management"}
          shortDes={
            "FastPathao is a parcel management system with role-based dashboards (users, admins, and delivery man). It enables parcel creation, tracking, and delivery updates."
          }
          iconArr={2}
          liveSite={"https://parceltracker-7e596.web.app/"}
          isRunning={false}
        />
        <ProjectCard
          image={"madchef.png"}
          projectName={"MadChef - Restaurant Management App"}
          shortDes={
            "A platform to enhance customer experience and streamline restaurant operations. Designed for smoother service and better management."
          }
          iconArr={3}
          liveSite={"https://madchef-1487d.web.app/"}
          isRunning={false}
        />
        <ProjectCard
          image={"EquiSports.png"}
          projectName={"EquiSports - Redefining Sports Management"}
          shortDes={
            "EquiSports offers a seamless, secure shopping experience for sports gear with real-time updates, authentication, and responsive design."
          }
          iconArr={4}
          liveSite={"https://equisports-1c3a0.web.app/"}
          isRunning={false}
        />
      </div>
    </div>
  );
}
