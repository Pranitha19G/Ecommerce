import React, { useState, useRef } from "react";
import styles from "./Fourthpart.module.css";
import emailjs from "@emailjs/browser";
import { green } from "@mui/material/colors";

export default function Fourthpart() {
  const [submitMessage, setSubmitMessage] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    message: "",
  });
  const handleChange = (e) => {
    console.log("e", e.target);
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ekuh01h", "template_6y5itnh", form.current, {
        publicKey: "8vb08WbtrSk1IOYD_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitMessage("Message Submitted Successfully!");
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setData({
      firstname: "",
      lastname: "",
      message: "",
    });
  };
 

  return (
    <div className={styles.Fourthpart}>
      <div className={styles.container}>
        <form ref={form} className={styles.leftside}>
          <div className={styles.labelpart}>
            <label>FIRST NAME</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={data.firstname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.labelpart}>
            <label>LAST NAME</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={data.lastname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.labelpart}>
            <label>MESSAGE</label>
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              value={data.message}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.labelpart}>
            <button onClick={sendEmail}>SEND MESSAGE</button>
          </div>
          <div style={{color:"green"}}>{submitMessage}</div>
        </form>

        <div className={styles.rightside}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019587436188!2d-122.41941568468115!3d37.774929779759834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7c1f1e7b%3A0x5400c2c9cb00d2d7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1683830228291!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
