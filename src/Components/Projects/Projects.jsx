import React from "react";
import { ExternalLink, Github } from "lucide-react";
import './Projects.css'

// Project data with technologies list
export const ProjectData = [
  {
    title: "Kwizzy",
    description: "Kwizzy is an AI-powered quiz platform that generates personalized assessments in real time. It supports adaptive feedback, secure login, and performance analytics to enhance learning outcomes.",
    githublink: "https://github.com/NirajanBanjade/Kwizzy",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "JWT"]
  },
  {
    title: "Library Management System",
    description: "A full-stack system to manage books, users, and issue/return transactions. Includes admin dashboard, user authentication, and inventory tracking features.",
    githublink: "https://github.com/NirajanBanjade/Library-Management",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "N-Store",
    description: "A dynamic mock e-commerce platform for tech products, featuring a seamless user interface and responsive design.",
    githublink: "https://github.com/NirajanBanjade/E-commerce-Website",
    // projectlink: "https://nstore-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Mapmarker",
    description: "MapMarker is a smart parking and location tracking app that helps users find, track, and manage their parking spots efficiently. It features GPS-based tracking, real-time status updates, and intuitive time management.",
    githublink: "https://github.com/NirajanBanjade/Mapmarker",
    technologies: ["React.js", "Tailwind CSS"]
  }

]


const ProjectCard = ({ title, description, githublink, projectlink, technologies }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <div className="project-links">
          {githublink?.trim() && (
            <a href={githublink} target="_blank" rel="noopener noreferrer">
              <Github className="icon" />
            </a>
          )}
          {projectlink?.trim() && (
            <a href={projectlink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="icon" />
            </a>
          )}
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};


const Projects = () => {
  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className=" mb-16">
          <h3 >My Projects</h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Some of many are listed here.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 np">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githublink={project.githublink}
              projectlink={project.projectlink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
