import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/react-website-one.png"
          title="Graphs Dashboard Project"
          description="Here you can see a Beautiful Modern dashboard Ui"
        />
        <ProjectCard
          src="/react-website-two.png"
          title="Covid-19 Tracker Webapp"
          description="This is a Covid-19 tracker, where you can tract live data as per the Locations."
        />
        <ProjectCard
          src="/react-website-three.png"
          title="Subscription Dashboard UI"
          description="This is a Beautiful responsive website for subscription related details"
        />
        <ProjectCard
          src="/react-website-four.png"
          title="Trello Clone App"
          description="This is a trello clone where you can create cards, edit them, delete them with Drag and Drop functionality."
        />
        <ProjectCard
          src="/react-website-five.png"
          title="Add Contact App"
          description="Here you can add, save, edit and delete your contacts."
        />
      </div>
    </div>
  );
};

export default Projects;
