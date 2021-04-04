import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user";
import Signin from "../Signin";
import Button from "@material-ui/core/Button";
import "./style.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import makeid from "../../algo/algo";
import { db, storage } from "../../firebase";
import firebase from "firebase";

export default function Compose() {
  const [user, setUser] = useContext(UserContext).user;
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgess] = useState(0);

  // to upload the image at firetore, genereate download url
  function handleUpload() {
    if (image) {
      var imageName = makeid(10);
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function show upload %

          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgess(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //get the download url and upload post info

          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                time: time,
                price: price,
                contact: contact,
                title: title,
                caption: caption,
                photoUrl: imageUrl,
                username: user.email.replace("@gmail.com", ""),
                profileUrl: user.photoURL,
              });
            });

          setCaption("");

          setTitle("");
          setPrice("");
          setContact("");
          setProgess(0);
          setImage(null);

          document.getElementById("imagePreview").style.display = "none";
        }
      );
    }
  }

  // to take the image and preview it in upload section
  function handleChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      var SelectedImageSRC = URL.createObjectURL(e.target.files[0]);

      var imagePreview = document.getElementById("imagePreview");

      imagePreview.src = SelectedImageSRC;
      imagePreview.style.display = "block";
    }
  }

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // const weekday1 = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  var currentdate = new Date();
  var datetime =
    monthNames[currentdate.getMonth()] +
    " " +
    currentdate.getDate() +
    " · " +
    currentdate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  function time1() {
    setTime(datetime);
  }

  return (
    <div className="compose">
      {user ? (
        <div className="compose__loggedin">
          <p>Publish</p>

          <div className="compose__loggedinCentre">
            <textarea
              className="compose__text"
              rows="1"
              placeholder="Title of the Product or Book"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>

            <textarea
              className="compose__text"
              rows="3"
              placeholder="Enter the Description"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>

            <textarea
              className="compose__text"
              rows="1"
              placeholder="Set the Price for the Product or Book"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></textarea>

            <textarea
              type="number"
              className="compose__text"
              rows="1"
              placeholder="Contact Number of the owner"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></textarea>
          </div>
          <div className="composeImage">
            <img id="imagePreview" alt="" />
          </div>
          <div className="composeBottom">
            <div className="compose__file">
              <Button>
                <label htmlFor="fileinput">
                  <AddAPhotoIcon />
                </label>
              </Button>
              <input
                id="fileinput"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <Button
              onClick={() => {
                time1();
                handleUpload(); // capture current date and time
              }}
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!(caption && title && price && contact)}
            >
              Upload {progress != 0 ? progress : ""}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Signin />
        </div>
      )}
    </div>
  );
}
