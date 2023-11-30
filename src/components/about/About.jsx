import './about.css';
import React, { useState, useEffect } from 'react';
import skillsetData from '../../assets/data/skillset_data.json';
import educationData from '../../assets/data/education_data.json';

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
        {skills.map(({ id, skillset_title, skills }) => (
          <article key={id} className="about_item">
            <h3>{skillset_title}</h3>
            {skills.map((skill, index) => (
              <ul key={index}>{skill}</ul>
            ))}
          </article>
        ))}
      </div>

      <h3 className="section_title">Education</h3>
      <div className="container about_container">
        {education.map(({ id, school, degree, field_of_study, time, url }) => (
          <article key={id} className="about_item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <h3>{school}</h3>
            </a>
            <ul>{degree}</ul>
            <ul>{field_of_study}</ul>
            <ul>{time}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
