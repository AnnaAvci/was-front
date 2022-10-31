import React from 'react';
import contactImg from "../assets/img/contact.webp";
import "./ContactPage.css";

const ContactPage = () => {
    return (
      <div className="contact-box">
        <div className="left">
          <img src={contactImg} id="contactImg" alt="letterbox" />
        </div>
        <div className="right">
          <h2>Contact us</h2>
            <div className="inputs">
                <label for="fname">First Name</label>
                <input
                type="text"
                name="firstname"
                id="fname"
                className="field"
                placeholder="John"
                />
                <label for="lname">Last Name</label>
                <input
                type="text"
                name="lastname"
                id="lname"
                className="field"
                placeholder="Doe"
                />
                <label for="email">Email</label>
                <input
                type="email"
                name="email"
                className="field"
                id="email"
                placeholder="john@example.com"
                />
                <label for="message">Message</label>
                <textarea
                name="message"
                className="field"
                id="message"
                placeholder="..."
                ></textarea>
                <input type="submit" className="btn" value="Send"></input>
          </div>
        </div>
      </div>
    );
};

export default ContactPage;