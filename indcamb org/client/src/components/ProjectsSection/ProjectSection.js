import React from 'react';
import './ProjectSection.css';

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="project">
        <h2>Our Projects</h2>
        <p>Each time a woman is empowered, a full circle of life is created.</p>
        <button className="btn">Learn More</button>
      </div>
      <div className="flagship-program">
        <h2>AGAI - Our Flagship Program</h2>
        <p>Theatre Of Voices is committed to empowering marginalized communities.</p>
        <button className="btn">Read Now</button>
      </div>
    </section>
  );
}

export default ProjectsSection;
