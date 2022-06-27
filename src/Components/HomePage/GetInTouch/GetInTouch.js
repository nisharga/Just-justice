import React from "react";
import ContactInfo from "./ContactInfo";
import styles from "./GetInTouch.module.css";
import law from "./law.jpg";

const GetInTouch = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form}>
          <ContactInfo></ContactInfo>
          <div className={styles.lawImage}>
            <img src={law} alt={"law"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
