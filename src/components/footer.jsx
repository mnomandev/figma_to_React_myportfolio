import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-black py-4 md:py-6">
      <div className="w-[85%] max-w-[900px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 md:h-7" />

        {/* Copyright Text */}
        <p className="text-gray-500 text-xs md:text-base text-center">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer