import React from 'react';
import { ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-400 mb-4 max-w-md">
              Creating impactful digital experiences that help businesses transform their online presence and achieve their goals.
            </p>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Back to top
              <ArrowUpCircle size={16} className="ml-1" />
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:contact@yourname.com" className="text-gray-400 hover:text-white transition-colors duration-300 ml-2">
                  contact@yourname.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400">Phone:</span>
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors duration-300 ml-2">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400">Location:</span>
                <span className="text-gray-400 ml-2">San Francisco, CA, USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;