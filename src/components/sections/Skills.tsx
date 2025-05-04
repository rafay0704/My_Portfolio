import React from 'react';
import SkillCircle from '../ui/SkillCircle';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', percentage: 88, logo: '⚛️' },
        { name: 'TypeScript', percentage: 90, logo: 'TS' },
        { name: 'JavaScript', percentage: 92, logo: 'JS' },
        { name: 'Tailwind', percentage: 95, logo: 'TW' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Firebase', percentage: 85, logo: '🔥' },
        { name: 'Supabase', percentage: 82, logo: 'SB' },
        { name: 'Node.js', percentage: 88, logo: '🟢' },
        { name: 'REST APIs', percentage: 90, logo: 'API' }
      ]
    },
    {
      title: 'Blockchain',
      skills: [
        { name: 'Solidity', percentage: 85, logo: '⟠' },
        { name: 'Web3.js', percentage: 80, logo: 'W3' },
        { name: 'DApps', percentage: 82, logo: '📱' },
        { name: 'Smart Contracts', percentage: 85, logo: '📄' }
      ]
    },
    {
      title: 'Automation',
      skills: [
        { name: 'Make', percentage: 88, logo: '⚡' },
        { name: 'n8n', percentage: 85, logo: 'n8' },
        { name: 'Zapier', percentage: 82, logo: '⚡' },
        { name: 'Workflows', percentage: 90, logo: '🔄' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-center">
          My <span className="text-accent">Skills</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          A comprehensive overview of my technical expertise in modern web development, blockchain technology, and automation solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-primary-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-medium mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCircle
                    key={skillIndex}
                    name={skill.name}
                    percentage={skill.percentage}
                    logo={skill.logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;