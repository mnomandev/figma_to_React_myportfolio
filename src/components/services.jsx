import cardimg1 from "../assets/card-img-1.svg";
import cardimg2 from "../assets/card-img-2.svg";
import cardimg3 from "../assets/card-img-3.svg";
import dots from "../assets/four-dots.svg";
import piles from "../assets/pile.svg";
import vscode from "../assets/tools/vscode.svg";
import figma from "../assets/tools/figma.svg";
import postman from "../assets/tools/postman.svg";
import db from "../assets/tools/db.svg";

const Services = () => {
  return (
    <div className="bg-black py-10 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="pb-6 md:pb-10 text-center md:text-left md:ml-10">
          <h1 className="pb-2 tracking-tight font-semibold text-2xl sm:text-4xl md:text-4xl lg:text-5xl lg:ml-15 bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 bg-clip-text text-transparent leading-snug mb-4 md:mb-8">
            Mastering Web design <br />
            services for growth
          </h1>
        </div>

        {/* Top 3 Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8">
          {/* Card 1: Design */}
          <div className="bg-[#141414] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-5 md:p-6 w-[350px] md:max-w-[300px] h-72 md:h-80 border border-gray-700 flex flex-col">
            <h2 className="font-bold text-lg md:text-xl bg-gradient-to-r from-gray-600 via-gray-100 to-gray-200 bg-clip-text text-transparent mb-2">Design</h2>
            <p className="text-gray-400 text-sm mb-4">Crafting user-centric designs for impactful online experiences.</p>
            <div className="flex-grow flex items-center justify-center">
              <img src={cardimg1} alt="Design icon" className="w-full max-w-32 md:max-w-40 opacity-80" />
            </div>
          </div>

          {/* Card 2: Development */}
          <div className="bg-[#141414] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-5 md:p-6 w-[350px] md:max-w-[300px] h-72 md:h-80 border border-gray-700 flex flex-col">
            <h2 className="font-bold text-lg md:text-xl bg-gradient-to-r from-gray-800 via-gray-100 to-gray-700 bg-clip-text text-transparent mb-2">Development</h2>
            <p className="text-gray-400 text-sm mb-4">Building robust websites with cutting-edge technologies and frameworks.</p>
            <div className="flex-grow flex items-center justify-center">
              <img src={cardimg2} alt="Development icon" className="w-full max-w-32 md:max-w-40 opacity-80" />
            </div>
          </div>

          {/* Card 3: SEO */}
          <div className="bg-[#141414] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-5 md:p-6 w-[350px] md:max-w-[300px] h-72 md:h-80 border border-gray-700 flex flex-col">
            <h2 className="font-bold text-lg md:text-xl bg-gradient-to-r from-gray-600 via-gray-100 to-gray-700 bg-clip-text text-transparent mb-2">SEO</h2>
            <p className="text-gray-400 text-sm mb-4">Optimizing content and structure for higher search engine visibility.</p>
            <div className="flex-grow flex items-center justify-center">
              <img src={cardimg3} alt="SEO icon" className="w-full max-w-32 md:max-w-40 opacity-80" />
            </div>
          </div>
        </div>

        {/* Bottom 2 Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6 mt-6 md:mt-10">
          {/* Card 4: Quality Assurance */}
          <div className="bg-[#141414] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-5 md:p-6 w-[350px] md:w-1/3 min-h-[160px] md:h-[170px] border border-gray-700 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <img src={dots} alt="Quality Assurance" className="w-8 h-8 md:w-10 md:h-10" />
              <h1 className="font-bold text-lg md:text-xl bg-gradient-to-r from-gray-600 via-gray-100 to-gray-200 bg-clip-text text-transparent">Quality Assurance</h1>
            </div>
            <span className="text-gray-400 text-sm">Meticulous attention assures top results, meeting highest standards for reliability and satisfaction.</span>
          </div>

          {/* Card 5: Tools I've Worked With */}
          <div className="bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-5 md:p-6 w-[350px] md:w-[530px] min-h-[140px] md:h-[170px] border border-gray-700 flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Left side: Image, heading and logos */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <img src={piles} alt="Brands I've Worked With" className="w-8 h-8 md:w-10 md:h-10" />
                  <h1 className="font-bold text-lg md:text-xl bg-gradient-to-r from-gray-600 via-gray-100 to-gray-200 bg-clip-text text-transparent">Tools I've Worked With</h1>
                </div>
                <div className="flex gap-5 md:gap-6 pt-2">
                  <img src={vscode} alt="VS Code" className="w-6 h-6 md:w-7 md:h-7" />
                  <img src={figma} alt="Figma" className="w-6 h-6 md:w-7 md:h-7" />
                  <img src={postman} alt="Postman" className="w-6 h-6 md:w-7 md:h-7" />
                  <img src={db} alt="Database" className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </div>

              {/* Right side: Experience div */}
              <div className="bg-[#141414] rounded-xl p-3 text-center md:ml-4 min-w-[310px] md:min-w-[130px] mt-4 md:mt-0 self-end md:self-start">
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-600 via-gray-100 to-gray-200 bg-clip-text text-transparent">2 Years</h1>
                <span className="text-xs md:text-sm font-bold text-gray-300">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
