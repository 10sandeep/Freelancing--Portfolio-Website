import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, LineChart, Globe, Clock, HeartHandshake, Cpu, Zap } from 'lucide-react';

const ServiceItem = ({ service, index, isVisible }) => {
  return (
    <div 
      className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 shadow-lg hover:shadow-cyan-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${150 * index}ms` }}
    >
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-md transition-opacity duration-500"></div>
      
      {/* Service content */}
      <div className="relative z-10 p-6">
        {/* Icon with glow effect */}
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-500">
            {React.cloneElement(service.icon, { 
              className: `text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300`,
              size: 24
            })}
          </div>
        </div>
        
        {/* Service title with gradient on hover */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
          {service.title}
        </h3>
        
        {/* Description with subtle highlight */}
        <p className="text-gray-400 mb-5 group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>
        
        {/* Features with tech-style bullets */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Interactive hover effect */}
        <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 ease-out"></div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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

  const services = [
    {
      id: 1,
      title: 'Futuristic Web Development',
      description: 'Next-gen websites using cutting-edge technologies with blazing speed, ironclad security, and seamless scalability.',
      icon: <Code className="text-cyan-500" size={28} />,
      features: ['Responsive Design', 'AI-Enhanced SEO', 'Quantum Performance', 'Smart CMS Integration']
    },
    {
      id: 2,
      title: 'Immersive UI/UX Design',
      description: 'Mind-blowing interfaces that create emotional connections through captivating experiences and strategic interaction flows.',
      icon: <Palette className="text-purple-500" size={28} />,
      features: ['3D Wireframing', 'Neuro-UX Research', 'Interactive Prototyping', 'Biometric Usability Testing']
    },
    {
      id: 3,
      title: 'Data-Driven Marketing',
      description: 'AI-powered marketing strategies that leverage advanced analytics to capture specific audiences and maximize conversions.',
      icon: <LineChart className="text-teal-500" size={28} />,
      features: ['Algorithmic SEO', 'Adaptive Content', 'Predictive Analytics', 'Neural Conversion Optimization']
    },
    {
      id: 4,
      title: 'Next-Gen E-commerce',
      description: 'Revolutionary online stores with immersive shopping experiences, frictionless transactions, and intelligent inventory systems.',
      icon: <Globe className="text-blue-500" size={28} />,
      features: ['Smart Shopping Cart', 'Crypto Payment Gateway', 'AI Inventory Management', 'AR/VR Shopping Experience']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDMwaC02VjQyaDZ2MTh6Ii8+PHBhdGggZD0iTTYwIDEydjZIMHYtNmg2MHpNNjAgNDJ2Nkgwdi02aDYweiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      {/* Abstract glowing shapes */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4 -mt-16">
            Cutting-Edge Services
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pioneering solutions to propel your business into the future, combining advanced technology with strategic innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className={`mt-24 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">Why Choose My Services</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elevating digital experiences through a perfect fusion of advanced technology and creative innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="text-cyan-400" size={24} />,
                title: "Hyper-Efficient Delivery",
                description: "Accelerated development cycles using next-gen tools and optimized workflows that deliver results at quantum speed.",
                color: "cyan",
                delay: 700
              },
              {
                icon: <HeartHandshake className="text-blue-400" size={24} />,
                title: "Synergistic Collaboration",
                description: "Deep partnerships built on transparency, constant communication, and a shared vision of your digital future.",
                color: "blue",
                delay: 800
              },
              {
                icon: <Zap className="text-purple-400" size={24} />,
                title: "Performance-Driven",
                description: "Every project engineered with measurable metrics and data-driven insights to maximize ROI and business impact.",
                color: "purple",
                delay: 900
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 hover:border-${item.color}-500/50 transition-all duration-500 shadow-lg hover:shadow-${item.color}-500/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className={`relative flex items-center justify-center w-12 h-12 mb-5 bg-${item.color}-500/10 rounded-lg border border-${item.color}-500/20 group-hover:border-${item.color}-500/50 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400">
                  {item.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-${item.color}-500/50 to-${item.color}-500/20 transition-all duration-700 ease-out`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tech-inspired decorative elements */}
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-20 h-20 border border-cyan-500/20 rounded-lg rotate-45 opacity-70"></div>
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-20 h-20 border border-purple-500/20 rounded-lg -rotate-12 opacity-70"></div>
    </section>
  );
};

export default Services;