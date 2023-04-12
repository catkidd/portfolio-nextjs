import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen py-16 px-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-ful">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <h2 className="py-4">What can I do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/html.png"
                                    alt="html"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/css.png"
                                    alt="css"
                                    width="64"
                                    height="64"
                                />
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
                                    src="/../public/assets/skills/javascript.png"
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
                                <Image
                                    src="/../public/assets/skills/react.png"
                                    alt="react"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/tailwind.png"
                                    alt="tailwind"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/nextjs.png"
                                    alt="nextjs"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/node.png"
                                    alt="node"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/github1.png"
                                    alt="github1"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/mongo.png"
                                    alt="mongo"
                                    width="64"
                                    height="64"
                                />
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
