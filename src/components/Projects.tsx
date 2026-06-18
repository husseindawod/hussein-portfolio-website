import React, {JSX} from "react";
import { projects } from "../data/projects";

export default function Projects(): JSX.Element {
    if (projects.length === 0) {
        return (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-400">Projects — Coming soon</h3>

                    <div className="mt-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                            Stay tuned ✨
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <article
                    key={project.id}
                    className="bg-gray-800/40 backdrop-blur-md rounded-3xl border border-gray-700/50 shadow-xl overflow-hidden flex flex-col"
                >
                    <div className="h-48 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{project.description}</p>

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-center bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-500 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20"
                        >
                            View Project
                        </a>
                    </div>
                </article>
            ))}
        </div>
    );
}
