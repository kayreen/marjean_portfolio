import React from "react";
import "./Gallery.css";

const Gallery = () => {
  // Array of image paths using importAll()
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("../assets", false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="gallery-container">
      <div className="decorative-bar left-bar"></div> {/* Left Decorative Bar */}
      <h1>Marjean'z Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
            <div className="decorative-bar right-bar"></div> {/* Right Decorative Bar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
