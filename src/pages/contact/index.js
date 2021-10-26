import React from "react";
import "./style.css";
import ContactImage from "./contact-us.png";
// import StarsIcon from '@material-ui/icons/Stars';

function Contact() {
  return (
    <>
      <div className="pagedata">
        <div className="PremiumHead">
          <img
            src={ContactImage}
            alt="Premium-image"
            className="PremiumImage"
          />{" "}
          <br /> <br />
          <h4>Contact Us</h4>
          <hr />
          <a
            style={{ textDecoration: "none" }}
            href="mailto:contact.zopstore@gmail.com"
          >
            <h3>contact.zopstore@gmail.com</h3>
          </a>
          <br /> <hr />
        </div>
      </div>
    </>
  );
}

export default Contact;
