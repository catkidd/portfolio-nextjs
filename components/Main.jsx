import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <>
            <div id="home" className="w-full h-screen text-center">
                <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                    <div className="mt-16">
                        <p className="uppercase text-sm tracking-widest text-gray-600">
                            Let&apos;s build something legendary
                            <hr className=" w-20 h-1 mx-auto mt-2 bg-[#709dff] border-0 rounded"></hr>
                        </p>

                        <h1 className="py-4 text-gray-700">
                            Hey, I&apos;m <span className="text-[#5651e5]">Dipesh Parajuli</span>
                        </h1>
                        <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
                        <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                            Welcome to my{" "}
                            <span className="text-[#5651e5] font-semibold">portfolio</span> website,
                            where you can witness the birth of a{" "}
                            <span className="text-[#5651e5] font-semibold">developer</span>{" "}
                            superstar! With fresh ideas and a hunger to learn, I&apos;m eager to
                            showcase my skills and creativity to potential employers. Check out my{" "}
                            <span className="text-[#5651e5] text-xl font-semibold">projects</span>{" "}
                            and <span className="text-[#5651e5] text-xl font-semibold">skills</span>{" "}
                            section, and let&apos;s create something{" "}
                            <span className="text-[#5651e5] font-semibold">amazing</span> together!
                        </p>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                            <a
                                href="https://www.facebook.com/scorpdipesh"
                                target="_blank"
                                rel="noreferrer">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaFacebookF size={25} />
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/scorpdp/"
                                target="_blank"
                                rel="noreferrer">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaInstagram size={25} />
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dipeshparajuli/"
                                target="_blank"
                                rel="noreferrer">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn size={25} />
                                </div>
                            </a>
                            <a href="https://github.com/catkidd" target="_blank" rel="noreferrer">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub size={25} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
