import React, {JSX, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

function Contact(): JSX.Element {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function sendEmail(e: React.FormEvent) {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus("error");
        }
    }

    return (
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto md:mx-0">
            <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="from_name"
                        required
                        placeholder="Your name"
                        className="bg-gray-700/50 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg outline-none focus:border-indigo-400 transition"
                    />
                    <input
                        name="reply_to"
                        type="email"
                        required
                        placeholder="Email"
                        className="bg-gray-700/50 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg outline-none focus:border-indigo-400 transition"
                    />
                </div>

                <textarea
                    name="message"
                    required
                    placeholder="Message"
                    rows={5}
                    className="bg-gray-700/50 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg outline-none focus:border-indigo-400 transition"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button 
                        type="submit" 
                        disabled={status === "sending"}
                        className="w-full sm:w-auto bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "sending" ? "Sending..." : "Send message"}
                    </button>
                    
                    {status === "success" && (
                        <p className="text-green-400 text-sm animate-pulse">✓ Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
                    )}

                    <div className="text-sm text-gray-400 text-center sm:text-right">
                        or email me at <a href="mailto:husseindawod18@gmail.com" className="text-indigo-400 hover:underline">husseindawod18@gmail.com</a>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Contact;