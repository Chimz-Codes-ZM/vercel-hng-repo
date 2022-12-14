import React from "react";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <div className="form-main">
        <div className="form">
          <form>
            <div className="contact-heading">
              <h2>Contact Me</h2>
              <p>Hi there, contact me to ask about anything you have in mind</p>
            </div>

            <div className="first-last">
              <div className="name">
                <label for="fname">First name</label>
                <br />
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter you first name"
                ></input>
                <br />
              </div>

              <div className="name">
                <label for="lname">Last name</label>
                <br />
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                ></input>
                <br />
              </div>
            </div>

            <div className="email">
              <label for="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="yourname@email.com"
              ></input>
              <br />
            </div>

            <div className="message">
              <label for="message">Message</label>
              <br />
              <textarea
                id="message"
                name="textarea"
                rows="6"
                cols="50"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                required="required"
                // oninvalid="this.setCustomValidity('Enter User Name Here')"
              ></textarea>
              <br />
            </div>

            <div className="check">
              <label for="agreed" className="container">
                <input type="checkbox" name="agreed" value="agree"></input>
                {/* <span class="checkmark"></span> */}
                You agree to providing your data to (name) who may contact you.
              </label>
              <br />
            </div>

            <div className="sub-button">
              <input type="submit" value="Send message" id="btn__submit"></input>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
