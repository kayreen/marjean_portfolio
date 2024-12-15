import React, { useEffect, useState } from "react";
import "./Home.css"; // Add this for styling
import selfImage from "./self2.jpg"; // Ensure the image is in the correct folder

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 80); // Delay animation start
  }, []);

  const nameStyle = {
    fontSize: "2rem",
    color: "#333",
    opacity: animate ? 1 : 0, // Fades in
    transform: animate ? "translateY(0)" : "translateY(-30px)", // Moves down slightly
    transition: "all 3s ease-out", // Smooth transition
  };

  return (
    <div className="home-container">
      <div className="decorative-bar left-bar"></div> {/* Left Decorative Bar */}
      <h1 style={nameStyle}>Mar Jean Roxas</h1>
      <img
        src={selfImage}
        alt="Mar Jean Roxas"
        className={`self-image ${animate ? "light-effect" : ""}`}
      />
      <p className={`tagline ${animate ? "fade-in-tagline" : ""}`}>
      The journey of a thousand miles starts with a single step.
      </p>
     <div className="decorative-bar right-bar"></div> {/* Right Decorative Bar */}
     </div>
    
  );
};

export default Home;
