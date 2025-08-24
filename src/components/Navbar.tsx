import React, {JSX} from "react";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
];

export default function Navbar(): JSX.Element {
    return (
        <header className="w-full py-4 bg-gray-800/90 backdrop-blur-md shadow-md fixed top-0 z-50">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white font-bold">

                    </div>
                    <div className="hidden sm:block">
                        <div className="text-lg font-semibold text-indigo-400">Hussein Dawod</div>
                        <div className="text-xs text-gray-400 -mt-1">Frontend / Fullstack</div>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="text-gray-300 hover:text-indigo-400 transition-colors">
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
                        Contact Me
                    </a>
                </nav>

                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}

function MobileMenu() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="relative">
            <button onClick={() => setOpen(v => !v)} aria-label="menu" className="p-2 rounded-md bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg p-3 shadow-lg">
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="block px-3 py-2 rounded hover:bg-gray-700 text-gray-300 hover:text-white">
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}