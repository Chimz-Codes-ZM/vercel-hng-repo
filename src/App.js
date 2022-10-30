import Profile from "./Components/Profile_section";
import React from "react";
import Links from "./Components/Links";
import Social from "./Components/Social";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main_section">
        <Profile />
        <div className="link_section">
          <Links />
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
