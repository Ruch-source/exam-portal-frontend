import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../components/css/ContactUs.css';
export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6yo0gk",
        "template_71hes9k",
        form.current,
        "3sRvVQrnr0OzllQAu"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div  id="contact" className="container mt-5" style={{background:"lightgrey"}}>
      <h1 style={{color:"black"}}>Contact Us</h1>
      
<form ref={form} onSubmit={sendEmail}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">
      Name
    </label>
    <input type="text" name="to_name" required />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" required>
      Email
    </label>
    <input type="email" name="from_name" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label">
      Message
    </label>
    <textarea name="message" />
  </div>
  <button type="submit" value="Send" className="btn btn-primary">
    Send Message
  </button>
</form>


      <ToastContainer />
    </div>




  );
}
