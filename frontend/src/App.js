import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/Navbar";
import About from "./Pages/About";
import Research from "./Pages/Research";
import Lab from "./Pages/Lab";
import Publication from "./Pages/Publication";
import News from "./Pages/News";
import Resources from "./Pages/Resources";
import Blogs from "./Pages/Blogs";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="w-screen  flex flex-col bg-secondary">
      <NavBar />
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/labteam" element={<Lab />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/news" element={<News />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
