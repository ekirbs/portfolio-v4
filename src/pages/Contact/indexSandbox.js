import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";
import { validateEmail } from "../../utils/helpers";

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

    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert(`Message Sent. Welcome to the jungle, ${formInput.name}!`);
        this.setState({ name: "", email: "", message: "" })
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  return (
    <div className="contactCard">
      <h1 className="contact-card-heading">Contact Me</h1>
      <div className ="contactContainer">
      <h3 className="contactCardGreeting">Hi {formInput.name}!</h3>
        <form className="contactForm">
          <input
            value={formInput.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Name"
            className="contactArea contactNameArea"
          />
          <input
            value={formInput.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your Email"
            className="contactArea contactEmailArea"
          />
          <textarea
            value={formInput.message}
            name="message"
            onChange={handleInputChange}
            type="textArea"
            placeholder="Text Area"
            className="contactArea contactTextArea"
          />
          <button type="button" className="btn btn-secondary" onClick={handleFormSubmit}>Send It</button>
        </form>
        {errorMessage && (
          <div className="error-div">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <div className="contactInfoContainer">
        <p className="contactCardContent">
          Send me a message and I'll get back to you as soon as I can.
        </p>
      </div>
    </div>
  );
}


//   render() {
//     return(
//       <div className="App">
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//           <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//           </div>
//           <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//           </div>
//           <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     );
//   }
//   onNameChange(event) {
// 	  this.setState({name: event.target.value})
//   }
//   onEmailChange(event) {
// 	  this.setState({email: event.target.value})
//   }
//   onMessageChange(event) {
// 	  this.setState({message: event.target.value})
//   }
// }
// export default App;