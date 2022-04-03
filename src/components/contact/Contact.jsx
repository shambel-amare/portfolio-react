import React from "react";
import CTA from "../shared/CTA";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Contact Me!</h2>
          <h5>For any of my servicec or else</h5>
        </div>
        <div className="form-container">
          <form action="" className="form">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Subject" className="form-input" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Put your message here"
              className="message"
            ></textarea>
          </form>
          <CTA className="btn" text="Send" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
