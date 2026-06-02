import React, {JSX} from "react";

const skills = [
    "Next.js & React", "Django & Python", "TypeScript",
    "Supabase", "Docker", "PostgreSQL",
    "Tailwind CSS", "AWS & Cloud"
];

export default function About(): JSX.Element {
    return (
        <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-3">
                    <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I'm a Full-stack Developer passionate about building high-performance web applications. I specialize in the 
                        <span className="text-indigo-400"> React/Next.js ecosystem</span> for the frontend and 
                        <span className="text-cyan-400"> Python/Django</span> for robust backend services. 
                        My goal is to create seamless digital experiences that solve real-world problems.
                    </p>

                    <div className="mt-10">
                        <h4 className="text-sm uppercase tracking-widest text-indigo-400 font-bold mb-6">Core Technologies</h4>
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
                    <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 p-8 rounded-3xl border border-indigo-500/20 shadow-inner">
                        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Quick Facts
                        </h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                <span className="text-gray-400 text-sm">Location</span>
                                <span className="text-gray-200 text-sm font-medium">Ottawa, Canada</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                <span className="text-gray-400 text-sm">Availability</span>
                                <span className="text-green-400 text-sm font-medium">Open to roles</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-400 text-sm">Experience</span>
                                <span className="text-gray-200 text-sm font-medium">Full-stack Specialist</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-700/50 bg-gray-900/40">
                        <p className="text-gray-400 text-sm italic leading-relaxed">
                            "I focus on writing clean, maintainable code and staying ahead of the curve with emerging technologies."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}