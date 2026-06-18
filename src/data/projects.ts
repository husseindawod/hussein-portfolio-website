// src/data/projects.ts
export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
};

export const projects: Project[] = [
    {
        id: "aidlink",
        title: "AidLink",
        description:
            "AidLink centralizes information about everyone in your community who needs help — one place to track requests, assign cases, log assistance provided, and follow up, instead of spreadsheets or sticky notes.",
        image: "/AidLinkPreview.png",
        url: "https://aidlink-hussein-s-projects14.vercel.app/",
    },
];
