import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { signInWithGoogle } from "../../services/auth";
import { UserContext } from "../../contexts/user";

export default function Signin() {
  const [user, setUser] = useContext(UserContext).user;

  const signinClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
  };

  return (
    <div className="signin">
      <Button onClick={signinClick} style={{ background: "#bbbbbb" }}>
        {" "}
        Sign In with Google
      </Button>
    </div>
  );
}