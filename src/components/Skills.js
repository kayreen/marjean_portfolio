import React from "react";
import "./Skills.css"; // Import CSS for styling

const Skills = () => {
  const skills = [
    "Eating",
    "Singing",
    "Team collaboration",
    "Time management"
  ];

  return (
    <div className="skills-container">
      <div className="decorative-bar left-bar"></div> {/* Left Design */}
      <div className="skills-content">
        <h1>My Skills</h1>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="decorative-bar right-bar"></div> {/* Right Design */}
    </div>
  );
};

export default Skills;
