import React from 'react';
import './TestPage.css'; // Import the CSS file
import event1 from '../Assets/job-satisfaction.png';
import event2 from '../Assets/fear.png';
import event3 from '../Assets/progress.png';
import event4 from '../Assets/physical-wellbeing.png';

const TestPage = () => {
  return (
    <div className="full-screen">
      <div className="container">
        {/* Header Section as div */}
        <div className="header-section">
          <div className="header-text">
            <h1>Welcome to the Assessment Portal</h1>
            <p>
              Explore the key areas that impact professional and personal growth. 
              Select the section that resonates with your needs and dive into our curated resources.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="box-container">
          {/* Section 1 */}
          <div className="box">
            <img className="img" src={event1} alt="Job Satisfaction" />
            <div className="content">
              <h4>Job Satisfaction & Support</h4>
              <p>
                Focuses on teachers' satisfaction with resources, support, 
                recognition, workload, and career growth opportunities.
              </p>
              <h5><strong>Duration:</strong>10mins</h5>

              <button className="btn">Take test</button>
            </div>
          </div>

          {/* Section 2 */}
          <div className="box">
            <img className="img" src={event2} alt="Stress Management" />
            <div className="content">
              <h4>Stress Management & Workload</h4>
              <p>
                Helps manage stress and workload effectively, ensuring mental and
                emotional well-being.
              </p>
              <h5><strong>Duration:</strong>10mins</h5>
              <button className="btn">Take test</button>
            </div>
          </div>

          {/* Section 3 */}
          <div className="box">
            <img className="img" src={event3} alt="Professional Development" />
            <div className="content">
              <h4>Professional Development & Collaboration</h4>
              <p>
                Provides opportunities for skill-building, collaboration, and
                professional growth.
              </p>
              <h5><strong>Duration:</strong>10mins</h5>

              <button className="btn">Take test</button>
            </div>
          </div>

          {/* Section 4 */}
          <div className="box">
            <img className="img" src={event4} alt="Emotional Well-Being" />
            <div className="content">
              <h4>Workplace Environment & Emotional Well-being</h4>
              <p>
                Focuses on creating a positive workplace environment and fostering
                emotional health.
              </p>
              <h5><strong>Duration:</strong>10mins</h5>

              <button className="btn">Take test</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;