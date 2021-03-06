import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import Post from "../Post-Lf";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

export default function Feed() {
  const [postsLF, setPostsLF] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPaginate, setShowPaginate] = useState(false);
  const usersPerPage = 16;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    db.collection("postsFL")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPostsLF(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          })),
          setLoading(false),
          setTimeout(setLoading, 200)
        );
      });
  }, []);

  const displayUsers = postsLF
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

  const pageCount = Math.ceil(postsLF.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function showPagi() {
    setShowPaginate(true);
  }
  setTimeout(showPagi, 2500);

  return (
    <div className="feedFull">
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {loading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : null}
      </div>
      <div className="feed ">
        {displayUsers}
        {showPaginate ? (
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
        ) : null}
      </div>
    </div>
  );
}
