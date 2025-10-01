import { projects } from "../data/projectsData.js";

const RecentProjects = () => {
  return (
    <div className="bg-black py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="pb-2 tracking-tighter font-semibold 
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
                         bg-clip-text text-transparent leading-tight">
            Recent Projects
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-sm mt-3 sm:mt-4 max-w-2xl mx-auto px-2 sm:px-4">
            Empower your future with designs built to match your vision.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
             gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-12 md:gap-y-14 
             max-w-5xl mx-auto justify-items-center"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#141414] rounded-xl border border-gray-800 
                 overflow-hidden hover:border-gray-500 
                 transition-all duration-300 hover:scale-[1.02] 
                 hover:shadow-xl hover:shadow-gray-900/40 
                 cursor-pointer w-[280px] sm:w-[300px] md:w-[320px] lg:w-[330px]"
            >
              {/* Project Image */}
              <div
                className="h-40 sm:h-48 md:h-52 lg:h-45 
                   bg-gradient-to-br from-gray-900 to-gray-700 
                   bg-cover bg-center bg-no-repeat 
                   flex items-center justify-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3
                  className="text-lg sm:text-xl md:text-xl font-bold 
                     bg-gradient-to-r from-gray-500 via-gray-100 to-gray-700 
                     bg-clip-text text-transparent 
                     mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-400 text-xs sm:text-xs leading-relaxed 
                    group-hover:text-gray-300 transition-colors duration-300"
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="text-xs sm:text-xs text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    GitHub →
                  </button>
                  <button
                    onClick={() => window.open(project.liveLink, "_blank")}
                    className="text-xs sm:text-xs text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default RecentProjects;
