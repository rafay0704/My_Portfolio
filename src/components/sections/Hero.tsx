import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Abdul Rafay"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold mb-4">
            <span className="text-accent">{text}</span>
            <span className="animate-blink">|</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-slate-300">
            Full Stack Developer | AI Specialist | Software Architect
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg">
            Crafting innovative digital solutions with cutting-edge technologies and scalable architectures that drive business transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-accent text-primary-900 font-medium rounded hover:bg-accent/90 transition-colors"
            >
              Explore My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-accent text-accent font-medium rounded hover:bg-accent/10 transition-colors"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent">
        <button onClick={scrollToNext} aria-label="Scroll down">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;