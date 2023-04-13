import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import logoImage from "../public/assets/black-logo-no-bg.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath === "/projectOne" ||
            router.asPath === "/projectTwo" ||
            router.asPath === "/projectThree" ||
            router.asPath === "/projectFour"
        ) {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
        } else {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <>
            {/* menu bar */}
            <div
                style={{ backgroundColor: `${navBg}` }}
                className={
                    shadow ? "fixed h-20 w-full shadow-xl z-[999]" : "fixed h-20 w-full z-[999]"
                }>
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Link href="/">
                        <Image src={logoImage} alt="/" width="125" height="50" />
                    </Link>
                    <div>
                        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                            <Link href="/">
                                <li className="ml-10 text-xl uppercase hover:border-b-2 border-b-gray-300 hover:text-[#5651e5]">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li className="ml-10 text-xl uppercase hover:border-b-2 border-b-gray-300 hover:text-[#5651e5]">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li className="ml-10 text-xl uppercase hover:border-b-2 border-b-gray-300 hover:text-[#5651e5]">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li className="ml-10 text-xl uppercase hover:border-b-2 border-b-gray-300 hover:text-[#5651e5]">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li className="ml-10 text-xl uppercase hover:border-b-2 border-b-gray-300 hover:text-[#5651e5]">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
                {/* for responsive / mobile view */}
                <div
                    className={
                        nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
                    }>
                    <div
                        className={
                            nav
                                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500"
                                : "fixed left-[-100%] top-0 p-10 ease duration-500"
                        }>
                        <div>
                            <div className="flex justify-between items-center w-full">
                                <Link href="/">
                                    <Image src={logoImage} alt="/" width="85" height="35" />
                                </Link>
                                <div
                                    onClick={handleNav}
                                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-400 my-4">
                                <p className="w-[85%] md:w-[90%] py-4">
                                    Let&apos;s build something legendary
                                </p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase font-semibold">
                                <Link href="/">
                                    <li
                                        onClick={() => {
                                            setNav(false);
                                        }}
                                        className="py-4 text-xl hover:text-[#5651e5]">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/#about">
                                    <li
                                        onClick={() => {
                                            setNav(false);
                                        }}
                                        className="py-4 text-xl hover:text-[#5651e5]">
                                        About
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li
                                        onClick={() => {
                                            setNav(false);
                                        }}
                                        className="py-4 text-xl hover:text-[#5651e5]">
                                        Skills
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li
                                        onClick={() => {
                                            setNav(false);
                                        }}
                                        className="py-4 text-xl hover:text-[#5651e5]">
                                        Projects
                                    </li>
                                </Link>
                                <Link href="/#contact">
                                    <li
                                        onClick={() => {
                                            setNav(false);
                                        }}
                                        className="py-4 text-xl hover:text-[#5651e5]">
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className=" pt-16">
                                <p className="uppercase tracking-widest text-[#5651e5]">
                                    Let&apos;s Connect
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <a
                                        href="https://www.facebook.com/scorpdipesh"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                            <FaFacebookF />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/scorpdp/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                            <FaInstagram />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/dipeshparajuli/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/catkidd"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                            <FaGithub />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
