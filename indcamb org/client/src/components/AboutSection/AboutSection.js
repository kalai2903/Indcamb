import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About SRDS</h2>
        <p>
          SRDS is a non-profit organization that focuses on women, children, and underprivileged youth who experience some of the worst living conditions.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
}

export default AboutSection;
