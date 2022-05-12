import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
    setValue(e.tagret.value);
  };

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
        <div className="title-container-cover">
          <div className="titlebar">
            <h1>04: </h1>
            <h1>Contact me</h1>
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-container">
            <div className="form-container">
              <form ref={form} onSubmit={onSubmit} className="form">
                <input
                  type="text"
                  name={value.name}
                  placeholder="Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name={value.email}
                  placeholder="Email"
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name={value.subject}
                  placeholder="Subject"
                  className="form-input"
                />
                <textarea
                  name={value.message}
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
            <div className="content-container">
              <div className="contact-option">
                <MdEmail fill="#0084f8" />
                <h5>shambelamare2006@gmail.com</h5>
                <a
                  href="mailto:shambelamare2006@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send a Message!
                </a>
              </div>

              <div className="contact-option">
                <FaWhatsappSquare fill="green" />
                <h4>Whatsapp</h4>
                <a
                  href="https://api.whatsapp.com/send?phone+251983327298"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send a Message!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
