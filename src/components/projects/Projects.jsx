import "./projects.css";
import React, { useState, useEffect } from "react";
import projectData from "../../assets/data/project_data.json";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectData);
    }, []);

    return (
        <section id="projects">
            <h2 className="section_title">My projects</h2>

            <div className="container project_container">
                {projects.map(
                    ({
                        id,
                        feature_image,
                        project_title,
                        project_summary,
                        github,
                        demo,
                    }) => (
                        <article key={id} className="project_item">
                            <div className="project_item-image">
                                <img src={feature_image} alt={project_title} />
                            </div>
                            <h3>{project_title}</h3>
                            <p>{project_summary}</p>
                            <div className="project_btn">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                            </div>
                        </article>
                    )
                )}
            </div>
        </section>
    );
}

export default Projects;
