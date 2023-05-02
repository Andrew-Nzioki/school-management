import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

import MathematicsForm from "./components/MathematicsForm";
import About from "./components/About";
import Contact from "./components/Contact";
import ScienceForm from "./components/ScienceForm";

const url = "http://localhost:5000/students";
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="MathematicsForm" element={<MathematicsForm />} />
        <Route path="ScienceForm" element={<ScienceForm />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
