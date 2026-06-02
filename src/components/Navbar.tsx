import React, {JSX, useState} from "react";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
];

export default function Navbar(): JSX.Element {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full py-4 bg-gray-900/80 backdrop-blur-md shadow-lg fixed top-0 z-50 border-b border-gray-800">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-indigo-500/20 shadow-lg group-hover:scale-110 transition">
                        HD
                    </div>
                    <div>
                        <div className="text-lg font-bold text-gray-100 group-hover:text-indigo-400 transition">Hussein Dawod</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 -mt-1">Portfolio</div>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-500 hover:shadow-indigo-500/25 shadow-md transition">
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setMobileOpen(!mobileOpen)} 
                    className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition"
                    aria-label="Toggle Menu"
                >
                    {mobileOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
                    {links.map(l => (
                        <a 
                            key={l.href} 
                            href={l.href} 
                            onClick={() => setMobileOpen(false)}
                            className="text-lg font-medium text-gray-300 hover:text-indigo-400 py-2 border-b border-gray-800/50"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={() => setMobileOpen(false)}
                        className="w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-bold mt-2"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </header>
    );
}