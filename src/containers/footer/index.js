import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div
      className="footer-div"
      style={{
        height: "150px",
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
        textAlign: "center",
        background: "#14406d",
        paddingBottom: "100px",
        marginTop: "auto",
        position: "sticky",
        top: "100%",
      }}
    >
      <p style={{ color: "white", paddingTop: "13px" }}>
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="https://twitter.com/ishubhamdangi"
        >
          <i class="fab fa-twitter"></i>
        </a>{" "}
        &nbsp; &nbsp;
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="https://www.linkedin.com/in/ishubhamdangi/"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>{" "}
        &nbsp; &nbsp;
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="https://www.instagram.com/ishubhamdangi"
        >
          <i class="fab fa-instagram"></i>
        </a>{" "}
        &nbsp; &nbsp;
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="mailto:contact.zopstore@gmail.com"
        >
          <i class="fas fa-envelope"></i> <br />
        </a>
        zopstore &copy; 2021-22 <br />
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/about"
        >
          {" "}
          About
        </Link>{" "}
        &nbsp;{" "}
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/contact"
        >
          {" "}
          Contact
        </Link>{" "}
        &nbsp;{" "}
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/faq"
        >
          {" "}
          FAQ
        </Link>{" "}
        &nbsp;
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/careers"
        >
          {" "}
          Careers
        </Link>{" "}
        <br />A Shubham Dangi Production
      </p>
    </div>
  );
}
