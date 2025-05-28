import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { Tilt } from "react-tilt";
import INTERIOR from "../assets/SJ decors.png";
import AGRIONWHEELS from "../assets/Agri On Wheels.png";
import DSF from "../assets/DSF Website.png";
import KHAGRI from "../assets/KH Agriconnect.png";
import MARRIAGE from '../assets/Marriage Event.png'

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<string>("all");

  const projects = [
    {
      title: "Interior Design Website",
      description:
        "A sleek and responsive website showcasing interior design projects, styles, and services. Features include an image-rich gallery, project highlights, and a contact section — all designed with a focus on aesthetics and usability.",
      image: INTERIOR,
      tags: ["React", "Tailwind CSS", "React-router"],
      github:
        "https://github.com/10sandeep/SJ---Decor---Interior-Design---Website",
      demo: "https://sj-decor-interior-design-website.vercel.app/",
      category: "full-stack",
    },
    {
      title: "Agri On Wheels",
      description:
        "A simple and user-friendly platform showcasing agricultural products and services delivered directly to consumers. The site features product listings, service details, and a contact section, designed for easy access and smooth navigation.",
      image: AGRIONWHEELS,
      tags: ["React", "Redux", "Tailwind CSS"],
      github: "https://github.com/10sandeep/Agri-on-Wheels-",
      demo: "https://agri-on-wheels.vercel.app/",
      category: "frontend",
    },
    {
      title: "DSF Portfolio Website",
      description:
        "A modern, responsive portfolio site for showcasing photography work and services with smooth navigation and an elegant, user-friendly design.",
      image: DSF,
      tags: ["React", "React-router", "Tailwind CSS", "Typescript"],
      github: "https://github.com/10sandeep/Photography-Website",
      demo: "https://photography-website-umber.vercel.app/",
      category: "frontend",
    },
    {
      title: "SH Agriconnect",
      description:
        "A modern, responsive website built for KH Agricconnect, a sustainable agriculture solutions provider. The platform highlights their mission to empower rural livelihoods through tech-driven farm tools and trusted trade. Features include a clean UI, intuitive navigation, service discovery, team showcase, and contact integrations to support their outreach and impact goals.",
      image: KHAGRI,
      tags: ["React", "React-router", "Tailwind CSS", "Typescript"],
      github: "https://github.com/10sandeep/KH-Agriconnects",
      demo: "https://kh-agriconnects.vercel.app/",
      category: "frontend",
    },
        {
      title: "Marriage Event Orginizer Website",
      description:
        "A sleek, responsive website for a wedding planning company, featuring service listings, gallery, booking form, and smooth user experience.",
      image: MARRIAGE,
      tags: ["React", "React-router", "Tailwind CSS", "Typescript"],
      github: "https://github.com/10sandeep/Marriage_Event_Management-Website",
      demo: "https://marriage-event-management-website.vercel.app/",
      category: "frontend",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-neon-purple blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-neon-blue blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 -mt-17">
            Featured Project
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-10">
            Explore a selection of my recent work. Each project represents
            unique challenges and solutions implemented with cutting-edge
            technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="glass-effect rounded-full p-1 flex space-x-1">
            {["all", "full-stack", "frontend", "backend"].map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                options={{
                  max: 10,
                  scale: 1.02,
                  speed: 300,
                }}
                className="w-full h-full"
              >
                <div className="glass-effect aspect-square border border-white/10 rounded-xl overflow-hidden group hover:border-neon-blue/30 transition-colors duration-300 flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-2/3 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-effect p-2 rounded-full hover:bg-white/10 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-effect p-2 rounded-full hover:bg-white/10 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex flex-col flex-grow overflow-hidden">
                    <h3 className="font-orbitron text-lg font-bold mb-1 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full glass-effect border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* View more on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/10sandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full glass-effect hover:bg-white/5 transition-colors"
          >
            <Github className="w-5 h-5" />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
