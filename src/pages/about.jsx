import Services from "../components/services.jsx";
import Jobs from "../components/jobs.jsx";
import Certifications from "../components/certifications.jsx";
import FAQ from "../components/faq.jsx";
import Dest from "../components/dest.jsx";
import Footer from "../components/footer.jsx";

const About = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center px-4 sm:px-6 md:px-12 lg:px-20 pt-16 sm:pt-20 lg:pt-28">
        <h1 className="pb-2 tracking-tighter font-medium 
                         text-3xl sm:text-4xl md:text-4xl lg:text-6xl
                         bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
                         bg-clip-text text-transparent leading-tight">
          Bridging the gap between <br />
          imagination and reality.
        </h1>

        <p
          className="text-gray-400 
          text-sm sm:text-base md:text-sm 
          max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl 
          mx-auto mt-4 sm:mt-6 leading-relaxed"
        >
          From dream to digital, I craft websites that work. Let’s turn{" "}
          <br className="hidden sm:block" /> clicks into customers.
        </p>
      </div>

      {/* Sections */}
     <Services />
      <Jobs />
      <Certifications />
      <FAQ />
      <Dest/>
      <Footer/>
    </div>
  );
};

export default About;
