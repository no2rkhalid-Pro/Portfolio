import React from "react";
import Project from "../utilities/Project";
import projects from "../../data/projects.json"

export default function Projects() {
    return (
        <>
            <div className="flex items-center justify-between flex-wrap py-10  w-full flex-col gap-10">
                {
                    projects.map((project) => (
                        <Project  key={project.id} title={project.title} img={project.image} role={project.role} desc={project.description} technologies={project.technologies} />
                    ))
                }
            </div>
        </>
    );
}