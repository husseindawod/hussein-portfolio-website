import React, {JSX} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-12 md:py-24 mt-20 md:mt-24 space-y-24 md:space-y-36">
                <Hero />
                
                <section id="projects" className="scroll-mt-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-white">Selected Work</h2>
                            <p className="text-gray-400 mt-2">A showcase of my recent technical projects.</p>
                        </div>
                        <div className="h-px flex-grow bg-gradient-to-r from-gray-800 to-transparent mx-8 hidden md:block"></div>
                    </div>
                    <Projects />
                </section>

                <section id="about" className="scroll-mt-32">
                    <About />
                </section>

                <section id="contact" className="scroll-mt-32">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">Get In Touch</h2>
                        <p className="text-gray-400 text-lg">
                            Have a project in mind or just want to say hi? My inbox is always open.
                        </p>
                    </div>
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    );
}
