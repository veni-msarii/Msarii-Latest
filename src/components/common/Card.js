import React from "react";

const Card = ({ imageURL, name, role, description, skills,socialLinks }) => {
  return (
    <div className="cardTeam">
      <img src={imageURL} alt={name} className="card-image" />
      <h3 className="cardTeam-name">{name}</h3>
      <h4 className="cardTeam-role">{role}</h4>
      <p className="cardTeam-description">{description}</p>
      <div className="cardTeam-skills">
        {skills.map((skill, index) => (
          <span key={index} className="cardTeam-skill">
            {skill}
          </span>
        ))}
      </div>
      <div className="social-links">
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <img
            src={socialLinks.facebook}
            alt="Facebook"
            className="social-icon"
          />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <img
            src={socialLinks.instagram}
            alt="Instagram"
            className="social-icon"
          />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img
            src={socialLinks.twitter}
            alt="Twitter"
            className="social-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
