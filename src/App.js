import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/Navbar";
import About from "./Pages/About";
import Research from "./Pages/Research";
import Lab from "./Pages/Lab";
import Publication from "./Pages/Publication";
import Blogs from "./Pages/Blogs";



import Talks from "./Pages/Talks";
import Software from "./Pages/Software";
function App() {
  return (
    <div className="w-screen  flex flex-col bg-secondary">
      <NavBar />
      <Routes>
          <Route path="/" element={<About />}/>

          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/labteam" element={<Lab />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/software" element={<Software />} />
        </Routes>
    
    </div>
  );
}

export default App;
