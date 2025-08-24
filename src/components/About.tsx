import React, {JSX} from "react";

export default function About(): JSX.Element {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-semibold text-indigo-400">About me</h3>
                    <p className="text-gray-300 mt-4">
                        {/*  Information coming soon  */}
                    </p>

                    <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-300">
                        <li className="flex items-center">• SpringBoot</li>
                        <li className="flex items-center">• React & TypeScript</li>
                        <li className="flex items-center">• Docker</li>
                        <li className="flex items-center">• AWS</li>
                    </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                    <h4 className="font-medium text-indigo-400">Quick facts</h4>
                    <div className="mt-4 text-sm text-gray-300 space-y-2">
                        <p><strong>Location:</strong> Ottawa, Canada</p>
                        <p><strong>Available for:</strong> Full-Time Roles</p>
                        <p><strong>Tools:</strong> IntelliJ IDEA, Git, Docker</p>
                    </div>
                </div>
            </div>
        </div>
    );
}