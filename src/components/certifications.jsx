import certificate from "../assets/certificate.svg";

const Certifications = () => {
  const certifications = [
    { name: "Advance React", platform: "Coursera" },
    { name: "Frontend Developer React", platform: "Hacker Rank" },
    { name: "MERN Stack Fellowship", platform: "Bytewise Ltd" },
    { name: "Frontend Developer", platform: "KPK Police" },
    { name: "Introduction to SQL", platform: "Google Program" },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center px-4 py-16 overflow-x-hidden">
      {/* Heading */}
      <h1 className="pb-2 tracking-tighter font-semibold 
                         text-3xl sm:text-4xl md:text-4xl lg:text-5xl
                         bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
                         bg-clip-text text-transparent leading-tight lg:pb-6">
        Certifications
      </h1>

   {/* Content */}
<div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-12 sm:gap-10">
  {/* Left side image */}
  <div className="bg-[#111] p-4 sm:p-6 rounded-3xl shadow-xl flex justify-center items-center w-full max-w-[400px] sm:max-w-[500px]">
    <img
      src={certificate}
      alt="certificate"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Right side list */}
  <div className="bg-[#111] p-4 sm:p-6 rounded-3xl shadow-xl border border-gray-800 w-full max-w-[400px] sm:max-w-[500px] flex flex-col justify-center">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="flex justify-between items-center border-b border-gray-800 py-4 sm:py-6 last:border-0"
      >
        <span className="text-base sm:text-lg md:text-sm">{cert.name}</span>
        <span className="px-4 sm:px-6 py-1.5 sm:py-2 bg-black rounded-full text-xs sm:text-xs border border-gray-700 whitespace-nowrap">
          {cert.platform}
        </span>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Certifications;
