import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry); // Debugging visibility
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-primary-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-12 text-center">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-5 items-center">
            {/* Image Section */}
            {/* <div className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out fallback-visible">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden border-2 border-accent p-2">
                <div className="absolute inset-0 bg-primary-800/40 z-10"></div>
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional headshot"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div> */}

            {/* Text Section */}
            <div className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300 fallback-visible">
              <h3 className="text-2xl font-heading font-medium mb-4">Professional Journey</h3>
              <p className="text-slate-300 mb-6">
                As a versatile Software Developer and Designer based in Dubai, I bring extensive experience in delivering high-quality, scalable solutions across both professional and freelance environments. My expertise spans end-to-end project lifecycles, from concept to deployment, with a focus on creating efficient, user-friendly applications that drive business growth.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-medium mb-3">Technical Expertise</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Frontend: JavaScript, TypeScript, Tailwind CSS</li>
                    <li>• Backend & Databases: Firebase, Supabase</li>
                    <li>• Blockchain: Smart Contract Development (Solidity), DApp Architecture</li>
                    <li>• Automation & Workflow: Make, n8n, Zapier</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-medium mb-3">Current Focus</h3>
                  <p className="text-slate-300">
                    Currently exploring the intersection of blockchain technology and automated workflows, developing scalable solutions that leverage modern web technologies and smart contract capabilities to create innovative business solutions.
                  </p>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;