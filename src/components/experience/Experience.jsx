import "./experience.css";
import React, { useState, useEffect } from "react";
import experienceData from "../../assets/data/experience_data.json";
import volunteerData from "../../assets/data/volunteer_data.json";

function About() {
    const [experience, setExperience] = useState([]);
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        setExperience(experienceData);
        setVolunteer(volunteerData);
    }, []);

    return (
        <section id="experience">
            <h2 className="section_title">My experience</h2>

            <div className="container experience_container">
                {experience.map(
                    ({ id, title, what_i_do, where_i_do_it, time }) => (
                        <article key={id} className="experience_item">
                            <h3>{title}</h3>
                            <ul className="experience_ul_item">
                                {what_i_do.map((item, index) => (
                                    <li key={index}>
                                        {`${item} @ `}
                                        <span className="work_location">
                                            {where_i_do_it[index]},{" "}
                                            {time[index]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    )
                )}
            </div>

            <h3 className="section_title">My volunteer</h3>

            <div className="container volunteer_container">
                {volunteer.map(
                    ({ id, title, what_i_do, where_i_do_it, time }) => (
                        <article key={id} className="volunteer_item">
                            <h3>{title}</h3>
                            <ul className="experience_ul_item">
                                {what_i_do.map((item, index) => (
                                    <li key={index}>
                                        {`${item} @ `}
                                        <span className="work_location">
                                            {where_i_do_it[index]},{" "}
                                            {time[index]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    )
                )}
            </div>
        </section>
    );
}

export default About;
