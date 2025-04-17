import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <Routes>
        {/* Main site pages with layout */}
        <Route
          path="/"
          element={
            <MainLayout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
              <MainContent />
            </MainLayout>
          }
        />
        {/* Auth pages without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
