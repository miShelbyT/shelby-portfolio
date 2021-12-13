import React from 'react'

function ProjectCard({ project }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={project.image} alt="shelby project gif" />
        </div>

        <div className="flip-card-back">
          <h2>
            <strong>{project.title}</strong>
            {project.subheader}
          </h2>
          <p>{project.moreText}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            <button>Click To View {project.buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
