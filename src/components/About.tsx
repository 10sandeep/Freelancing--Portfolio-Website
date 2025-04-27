import React, { useEffect, useRef, useState } from "react";
import { Code, Award, Briefcase, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & React Native", level: 85 },
    { name: "Node.js & Express", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "UI/UX Design", level: 75 },
    { name: "Database Management", level: 70 },
  ];

  // Simple intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      {/* Simple glow effect */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Simple heading */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 -mt-16">
              About Me
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <p className="text-lg text-gray-400 mt-6">
              Creating the future with code and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Digital Creator Content */}
            <div className={`space-y-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Digital Creator
                </h3>
                <p className="text-gray-300">
                  I'm a full-stack developer with 5+ years of experience crafting digital solutions. I combine technical expertise with creative design to build innovative applications that solve complex problems.
                </p>
              </div>

              {/* Simple highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Code, title: "Clean Code", color: "from-cyan-500 to-blue-600" },
                  { Icon: Award, title: "Expert", color: "from-blue-500 to-indigo-600" },
                  { Icon: Briefcase, title: "Experience", color: "from-indigo-500 to-purple-600" },
                  { Icon: Rocket, title: "Innovation", color: "from-purple-500 to-pink-600" },
                ].map(({ Icon, title, color }, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 mb-3 flex items-center justify-center rounded-md bg-gradient-to-br ${color}`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="text-white font-medium">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;