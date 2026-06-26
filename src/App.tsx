import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Party from "@/pages/Party";
import Majors from "@/pages/Majors";
import DigitalHeritage from "@/pages/DigitalHeritage";
import EnvironmentalArt from "@/pages/EnvironmentalArt";
import ProductDesign from "@/pages/ProductDesign";
import TourismManagement from "@/pages/TourismManagement";
import HotelManagement from "@/pages/HotelManagement";
import BroadcastingHosting from "@/pages/BroadcastingHosting";
import PerformingArts from "@/pages/PerformingArts";
import Teaching from "@/pages/Teaching";
import Students from "@/pages/Students";
import Industry from "@/pages/Industry";
import Admission from "@/pages/Admission";
import Downloads from "@/pages/Downloads";
import Admin from "@/pages/Admin";

/**
 * ScrollToTop — 路由切换时自动滚动到顶部或 hash 锚点
 * 补偿 sticky 导航栏 + Header + TopBar 累计高度 -140px
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      } else {
        const timer = setTimeout(() => {
          const el = document.getElementById(hash.replace("#", ""));
          if (el) {
            const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 140;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

/**
 * App — 根组件
 * Layout 提供全局 TopBar + Header + Navbar + Footer
 * 所有页面通过 <Outlet /> 渲染在 Layout 内部
 */
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/party" element={<Party />} />
          <Route path="/majors" element={<Majors />} />
          <Route path="/majors/digital-heritage" element={<DigitalHeritage />} />
          <Route path="/majors/environmental-art" element={<EnvironmentalArt />} />
          <Route path="/majors/product-design" element={<ProductDesign />} />
          <Route path="/majors/tourism-management" element={<TourismManagement />} />
          <Route path="/majors/hotel-management" element={<HotelManagement />} />
          <Route path="/majors/broadcasting-hosting" element={<BroadcastingHosting />} />
          <Route path="/majors/performing-arts" element={<PerformingArts />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/students" element={<Students />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}
