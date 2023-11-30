<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#technical-tools">Technical Tools</a></li>
    <li><a href="#the-bottom-line">The Bottom Line</a></li>
  </ol>
</details>

### Introduction

Welcome to the repository of my portfolio project. This portfolio is more than just a showcase of my work; it's a reflection of my journey and skills. Embracing simplicity, it was crafted with a 'lazy' design philosophy to minimize required effort for future information updates.

### Demo

Visit the live portfolio: leoutas.github.io/react_portfolio

### Technical tools

- ReactJS
- HTML
- CSS
- Github action

### The design

when developing my portfolio site, I noticed a common issue in other portfolios: the hard-coding of dynamic components like education, work experience, and projects directly into HTML files. This method becomes cumbersome as the amount of information grows, requiring frequent and tedious HTML edits. To address this, I implemented a more efficient approach using ReactJS. Instead of embedding the information directly into the HTML, I designed the site to dynamically pull content from separate JSON files. This way, updating my portfolio is as simple as modifying these JSON files, significantly reducing the effort needed for future updates and ensuring the site remains easy to manage and scale

For example:

```jsx
import './about.css';
import React, { useState, useEffect } from 'react';
import skillsetData from '../../assets/data/skillset_data.json'; // import required data
import educationData from '../../assets/data/education_data.json'; // import required data

function About() {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setSkills(skillsetData);
    setEducation(educationData);
  }, []);

  return (
    <section id="about">
      <h2 className="section_title">My skills & education</h2>
      <div className="container about_container">
        {skills.map(
          (
            { id, skillset_title, skills } // map to the imported data
          ) => (
            <article key={id} className="about_item">
              <h3>{skillset_title}</h3>
              {skills.map((skill, index) => (
                <ul key={index}>{skill}</ul>
              ))}
            </article>
          )
        )}
      </div>

      <h3 className="section_title">Education</h3>
      <div className="container about_container">
        {education.map(
          (
            { id, school, degree, field_of_study, time, url } // map to the imported data
          ) => (
            <article key={id} className="about_item">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h3>{school}</h3>
              </a>
              <ul>{degree}</ul>
              <ul>{field_of_study}</ul>
              <ul>{time}</ul>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default About;
```

### The bottom line

I'm thrilled to have completed this project and I'm excited to share it with you! Feel free to use the source code or incorporate elements of my design in your own work. Thank you for taking the time to read this far. Wishing you an amazing day ahead!

Best,
Hoang Ng
