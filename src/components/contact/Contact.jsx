import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <h4>For any of my services</h4>
          <h1>Contact Me!</h1>
          <div className="contact-container">
            <div className="content-container">
              <div className="contact-option">
                <MdEmail fill="#0084f8" />
                <h4>Email</h4>
                <h5>shambelamare2006@gmail.com</h5>
                <a href="mailto:shambelamare2006@gmail.com" target="_blank">
                  Send a Message!
                </a>
              </div>

              <div className="contact-option">
                <FaWhatsappSquare fill="green" />
                <h4>Whatsapp</h4>
                <a
                  href="https://api.whatsapp.com/send?phone+251983327298"
                  target="_blank"
                >
                  Send a Message!
                </a>
              </div>
            </div>
            <div className="form-container">
              <form ref={form} onSubmit={sendEmail} className="form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  required
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
                  required
                ></textarea>
                <input className="btn" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
