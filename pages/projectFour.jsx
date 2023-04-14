import Image from "next/image";
import React from "react";
import projextImgOne from "../public/assets/projects/image-1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const projectFour = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[70vh] lg:h-[80vh] relative">
                <div className="absolute top-0 left-0 w-full h-[70vh] lg:h-[80vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={projextImgOne}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Portfolio Website 1</h2>
                    <h3>Tailwind CSS, the superhero of web development!</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <div className="text-justify">
                        <div className="text-xl tracking-widest font-semibold uppercase text-[#5651e5]">
                            <p>Portfolio Website 1</p>
                            <hr className="w-8 h-1 mx-4 mt-4 bg-[#709dff] border-0 rounded"></hr>
                        </div>

                        <h2 className=" py-4">Overview</h2>
                        <p className="py-2 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                            recusandae dolore dignissimos dicta, eius velit sed doloribus
                            exercitationem perspiciatis expedita itaque porro explicabo at iste
                            iusto sit! Natus excepturi nostrum ducimus quae voluptatum nobis aliquam
                            asperiores eligendi quo doloribus in quaerat id molestiae voluptatibus
                            similique soluta repellat eum, voluptatem officiis neque delectus velit
                            veritatis labore quos. Deserunt labore laboriosam facilis deleniti
                            reprehenderit aut necessitatibus! Maxime architecto accusamus unde nam
                            quam illum assumenda doloribus et rem, molestias ex at mollitia vel
                            optio quisquam! Autem rerum facilis ipsam magnam eius, provident
                            necessitatibus consequuntur velit hic, quibusdam, voluptates id
                            asperiores ea aut possimus.
                        </p>
                        <p className="py-2 text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem saepe
                            explicabo, sequi voluptatum odio, eligendi repellat reprehenderit
                            molestias totam repudiandae velit libero eveniet, officiis blanditiis
                            beatae consequuntur dolor ut vitae quo ducimus rem temporibus sunt
                            quisquam? Voluptatem doloremque neque dignissimos officia cumque aliquam
                            corporis ab, sint quisquam necessitatibus voluptatum laboriosam?
                        </p>
                        <p className="py-2 text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim
                            esse aliquid assumenda numquam perspiciatis cum veritatis cumque, id
                            autem?
                        </p>
                    </div>
                    <div className="flex flex-row justify-items-start">
                        <a
                            href="https://github.com/catkidd/react-portfolio-using-tailwind"
                            target="_blank"
                            rel="noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8">Code</button>
                        </a>
                        <a
                            href="https://react-portfolio-using-tailwind.vercel.app/"
                            target="_blank"
                            rel="noreferrer">
                            <button className="px-8 py-2 mt-4">Demo</button>
                        </a>
                        <div className="ml-8 py-2 px-6 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                            <Link href="/#projects">
                                <p>Back</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Tailwind
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Firebase
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Google API
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Zillow API
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectFour;
