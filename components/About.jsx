import Image from "next/image";
import React from "react";
import profileImage from "../public/assets/profile-image.png";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl font-semibold tracking-widest text-[#5651e5]">
                        About
                        <hr className="w-8 h-1 mx-4 mt-2 bg-[#709dff] border-0 rounded"></hr>
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        Hey there, I&apos;m <span className="text-[#5651e5]">Dipesh Parajuli</span>{" "}
                        - web developer extraordinaire and all-around cool human being (or so I like
                        to think).
                    </p>
                    <p className="py-2 text-gray-600">
                        I&apos;m a recent graduate with a serious passion for web development, and I
                        specialize in crafting stunning websites using React.js, Next.js, and
                        TypeScript. I love bringing my creative vision to life and building digital
                        solutions that are both beautiful and user-friendly. I believe that the web
                        has the power to transform businesses and connect people in ways we never
                        thought possible.
                    </p>
                    <p className="py-2 text-gray-600">
                        But don&apos;t be fooled - I&apos;m not all work and no play. When I&apos;m
                        not deep in code, you can find me exploring new hiking trails, trying out
                        new recipes in the kitchen, or diving into the latest sci-fi novel. I&apos;m
                        always up for a good adventure, and I&apos;m never one to turn down a
                        challenge.
                    </p>
                    <p className="py-2 text-gray-600">
                        I&apos;m a stickler for details and always strive to deliver top-notch work
                        that exceeds expectations. I&apos;m a quick learner and a team player, and
                        I&apos;m always looking for new ways to improve my skills and broaden my
                        horizons.
                    </p>
                    <p className="py-2 text-gray-600">
                        So, whether you&apos;re looking to create a stunning new website, optimize
                        your existing web presence, or just chat about the latest sci-fi flicks,
                        I&apos;m your guy. Let&apos;s connect and bring your digital dreams to life!
                    </p>
                    <p className="py-2 text-gray-600 hover:underline cursor-pointer">
                        Check out some of my latest projects.
                    </p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image
                        className="rounded-xl"
                        src={profileImage}
                        alt="profile image"
                        width="500"
                        height="400"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
