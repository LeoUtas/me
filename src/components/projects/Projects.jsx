import './projects.css';
import React, { useState, useEffect, useMemo } from 'react';
import projectData0 from '../../assets/data/project_data.json';
import { FaGithub } from 'react-icons/fa';

const CATEGORIES = [
  { name: 'Highlights' },
  { name: 'Machine Learning' },
  { name: 'Deep Learning' },
  { name: 'Computer Vision' },
  { name: 'Data Visualization' },
  { name: 'From Scratch' },
  { name: 'Data Analytics' },
  { name: 'Natural Language Processing' },
  { name: 'Web Development' },
  { name: 'Tiny Repos' },
];

// filter the category
function CategoryFilter({ setCurrentCategory, availableCategories }) {
  return (
    <div className="categories">
      <ul>
        {CATEGORIES.filter(category_arg =>
          availableCategories.includes(category_arg.name)
        ).map(category_arg => (
          <li key={category_arg.name}>
            <button
              className="btn category-btn"
              onClick={() => setCurrentCategory(category_arg.name)}
            >
              {category_arg.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Highlights');

  // Calculate availableCategories
  const availableCategories = useMemo(() => {
    return projectData0.reduce((accumulator, project) => {
      const projectCategories = Array.isArray(project.category)
        ? project.category
        : [project.category];
      projectCategories.forEach(category => {
        if (!accumulator.includes(category)) {
          accumulator.push(category);
        }
      });
      return accumulator;
    }, []);
  }, []); // Empty dependency array ensures this only runs once

  useEffect(() => {
    const projectData = projectData0.sort((a, b) => b.id - a.id);
    setProjects(projectData);
  }, []);

  const filteredProjects = useMemo(
    () =>
      projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(currentCategory);
        }
        return project.category === currentCategory;
      }),
    [projects, currentCategory]
  );

  return (
    <section id="projects">
      <h2 className="section_title">My Repositories</h2>

      <CategoryFilter
        setCurrentCategory={setCurrentCategory}
        availableCategories={availableCategories}
      />

      <div className="container project_container">
        {filteredProjects.map(
          ({
            id,
            featured_image,
            project_title,
            project_summary,
            github,
            demo,
            technical_tools,
          }) => (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img
                  src={process.env.PUBLIC_URL + featured_image}
                  alt={project_title}
                />
              </div>
              <h3>{project_title}</h3>
              <p>{project_summary}</p>
              {/* <p className="">{technical_tools}</p> */}
              <div className="project_btn">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {/* Conditional rendering for the demo button */}
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
