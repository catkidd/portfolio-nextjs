import Image from "next/image";
import React from "react";
import htmlImage from "../public/assets/skills/html.png";
import cssImage from "../public/assets/skills/css.png";
import github1Image from "../public/assets/skills/github1.png";
import mongoImage from "../public/assets/skills/mongo.png";
import nextjsImage from "../public/assets/skills/nextjs.png";
import nodeImage from "../public/assets/skills/node.png";
import reactImage from "../public/assets/skills/react.png";
import tailwindImage from "../public/assets/skills/tailwind.png";
import javascriptImage from "../public/assets/skills/javascript.png";

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen py-16 px-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-ful">
                <p className="text-xl text-center tracking-widest font-semibold uppercase text-[#5651e5]">
                    Skills
                </p>
                <hr className="w-8 h-1 mx-auto mt-4 bg-[#709dff] border-0 rounded"></hr>
                <h2 className=" py-4 text-center">What can I do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={htmlImage} alt="html" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={cssImage} alt="css" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={javascriptImage}
                                    alt="JavaScript"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={reactImage} alt="react" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={tailwindImage} alt="tailwind" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={nextjsImage} alt="nextjs" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={nodeImage} alt="node" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={github1Image} alt="github1" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={mongoImage} alt="mongo" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
