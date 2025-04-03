import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer.jsx";
import Portfolio from "./pages/portfolio/portfolio.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";
import ProjectDetail from "./pages/projectDetail/projectDetail.jsx";
import ScrollToTop from "./utils/scrollToTop.jsx";
import ServicesPage from "./pages/services/servicesPage.jsx";
import ServiceMainPage from "./pages/services/serviceMainPage.jsx";
import UserTable from "./pages/contactUs/UserTable.jsx";
import CursorAnimation from "./CursorAnimation.jsx";
import CursorParticles from "./CursorParticles.jsx";
import GlitchLoader from "./components/GlitchLoader.jsx"; // Import Loader
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with actual Three.js and API loading checks)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust timing based on actual load time
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <GlitchLoader /> // Show loader before content loads
      ) : (
        <Router>
          <CursorParticles />
          <CursorAnimation />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/services" element={<ServiceMainPage />} />
            <Route path="/services/:serviceSlug" element={<ServicesPage />} />
            <Route path="/projectDetail/:projectSlug" element={<ProjectDetail />} />
            <Route path="/detail" element={<UserTable />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
