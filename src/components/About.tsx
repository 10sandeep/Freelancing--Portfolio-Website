import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Sparkles,
  Zap,
  Layers,
  Brain,
  LineChart,
  Award,
  Briefcase,
  Rocket,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "JavaScript/TypeScript", level: 90, category: "frontend" },
    { name: "React & React Native", level: 85, category: "frontend" },
    { name: "Node.js & Express", level: 80, category: "backend" },
    { name: "HTML & CSS", level: 95, category: "frontend" },
    { name: "UI/UX Design", level: 75, category: "design" },
    { name: "Database Management", level: 70, category: "backend" },
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

  // Interactive experience chart data
  const experienceData = [
    {
      year: "2022",
      project: "E-commerce Platform",
      role: "Frontend Developer",
    },
    { year: "2024", project: "Audo Book", role: "Frontend Developer" },
    { year: "2025", project: "Agri on Wheels", role: "Frontend Developer" },
    {
      year: "2025",
      project: "Interior Design Website",
      role: "Frontend Developer",
    },
    {
      year: "2025",
      project: "Photography Portfolio Website",
      role: "Frontend Developer",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Simple background elements - RESTORED FROM ORIGINAL */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Simple glow effect - RESTORED FROM ORIGINAL */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Simple heading - RESTORED FROM ORIGINAL */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 -mt-16">
              About Me
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <p className="text-lg text-gray-400 mt-6">
              Creating the future with code and design
            </p>
          </div>

          {/* Interactive tabs - NEW CONTENT */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-cyan-500/5">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-800 pb-4">
              {[
                {
                  id: "story",
                  label: "My Story",
                  icon: <Sparkles size={18} />,
                },
                { id: "skills", label: "Skills", icon: <Brain size={18} /> },
                {
                  id: "journey",
                  label: "Journey",
                  icon: <LineChart size={18} />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[400px]">
              {/* My Story Tab */}
              {activeTab === "story" && (
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3 space-y-6">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                      Digital Craftsman
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Hi, I’m a Frontend Developer with 1+ years of experience
                      crafting interactive, high-performance web applications. I
                      specialize in React.js, Next.js, and TailwindCSS, with a
                      strong focus on creating seamless user experiences and
                      clean, maintainable code. My journey has been deeply
                      rooted in building platforms that empower learning and
                      career development, including e-learning systems, video
                      hosting features, and robust authentication flows.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Currently working as a Project Executive at Centurion
                      University of Technology and Management, I collaborate
                      closely with teams to develop impactful digital solutions.
                      One of my recent endeavors involves a serverless cloud
                      platform—featuring a real-time message queue
                      system—designed to help developers build and scale
                      efficiently.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        {
                          Icon: Code,
                          title: "Clean Code",
                          desc: "Crafting elegant, readable solutions",
                        },
                        {
                          Icon: Zap,
                          title: "Performance",
                          desc: "Optimizing for lightning-fast experiences",
                        },
                        {
                          Icon: Layers,
                          title: "Architecture",
                          desc: "Building scalable system foundations",
                        },
                        {
                          Icon: Brain,
                          title: "Innovation",
                          desc: "Pushing boundaries with new approaches",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/30 group transition-all duration-300"
                        >
                          <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                            <item.Icon size={20} className="text-white" />
                          </div>
                          <h4 className="text-white font-medium">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 relative">
                    <div className="aspect-square rounded-2xl overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-70 opacity-50 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-6">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                            <span className="text-4xl font-bold">SN</span>
                          </div>
                          <h4 className="text-xl font-bold mb-2">
                            Sandeep Nayak
                          </h4>
                          <p className="text-cyan-400 mb-4">
                            Full-Stack Developer
                          </p>
                          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === "skills" && (
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4 mb-8">
                    {["all", "frontend", "backend", "design"].map(
                      (category) => (
                        <button
                          key={category}
                          className={`px-4 py-1 rounded-full text-sm transition-all ${
                            true
                              ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30"
                              : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                          }`}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      )
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-800/70 rounded-full overflow-hidden backdrop-blur-sm">
                          <div
                            className="h-full rounded-full relative"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              background:
                                "linear-gradient(90deg, rgba(34,211,238,1) 0%, rgba(125,83,219,1) 100%)",
                            }}
                          >
                            <div className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-8">
                    {[
                      { value: "1+", label: "Years Experience" },
                      { value: "4+", label: "Projects Completed" },
                      { value: "5+", label: "Happy Clients" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                          {stat.value}
                        </h4>
                        <p className="text-gray-400 mt-2">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Journey Tab */}
              {activeTab === "journey" && (
                <div className="space-y-8">
                  <div className="relative">
                    {/* Timeline */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-px h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

                    <div className="space-y-12">
                      {experienceData.map((exp, i) => (
                        <div
                          key={i}
                          className={`relative flex items-center ${
                            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                          }`}
                        >
                          <div
                            className={`flex-1 ${
                              i % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12"
                            }`}
                          >
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
                              <span className="text-sm text-cyan-400 font-medium">
                                {exp.year}
                              </span>
                              <h4 className="text-xl font-bold mt-2 mb-1">
                                {exp.project}
                              </h4>
                              <p className="text-gray-400">{exp.role}</p>
                            </div>
                          </div>

                          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600">
                            <div className="absolute inset-0 rounded-full animate-ping bg-cyan-500 opacity-30"></div>
                          </div>

                          <div className="flex-1 hidden md:block"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
