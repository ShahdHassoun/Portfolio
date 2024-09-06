import React from 'react';
import ProjectCard from './ProjectCard';
import heartAttackPredictionImg from '../assets/pro2.png';
import coral from '../assets/pro1.png';
const ProjectsList = () => {
  const projects = [
    {
      title: "Machine Learning for Heart Attack Prediction",
      description: "A medical desktop web application, built to save patients' lives. ",
      imageUrl: heartAttackPredictionImg,
      projectLink: "https://github.com/ShahdHassoun/GraduationProj.git"
    },
    {
      title: "COR’AL",
      description: "A PWA e-commerce web application for a general store that sells a multitude of products.",
      imageUrl: coral,
      projectLink: "https://ahmadhsarrawi.github.io/frontend-final-1"
    },
  ];

  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
