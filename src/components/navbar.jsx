import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import contactArrow from "../assets/contact-b-pic.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="py-10"> {/* ⬅️ small vertical padding, not too tall */}
     <nav className="max-w-5xl flex items-center justify-between bg-[#1E1E1E] rounded-full mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-14 shadow-md">
        {/* Logo */}
       <img src={logo} alt="Logo" className="h-8 w-auto max-w-[200px] flex-shrink-0" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className="text-gray-300 hover:text-white text-sm lg:text-base no-underline">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white text-sm lg:text-base no-underline">
            About
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white text-sm lg:text-base no-underline">
            Projects
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white p-2">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden sm:block">
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-[#141313] px-3 py-1.5 rounded-full text-white border border-gray-600 hover:bg-white hover:text-black transition text-sm"
          >
            <span>Contact</span>
            <img src={contactArrow} alt="Contact" className="hidden lg:inline-block w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-[#1E1E1E] rounded-b-2xl z-20 transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <ul className="flex flex-col py-4 space-y-2">
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-gray-200 hover:text-white text-base">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-gray-200 hover:text-white text-base">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-gray-200 hover:text-white text-base">
              Projects
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact");
              }}
              className="w-full bg-[#141313] px-4 py-2 rounded-full text-white border border-gray-600 hover:bg-white hover:text-black transition text-sm"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
