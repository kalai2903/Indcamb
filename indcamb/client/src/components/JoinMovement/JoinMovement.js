import React from 'react';
import './JoinMovement.css';

const JoinMovement = () => {
  return (
    <section className="join-movement-section">
      <h1>JOIN THE MOVEMENT!</h1>
      <p>Get the Latest News & Updates</p>
      <div className="subscription-container">
        <input 
          type="email" 
          placeholder="Enter your email here" 
          className="email-input" 
        />
        <button className="subscribe-button">SUBSCRIBE</button>
      </div>
    </section>
  );
};

export default JoinMovement;