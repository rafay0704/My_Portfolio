import React, { useEffect, useRef } from 'react';

interface SkillCircleProps {
  name: string;
  percentage: number;
  logo: string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ name, percentage, logo }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (circleRef.current) {
            circleRef.current.style.strokeDashoffset = `${440 - (440 * percentage) / 100}`;
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (circleRef.current) {
      observer.observe(circleRef.current.parentElement as HTMLElement);
    }
    
    return () => {
      if (circleRef.current?.parentElement) {
        observer.unobserve(circleRef.current.parentElement as HTMLElement);
      }
    };
  }, [percentage]);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-20 w-20 mb-2">
        <svg width="80" height="80" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r="70"
            fill="none"
            stroke="#1e293b"
            strokeWidth="8"
            strokeDasharray="440"
            strokeDashoffset="0"
          />
          <circle
            ref={circleRef}
            cx="70"
            cy="70"
            r="70"
            fill="none"
            stroke="#64ffda"
            strokeWidth="8"
            strokeDasharray="440"
            strokeDashoffset="440"
            className="transition-all duration-1000 ease-out"
            transform="rotate(-90 70 70)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-medium">
          {logo}
        </div>
      </div>
      <p className="text-sm font-medium text-center">{name}</p>
      <p className="text-xs text-slate-400 text-center">{percentage}%</p>
    </div>
  );
};

export default SkillCircle;