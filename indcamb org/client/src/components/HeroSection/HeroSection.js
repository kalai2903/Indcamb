import React from 'react';
import './HeroSection.css'; // Create and style this CSS file for hero styling

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>SRDS TRANSMOGRIFY</h1>
                <p>At SRDS, we empower the underprivileged through our education, skilling, and livelihood programs...</p>
                <button className="btn-primary">Get Involved</button>
            </div>
            <div className="hero-image">
                <img src="path-to-your-image.jpg" alt="Smiling child" />
            </div>
        </section>
    );
};

export default HeroSection;