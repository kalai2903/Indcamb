import React from 'react';
import './Flagship.css';
import image from '../assets/image.png';

const Flagship = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={image} alt="Program Scene 1" className="image" />
      </div>
      <div className="text-section">
        <h1 className="title">AGAI – Our<br/> Flagship Program</h1>
        <div className="description-container">
          <p className="main-description">
            AGAI - Theatre Of Voices is an organization<br/> committed to using the transformative power of<br/> theatre to empower marginalized.
          </p>
          <button className="read-now">Read Now</button>
        </div>
      </div>
    </div>
  );
};

export default Flagship;