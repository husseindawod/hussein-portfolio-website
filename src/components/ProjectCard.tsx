// src/components/ProjectCard.tsx
import React from "react";

/**
 * Local, permissive Project type so this component works even when
 * your data file is empty or not exporting types yet.
 */
type Project = {
    id?: string;
    title?: string;
    description?: string;
    tags?: string[];
    url?: string;
    repo?: string;
    image?: string;
};

export default function ProjectCard({ project }: { project?: Project }) {
    const isPlaceholder = !project || !project.title;

    if (isPlaceholder) {
        return (
            <article className="card flex items-center justify-center p-8 text-center">
                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Projects — Coming soon</h3>
                    <p className="text-slate-300 max-w-lg mx-auto">
                        I'm currently building and curating my selected projects. Check back soon for live demos,
                        case studies, and source code — exciting things are on the way.
                    </p>
                    <div className="mt-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-sm">Stay tuned ✨</span>
                    </div>
                </div>
            </article>
        );
    }

    const tags = project.tags ?? [];

    return (
        <article className="card flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-48 h-36 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                <img
                    src={project.image ?? "/project-placeholder.png"}
                    alt={project.title ?? "Project image"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-slate-300 mt-2">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-white/4 rounded-full">
              {t}
            </span>
                    ))}
                </div>

                <div className="mt-4 flex gap-3">
                    {project.url && (
                        <a href={project.url} className="btn btn-primary text-sm">
                            Live
                        </a>
                    )}
                    {project.repo && (
                        <a href={project.repo} className="btn border border-white/10 text-sm">
                            Repo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
