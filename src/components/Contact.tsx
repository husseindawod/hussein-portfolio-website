import React, {JSX} from "react";

function Contact(): JSX.Element {
    const [form, setForm] = React.useState({ name: "", email: "", message: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Send contact (simulate)", form);
        setForm({ name: "", email: "", message: "" });
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl">
            <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-gray-700/50 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg outline-none focus:border-indigo-400 transition"
                    />
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="bg-gray-700/50 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg outline-none focus:border-indigo-400 transition"
                    />
                </div>

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    rows={5}
                    className="bg-gray-700/50 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg outline-none focus:border-indigo-400 transition"
                />

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition">
                        Send message
                    </button>
                    <div className="text-sm text-gray-400">or email at husseindawod18@gmail.com</div>
                </div>
            </div>
        </form>
    );
}

export default Contact;