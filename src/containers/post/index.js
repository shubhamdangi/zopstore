import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { Comments } from "../../components";
import { db, storage } from "../../firebase";
import { CommentInput } from "../../components";
import { UserContext } from "../../contexts/user";
import { Delete } from "../../components";
import { Card1 } from "..";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Signin from "../Signin";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

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
  const [no, setNo] = useState("Bet on this product");
  const [yes, setYes] = useState("Bet on this product");
  const [clicked, setClicked] = useState(false);

  function handleLove() {
    setClicked(true);
  }

  function noclick() {
    setNo("Sign in to mao");
  }

  function yesclick() {
    setYes("Call +91 " + contact);
  }

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

  // let maoVal = "Bet this product Now 1";
  // let maoValout = "Bet this product Now 0";

  // function outt(user) {
  //   maoValout = "SIGN IN TO CONTINUE";
  //   return maoValout;
  // }

  // function inn() {
  //   maoVal = contact;
  //   return maoVal;
  // }
  //validate the logged user and owner of post to display delete button on line 59

  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="card" style={{ width: "21em" }}>
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
                  <div className="btn">
                    <IconButton onClick={deletePost} className="del">
                      <DeleteIcon />
                    </IconButton>
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
              <img class="card-img-top" src={photoURL} alt="Card image cap" />
              <div class="card-body">
                <div
                  className="price"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 class="card-title">
                    ${price}
                    {price === "FREE" ? <CheckCircleIcon /> : <></>}
                  </h5>
                  <IconButton style={{ margin: "0", padding: "0" }}>
                    <ShareIcon />
                  </IconButton>
                </div>
                <p style={{ margin: "0", padding: "0" }}> {title}</p>
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

                  {/* <button type="button" class="btn btn-outline-info btn-lg btn-block">
              Bet on this product
            </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
