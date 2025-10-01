import { useState } from 'react';

const Testimonials = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const testimonials = [
    {
      client: "Emily Johnson",
      company: "Conscious Healing",
      comment: "Noman made my website look great. He knows how to make things look good and easy for people to use.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Emily R.",
      company: "Coral Heart Counseling",
      comment: "Coral Heart Counseling's site redesign exceeded our expectations, capturing our essence with empathy-driven design. Increased bookings by 20%!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Erin A. Ray",
      company: "Innovative Wellness Consultants",
      comment: "Noman gave our website a magical makeover! Suddenly, everyone's more engaged, and we're seeing more conversions. Can't thank him enough!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Sarah M.",
      company: "Tech Solutions Inc.",
      comment: "Professional and creative approach. Delivered beyond our expectations! The attention to detail was exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Mike Johnson",
      company: "Digital Ventures",
      comment: "Transformed our online presence completely. Highly recommended! The design process was smooth and efficient.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Lisa Wang",
      company: "Creative Studio",
      comment: "Exceptional design skills and attention to detail. Amazing results! Our brand now stands out in the market.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Erin A. Ray",
      company: "Innovative Wellness Consultants",
      comment: "Noman gave our website a magical makeover! Suddenly, everyone's more engaged, and we're seeing more conversions. Can't thank him enough!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Sarah M.",
      company: "Tech Solutions Inc.",
      comment: "Professional and creative approach. Delivered beyond our expectations! The attention to detail was exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      client: "Mike Johnson",
      company: "Digital Ventures",
      comment: "Transformed our online presence completely. Highly recommended! The design process was smooth and efficient.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    }
  ];

  // Group testimonials into sets of 3
  const testimonialSets = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialSets.push(testimonials.slice(i, i + 3));
  }

  const goToSet = (index) => {
    setCurrentSet(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="pb-2 tracking-tighter font-semibold 
                         text-3xl sm:text-4xl md:text-4xl lg:text-5xl
                         bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 
                         bg-clip-text text-transparent leading-tight">
            My client stories: A partnership in progress
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSet * 100}%)` }}>
            {testimonialSets.map((set, setIndex) => (
              <div key={setIndex} className="w-full flex-shrink-0">
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 min-h-[250px]
             gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-12 md:gap-y-14
             max-w-[320px] sm:max-w-[480px] md:max-w-5xl mx-auto justify-items-center lg:pt-2"
                >

                  {set.map((testimonial, index) => (
                    <div key={`${setIndex}-${index}`} className="bg-[#141414] border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
                      {/* Client Info with Avatar */}
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.client}
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-600"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {testimonial.client}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {testimonial.comment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonialSets.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSet(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSet ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;