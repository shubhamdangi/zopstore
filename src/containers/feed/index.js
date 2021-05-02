import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Post from "../post";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

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

  const displayUsers = posts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(({ id, post }) => {
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
    });

  const pageCount = Math.ceil(posts.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // search

  return (
    <div className="feedFull">
      <div className="feed ">
        {displayUsers}
        <div className="pagiArea">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
