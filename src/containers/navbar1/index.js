import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../../services/auth";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar1() {
  const [user, setUser] = useContext(UserContext).user;
  const signinClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
  };

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
                Penx
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
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "5px 15px",
                fontSize: "15px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              variant="contained"
              onClick={signinClick}
            >
              Login
            </Button>
          )}

          <NavLink to="/cities" activeClassName="current" exact target="blank">
            <li style={{ listStyleType: "none" }}> About</li>
          </NavLink>
          <NavLink to="/states" activeClassName="current" exact target="blank">
            <li style={{ listStyleType: "none" }}> States</li>
          </NavLink>
          <NavLink
            to="/selfcare"
            activeClassName="current"
            exact
            target="blank"
          >
            <li style={{ listStyleType: "none" }}> Self Care</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
