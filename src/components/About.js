import React from "react";
import "./Contact.css"; // Ensure the path to your CSS is correct

const About = () => {
  return (
    <div className="about-container">
      <div className="decorative-bar left-bar"></div> {/* Left Decorative Bar */}
      <h1>About Me</h1>
      <p>
        Hi, I am Mar Jean Roxas. I am a person who loves to learn and grow. I
        work hard and try my best in everything I do.
      </p>
      <p>
        I believe that with effort and kindness, I can achieve great things.
        My dream is to help others and become good at my work.
      </p>

      {/* Buttons for View and Download */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a
          href="/MarJeanRoxas_CV.pdf"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
          className="view-btn"
        >
          View CV
        </a>
        <a
          href="/MarJeanRoxas_CV.pdf"
          download="MarJeanRoxas_CV.pdf"
          className="download-btn"
        >
          Download CV
        </a>
      </div>
      <div className="decorative-bar right-bar"></div> {/* Right Decorative Bar */}
    </div>
  );
};

export default About;
