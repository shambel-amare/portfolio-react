import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tfwx1za",
        "template_t1tb28e",
        form.current,
        "H6DI_xFtxHSEdqo0x"
      )
      .then(
        (result) => {
          toast.success(
            "Thank you for contacting me! I will get back to you ASAP!"
          );
        },
        (error) => {
          toast.error(
            "Sorry we could not recieve your message! Please try again!"
          );
        }
      );
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact__container">
        <div className="content__container">
          <h1>Contact Me!</h1>
          <h5>For any of my servicec or else</h5>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form-input"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Put your message here"
              className="message"
            ></textarea>
            <input className="btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
