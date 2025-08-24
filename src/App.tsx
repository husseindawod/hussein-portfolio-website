import React, {JSX} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-20 mt-16">
                <Hero />
                <section id="projects" className="mt-20">
                    <h2 className="text-3xl font-semibold mb-8 text-indigo-400">Selected Projects</h2>
                    <Projects />
                </section>

                <section id="about" className="mt-20">
                    <h2 className="text-3xl font-semibold mb-8 text-indigo-400">About Me</h2>
                    <About />
                </section>

                <section id="contact" className="mt-20">
                    <h2 className="text-3xl font-semibold mb-8 text-indigo-400">Get in touch</h2>
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    );
}