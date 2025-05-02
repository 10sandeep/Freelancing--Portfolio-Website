import React from "react";
import { ArrowUpCircle } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sandeep Nayak. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Back to top
            <ArrowUpCircle size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;