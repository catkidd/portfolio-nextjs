import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImage from "../public/assets/contact-image-two.jpeg";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl text-center font-semibold tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <hr className="w-8 h-1 mx-auto mt-4 bg-[#709dff] border-0 rounded"></hr>
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
                            <div></div>
                            <div className=" pt-32">
                                <p className="uppercase py-4 text-[#5651e5]">Connect with me</p>
                                <div className="flex justify-between items-center py-4 text-[#5651e5]">
                                    <a
                                        href="https://www.facebook.com/scorpdipesh"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaFacebookF size={22} />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/scorpdp/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaInstagram size={22} />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/dipeshparajuli/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedinIn size={22} />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/catkidd"
                                        target="_blank"
                                        rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub size={22} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <ContactForm />
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
