import React from 'react';
import './ProjectCard.css'; // Create a CSS file for styling the card

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-light">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
