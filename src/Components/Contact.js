import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
