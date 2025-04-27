import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Optional: Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-lg ${
        scrolled
          ? "bg-black/60 border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="relative text-2xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              NEXUS
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="relative flex rounded-full bg-black/30 backdrop-blur-md p-1 border border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:text-white group ${
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-90 blur-sm -z-10"></span>
                  )}
                  <span className="relative z-10">{item.title}</span>
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 -z-20"></span>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none  relative z-50 group"
            aria-label="Toggle menu"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
              {isOpen ? (
                <X size={30} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu - Now with solid black background */}
        <div
          className={`md:hidden fixed inset-0 pt-20 mt-20 z-40  ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-full flex flex-col  justify-center items-center pt-16 ">
            {/* Background Overlay */}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0  h-full  w-1.5/3   `}>
              {/* <div className={`fixed inset-0 z-40 bg-gradient-to-t from-blue-950 via-blue-800 to-black blur-md transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
</div> */}
              <nav className="flex flex-col items-end space-y-6 text-right w-full px-8 pt-10 pb-10 pr-20 bg-gradient-to-t from-blue-950 via-blue-800 to-black rounded-3xl">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`text-2xl font-semibold transition-all duration-300 py-2 ${
                      activeSection === item.href.substring(1)
                        ? "text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text"
                        : "text-white hover:text-gray-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <div className="pt-10">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-8 py-3 rounded-full font-bold inline-block transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    Let's Talk
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
