import React, {JSX} from "react";

const skills = [
    "Claude Code", "Next.js", "Django",
    "Supabase", "TypeScript", "PostgreSQL",
    "Tailwind CSS"
];

export default function About(): JSX.Element {
    return (
        <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-3">
                    <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I build full-stack web applications using an
                        <span className="text-indigo-400"> AI-assisted development workflow</span>, with
                        <span className="text-cyan-400"> Claude Code</span> as my primary development tool.
                        Next.js, Django, and Supabase are the tools in my implementation stack. My focus is on
                        building and iterating on functional web apps that solve real problems.
                    </p>

                    <div className="mt-10">
                        <h4 className="text-sm uppercase tracking-widest text-indigo-400 font-bold mb-2">Tools I Use</h4>
                        <p className="text-gray-500 text-sm mb-6">Tools used in projects, not areas of deep specialization.</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map(skill => (
                                <li key={skill} className="flex items-center gap-2 text-gray-300 bg-gray-700/30 px-4 py-2 rounded-xl border border-gray-600/30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 p-6 sm:p-8 rounded-3xl border border-indigo-500/20 shadow-inner">
                        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Quick Facts
                        </h4>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1 py-2 border-b border-gray-700/50 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <span className="text-gray-400 text-sm">Location</span>
                                <span className="text-gray-200 text-sm font-medium sm:text-right">Ottawa, Canada</span>
                            </div>
                            <div className="flex flex-col gap-1 py-2 border-b border-gray-700/50 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <span className="text-gray-400 text-sm">Availability</span>
                                <span className="text-green-400 text-sm font-medium sm:text-right">Open to full-time roles</span>
                            </div>
                            <div className="flex flex-col gap-1 py-2 border-b border-gray-700/50 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <span className="text-gray-400 text-sm">Experience</span>
                                <span className="text-gray-200 text-sm font-medium sm:text-right">Full-Stack Application Builder</span>
                            </div>
                            <div className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <span className="text-gray-400 text-sm">Next</span>
                                <span className="text-gray-200 text-sm font-medium sm:text-right">Cloud DevOps Program, Sept 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}