import bflower from "../assets/bottom-hero-flower.svg";
import profilePic from "../assets/my-image.svg";

const HeroSection = () => {
   
    return (
        <div className="relative overflow-hidden"> 
            {/* Bottom Right Flower */}
            <img 
                src={bflower} 
                alt="Decorative flower" 
                className="absolute bottom-0 right-0 w-30 sm:w-35 md:w-50 lg:w-[250px] h-auto pointer-events-none select-none"
            />            

            {/* Content section */}
            <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-8 md:mt-24 lg:mt-20 relative z-10 px-4">
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-auto lg:h-auto mb-4"
                />
                
                <span className="bg-gradient-to-r from-gray-500 via-gray-200 to-gray-600 bg-clip-text text-transparent font-medium text-sm sm:text-base md:text-lg">
                    Hi, Noman Here
                </span>
                
                <h1 className="font-sans font-bold text-2xl sm:text-5xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-800 via-gray-100 to-gray-700 bg-clip-text text-transparent leading-tight pb-3 sm:pb-5 mt-2">
                    Web Designer & Developer
                </h1>
                
                <p className="text-gray-500 text-sm sm:text-base md:text-sm max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-none mt-2 leading-relaxed">
                    Hello my name's Muhammad Noman, I'm a senior designer & developer. I create products,
                    <br />
                    websites, brands.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8 mb-12 sm:mb-20 lg:mb-50 w-full max-w-md sm:max-w-none">
                    <button className="bg-gradient-to-r from-[#1E1E1E] to-transparent border border-gray-600 font-sans text-white font-light px-4 sm:px-8 py-2 rounded-full text-xs sm:text-sm w-full sm:w-auto sm:min-w-[190px] h-[45px] hover:bg-gray-600 transition-colors">
                        Book a free strategy call
                    </button>
                    <button className="bg-gradient-to-r from-[#1E1E1E] to-transparent border border-gray-600 font-sans text-white font-light px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm w-full sm:w-auto sm:min-w-[190px] h-[45px] hover:bg-gray-600 transition-colors">
                        My Work
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;

// // import Header from "./header";
// import logo from "../assets/logo.svg";
// import contactArrow from "../assets/contact-b-pic.svg";
// import flower from "../assets/top-hero-flower.svg";
// import bflower from "../assets/bottom-hero-flower.svg";
// import profilePic from "../assets/my-image.svg";


// const HeroSection = () => {
//     return (
//         <div className="bg-black min-h-screen pt-2 relative overflow-hidden">
//             {/* Top Left Flower */}
//             <img 
//                 src={flower} 
//                 alt="Decorative flower" 
//                 className="absolute top-0 left-0"
//             />
            
//             {/* Bottom Right Flower */}
//             <img 
//                 src={bflower} 
//                 alt="Decorative flower" 
//                 className="absolute bottom-0 right-0 w-[250px] h-auto pointer-events-none select-none"
//             />
//             {/* Navbar section bg-[#141313]*/}
//             <nav className="flex flex-row justify-between   
//              items-center p-4 bg-[#1E1E1E] border-b-gray-50 w-[1200px] h-[58px] rounded-full mt-8 mx-auto relative z-10">
//                 <img src={logo} alt="Logo" className="h-15" />
//                 <div className="flex flex-row justify-center items-center mr-20">
//                     <ul className="flex flex-row">
//                         <li className="mx-5 font-sans"><a href="#home" className="text-gray-200 hover:text-white ">Home</a></li>
//                         <li className="mx-5 font-sans"><a href="#about" className="text-gray-200 hover:text-white">About</a></li>
//                         <li className="mx-5 font-sans"><a href="#projects" className="text-gray-200 hover:text-white">Projects</a></li>
//                     </ul>
//                 </div>
//                 <div>
//            <button className="bg-[#141313] px-5 py-2 rounded-full text-white border-2 border-[#3c3a3a]
//                      hover:bg-white hover:text-black transition duration-300 ease-in-out flex items-center">
//                         Contact
//                         <span>
//                             <img className="inline-block mr-3 ml-3" src={contactArrow} alt="Contact" />
//                         </span>
//                     </button>
//                 </div>
//             </nav>
//             {/* Content section */}
//         <div className="flex flex-col items-center justify-center text-center mt-50 relative z-10">
//             <img src={profilePic} alt="Profile"/>
//           <span class="bg-gradient-to-r from-gray-500 via-gray-200 to-gray-600 bg-clip-text text-transparent font-medium">
//              Hi, Noman Here
//            </span>
//            <h1 class="font-sans font-bold text-4xl md:text-6xl lg:text-6xl bg-gradient-to-r from-gray-800 via-gray-100 to-gray-700 bg-clip-text text-transparent leading-tight pb-5">
//            Web Designer & Developer
//           </h1>
//           <br />
//            <p className="text-gray-500">Hello my name’s Muhammad Noman, I’m a senior designer & developer. I create products,<br /> websites, brands.</p>
//            <div class="flex gap-4 justify-center mt-6 mb-50 ">
//             <button className="bg-gradient-to-r from-[#1E1E1E] to-transparent border border-gray-600 font-sans text-white font-light px-8 py-3 rounded-full text-sm min-w-[190px] h-[45px]">
//             Book a free strategy call
//             </button>

//             <button class="bg-gradient-to-r from-[#1E1E1E] to-transparent border border-gray-600 font-sans text-white font-light px-5 py-3 rounded-full text-sm min-w-[190px] h-[45px] hover:bg-gray-600">
//             My Work
//            </button>
//           </div>
//            </div>
//         </div>
//     )
// }

// export default HeroSection;


