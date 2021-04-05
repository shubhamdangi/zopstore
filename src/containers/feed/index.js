import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Post from "../post";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed ">
      {posts.map(({ id, post }) => {
        return (
          <div className="fee">
            <Post
              key={id}
              id={id}
              profileUrl={post.profileUrl}
              title={post.title}
              time={post.time}
              price={post.price}
              contact={post.contact}
              username={post.username}
              photoURL={post.photoUrl}
              caption={post.caption}
              comments={post.comments}
            />
          </div>
        );
      })}
    </div>
    // </div>
    // </div>
  );
}
