import React, {JSX} from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="py-8 border-t border-gray-700 mt-12 bg-gray-800/50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Hussein Dawod. Built with React & Tailwind.</div>

                <div className="flex gap-6 mt-3 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Github</a>
                    <a href="#" className="text-gray-400 hover:text-indigo-400 transition">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}