const AboutStats = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Vertical separator line between text and stats sections */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2"></div>

          {/* Left Column - Description */}
          <div className="space-y-6 pr-0 lg:pr-10">
            <p className="text-gray-300 text-sm leading-relaxed">
              With a career dedicated to the art of design and development, I
              have honed skills to perfection. My journey has been crafting
              interactive modern interfaces.
            </p>
            <button className="bg-[#141414] border border-gray-700 rounded-full px-4 py-2 text-white font-light 
                               hover:border-gray-400 hover:scale-105 transition-all duration-300">
              More about me
            </button>
          </div>

          {/* Right Column - Stats with internal grid lines */}
          <div className="pl-0 lg:pl-10">
            <div className="grid grid-cols-2 gap-0 relative">
              {/* Internal grid lines */}
              <div className="absolute inset-0">
                {/* Vertical center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2"></div>
                {/* Horizontal center line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700 transform -translate-y-1/2"></div>
              </div>

              {/* Stat Item */}
              <div className="p-6 text-center hover:bg-[#0f0f0f] rounded-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-200 to-gray-600 bg-clip-text text-transparent mb-2">
                  210
                </div>
                <div className="text-sm font-medium text-gray-300">Projects</div>
              </div>

              {/* Stat Item */}
              <div className="p-6 text-center hover:bg-[#0f0f0f] rounded-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-200 to-gray-600 bg-clip-text text-transparent mb-2">
                  85%
                </div>
                <div className="text-sm font-medium text-gray-300">
                  Client Retention
                </div>
              </div>

              {/* Stat Item */}
              <div className="p-6 text-center hover:bg-[#0f0f0f] rounded-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-200 to-gray-600 bg-clip-text text-transparent mb-2">
                  99%
                </div>
                <div className="text-sm font-medium text-gray-300">
                  Project Success
                </div>
              </div>

              {/* Stat Item */}
              <div className="p-6 text-center hover:bg-[#0f0f0f] rounded-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-200 to-gray-600 bg-clip-text text-transparent mb-2">
                  4.9
                </div>
                <div className="text-sm font-medium text-gray-300">
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal separator for mobile */}
        <div className="lg:hidden mt-10 w-full h-px bg-gray-700"></div>
      </div>
    </div>
  );
};

export default AboutStats;
