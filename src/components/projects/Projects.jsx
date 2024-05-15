import './projects.css';
import React, { useState, useEffect, useMemo } from 'react';
import projectData0 from '../../assets/data/project_data.json';

const CATEGORIES = [
  { name: 'Highlights' },
  { name: 'Machine Learning' },
  { name: 'Applied AI' },
  { name: 'Computer Vision' },
  { name: 'Data Visualization' },
  { name: 'Fundamentals' },
  { name: 'Data Analytics' },
  { name: 'Web' },
  { name: 'Mobile' },
  { name: 'Game' },
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Highlights');

  // Calculate availableCategories
  const availableCategories = useMemo(() => {
    // determine the unique category values from project_data
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

  // filter project data for categories
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

  // filter the category component
  function CategoryFilter({
    currentCategory,
    setCurrentCategory,
    availableCategories,
  }) {
    return (
      <div className="categories">
        <ul>
          {CATEGORIES.filter(category_arg =>
            availableCategories.includes(category_arg.name)
          ).map(category_arg => (
            <li key={category_arg.name}>
              <button
                className={`btn category_btn ${
                  currentCategory === category_arg.name ? 'active' : ''
                }`}
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

  return (
    <section id="projects">
      <h2 className="section_title">Projects</h2>

      {/* Apply the CategoryFilter component */}
      <CategoryFilter
        setCurrentCategory={setCurrentCategory}
        availableCategories={availableCategories}
        currentCategory={currentCategory}
      />

      <div className="container">
        {filteredProjects.map(
          ({
            id,
            featured_image,
            project_title,
            project_summary,
            github,
            demo,
            figma,
          }) => (
            <article key={id} className="project_item">
              <div>
                <h3>{project_title}</h3>
                <p>{project_summary}</p>
                {/* <p className="">{technical_tools}</p> */}
                <div className="project_btn">
                  <a
                    href={github}
                    className="btn project_btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {/* Conditional rendering for the demo button */}
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn_primary project_btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                  {figma && (
                    <a
                      href={figma}
                      className="btn project_btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Figma
                    </a>
                  )}
                </div>
              </div>

              <div className="project_item-image">
                <img
                  src={process.env.PUBLIC_URL + featured_image}
                  alt={project_title}
                />
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
