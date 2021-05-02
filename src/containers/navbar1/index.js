import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar1() {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <>
      <nav
        style={{
          display: "flex",

          alignItems: "center",
          flex: "wrap",
        }}
      >
        <label class="logo" style={{ flex: "50%" }}>
          zopstore
        </label>

        {user ? (
          <div
            className="userIn"
            style={{
              display: "flex",
              textAlign: "right",
              marginRight: "1rem",
              padding: "0",
            }}
          >
            {/* <p>Hi,</p> */}
            <p
              style={{ margin: "3px 5px 0 0", padding: "0", color: "#54e346" }}
            >
              {user.email.replace("@gmail.com", "").toLowerCase()}{" "}
            </p>
            <img
              className="dp"
              style={{ borderRadius: "50px" }}
              src={user.photoURL}
            />
          </div>
        ) : (
          <div
            className="UserOut"
            style={{
              display: "flex",
              //   flex: "50%",
              textAlign: "right",
              marginRight: "1rem",
              padding: "0",
            }}
          >
            <p style={{ margin: 0, padding: "0", color: "#dfdfdf" }}>
              Hello User!
            </p>
          </div>
        )}
      </nav>
      <section></section>
    </>
  );
}
