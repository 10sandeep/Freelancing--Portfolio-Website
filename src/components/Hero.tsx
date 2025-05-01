import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, ExternalLink, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation
  const [text] = useState("Developer • Designer • Creator");
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  
  useEffect(() => {
    if (typingIndex < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + text[typingIndex]);
        setTypingIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, text]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Modern gradient background with reduced opacity for subtlety */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-blue-950 to-black opacity-80"
        style={{
          transform: `translateX(${(mousePosition.x - 0.5) * -10}px) translateY(${(mousePosition.y - 0.5) * -10}px)`
        }}
      ></div>
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-noise"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-dark opacity-10"></div>
      
      {/* Glass morphism elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-teal-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Top bar with minimal navigation */}
          {/* <div className={`flex justify-between items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">js.</div>
            <div className="flex gap-8">
              <a href="#projects" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div> */}
          
          {/* Main hero content with staggered animation */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-3">
              <span className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 tracking-tight">
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">digital</span> experiences
            </h1>
            
            <div className="h-8 mb-6 overflow-hidden">
              <p className="text-lg font-light text-white/80 flex items-center">
                <span className="inline-block h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mr-4"></span>
                <span className="font-mono">{typedText}<span className="animate-blink">|</span></span>
              </p>
            </div>
            
            <p className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
              I'm <span className="font-medium text-white">Sandeep Nayak</span>, a product-focused developer building seamless, 
              accessible, and performant web applications that solve real problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#projects"
                className="group relative px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Explore my work
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-3 rounded-full border border-white/20 hover:border-white/40 text-white font-medium flex items-center justify-center transition-all duration-300"
              >
                Contact me
                <Mail size={16} className="ml-2 transform group-hover:translate-y-[-2px] transition-transform duration-300" />
              </a>
            </div>
            
            {/* Stats with minimal design */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">30+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">12k+</div>
                <div className="text-sm text-white/60">GitHub Stars</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Responsive social icons - repositioned for mobile */}
      <div className="fixed lg:absolute bottom-0 left-0 w-full lg:w-auto lg:left-6 lg:bottom-12 flex flex-row lg:flex-col justify-center gap-6 py-4 px-2 bg-black/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none transition-all duration-1000 delay-500 z-20" 
        style={{opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <a href="https://github.com/10sandeep?tab=overview&from=2025-01-01&to=2025-01-13" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sandeep-nayak-0547461a9/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://x.com/Sandeep142417" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <div className="hidden lg:block h-24 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 mx-auto"></div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-28 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-700" style={{opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Scroll</p>
        <ChevronDown size={16} className="text-white/50 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;