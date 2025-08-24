import React, {JSX} from "react";

export default function Hero(): JSX.Element {
    return (
        <section className="rounded-2xl p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Modern SpringBoot developer building <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">relevant</span> solutions.
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-xl">
                        {/*  Summary coming later...  */}
                    </p>

                    <div className="mt-6 flex gap-3">
                        <a href="#projects" className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-gray-600 text-gray-100 px-6 py-3 rounded-lg hover:border-indigo-400 transition">
                            Hire me
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition border-2 border-indigo-400/20">
                        <img src={'/ProfilePicture.jpeg'} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}