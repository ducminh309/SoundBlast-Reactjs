import React from "react";
import { useLocation } from "react-router-dom";
import GallerySlider from './Slider';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const MainLayout = ({ children, toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const backgroundColor = isDarkMode ? "#121212" : "#ffffff";
  const textColor = isDarkMode ? "#ffffff" : "#000000";

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh" }}>
      {/* Only show slider on homepage */}
      {location.pathname === "/" && <GallerySlider />}
      <CustomNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

