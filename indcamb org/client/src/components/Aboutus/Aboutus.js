import React from 'react';
import './Aboutus.css';

const Team = () => {
  const teamMembers = [
    { name: "Mark Palmer", role: "Wildlife Educator", email: "info@mysite.com" },
    { name: "Joanie Davis", role: "Executive Director", email: "info@mysite.com" },
    { name: "Debbie Stillman", role: "Conservation Director", email: "info@mysite.com" },
    { name: "Sharon Feldman", role: "Program Manager", email: "info@mysite.com" },
    { name: "Brian Wang", role: "Secretary", email: "info@mysite.com" },
    { name: "Danny Williams", role: "Restoration Coordinator", email: "info@mysite.com" },
  ];

  return (
    <div className="team-container">
      <h2>TEAM <br/> MEMBERS.</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <a className="email" href={`mailto:${member.email}`}>{member.email}</a>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
