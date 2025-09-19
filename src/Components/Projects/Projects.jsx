import React from "react";
import { ExternalLink, Github } from "lucide-react";
import './Projects.css';
import ScrambleText from '../ScrambleText/ScrambleText';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import kafka_img from "../../utils/Dashboard.png"
import xstack_img from "../../utils/xtack.jpeg"
// Project data with technologies list and images
export const ProjectData = [

  {
    title: "Kafka yelp-dataset visualization",
    description: "A visualization of the Yelp dataset using Kafka and Elasticsearch.",
    githublink: "https://github.com/NirajanBanjade/Learning_kafka",
    image: kafka_img,
    technologies: ["Kafka", "Elasticsearch", "Python", "Kaggle", "Spark"]
  },
  {
    title : "Xstack (a copy extension of xstack)",
    description: "Xstack is a Chrome extension that lets you copy and manage multiple snippets of text — no more lost copies.",
    githublink: "https://github.com/NirajanBanjade/Xstack",
    image: xstack_img,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },

  {
    title: "Kwizzy",
    description: "Kwizzy is an AI-powered quiz platform that generates personalized assessments in real time. It supports adaptive feedback, secure login, and performance analytics to enhance learning outcomes.",
    githublink: "https://github.com/NirajanBanjade/Kwizzy",
    projectlink: "https://kwizzy-ai.vercel.app",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "JWT"]
  },
  {
    title: "Library Management System",
    description: "A full-stack system to manage books, users, and issue/return transactions. Includes admin dashboard, user authentication, and inventory tracking features.",
    githublink: "https://github.com/NirajanBanjade/Library-Management",
    projectlink: "https://library-management-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "N-Store",
    description: "A dynamic mock e-commerce platform for tech products, featuring a seamless user interface and responsive design.",
    githublink: "https://github.com/NirajanBanjade/E-commerce-Website",
    projectlink: "https://n-store-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Mapmarker",
    description: "MapMarker is a smart parking and location tracking app that helps users find, track, and manage their parking spots efficiently. It features GPS-based tracking, real-time status updates, and intuitive time management.",
    githublink: "https://github.com/NirajanBanjade/Mapmarker",
    projectlink: "https://mapmarker-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React.js", "Tailwind CSS"]
  }
]


const ProjectCard = ({ title, description, githublink, projectlink, technologies, image, index }) => {
  return (
    <RevealOnScroll direction="up" delay={index * 0.2}>
      <div className="project-card">
        <div className="project-image-container">
          <img 
            src={image} 
            alt={title}
            className="project-image"
            loading="lazy"
          />
          <div className="project-overlay">
            <div className="project-links">
              {githublink?.trim() && (
                <a href={githublink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github className="icon" />
                  <span>Code</span>
                </a>
              )}

            </div>
          </div>
        </div>
        
        <div className="project-content">
          <div className="project-header">
            <h3>
              <ScrambleText 
                text={title} 
                delay={200}
                duration={800}
                triggerOnScroll={true}
              />
            </h3>
          </div>
          
          <p className="project-description">
            <ScrambleText 
              text={description} 
              delay={400}
              duration={1000}
              triggerOnScroll={true}
            />
          </p>
          
          <div className="tech-stack">
            {technologies.map((tech, techIndex) => (
              <RevealOnScroll 
                key={techIndex} 
                direction="scale" 
                delay={1000 + (index * 200) + (techIndex * 100)}
              >
                <span className="tech-tag">{tech}</span>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};


const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        {/* Header Section */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="projects-header">
            <h3>
              <ScrambleText 
                text="My Projects" 
                delay={200}
                duration={800}
                triggerOnScroll={true}
              />
            </h3>
            <p className="projects-subtitle">
              <ScrambleText 
                text="Some of many are listed here." 
                delay={400}
                duration={1000}
                triggerOnScroll={true}
              />
            </p>
          </div>
        </RevealOnScroll>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              githublink={project.githublink}
              projectlink={project.projectlink}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
