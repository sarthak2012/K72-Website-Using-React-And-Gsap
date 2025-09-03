import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Agence from "./Pages/Agence.jsx";
import Projects from "./Pages/Projects.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import FullScreenNav from "./Components/Navigation/FullScreenNav.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
