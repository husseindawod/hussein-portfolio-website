import React, {JSX} from "react";

export default function Projects(): JSX.Element {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 flex items-center justify-center">
            <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-400">Projects — Coming soon</h3>

                <div className="mt-6">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
            Stay tuned ✨
          </span>
                </div>
            </div>
        </div>
    );
}