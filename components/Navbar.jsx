import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <>
            <div className="fixed h-20 w-full shadow-xl z-[999]">
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Image
                        src="/../public/assets/black-logo-no-bg.png"
                        alt="/"
                        width="125"
                        height="50"
                    />
                    <div>
                        <ul className="hidden md:flex">
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                            </Link>
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                            </Link>
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                            </Link>
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                            </Link>
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                            </Link>
                        </ul>
                        <div className="md:hidden">
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
                {/* <div className="fixed left-0 top-0 h-screen bg-black/50">
                    <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500">
                        <div>
                            <div className="flex justify-between items-center w-full">
                                <Image
                                    src="/../public/assets/black-logo-no-bg.png"
                                    alt="/"
                                    width="85"
                                    height="35"
                                />
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-400 my-4">
                                <p className="w-[85%] md:w-[90%] py-4">
                                    Let&apos;s build something legendary
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <Link>
                                    <li>Home</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Navbar;
