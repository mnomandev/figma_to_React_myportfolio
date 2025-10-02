import { useState } from 'react';
import arrowDown from '../assets/arrowDown.svg';
import arrowUp from '../assets/arrowUp.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "I offer comprehensive web development and design services including custom website development, responsive design, e-commerce solutions, web applications, UI/UX design, and website redesigns. I specialize in modern technologies like React, Next.js, and create solutions tailored to your specific business needs."
    },
    {
      question: "Do you offer ongoing maintenance or support for websites?",
      answer: "Yes, I provide ongoing maintenance and support packages to ensure your website stays updated, secure, and performing optimally. This includes regular updates, security monitoring, backup management, performance optimization, and technical support whenever you need assistance."
    },
    {
      question: "Do you have experience with specific content management systems (CMS)?",
      answer: "Absolutely! I have extensive experience with MERN stack development, including MongoDB, Express.js, React, and Node.js. I can help you design and build scalable web applications tailored to your specific requirements, along with providing custom API development, integrations, and performance optimization."
    },
    {
      question: "What makes you stand out from other web developers and designers?",
      answer: "My unique approach combines technical expertise with design thinking and business understanding. I focus on creating websites that not only look great but also drive results for your business. I prioritize user experience, performance optimization, and provide personalized attention to each project, ensuring clear communication throughout the development process."
    },
    {
      question: "Can you help with SEO and website optimization?",
      answer: "Yes, I integrate SEO best practices and performance optimization into every website I build. This includes technical SEO, page speed optimization, mobile responsiveness, proper meta tags, structured data implementation, and ensuring your website follows Google's Core Web Vitals guidelines for better search engine rankings."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-16 px-4 pt-0">
        <div className="text-center mb-12 ">
         <h1 className="pb-2 tracking-tighter font-semibold 
                         text-3xl sm:text-4xl md:text-4xl lg:text-5xl
                         bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
                         bg-clip-text text-transparent leading-tight">
            Frequently asked questions.
          </h1>
        </div>
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-2xl bg-[#141414] overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-900/50 transition-colors duration-200
                "
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-100 pr-4 leading-relaxed">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center transition-transform duration-300">
                  <img 
                    src={openIndex === index ? arrowUp : arrowDown} 
                    alt={openIndex === index ? "collapse" : "expand"} 
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;