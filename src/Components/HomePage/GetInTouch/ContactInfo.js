import React from "react";
import styles from "./GetInTouch.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.title}>Let's get in touch</h3>
      <p className={styles.text}>
        Contact us with the following details. and fillup the form with the
        details.
      </p>
      <div className={styles.info}>
        <div className="social-information">
          <i className="fa fa-map-marker"></i>
          <p>NPM,NY,USA</p>
        </div>
        <div className="social-information">
          {" "}
          <i className="fa fa-envelope-o"></i>
          <p>contact@bbbootstrap.com</p>
        </div>
        <div className="social-information">
          {" "}
          <i className="fa fa-mobile-phone"></i>
          <p>+1 989 989 9898 </p>
        </div>
      </div>
      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons">
          {" "}
          <a href="#">
            {" "}
            <i className="fa fa-facebook-f"></i>{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <i className="fa fa-twitter"></i>{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <i className="fa fa-instagram"></i>{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <i className="fa fa-linkedin"></i>{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
