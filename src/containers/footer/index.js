import React from "react";
import "./style.css";

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
          href="mailto:contact.zopstore@gmail.com"
        >
          <i class="fas fa-envelope"></i> <br />
        </a>
        zopstore &copy; 2021 <br />
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="/about"
        >
          {" "}
          About
        </a>{" "}
        &nbsp;{" "}
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="/contact"
        >
          {" "}
          Contact
        </a>{" "}
        &nbsp;{" "}
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="/faq"
        >
          {" "}
          FAQ
        </a>{" "}
        &nbsp;
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          href="/careers"
        >
          {" "}
          Careers
        </a>{" "}
        <br />A Shubham Dangi Production
      </p>
    </div>
  );
}
