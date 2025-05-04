import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectData } from '../../types';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-primary-800 shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-full bg-primary-700 px-2 py-1 text-xs font-medium text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="mb-2 text-xl font-heading font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm text-slate-300">{project.description}</p>
        
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-heading font-semibold text-white group-hover:text-transparent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-slate-300 group-hover:text-transparent transition-colors duration-300">
          {project.description.length > 50 
            ? `${project.description.substring(0, 50)}...` 
            : project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;