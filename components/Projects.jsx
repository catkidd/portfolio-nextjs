import React from "react";
import portfolioImg from "../public/assets/projects/portfolio-web-img.png";
import portfolioImg2 from "../public/assets/projects/portfolio-web-img-2.png";
import projectImgwf from "../public/assets/projects/weather-forecast-front.png";
import projectImg3 from "../public/assets/projects/image-1.png";
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
                        title="Weather Forcast App"
                        backgroundImg={projectImgwf}
                        projectUrl="/projectTwo"
                        projectDesc="Brace yourself for a weather web app that's as cool as the weather itself!"
                    />
                    <ProjectItem
                        title="Project 3"
                        backgroundImg={projectImg3}
                        projectUrl="/projectThree"
                        projectDesc="Lorem, ipsum dolor.3"
                    />
                    <ProjectItem
                        title="Portfolio Website 1"
                        backgroundImg={portfolioImg2}
                        projectUrl="/projectFour"
                        projectDesc="Tailwind CSS, the superhero of web development!"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
