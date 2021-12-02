import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { db, storage } from "../../firebase";
import { UserContext } from "../../contexts/user";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

//alert
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
//alert end

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post({
  profileUrl,
  username,
  id,
  photoURL,
  title,
  caption,
  price,
  contact,
  comments,
  time,
}) {
  //alert
  const [open, setOpen] = React.useState(false);

  const [user, setUser] = useContext(UserContext).user;
  const [no, setNo] = useState("Call to make an offer");
  const [yes, setYes] = useState("Call to make an offer");
  const [open1, setOpen1] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function noclick() {
    setNo("Sign in to Call User");
  }

  function yesclick() {
    setYes("Call: +91 " + contact);
  }

  //modal begin

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  //modal end

  var uname = " ";
  // to prevent app crash if user is null
  if (user) {
    uname = user.email.replace("@gmail.com", "").toLowerCase();
  } else {
    uname = "no user";
  }

  const deletePost = () => {
    // delete the image from firebase storage

    // get ref to the image file going to be DeleteRounded
    var imageRef = storage.refFromURL(photoURL);

    // delete the file
    imageRef
      .delete()
      .then(function () {
        console.log("delete succesful from storage");
      })
      .catch(function (error) {
        console.log(error);
      });

    // 2. delete the post from firestore
    db.collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("delete succesful from firestore");
      })
      .catch(function (error) {
        console.log(`firestore del err is ${error}`);
      });
  };

  {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 product">
            <div class="card" style={{ width: "18em" }}>
              <div className="header">
                <div className="info">
                  <img class="dp" src={profileUrl} alt="dp" />
                  <div className="nameTime">
                    <p style={{ margin: "0", padding: "0", color: "black" }}>
                      @{username}
                    </p>

                    <h6
                      style={{
                        margin: "0",
                        padding: "0",
                        color: "grey",
                        fontSize: "0.9rem",
                      }}
                    >
                      {time}
                    </h6>
                  </div>
                </div>

                {user && username === uname ? (
                  <div>
                    <IconButton onClick={handleClickOpen1}>
                      <DeleteIcon />
                    </IconButton>
                    <Dialog
                      open={open1}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose1}
                      aria-labelledby="alert-dialog-slide-title"
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle id="alert-dialog-slide-title">
                        {"Are you sure you want to Delete this Ad?"}
                      </DialogTitle>

                      <DialogActions>
                        <Button onClick={handleClose1}>Cancel</Button>
                        <Button onClick={deletePost} color="secondary">
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                ) : (
                  <FormControlLabel
                    style={{ margin: "0 2px 0 0", padding: "0" }}
                    control={
                      <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                        name="checkedH"
                      />
                    }
                  />
                )}
              </div>
              <img class="postPhoto" src={photoURL} alt={`${title}'s Image`} />
              <div class="card-body">
                <div
                  className="price"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="price1" style={{ alignItems: "center" }}>
                    <h6 class="card-title" style={{ fontSize: "25px" }}>
                      {price === "FREE" ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p style={{ margin: "2px 0 0 0", color: "green" }}>
                            {price}
                          </p>{" "}
                          <DoneOutlineIcon style={{ color: "green" }} />
                        </div>
                      ) : (
                        <p style={{ margin: "0", padding: "0" }}>₹ {price}</p>
                      )}
                    </h6>
                  </div>
                  {user ? (
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#29BB89",
                        marginTop: "-20px",
                        padding: "0",
                      }}
                      href={`http://wa.me/+91-${contact}?text=Hey,%20Saw%20your%20Ad%20on%20https://zopstore.live%0AI'm%20interested%20in%20the%20*${title}*%20you%20have%20posted.%20`}
                    >
                      <WhatsAppIcon />
                    </a>
                  ) : (
                    <>
                      <p
                        onClick={handleClickOpen}
                        style={{
                          textDecoration: "none",
                          color: "#29BB89",
                          marginTop: "-20px",
                          padding: "0",
                          cursor: "pointer",
                        }}
                      >
                        <WhatsAppIcon />
                      </p>{" "}
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {
                            "Please login to send a WhatsApp message to the user."
                          }
                        </DialogTitle>

                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>{" "}
                    </>
                  )}
                </div>
                <div
                  className="title-caption"
                  style={{
                    alignItems: "left",
                    marginLeft: "-21px",
                    paddingLeft: "0",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      marginBottom: "0",
                      color: "black",
                    }}
                  >
                    {title}
                  </p>
                  <p style={{ color: "black" }}>{caption}</p>
                </div>

                <div
                  className="mao"
                  style={{ placeItems: "center", textAlign: "center" }}
                >
                  {user ? (
                    <button style={{ border: "none", focus: "" }}>
                      <a
                        className="btn btn-primary btn-xlg"
                        href={`tel:${contact}`}
                      >
                        Click to Call User
                      </a>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={noclick}
                      class="btn btn-outline-info btn-lg btn-block"
                    >
                      {no}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
