import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Abdul Rafay. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/rafay0704" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abdul-rafay-ab3ba0170" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;