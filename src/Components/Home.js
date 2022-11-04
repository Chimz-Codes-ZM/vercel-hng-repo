import React from "react";
import Links from "./Links";
import Social from "./Social";
import Footer from "./Footer";
import Profile from "./Profile_section"


function Home() {
  return (
    <div>
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


export default Home