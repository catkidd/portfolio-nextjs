import React from "react";
import projectImgOne from "../public/assets/projects/image-1.png";
import projectImgTwo from "../public/assets/projects/image-2.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Project 1"
                        backgroundImg={projectImgOne}
                        projectUrl="/property"
                    />
                    <ProjectItem
                        title="Project 2"
                        backgroundImg={projectImgTwo}
                        projectUrl="/property"
                    />
                    <ProjectItem
                        title="Project 3"
                        backgroundImg={projectImgTwo}
                        projectUrl="/property"
                    />
                    <ProjectItem
                        title="Project 4"
                        backgroundImg={projectImgOne}
                        projectUrl="/property"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
