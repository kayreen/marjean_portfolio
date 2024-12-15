import React from "react";
import { jsPDF } from "jspdf";
import "./CV.css";

const CV = () => {
  const handleDownload = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector(".cv-container"), {
      callback: function (pdf) {
        pdf.save("MarJeanRoxas_CV.pdf");
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <div>
      <div className="cv-container">
        {/* Header Section */}
        <header className="cv-header">
          <h1>Mar Jean Roxas</h1>
          <p>Email: marjeanroxas@example.com | Phone: +63 9278023739</p>
          <p>Address: Tubo-Tubo Cagwait Surigao Del Sur</p>
        </header>

        {/* Objective Section */}
        <section className="cv-section">
          <h2>Objective</h2>
          <p>
            To secure a challenging position in a reputable organization to expand my learning, knowledge, and skills.
          </p>
        </section>

        {/* Education Section */}
        <section className="cv-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor of Science in Computer Science</strong>, [North Eastern Mindanao State University] - [Undergraduate]
            </li>
            <li>
              <strong>High School Diploma</strong>, [Unidad Natinal High School] - [2016-17]
            </li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="cv-section">
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Intern</strong>, [EMR] - [2024]
              <p>Assisted with [Billing]</p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="cv-section">
          <h2>Skills</h2>
          <ul>
            <li>Basic Programming</li>
            <li>Basic Graphic Design</li>
          </ul>
        </section>

        {/* References Section */}
        <section className="cv-section">
          <h2>References</h2>
          <p>Available upon request.</p>
        </section>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleDownload} className="download-btn">
          Download CV as PDF
        </button>
      </div>
    </div>
  );
};

export default CV;
