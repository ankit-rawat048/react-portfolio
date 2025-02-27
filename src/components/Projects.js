import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Portfolio Website", description: "A personal portfolio built with React.js", link: "#" },
    { name: "Task Management App", description: "A simple task manager using React and Node.js", link: "#" },
  ];

  return (
    <div className="section projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
