import React, { useEffect } from "react";
import "./style.css";
import ContactImage from "./contact-us.png";

function Contact() {
  useEffect(() => {
    document.title = "Zopstore | Contact Us";
  }, []);

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
          style={{ textDecoration: "none", color: "black", fontSize: "17px" }}
          href="tel:+91 9893308617"
        >
          <i class="fas fa-phone-alt"></i>
        </a>{" "}
        &nbsp; &nbsp;

        <a
          style={{ textDecoration: "none", color: "black",fontWeight:"bolder", fontSize: "21px" }}
          href="http://wa.me/+91-9893308617?text="
        >
          <i class="fab fa-whatsapp"></i>
        </a>{" "}
        &nbsp; &nbsp;

          <a
          style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
          href="https://twitter.com/ishubhamdangi"
        >
          <i class="fab fa-twitter"></i> 
        </a>{" "}
        &nbsp; &nbsp;
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
          href="https://www.linkedin.com/in/ishubhamdangi/"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>{" "}
        &nbsp; &nbsp; 
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "21px" }}
          href="https://www.instagram.com/ishubhamdangi"
        >
         <i class="fab fa-instagram"></i>
        </a>{" "}
        &nbsp; &nbsp; 
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
          href="mailto:contact.zopstore@gmail.com"
        >
          <i class="fas fa-envelope"></i> <br />
        </a>
        <br/>
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
