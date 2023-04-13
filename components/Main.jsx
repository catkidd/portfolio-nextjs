import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <>
            <div id="home" className="w-full h-screen text-center">
                <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                    <div>
                        <p className="uppercase text-sm tracking-widest text-gray-600">
                            Let&apos;s build something legendary
                        </p>
                        <h1 className="py-4 text-gray-700">
                            Hey, I&apos;m <span className="text-[#5651e5]">Dipesh Parajuli</span>
                        </h1>
                        <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
                        <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quasi
                            sed itaque repellendus. Nemo omnis, reprehenderit totam nihil, obcaecati
                            nesciunt repellendus unde cum repellat aliquam, ipsa sed aliquid
                            exercitationem alias?
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
