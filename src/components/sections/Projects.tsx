import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import { ProjectData } from '../../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'Custom Base CRM',
      description: 'Enterprise-level CRM with AI-powered lead scoring, automated workflow management, and real-time analytics dashboard.',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Web',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/rafay0704'
    },
    {
      id: 2,
      title: 'AI Automation Tools',
      description: 'Suite of AI-powered automation tools for business process optimization, including document processing and workflow automation.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'AI',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/rafay0704'
    },
    {
      id: 3,
      title: 'Microservices Platform',
      description: 'Cloud-native microservices architecture with service mesh, distributed tracing, and automated scaling capabilities.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Web',
      technologies: ['Kubernetes', 'Go', 'gRPC', 'Redis'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/rafay0704'
    },
    {
      id: 4,
      title: 'Edge Computing IoT Platform',
      description: 'Real-time IoT data processing platform utilizing edge computing for smart city applications.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'AI',
      technologies: ['Rust', 'MQTT', 'TinyML', 'InfluxDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/rafay0704'
    },
    {
      id: 5,
      title: 'Web3 DeFi Platform',
      description: 'Decentralized finance platform with smart contracts for lending, borrowing, and yield farming.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Web',
      technologies: ['Solidity', 'Web3.js', 'React', 'Hardhat'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/rafay0704'
    },
    {
      id: 6,
      title: 'AI-Powered Code Assistant',
      description: 'Developer productivity tool using LLMs for code generation, review, and optimization.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'AI',
      technologies: ['PyTorch', 'TypeScript', 'VSCode API', 'OpenAI'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/rafay0704'
    }
  ];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-center">
          My <span className="text-accent">Projects</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Showcasing innovative solutions in cloud-native architecture, AI automation, and emerging technologies.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {['All', 'Web', 'AI', 'Design'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-accent text-primary-900' 
                    : 'bg-primary-800 text-slate-300 hover:bg-primary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;