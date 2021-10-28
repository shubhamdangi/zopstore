import React from "react";
import "./style.css";
import ContactImage from "./contact-us.png";

function Contact() {
  return (
    <>
      <div className="pagedata">
        <div className="PremiumHead">
          <img
            src={ContactImage}
            alt="Contact-image"
            className="ContactImage"
          />{" "}
          <br /> <br />
          <h4>Contact Us</h4>
          <hr />
          <p style={{ fontSize: "15px", padding: "0 18px 2px 10px" }}>
            Don Bosco Institute of Techonology Boys Hostel A-Block, Mysore Road
            Bangalore SH17, Kumbalgodu, Karnataka - 560074
          </p>{" "}
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
