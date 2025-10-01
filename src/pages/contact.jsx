import ContactImg from "../assets/contact-img.svg";
import AboutStats from "../components/aboutStat.jsx";
import FAQ from "../components/faq.jsx";
import Dest from "../components/dest.jsx";
import Footer from "../components/footer.jsx";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ewpvq6", // EmailJS service ID
        "template_34w5nlu", // EmailJS template ID
        formRef.current,
        "9IgivKDwVD_7uIW9u" // EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send ❌: " + error.text);
        }
      );
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
        {/* Contact Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-7xl">
          {/* Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={ContactImg}
              alt="Contact"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Form */}
          <div className="flex flex-col w-full max-w-lg lg:max-w-xl">
            <h1
              className="tracking-tighter font-medium 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              bg-gradient-to-r from-gray-900 via-gray-100 to-gray-800 
              bg-clip-text leading-tight mb-8 text-center lg:text-left"
            >
              <span className="text-gray-300">Contact</span>{" "}
              <span className="text-white">me.</span>
            </h1>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                className="bg-[#141313] border border-gray-700 rounded-lg 
                px-4 py-3 w-full text-white 
                focus:outline-none focus:border-gray-400 transition"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email"
                className="bg-[#141313] border border-gray-700 rounded-lg 
                px-4 py-3 w-full text-white 
                focus:outline-none focus:border-gray-400 transition"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Type your message..."
                className="bg-[#141313] border border-gray-700 rounded-lg 
                px-4 py-3 w-full text-white resize-none
                focus:outline-none focus:border-gray-400 transition"
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-[#1E1E1E] to-transparent 
                border border-gray-600 rounded-full py-3 px-6 w-full 
                flex items-center justify-center gap-2 
                hover:from-gray-700 hover:to-gray-900 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Other Sections */}
      <AboutStats />
      <FAQ />
      <Dest />
      <Footer />
    </>
  );
};

export default Contact;
