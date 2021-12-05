import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../../services/auth";
import Logo from "./zopstore2.png";
import { useLocation } from "react-router";
import Publish from "../publish-page";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar1() {
  const location = useLocation();
  const [user, setUser] = useContext(UserContext).user;
  const signinClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
  };
  // const reload = () => location.reload();

  return (
    <>
      <div class="nav1">
        <input type="checkbox" id="nav-check" />

        <div class="nav-header">
          <div class="nav-title">
            <NavLink to="/">
              <p
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  margin: "0",
                  padding: "0",
                }}
              >
                <img src={Logo} className="logo" alt="logo" />
              </p>
            </NavLink>
          </div>
        </div>

        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          {user ? (
            <div
              className="userIn"
              style={{
                display: "inline-flex",
                textAlign: "right",
                marginRight: "1rem",

                padding: "5px 0 0 0",
              }}
            >
              {/* <p>Hi,</p> */}
              <p
                style={{
                  margin: "3px 5px 0 0",
                  padding: "0",
                  color: "#54e346",
                }}
              >
                <span style={{ color: "white", marginLeft: "10px" }}>Hey!</span>{" "}
                {user.email.replace("@gmail.com", "").toLowerCase()}{" "}
              </p>
              <img
                className="dp"
                style={{ borderRadius: "50px" }}
                src={user.photoURL}
              />
            </div>
          ) : (
            <>
              <span className="pc-none">
                <p style={{ marginTop: "-35px", color: "#14406d" }}>.</p>
              </span>
              <span>&nbsp;</span>{" "}
              <Button
                style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  padding: "5px 15px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: "0px",
                  marginBottom: "7px",
                  border: "1px solid white",
                }}
                variant="contained"
                onClick={signinClick}
              >
                Login
              </Button>{" "}
              <span>&nbsp;</span>{" "}
            </>
          )}

          {/* <NavLink
            to="/publish"
            // onClick={location.reload}
            activeClassName="current"
          >
            <li style={{ listStyleType: "none" }}> Post Free Ad</li>
          </NavLink> */}
          <h5 className="publish-mobile">
            <li className="fields" style={{ listStyleType: "none" }}>
              {" "}
              <Publish />
            </li>
          </h5>
          <h5 className="publish-pc">
            <li style={{ listStyleType: "none" }}>
              {" "}
              <Publish />
            </li>
          </h5>
          <a
            href="/lostfound"
            onClick={location.reload}
            activeClassName="current"
          >
            <li className="fields" style={{ listStyleType: "none" }}>
              {" "}
              Lost & Found
            </li>
          </a>

          <a
            href="/premium"
            onClick={location.reload}
            activeClassName="current"
          >
            <li className="fields joinp" style={{ listStyleType: "none" }}>
              {" "}
              Join Premium
            </li>
          </a>
          <a href="/about" onClick={location.reload} activeClassName="current">
            <li className="fields2" style={{ listStyleType: "none" }}>
              {" "}
              About
            </li>
          </a>
        </div>
      </div>
    </>
  );
}
