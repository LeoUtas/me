import './projects.css';
import React, { useState, useEffect } from 'react';
import projectData0 from '../../assets/data/project_data.json';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectData = projectData0.sort((a, b) => b.id - a.id);
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
                <img
                  src={process.env.PUBLIC_URL + feature_image}
                  alt={project_title}
                />
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
