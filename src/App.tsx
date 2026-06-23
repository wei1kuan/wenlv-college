import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <Router>
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