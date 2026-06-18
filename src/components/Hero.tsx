import React, {JSX} from "react";

export default function Hero(): JSX.Element {
    return (
        <section className="rounded-3xl p-10 md:p-20 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                    Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Application Builder</span> (AI-Assisted).
                </h1>
                <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    I build full-stack web applications using an AI-assisted development workflow, with Claude Code as my primary development tool. My focus is turning ideas into working, functional products.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#projects" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-500 transition-all hover:scale-105 shadow-xl shadow-indigo-600/20">
                        Explore Projects
                    </a>
                    <a href="#contact" className="border border-gray-600 text-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-indigo-400 hover:bg-indigo-400/5 transition-all">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
}