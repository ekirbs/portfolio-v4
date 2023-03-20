import React, { useState } from 'react';

import { validateEmail } from "../../utils/helpers";
import "./style.css";

export default function Contact() {

  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({ name: "", email: "", message: "" })

  console.log(formInput);

  const handleInputChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value }); // square brackets in object denotes key 

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formInput.email) || !formInput.name) {
      setErrorMessage("Either you didn't enter a name, or the email address you entered is invalid.");
      return;
    }

    alert(`Welcome to the jungle, ${formInput.name}!`);

  }

  return (
    <div className="contactCard">
      <h1 className="contact-card-heading">Contact Me</h1>
      <div className ="contactContainer">
        <h3 className="contactCardGreeting">erickirberger@gmail.com</h3>
      </div>
      <div className="contactInfoContainer">
        <p className="contactCardContent">
          Send me a message and I'll get back to you as soon as I can.
        </p>
      </div>
    </div>
  );
}
