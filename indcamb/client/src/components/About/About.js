import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <p className="about-intro">
        Social Rural Development Society (SRDS) is a non-profit organisation established in Tamil Nadu to uplift the welfare of women, children, youth, farmers and the marginalised community particularly the dalits and tribes in Tamil Nadu. Since its inception in 1991, SRDS is committed to play a significant role in uplifting the women and children by organizing various community development programme.
      </p>
      <p className="about-intro">
        SRDS is one the training partner of State Institute of Rural Development and Panchayat Raj, Tamil Nadu and mainly organising and conducting training programme in Villupuram and Kallakurichi districts of Tamil Nadu
      </p>

      <h1 className="about-heading">
        MISSION & <span className="highlighted-text"> <br/>VISION.</span>
      </h1>

      <div className="about-content">
        <div className="about-mission-vision">
          <h2>Mission:</h2>
          <p>
            To Improve the Socio economic, political empowerment of SC/ST and other minority people, Paving them equalitarian society and facilitate them dignified life.
          </p>

          <h2>Vision:</h2>
          <p>
            To Remove The under caste dalit minority people (people with disability, children with disability), Transgender, Hiv Aids Victims In pulverised people, young people, under vulnerable life from health hazardous vulnerability and emerge them into socialization process through the use of placing them under dignified life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
