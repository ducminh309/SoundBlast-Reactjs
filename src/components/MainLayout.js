import React from "react";
import GallerySlider from './Slider';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const MainLayout = ({ children, toggleTheme, isDarkMode }) => {
  const backgroundColor = isDarkMode ? "#121212" : "#ffffff";
  const textColor = isDarkMode ? "#ffffff" : "#000000";

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh" }}>
      <GallerySlider />
      <CustomNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
