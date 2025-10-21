import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-thumbnail">
        <img src={project.thumbnail} alt={project.title} />
        <div className="project-overlay">
          <span className="view-project">View Project →</span>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;