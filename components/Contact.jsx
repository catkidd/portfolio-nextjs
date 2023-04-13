import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImage from "../public/assets/contact-image-two.jpeg";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl text-center font-semibold tracking-widest uppercase text-[#5651e5]">
                    Contact
                    <hr className="w-8 h-1 mx-auto mt-2 bg-[#709dff] border-0 rounded"></hr>
                </p>
                <h2 className="py-4 text-center">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src={contactImage}
                                    alt="image"
                                    width="500"
                                    height="300"
                                />
                            </div>
                            <div>
                                <h2 className="py-4 text-[#5651e5]">Dipesh Parajuli</h2>
                                <p className="py-4">
                                    I am available for freelance or full-time positions. Contact me
                                    and let&apos;s talk.
                                </p>
                            </div>
                            <div className=" pt-32">
                                <p className="uppercase py-4 text-[#5651e5]">Connect with me</p>
                                <div className="flex justify-between items-center py-4">
                                    <a
                                        href="https://www.facebook.com/scorpdipesh"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaFacebookF size={20} />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/scorpdp/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaInstagram size={20} />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/dipeshparajuli/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedinIn size={20} />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/catkidd"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub size={20} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="phonenumber"
                                            id="phonenumber"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Your subject"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300"
                                        rows="10"></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-6">
                <Link href="/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Contact;
