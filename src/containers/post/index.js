import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { Comments } from "../../components";
import { db, storage } from "../../firebase";
import { CommentInput } from "../../components";
import { UserContext } from "../../contexts/user";
import { Delete } from "../../components";

export default function Post({
  profileUrl,
  username,
  id,
  photoURL,
  caption,
  comments,
}) {
  const [user, setUser] = useContext(UserContext).user;

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

  //validate the logged user and owner of post to display delete button on line 59

  {
    return (
      <div className="post">
        <div className="postHeader">
          <div className="postHeaderLeft">
            <img className="dp" src={profileUrl} alt="user_photo" />
            <p style={{ marginLeft: "9px" }}>{username}</p>
          </div>
          {user && username === uname ? (
            <div className="btn">
              <Button onClick={deletePost} color="primary">
                Delete
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <img className="postPhoto" src={photoURL} alt="photo" />
        </div>
        <div>
          <p>
            <span style={{ fontWeight: "bold", marginRight: "4px" }}>
              {username}
            </span>
            {caption}
          </p>
        </div>

        {comments ? (
          comments.map((comment) => (
            <Comments username={comment.username} caption={comment.comment} />
          ))
        ) : (
          <></>
        )}

        {user ? <CommentInput id={id} /> : <></>}
      </div>
    );
  }
}
