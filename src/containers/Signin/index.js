import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { signInWithGoogle } from "../../services/auth";
import { UserContext } from "../../contexts/user";
import Sig from "./sig.jpg";

export default function Signin() {
  const [user, setUser] = useContext(UserContext).user;
  const signinClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
  };

  return (
    <div className="signin">
      <Button onClick={signinClick}>
        <img
          src={Sig}
          alt="."
          style={{
            width: "220px",
            height: "45px",
            borderRadius: "100px",
            border: "3px solid #333333",
          }}
        />
      </Button>
    </div>
  );
}
