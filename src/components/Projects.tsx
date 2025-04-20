import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const categories = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
    
  // Animation for section reveal
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
      id="projects" 
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMzM2NiIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0zNiAzMGgtNlYwaDZ2MzB6bTAgMzBoLTZWNDJoNnYxOHoiLz48cGF0aCBkPSJNNjAgMTJ2Nkgwdi02aDYwek02MCA0MnY2SDB2LTZoNjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header with futuristic styling */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4 -mt-16">
            Featured Projects
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of next-generation digital experiences that push the boundaries of technology and design
          </p>
        </div>
        
        {/* Filter Buttons with futuristic design */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`relative px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden group ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-cyan-500/50'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              {/* Animated highlight effect */}
              <span className={`absolute inset-0 w-full h-full ${filter !== category ? 'bg-gray-800/50 opacity-0 group-hover:opacity-100' : ''} transition-opacity duration-300`}></span>
              
              {/* Button text with optional glow */}
              <span className={`relative z-10 ${filter === category ? 'text-white' : 'group-hover:text-gray-100'}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              
              {/* Animated bottom border on hover */}
              {filter !== category && (
                <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"></span>
              )}
            </button>
          ))}
        </div>
        
        {/* Projects Grid with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${150 * index + 400}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* CTA with futuristic styling */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center px-10 py-4 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
          >
            {/* Animated glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            {/* Arrow animation */}
            <span className="relative flex items-center">
              <span>Initiate Project Collaboration</span>
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-24 h-24 border border-blue-500/20 rounded-lg rotate-45 opacity-70"></div>
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 border border-cyan-500/20 rounded-lg -rotate-12 opacity-70"></div>
    </section>
  );
};

export default Projects;