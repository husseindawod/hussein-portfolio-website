import React, {JSX} from "react";

function Contact(): JSX.Element {
    return (
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto text-center">
            <p className="text-gray-400 mb-4">Reach out anytime at</p>
            <a
                href="mailto:husseindawod18@gmail.com"
                className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition"
            >
                husseindawod18@gmail.com
            </a>
        </section>
    );
}

export default Contact;
