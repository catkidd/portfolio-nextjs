import React from "react";
import projectImgOne from "../public/assets/projects/image-1.png";
import portfolioImg from "../public/assets/projects/portfolio-web-img.png";
import projectImgTwo from "../public/assets/projects/image-2.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl text-center tracking-widest font-semibold uppercase text-[#5651e5]">
                    Projects
                </p>
                <hr className="w-8 h-1 mx-auto mt-4 bg-[#709dff] border-0 rounded"></hr>
                <h2 className="py-4 text-center">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Portfolio Website"
                        backgroundImg={portfolioImg}
                        projectUrl="/projectOne"
                        projectDesc="A portfolio website made with Next.js and Tailwind."
                    />
                    <ProjectItem
                        title="Project 2"
                        backgroundImg={projectImgTwo}
                        projectUrl="/projectTwo"
                        projectDesc="Lorem, ipsum dolor.2"
                    />
                    <ProjectItem
                        title="Project 3"
                        backgroundImg={projectImgTwo}
                        projectUrl="/projectThree"
                        projectDesc="Lorem, ipsum dolor.3"
                    />
                    <ProjectItem
                        title="Project 4"
                        backgroundImg={projectImgOne}
                        projectUrl="/projectFour"
                        projectDesc="Lorem, ipsum dolor.4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
