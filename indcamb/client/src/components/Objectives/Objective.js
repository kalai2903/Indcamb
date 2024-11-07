import React from 'react';
import './Objectives.css'; // Import the CSS file for styling

const Objectives = () => {
    return (
        <div className="objectives-container">
            <h2 className="objectives-title">Objectives</h2>
            <div className="objectives-list">
                <div className="objective-item">
                    <h3 className="objective-number" style={{ color: '#2E5031' }}>01</h3>
                    <p className="objective-text">
                        To Empower Women through formation of Self Help Group and promote
                        credit management and micro enterprises for the economic development
                        of rural women.
                    </p>
                </div>
                <div className="objective-item">
                    <h3 className="objective-number" style={{ color: '#93C572' }}>02</h3>
                    <p className="objective-text">
                        To create awareness among the community through trainings and seminars
                        and campaigns with the guidance of SIRD-PR-TN.
                    </p>
                </div>
                <div className="objective-item">
                    <h3 className="objective-number" style={{ color: '#4091FF' }}>03</h3>
                    <p className="objective-text">
                        To help and facilitate the rural community to get government-sponsored
                        development programme and help to lead sustainable livelihood.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Objectives;
