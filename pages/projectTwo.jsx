import Image from "next/image";
import React from "react";
import forecastFront from "../public/assets/projects/weather-forecast-front.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const projectTwo = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[70vh] lg:h-[80vh] relative">
                <div className="absolute top-0 left-0 w-full h-[70vh] lg:h-[80vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={forecastFront}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Weather Forecast App</h2>
                    <h3 className="w-1/2">
                        Brace yourself for a weather web app that&apos;s as cool as the weather
                        itself! Built with React and Tailwind CSS, our app delivers real-time
                        weather updates in a sleek and visually captivating interface that&apos;s
                        sure to make your weather-checking experience a breeze - and a stylish one
                        at that!
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <div className="text-justify">
                        <div className="text-xl tracking-widest font-semibold uppercase text-[#5651e5]">
                            <p>Project</p>
                            <hr className="w-8 h-1 mx-4 mt-4 bg-[#709dff] border-0 rounded"></hr>
                        </div>

                        <h2 className=" py-4">Overview</h2>
                        <p className="py-2 text-gray-600">
                            Get ready to check the weather in style with our cutting-edge weather
                            web app! Powered by React and Tailwind CSS, this sleek and modern
                            application provides you with up-to-the-minute weather updates for any
                            location you desire.
                        </p>
                        <p className="py-2 text-gray-600">
                            With a stunning and intuitive user interface, the app lets you easily
                            search for your desired location and fetches real-time weather data from
                            the powerful OpenWeatherMap API. You&apos;ll be able to access detailed
                            information such as current temperature, humidity, wind speed, and
                            weather description, as well as a 5-day forecast to plan ahead for your
                            outdoor adventures.
                        </p>
                        <p className="py-2 text-gray-600">
                            But that&apos;s not all! Our app boasts a visually captivating design,
                            complete with eye-catching icons and visually appealing color-coded
                            elements that make checking the weather a visual treat. Plus, you have
                            the flexibility to switch between different units of measurement,
                            whether you prefer Celsius or Fahrenheit, making it truly customizable
                            to your preferences.
                        </p>
                        <p className="py-2 text-gray-600">
                            Whether you&apos;re planning a beach day, gearing up for a hike, or
                            simply want to stay stylishly informed about the weather, our web app
                            has got you covered. Experience the weather like never before with our
                            feature-packed and visually stunning weather web app made with the
                            latest web technologies - React and Tailwind CSS!
                        </p>
                    </div>
                    <div className="flex flex-row justify-items-start">
                        <a
                            href="https://github.com/catkidd/weather-app"
                            target="_blank"
                            rel="noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8">Code</button>
                        </a>
                        <a
                            href="https://weather-app-alpha-lemon.vercel.app/"
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

export default projectTwo;
