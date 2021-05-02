import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { db, storage } from "../../firebase";
import { UserContext } from "../../contexts/user";

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
import { WhatsappShareButton } from "react-share";

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
  const [user, setUser] = useContext(UserContext).user;
  const [no, setNo] = useState("Call to make an offer");
  const [yes, setYes] = useState("Call to make an offer");
  const [open1, setOpen1] = useState(false);

  function noclick() {
    setNo("Sign in to Call User");
  }

  function yesclick() {
    setYes("Call: +91 " + contact);
  }

  //modal begin

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="card" style={{ width: "18em" }}>
              <div className="header">
                <div className="info">
                  <img class="dp" src={profileUrl} alt="dp" />
                  <div className="nameTime">
                    <p style={{ margin: "0", padding: "0" }}>@{username}</p>

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
                    <IconButton onClick={handleClickOpen}>
                      <DeleteIcon />
                    </IconButton>
                    <Dialog
                      open={open1}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-slide-title"
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle id="alert-dialog-slide-title">
                        {"Are you sure you want to Delete this Ad?"}
                      </DialogTitle>

                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
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
              <img class="postPhoto" src={photoURL} alt="Card image cap" />
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
                    <h5 class="card-title">
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
                    </h5>
                  </div>
                  <IconButton style={{ margin: "0", padding: "0" }}>
                    <WhatsappShareButton title={title} separator=" ">
                      <WhatsAppIcon />
                    </WhatsappShareButton>
                  </IconButton>
                </div>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    textTransform: "uppercase",
                  }}
                >
                  {" "}
                  {title}
                </p>
                <p>{caption}</p>

                <div
                  className="mao"
                  style={{ placeItems: "center", textAlign: "center" }}
                >
                  {user ? (
                    <button
                      type="button"
                      onClick={yesclick}
                      class="btn btn-outline-info btn-lg btn-block"
                    >
                      {yes}
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
