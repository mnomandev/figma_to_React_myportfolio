import fullBigFlower from '../assets/full-big-flower.svg';
import fullSmallFlower from '../assets/full-small-flower.svg';
import fb from '../assets/social-icons/fb.svg';
import gmail from '../assets/social-icons/gmail.svg';
import github from '../assets/social-icons/github.svg';
import insta from '../assets/social-icons/insta.svg';
import linkedIn from '../assets/social-icons/linkedIn.svg';
import { useNavigate } from 'react-router-dom';

const Dest = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: fb, name: 'Facebook', href: 'https://www.facebook.com/mnomandev' },
    { icon: linkedIn, name: 'LinkedIn', href: 'https://www.linkedin.com/in/mnomandev/' },
    { icon: insta, name: 'Instagram', href: 'https://www.instagram.com/muhammad_noman010/' },
    { icon: github, name: 'GitHub', href: 'https://github.com/mnomandev' },
    { icon: gmail, name: 'Email', href: 'mailto:nomankhan02432@gmail.com' }
  ];

  return (
    <div className="bg-black py-6 md:py-10 px-4">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto border bg-[#141414] border-gray-700 rounded-2xl md:rounded-3xl relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          {/* Big Flower - Top Left */}
          <img
            src={fullBigFlower}
            alt=""
            className="absolute top-5 md:top-10 left-10 md:left-35 opacity-50 md:opacity-100 w-20 md:w-auto"
          />
          {/* Small Flower - Bottom Right */}
          <img
            src={fullSmallFlower}
            alt=""
            className="absolute bottom-10 md:bottom-20 right-10 md:right-30 opacity-50 md:opacity-100 w-16 md:w-auto"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 py-10 md:py-16 text-center">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 leading-snug max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-gray-800 via-gray-100 to-gray-700 bg-clip-text text-transparent">
              Your next design
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 via-gray-100 to-gray-700 bg-clip-text text-transparent">
              destination is here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-sm max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
            Get ready to embark on a journey where imagination 
            <br />meets precision, and where design dreams become a vivid reality.
          </p>

          {/* Social Icons */}
          <div
            className="flex justify-center items-center 
             space-x-3 sm:space-x-6 md:space-x-8 
             mb-8 md:mb-14 border border-gray-700 rounded-full 
             px-3 sm:px-5 md:px-8 
             py-2 sm:py-3 md:py-4 
             w-full max-w-[320px] sm:max-w-[420px] md:max-w-fit mx-auto"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group flex items-center space-x-1 md:space-x-2 text-gray-400 hover:text-white
       transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300 brightness-75 group-hover:brightness-0 group-hover:invert"
                />
                <span className="hidden md:inline text-xs md:text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 md:mt-10 flex justify-center items-center">
        <button
          onClick={() => navigate('/contact')}
          className="w-[95%] md:w-[85%] max-w-[900px] bg-gradient-to-r from-[#1E1E1E] to-transparent border border-gray-600 text-white py-4 md:py-6 lg:py-7 rounded-full hover:from-[#333232] hover:to-transparent transition text-sm md:text-base lg:text-lg"
        >
          Get In Touch!
        </button>
      </div>
    </div>
  );
};

export default Dest;


