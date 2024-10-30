import React from 'react';
import './StatsSection.css';

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stat-item">
        <h2>40K</h2>
        <p>Endangered Species</p>
      </div>
      <div className="stat-item">
        <h2>800</h2>
        <p>Volunteers</p>
      </div>
      <div className="stat-item">
        <h2>140</h2>
        <p>Conservation Programs</p>
      </div>
      <div className="stat-item">
        <h2>1</h2>
        <p>Earth for Us to Protect</p>
      </div>
    </section>
  );
}

export default StatsSection;
