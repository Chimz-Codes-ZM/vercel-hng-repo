import React from "react";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <div className="form-main">
        <div className="form">
          <form>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask about anything you have in mind</p>

            <div className="first-last">
              <div>
                <label for="fname">First name</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter you first name"
                ></input>
                <br />
              </div>

              <div>
                <label for="lname">Last name</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  placeholder="Enter your last name"
                ></input>
                <br />
              </div>
            </div>

            <label for="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="yourname@email.com"
            ></input>
            <br />

            <label for="message">Message</label><br/>
            <textarea id="message" name="textarea" rows="6" cols="50" placeholder="Send me a message and I'll reply you as soon as possible"></textarea><br/>

            <input type="checkbox" name="agreed" value="agree"></input>
            <label for="agreed">You agree to providing your data to (name) who may contact you.</label><br/>

            <input type="submit" value="submit"></input>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
