import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from "./components/navbar.jsx";
import flower from "./assets/top-hero-flower.svg";

const App = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Flower */}
      <img
        src={flower}
        alt="Decorative flower"
        className="absolute top-0 left-0 z-0 h-60 w-60 opacity-100"
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
