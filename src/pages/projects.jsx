import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { projects } from "../data/projectsData";
import AboutStats from "../components/aboutStat";
import RecentProjects from "../components/recentProjects.jsx";
import Dest from "../components/dest.jsx"
import Footer from "../components/footer.jsx"

const Projects = () => {
  const controls = useAnimation();

  const getDuration = () => {
    if (window.innerWidth < 640) return 12; // mobile faster
    if (window.innerWidth < 1024) return 15; // tablet medium
    return 18; // desktop smoother
  };

  const startLoop = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: getDuration(),
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startLoop();
    const handleResize = () => startLoop();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4 sm:px-6 md:px-12 lg:px-20 pt-16 sm:pt-20 lg:pt-20">
         <h1 className="pb-2 tracking-tighter font-medium 
                         text-3xl sm:text-4xl md:text-4xl lg:text-6xl
                         bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
                         bg-clip-text text-transparent leading-tight">
          Beyond the screen, <br/>
          lies an experience.
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-sm max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed">
          The experience starts here. Explore my projects.
        </p>
      </div>

      {/* Only images, auto-scrolling */}
      <div className="relative mt-10 overflow-hidden mb-10">
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -500, right: 0 }}
          onDragEnd={startLoop}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="min-w-[220px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[320px] 
               border-white/20 rounded-3xl backdrop-blur-sm overflow-hidden border-2 
              hover:border-gray-400 transition-all duration-300 p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <AboutStats />
      <RecentProjects />
      <Dest/>
      <Footer/>
    </div>
  );
};

export default Projects;
