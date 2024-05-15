import './blogs.css';
import React, { useState, useEffect, useMemo } from 'react';
import blogData0 from '../../assets/data/blog_data.json';

const CATEGORIES = [
  { name: 'Highlights' },
  { name: 'Machine Learning' },
  { name: 'Applied AI' },
  { name: 'Computer Vision' },
  { name: 'Data Visualization' },
  { name: 'Database' },
  { name: 'Fundamentals' },
  { name: 'AI Fundamentals' },
  { name: 'Data Analytics' },
  { name: 'Web' },
  { name: 'Mobile' },
  { name: 'Tiny' },
];

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Highlights');

  // Calculate availableCategories
  const availableCategories = useMemo(() => {
    // determine the unique category values from blog_data
    return blogData0.reduce((accumulator, blog) => {
      const blogCategories = Array.isArray(blog.category)
        ? blog.category
        : [blog.category];
      blogCategories.forEach(category => {
        if (!accumulator.includes(category)) {
          accumulator.push(category);
        }
      });
      return accumulator;
    }, []);
  }, []); // Empty dependency array ensures this only runs once

  // filter blog data for categories
  useEffect(() => {
    const blogData = blogData0.sort((a, b) => b.id - a.id);
    console.log('Setting blogs state with data:', blogData);
    setBlogs(blogData);
  }, []);

  const filteredBlogs = useMemo(
    () =>
      blogs.filter(blog => {
        if (Array.isArray(blog.category)) {
          return blog.category.includes(currentCategory);
        }
        return blog.category === currentCategory;
      }),
    [blogs, currentCategory]
  );

  // filter the category component
  function CategoryFilter({
    currentCategory,
    setCurrentCategory,
    availableCategories,
  }) {
    return (
      <div className="blog-categories">
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
    <section id="blogs">
      <h2 className="section_title">Blogs</h2>

      {/* Apply the CategoryFilter component */}
      <CategoryFilter
        setCurrentCategory={setCurrentCategory}
        availableCategories={availableCategories}
        currentCategory={currentCategory}
      />

      <div className="container">
        {filteredBlogs.map(
          ({ id, blog_title, blog_summary, github, devto }) => (
            <article key={id} className="blog_item">
              <div>
                <h3>{blog_title}</h3>
                <p>{blog_summary}</p>
                {/* <p className="">{technical_tools}</p> */}
                <div className="blog_btn">
                  {github && (
                    <a
                      href={github}
                      className="btn blog_btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  )}

                  {/* Conditional rendering for the demo button */}
                  {devto && (
                    <a
                      href={devto}
                      className="btn btn_primary blog_btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Dev.to
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Blogs;
