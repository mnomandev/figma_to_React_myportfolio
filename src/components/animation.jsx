import tick from "../assets/tick.png";

const Animation = () => {
  const skills = [
    "React",
    "JavaScript",
    "CSS3",
    "HTML5",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Design",
    "Development",
    "SEO",
    "UI/UX",
  ];

  return (
    <div className="w-full h-[50px] sm:h-[50px] lg:h-[60px] bg-[#1E1E1E] flex items-center justify-center relative border pt-2 sm:pt-3 md:pt-5">
      {/* Inner play area (centered, responsive width) */}
      <div className="relative w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-[43px] sm:h-[53px] md:h-[63px] overflow-hidden">
        {/* Animated container */}
      <div
  className="absolute top-0 left-0 flex flex-row items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 animate-scroll"
>
  {[...Array(3)].map((_, copyIndex) => (
    <div
      key={copyIndex}
      className="flex flex-row items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 flex-shrink-0"
    >
      {skills.map((skill, index) => (
        <div
          key={`${copyIndex}-${index}`}
          className="flex items-center gap-2 sm:gap-3 whitespace-nowrap"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center flex-shrink-0">
            <img 
              src={tick} 
              alt="tick" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">
            {skill}
          </h2>
        </div>
      ))}
    </div>
  ))}
</div>

      </div>

     <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }

  .animate-scroll {
    animation: scroll 20s linear infinite;
  }

  @media (max-width: 640px) {
    .animate-scroll {
      animation: scroll 20s linear infinite !important;
    }
  }

  @media (min-width: 641px) and (max-width: 768px) {
    .animate-scroll {
      animation: scroll 25s linear infinite !important;
    }
  }

  @media (min-width: 769px) {
    .animate-scroll {
      animation: scroll 30s linear infinite !important;
    }
  }
`}</style>

    </div>
  );
};

export default Animation;

// import tick from "../assets/tick.png";

// const SkillsScroller = () => {
//   const skills = [
//     "React",
//     "JavaScript",
//     "CSS3",
//     "HTML5",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Git",
//     "GitHub",
//     "Design",
//     "Development",
//     "SEO",
//     "UI/UX",
//   ];

//   return (
//     <div className="w-full h-[70px] bg-[#1E1E1E] flex items-center justify-center relative border pt-5">
//       {/* Inner play area (centered, not full width) */}
//       <div className="relative w-[70%] h-[63px] overflow-hidden">
//         {/* Animated container */}
//         <div
//           className="absolute top-0 left-0 flex flex-row items-center gap-16"
//           style={{ animation: "scroll 30s linear infinite" }}
//         >
//           {[...Array(2)].map((_, copyIndex) => (
//             <div
//               key={copyIndex}
//               className="flex flex-row items-center gap-16 flex-shrink-0"
//             >
//               {skills.map((skill, index) => (
//                 <div
//                   key={`${copyIndex}-${index}`}
//                   className="flex items-center gap-3 whitespace-nowrap"
//                 >
//                   <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
//                     <img src={tick} alt="tick" />
//                   </div>
//                   <h2 className="text-white text-lg font-medium">{skill}</h2>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SkillsScroller;
