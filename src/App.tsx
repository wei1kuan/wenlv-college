import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Party from "@/pages/Party";
import Majors from "@/pages/Majors";
import DigitalHeritage from "@/pages/DigitalHeritage";
import Teaching from "@/pages/Teaching";
import Students from "@/pages/Students";
import Industry from "@/pages/Industry";
import Admission from "@/pages/Admission";
import Downloads from "@/pages/Downloads";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/party" element={<Party />} />
          <Route path="/majors" element={<Majors />} />
          <Route path="/majors/digital-heritage" element={<DigitalHeritage />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/students" element={<Students />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </main>
    </Router>
  );
}