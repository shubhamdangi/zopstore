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
import CameraIcon from "@material-ui/icons/Camera";
import CloseIcon from "@material-ui/icons/Close";
// for alert end
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../../contexts/user";
import Signin from "../../Signin";
import "./style.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import makeid from "./algo";
import { db, storage } from "../../../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Resizer from "react-image-file-resizer";
//radio
// import { withStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

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
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
    setPrice(event.target.value);
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useContext(UserContext).user;
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState("");
  // const [image, setImage] = useState(null);
  const [progress, setProgess] = useState(0);
  // const [check, setCheck] = useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [img, setImg] = useState(null);
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
    if (img) {
      var imageName = makeid(10);
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(img);

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
          //get the download url and upload post info and compress the image

          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("postsFL").add({
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
          setImg(null);

          //   document.getElementById("imagePreview").style.display = "none";
        }
      );
    }
  }

  // to take the image and preview it in upload section

  // function handleChange2(e) {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);

  //     var SelectedImageSRC = URL.createObjectURL(e.target.files[0]);

  //     var imagePreview = document.getElementById("imagePreview");

  //     imagePreview.src = SelectedImageSRC;
  //     imagePreview.style.display = "block";
  //   }
  // }

  // image resize begin
  const handleChange = (e) => {
    let fileInput = false;
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          480,
          480,
          "JPEG",
          80,
          0,
          (uri) => {
            console.log(uri);
            setImg(uri);
          },
          "file",
          200,
          200
        );

        var SelectedImageSRC = URL.createObjectURL(e.target.files[0]);
        var imagePreview = document.getElementById("imagePreview");

        imagePreview.src = SelectedImageSRC;
        imagePreview.style.display = "block";
      } catch (err) {
        console.log(err);
      }
    }
  };
  // image resize end

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
              Report Lost/Found Item&nbsp; <CameraIcon />
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
                <div className="composeTop">
                  <p
                    className="blankSpace"
                    style={{
                      margin: "0",
                      padding: "0",
                      color: "white",
                    }}
                  >
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                  </p>

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
                    REPORT LOST/FOUND ITEMS &nbsp; &nbsp;
                    <span
                      style={{
                        // display: "flex",
                        float: "right",
                        marginTop: "-5px",
                        marginRight:"-5px"
                        // justifyContent: "right",
                      }}
                    >
                      <button
                        style={{ border: "none", borderRadius: "30%" }}
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={handleClose}
                      >
                        <CloseIcon />
                      </button>
                    </span>
                  </p>
                </div>
                <p id="transition-modal-description"></p>

                <p style={{ margin: "35px 0 -17px 0", padding: "0" }}>
               

                  Type* &nbsp;
                  <span>
                    <Radio
                      checked={selectedValue === "lost"}
                      onChange={handleChangeRadio}
                      value="lost"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "B" }}
                    />
                    <span style={{ marginLeft: "-3px" }}>Lost</span>
                  </span>{" "}
                  &nbsp; &nbsp; &nbsp;
                  <span>
                    <GreenRadio
                      checked={selectedValue === "found"}
                      onChange={handleChangeRadio}
                      value="found"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "C" }}
                    />
                    <span style={{ marginLeft: "-3px" }}>Found</span>
                  </span>
                </p>
                <form
                  onSubmit={handleUpload}
                  className={classes.root}
                  style={{ margin: "0", padding: "0" }}
                >
                  <div class="form-group" style={{ margin: "0", padding: "0" }}>
                    <label for="exampleFormControlTextarea1"></label>
                    <p style={{ margin: "0", padding: "0" }}>Title*</p>
                    <textarea
                      value={title}
                      style={{ margin: "0", padding: "3px", resize: "none" }}
                      onChange={(e) => setTitle(e.currentTarget.value)}
                      name="title"
                      maxlength="40"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      placeholder="Item Title or Name"
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
                      style={{ resize: "none" }}
                      maxlength="100"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      placeholder="Enter Item Details/Information"
                    ></textarea>
                  </div>
                  {/* <div class="form-group" style={{ margin: "0", padding: "0" }}>
                    <label for="exampleFormControlTextarea1"></label>
                    <p style={{ margin: "0", padding: "0" }}>₹ Price*</p>
                    <div
                      className="priceDiv"
                      style={{
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      <div>
                        <input
                          value={price}
                          style={{
                            margin: "0 3vw 0 0",
                            width: "20vh",
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
                      </div>

                      <FormControlLabel
                        style={{ marginRight: "0" }}
                        control={
                          <GreenCheckbox
                            //   checked={free}
                            onChange={free}
                            name="checkedG"
                          />
                        }
                        label="Donate for Free"
                      />
                    </div>
                  </div> */}

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
                        // justifyContent: "space-evenly",
                        padding: "0 3vw 0 0",
                        alignItems: "center",
                      }}
                    >
                      <Button>
                        <label htmlFor="fileinput">
                          <AddAPhotoIcon />
                          {img == null ? (
                            <Typography style={{ textTransform: "none" }}>
                              <p
                                id="simple-modal-description"
                                style={{ margin: "0 0 8px 0" }}
                              >
                                Select Image to upload*
                              </p>
                            </Typography>
                          ) : null}
                        </label>
                      </Button>

                      <input
                        id="fileinput"
                        type="file"
                        cursor="pointer"
                        accept="image/*"
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="uploadBtn" style={{ textAlign: "right" }}>
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
                          !(caption && img && title && price && contact)
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
                Report Posted Successfully! But it may take few Seconds to appear,
                Do Not refresh or go back till you see it below.
              </Alert>
            </Collapse>
          </div>
        </>
      ) : ( <div style={{textAlign:'center'}}> <h6 className="signReport">SIGN IN TO REPORT NOW.</h6>
        <Signin /> </div>
      )}
    </div>
  );
}

export default ComposeModal;
