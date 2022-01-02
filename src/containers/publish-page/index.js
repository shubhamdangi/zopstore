import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { signInWithGoogle } from "../../services/auth";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { UserContext } from "../../contexts/user";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[15],
    margin: theme.spacing(0.5),
    padding: theme.spacing(2, 3, 1),
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
//new

export default function AlertDialog() {
  //new
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext).user;
  //new end

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const signinClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
  };

  return (
    <>
      {user ? null : (
        <div>
          <p style={{ cursor: "pointer" }} onClick={handleClickOpen}>
            Post Free Ad
          </p>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"You must sign in to publish an Ad."}
            </DialogTitle>

            <DialogActions>
              <Button
                onClick={() => {
                  handleClose();
                  signinClick();
                }}
                color="primary"
                autoFocus
              >
                Sign In
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
}
