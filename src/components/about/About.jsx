import './about.css';
import React, { useState, useEffect } from 'react';
import skillsetData from '../../assets/data/skillset_data.json'; // import required data
import educationData from '../../assets/data/education_data.json'; // import required data
import experienceData from '../../assets/data/experience_data.json';
import volunteerData from '../../assets/data/volunteer_data.json';

function About() {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    setSkills(skillsetData);
    setEducation(educationData);
    setExperience(experienceData);
    setVolunteer(volunteerData);
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

      <h2 className="section_title">My experience</h2>

      <div className="container experience_container">
        {experience.map(
          ({ id, title, what_i_do, where_i_do_it, time, url }) => (
            <article key={id} className="experience_item">
              <h3>{title}</h3>
              <ul className="experience_ul_item">
                {what_i_do.map((item, index) => (
                  <li key={index}>
                    {`${item} @ `}{' '}
                    <a
                      href={url[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="work_location">
                        {where_i_do_it[index]}, {time[index]}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>

      <h3 className="section_title">My volunteer</h3>

      <div className="container volunteer_container">
        {volunteer.map(({ id, title, what_i_do, where_i_do_it, time, url }) => (
          <article key={id} className="volunteer_item">
            <h3>{title}</h3>
            <ul className="experience_ul_item">
              {what_i_do.map((item, index) => (
                <li key={index}>
                  {`${item} @ `}
                  <a
                    href={url[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="work_location">
                      {where_i_do_it[index]}, {time[index]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
