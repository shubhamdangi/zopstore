import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PublicIcon from "@material-ui/icons/Public";
import firebase from "firebase";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
// for alert
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
// for alert end

import { UserContext } from "../../contexts/user";
import Signin from "../Signin";
import "./style.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import makeid from "../../algo/algo";
import { db, storage } from "../../firebase";
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

function ComposeModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useContext(UserContext).user;
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgess] = useState(0);
  const [check, setCheck] = useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);
  const classesAlert = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function free() {
    setPrice("FREE");
  }

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  // to upload the image at firetore, genereate download url
  function handleUpload(e) {
    e.preventDefault();
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

          //   document.getElementById("imagePreview").style.display = "none";
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
    <div>
      {user ? (
        <>
          <div
            className="see"
            style={{ textAlign: "center", padding: "25px", margin: "auto" }}
          >
            <Button
              style={{
                alignItems: "center",
                textAlign: "center",
                border: "3px solid #e8cb48",
                borderRadius: "15px",
                backgroundColor: "#14406d",
              }}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Publish an AD &nbsp; <PublicIcon />
            </Button>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            style={{ margin: "auto" }}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div
                  className="composeTop"
                  // style={{ display: "flex", alignItems: "center" }}
                >
                  <p
                    style={{
                      display: "flex",
                      textAlign: "center",
                      // alignItems: "center",
                      margin: "0",
                      padding: "0",
                      // width: "45vw",
                      fontWeight: "bold",
                      justifyContent: "space-between",
                    }}
                  >
                    POST YOUR AD NOW.{" "}
                    <span
                      style={{
                        // display: "flex",
                        float: "right",
                        // margin: "0",
                        // justifyContent: "right",
                      }}
                    >
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={handleClose}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </span>
                  </p>
                </div>
                <p id="transition-modal-description"></p>
                <form
                  onSubmit={handleUpload}
                  className={classes.root}
                  style={{ margin: "0", padding: "0" }}
                >
                  {/* <TextField
                    name="title"
                    id="outlined-basic"
                    label="Title"
                    maxlength="25"
                    variant="outlined"
                    placeholder="Product Name or Title"
                    value={title}
                    autoComplete="off"
                    onChange={(e) => setTitle(e.currentTarget.value)}
                  /> */}
                  {/* //check */}
                  <div class="form-group" style={{ margin: "0", padding: "0" }}>
                    <label for="exampleFormControlTextarea1"></label>
                    <p style={{ margin: "0", padding: "0" }}>Title*</p>
                    <textarea
                      value={title}
                      style={{ margin: "0", padding: "3px" }}
                      onChange={(e) => setTitle(e.currentTarget.value)}
                      name="title"
                      maxlength="40"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      placeholder="Product Title or Name"
                    ></textarea>
                  </div>
                  {/* &nbsp; &nbsp; {""} */}
                  <div class="form-group" style={{ margin: "0", padding: "0" }}>
                    <label for="exampleFormControlTextarea1"></label>
                    <p style={{ margin: "0", padding: "0" }}>Description*</p>
                    <textarea
                      value={caption}
                      onChange={(e) => setCaption(e.currentTarget.value)}
                      name="caption"
                      maxlength="90"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      placeholder="Enter Poduct Description"
                    ></textarea>
                  </div>
                  <div class="form-group" style={{ margin: "0", padding: "0" }}>
                    <label for="exampleFormControlTextarea1"></label>
                    <p style={{ margin: "0", padding: "0" }}>₹ Price*</p>
                    <div
                      className="priceDiv"
                      style={{
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      <input
                        value={price}
                        style={{
                          margin: "0 3vw 0 0",
                          width: "25vh",
                          padding: "3px",
                        }}
                        onChange={(e) => setPrice(e.currentTarget.value)}
                        name="price"
                        autocomplete="off"
                        maxlength="5"
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                        placeholder="Set Price in ₹"
                      ></input>
                      <FormControlLabel
                        style={{ marginRight: "0" }}
                        control={
                          <GreenCheckbox
                            //   checked={free}
                            onChange={free}
                            name="checkedG"
                          />
                        }
                        label="Donate for Free."
                      />
                    </div>
                  </div>

                  <div
                    class="form-group"
                    style={{ margin: "0", padding: "0 0 6px 0" }}
                  >
                    <label for="exampleFormControlTextarea1"></label>
                    <p style={{ margin: "0", padding: "0" }}>Contact Number*</p>
                    <input
                      value={contact}
                      // type="number"
                      // className="inputNum"
                      style={{ margin: "0", width: "40vh", padding: "3px" }}
                      onChange={(e) => setContact(e.currentTarget.value)}
                      name="contact"
                      autocomplete="off"
                      maxlength="10"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      placeholder="Enter Contact Number"
                    ></input>
                  </div>
                  <div className="composeBottom">
                    <div
                      className="compose__file"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "0 3vw 0 0",
                        alignItems: "center",
                      }}
                    >
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
                        style={{ display: "none" }}
                      />
                      <p
                        id="simple-modal-description"
                        style={{ color: "red", margin: "0 0 8px 0" }}
                      >
                        image size should be Less than 1 MB*
                      </p>
                    </div>
                    <div
                      className="uploadBtn"
                      style={{ textAlign: "right", paddingTop: "10px" }}
                    >
                      <Button
                        onClick={() => {
                          time1();
                          setTimeout(handleClose(), 5000); // capture current date and time
                          setOpenAlert(true);
                        }}
                        style={{
                          border: "1.8px solid #14406d",
                          borderRadius: "15px",
                        }}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={
                          !(caption && image && title && price && contact)
                        }
                      >
                        Upload {progress != 0 ? progress : ""} <PublicIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="composeImage">
                    <img id="imagePreview" alt="demo" />
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
          <div className={classesAlert.root}>
            <Collapse
              in={openAlert}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px 0 15px 0",
              }}
            >
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Ad Posted Successfully! But it may take few Seconds to appear,
                Do Not refresh or go back till you see your Ad below.
              </Alert>
            </Collapse>
          </div>
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
}

export default ComposeModal;
