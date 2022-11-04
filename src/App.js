import React from "react";
import Home from "./Components/Home";
import Contact from "./Routes/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>

       
    </div>
  );
}

export default App;
