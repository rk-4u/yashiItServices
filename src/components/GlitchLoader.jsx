import React from "react";
import "./GlitchLoader.css"; // Import loader styles

const GlitchLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default GlitchLoader;
