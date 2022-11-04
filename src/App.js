import Profile from "./Components/Profile_section";
import React from "react";
import Links from "./Components/Links";
import Social from "./Components/Social";
import Footer from "./Components/Footer";
import Contact from "./Routes/Contact";
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="main_section">
        <Profile />
        <div className="link_section">
          <Links />
          <Routes>
            <Route path="contact" element={<Contact />}/>
          </Routes>
        </div>
        <div className="social_section">
          <Social />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
