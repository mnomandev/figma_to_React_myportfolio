const Jobs = () => {
  const experiences = [
    {
      company: "Abbottabad Police",
      role: "Frontend Developer & Designer",
      time: "2023 – 2024",
    },
    {
      company: "Bytewise Limited",
      role: "MERN Stack Fellow",
      time: "2024 - 2025",
    },
    {
      company: "Freelancer platform",
      role: "MERN Stack Developer",
      time: "2022 – present",
    },
  ];

  return (
    <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h1
          className="pb-10 tracking-tighter font-medium 
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
  bg-clip-text text-transparent leading-tight 
  text-center whitespace-normal"
        >
          Job experience
        </h1>

        {/* Experience List */}
        <div className="flex flex-col gap-8">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="bg-[#0e0e0e] border border-gray-800 rounded-2xl 
              px-6 py-6 w-full max-w-[900px] mx-auto
              grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] items-center gap-6
              text-center md:text-left"
            >
              {/* Company Name */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
                {job.company}
              </h2>

              {/* Role */}
              <span
                className="bg-black border border-gray-700 
                text-xs sm:text-sm md:text-base px-4 py-2 
                rounded-full text-center mx-auto md:mx-0"
              >
                {job.role}
              </span>

              {/* Time */}
              <span className="text-sm sm:text-base md:text-lg md:text-right">
                {job.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
