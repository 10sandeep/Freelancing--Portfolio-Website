import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Code, X, ArrowRight, Zap, Eye, Clock } from 'lucide-react';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // For 3D transform effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // For particle glow effect
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, opacity: number}>>([]);
  
  // For animated background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Generate random particles
  useEffect(() => {
    if (isHovered) {
      const newParticles = Array(20).fill(0).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.2
      }));
      setParticles(newParticles);
    }
  }, [isHovered]);
  
  // Handle animated background
  useEffect(() => {
    if (!canvasRef.current || !isHovered) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let animationFrameId: number;
    let t = 0;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 40;
      const xOffset = (t % gridSize) - gridSize;
      const yOffset = (t % gridSize) - gridSize;
      
      // Horizontal lines
      for (let y = yOffset; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let x = xOffset; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw glow around cursor position
      const gradient = ctx.createRadialGradient(
        cursorPosition.x, cursorPosition.y, 0, 
        cursorPosition.x, cursorPosition.y, 100
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursorPosition.x, cursorPosition.y, 100, 0, Math.PI * 2);
      ctx.fill();
      
      t += 0.5;
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, cursorPosition]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };
    
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);
  
  // Lock scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Get category style
  const getCategoryStyle = (category: string) => {
    const styles = {
      web: {
        gradient: 'from-blue-600 via-blue-500 to-cyan-400',
        accent: 'border-blue-500',
        icon: 'bg-blue-500'
      },
      mobile: {
        gradient: 'from-purple-600 via-purple-500 to-pink-400',
        accent: 'border-purple-500',
        icon: 'bg-purple-500'
      },
      ai: {
        gradient: 'from-teal-600 via-teal-500 to-green-400',
        accent: 'border-teal-500',
        icon: 'bg-teal-500'
      },
      default: {
        gradient: 'from-gray-600 via-gray-500 to-gray-400',
        accent: 'border-gray-500',
        icon: 'bg-gray-500'
      }
    };
    
    return styles[category as keyof typeof styles] || styles.default;
  };
  
  const categoryStyle = getCategoryStyle(project.category);

  return (
    <>
      <div 
        ref={cardRef}
        className={`group relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 cursor-pointer translate-y-0 hover:-translate-y-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setShowModal(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          transform: isHovered 
            ? `perspective(1000px) translateY(-8px) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * -8}deg) scale3d(1.04, 1.04, 1.04)`
            : 'perspective(1000px) translateY(0) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
        }}
      >
        {/* Animated background canvas */}
        <canvas 
          ref={canvasRef}
          className={`absolute inset-0 transition-opacity duration-500 z-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Outer glowing border */}
        <div className="absolute inset-0 -top-1 rounded-2xl p-[1px] z-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryStyle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md`}></div>
        </div>
        
        {/* Inner card container */}
        <div className="relative z-10 bg-gray-900 bg-opacity-90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
          {/* Particle effects */}
          {isHovered && particles.map((particle, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white z-10"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255, 255, 255, 0.6)`,
                animation: `float ${Math.random() * 4 + 3}s infinite ease-in-out`
              }}
            />
          ))}
          
          {/* Futuristic geometric accent lines - moved higher */}
          <div className="absolute top-0 left-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute top-0 right-4 w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-0 left-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-0 right-12 w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          
          {/* Category badge - moved to top edge for earlier visibility */}
          <div className="absolute -top-3 right-6 z-30">
            <span className={`flex items-center text-xs font-bold px-4 py-1.5 rounded-full bg-gray-800 text-white border-l-4 ${categoryStyle.accent} shadow-lg backdrop-blur-sm`}>
              <span className={`w-2 h-2 rounded-full ${categoryStyle.icon} mr-2 animate-pulse`}></span>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
          
          {/* Project Image with advanced overlay - slightly shorter */}
          <div className="relative overflow-hidden h-56">
            {/* Image overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/60 z-10"></div>
            
            {/* Animated scan line effect */}
            <div className={`absolute inset-0 z-10 overflow-hidden ${isHovered ? 'opacity-20' : 'opacity-0'} transition-opacity duration-500`}>
              <div className="absolute inset-0 opacity-20" style={{ 
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                backgroundSize: '100% 4px',
                animation: 'scanlines 0.5s linear infinite'
              }}></div>
            </div>
            
            {/* Project image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
            />
            
            {/* Futuristic floating stats - moved to top */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-start items-center bg-gradient-to-b from-gray-900/90 via-gray-900/40 to-transparent">
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-xs text-white font-medium px-2 py-1 rounded-md bg-gray-800/70 backdrop-blur-sm">
                  <Zap size={14} className="mr-1.5 text-yellow-400" />
                  <span>{Math.floor(Math.random() * 50) + 50}</span>
                </div>
                <div className="flex items-center text-xs text-white font-medium px-2 py-1 rounded-md bg-gray-800/70 backdrop-blur-sm">
                  <Eye size={14} className="mr-1.5 text-blue-400" />
                  <span>{Math.floor(Math.random() * 900) + 100}</span>
                </div>
                <div className="flex items-center text-xs text-white font-medium px-2 py-1 rounded-md bg-gray-800/70 backdrop-blur-sm">
                  <Clock size={14} className="mr-1.5 text-green-400" />
                  <span>{Math.floor(Math.random() * 60) + 10}m</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card content with neon accents - increased padding at top */}
          <div className="relative p-6 pt-4 z-10">
            {/* Title with animated underline */}
            <div className="mb-3">
              <h3 className="text-xl font-bold text-white relative inline-block">
                {project.title}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r ${categoryStyle.gradient} group-hover:w-full transition-all duration-500 ease-in-out`}></span>
              </h3>
            </div>
            
            {/* Description with fade-in */}
            <p className="text-gray-300 mb-3 line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              {project.shortDescription}
            </p>
            
            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs text-gray-300 px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Futuristic call-to-action */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm font-medium relative overflow-hidden">
                <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${categoryStyle.gradient} transform translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  Explore Project
                </span>
                <ArrowRight size={16} className="ml-2 text-white transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Modal - shifted up slightly */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-8 bg-black/80 backdrop-blur-lg">
          {/* Modal card */}
          <div 
            ref={modalRef}
            className="relative bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-gray-800 shadow-2xl translate-y-0"
            style={{
              animation: 'modalEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Top floating action buttons */}
            <div className="absolute top-4 right-4 z-30 flex gap-2">
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${categoryStyle.gradient} hover:opacity-90 text-white font-medium px-3 py-1.5 rounded-full flex items-center transition-all duration-300 relative overflow-hidden`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="relative z-10 text-sm">Live</span>
                  <ExternalLink size={14} className="ml-1 relative z-10" />
                </a>
              )}
              
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-3 py-1.5 rounded-full flex items-center transition-colors duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Code
                  <Code size={14} className="ml-1" />
                </a>
              )}
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(false);
                }}
                className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 p-1.5 rounded-full transition-colors focus:outline-none"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Category badge at top */}
            <div className="absolute top-4 left-4 z-30">
              <span className={`flex items-center text-sm font-bold px-4 py-1.5 rounded-full bg-gray-800/80 text-white border-l-4 ${categoryStyle.accent} backdrop-blur-sm`}>
                <span className={`w-2 h-2 rounded-full ${categoryStyle.icon} mr-2 animate-pulse`}></span>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
            
            {/* Full-width hero image */}
            <div className="relative w-full aspect-video">
              {/* Image overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent opacity-40 z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Project title overlay near top */}
              <div className="absolute top-16 left-0 right-0 p-8 z-20">
                <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {project.title}
                </h2>
                <p className="text-xl text-gray-200 opacity-90 max-w-2xl line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>
              
              {/* Project metadata overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies && project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs text-gray-200 px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 items-center mt-4">
                  {/* Client */}
                  {project.client && (
                    <span className="flex items-center text-sm font-medium px-4 py-1.5 rounded-full bg-gray-800/80 text-white backdrop-blur-sm">
                      Client: {project.client}
                    </span>
                  )}
                  
                  {/* Timeline */}
                  {project.timeline && (
                    <span className="flex items-center text-sm font-medium px-4 py-1.5 rounded-full bg-gray-800/80 text-white backdrop-blur-sm">
                      <Clock size={14} className="mr-2 text-blue-400" />
                      {project.timeline}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Modal content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 max-h-[50vh] overflow-auto">
              {/* Main content */}
              <div className="md:col-span-12 space-y-8">
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Project details in columns */}
                  <div className="md:col-span-4 space-y-6">
                    {/* Project Overview */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <div className={`w-1 h-12 rounded-full mr-4 ${categoryStyle.icon}`}></div>
                        Project Overview
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-4 space-y-6">
                    {/* Problem Solved */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <div className="w-1 h-12 rounded-full mr-4 bg-red-500"></div>
                        Problem Solved
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-4 space-y-6">
                    {/* Solution */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <div className="w-1 h-12 rounded-full mr-4 bg-green-500"></div>
                        Solution
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global styles */}
      <style jsx global>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes borderGlow {
          0% {
            left: -20px;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes scanlines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectCard;