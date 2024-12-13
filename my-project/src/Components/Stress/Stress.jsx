import React from "react";
import "./Stress.css";

const RelaxGameContainer = () => {
  return (
    <div className="relax-game-container">
      <div className="image-section">
        {/* <img src="/path-to-image/relax-image.jpg" alt="Relax Game" /> */}
      </div>
      <div className="content-section">
        <h1>Relax and Rejuvenate</h1>
        <p>
          Step away from your work and unwind with our fun and engaging relax game.
          Take a few moments to recharge and boost your productivity!
        </p>
        <button className="relax-button">Relax Yourself</button>
      </div>
    </div>
  );
};

export default RelaxGameContainer;