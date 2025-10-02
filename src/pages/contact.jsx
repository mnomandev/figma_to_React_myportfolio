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
      {/* Contact Section */}
      <div className="bg-black text-white flex items-center justify-center px-6 lg:pt-10">
        <section className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-16">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
              <img
                src={ContactImg}
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-xl">
            <h1 
  className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
    font-medium mb-10 
    text-center lg:text-left
  "
>
  <span className="text-gray-400">Contact</span>{" "}
  <span className="text-white">me.</span>
</h1>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-2">
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                className="bg-[#111] border border-gray-700 rounded-md px-4 py-1 w-full text-white focus:outline-none focus:border-gray-400"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email"
                className="bg-[#111] border border-gray-700 rounded-md px-4 py-1 w-full text-white focus:outline-none focus:border-gray-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Type your message..."
                className="bg-[#111] border border-gray-700 rounded-md px-4 py-2 w-full text-white resize-none focus:outline-none focus:border-gray-400"
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1E1E1E] to-transparent border border-gray-600 rounded-full py-1 px-6 w-full flex items-center justify-center gap-2 hover:from-gray-700 hover:to-gray-900 transition duration-300"
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
