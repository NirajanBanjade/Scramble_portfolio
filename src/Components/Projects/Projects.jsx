import React from "react";
import './Projects.css';
import ScrambleText from '../ScrambleText/ScrambleText';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import kafka_img from "../../utils/Dashboard.png"
import xstack_img from "../../utils/xtack.jpeg"
import morse from "../../utils/morse.png"
import book from "../../utils/book.png"

// Project data with technologies list and images

import { Github } from "lucide-react";
export const ProjectData = [

  {
    title: "BookHive",
    description: "BookHive is a MERN-stack collaborative reading platform supporting 80+ active users and 130+ records. I led backend API development, defined product requirements for authentication and group management, and coordinated a 4-person Agile team using Jira to deliver real-time interactions and data-driven feature iterations.",
    githublink: "https://github.com/NirajanBanjade/Bookhive",
    image: book,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Jira", "Agile"]
  },
  
  {
    title: "Real-Time Yelp Analytics Pipeline",
    description: "A streaming data architecture built using Kafka and Python for near real-time sentiment analysis at scale. The system processes live data streams and visualizes insights through Elasticsearch and Kibana dashboards, enabling actionable business intelligence from large-scale review datasets.",
    githublink: "https://github.com/NirajanBanjade/Learning_kafka",
    image: kafka_img,
    technologies: ["Kafka", "Python", "Elasticsearch", "Kibana"],

  },
  
  {
    title: "Real-Time Morse Code Decoder",
    description: "A modular computer vision pipeline that decodes Morse code from live webcam and offline video sources using OpenCV. The system applies adaptive signal processing techniques to ensure robust decoding under variable lighting and environmental conditions.",
    githublink: "https://github.com/NirajanBanjade/Morse_code_Comp_vision",
    image: morse,
    technologies: ["Python", "OpenCV", "Computer Vision"]
  },
  
  {
    title : "Xstack",
    description: "Xstack is a Chrome extension that lets users copy, store, and manage multiple text snippets seamlessly, preventing lost clipboard content and improving productivity through persistent snippet management.",
    githublink: "https://github.com/NirajanBanjade/Xstack",
    image: xstack_img,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  
  {
    title: "Kwizzy",
    description: "Kwizzy is an AI-powered quiz platform that generates personalized assessments in real time, offering adaptive feedback, secure authentication using JWT, and analytics-driven performance tracking to enhance learning outcomes.",
    githublink: "https://github.com/NirajanBanjade/Kwizzy",
    projectlink: "https://kwizzy-ai.vercel.app",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?...",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "JWT"]
  },
  
  {
    title: "Library Management System",
    description: "A full-stack application for managing books, users, and issue-return transactions with secure authentication, admin dashboards, and real-time inventory tracking built using the MERN stack.",
    githublink: "https://github.com/NirajanBanjade/Library-Management",
    projectlink: "https://library-management-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?...",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  
  {
    title: "N-Store",
    description: "A responsive mock e-commerce platform for tech products featuring dynamic product listings, shopping cart functionality, and a seamless UI built with React and Tailwind CSS.",
    githublink: "https://github.com/NirajanBanjade/E-commerce-Website",
    projectlink: "https://n-store-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?...",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  
  {
    title: "Mapmarker",
    description: "MapMarker is a smart parking and GPS-based location tracking application that allows users to save, monitor, and manage parking spots with intuitive time tracking and real-time status updates.",
    githublink: "https://github.com/NirajanBanjade/Mapmarker",
    projectlink: "https://mapmarker-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?...",
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
