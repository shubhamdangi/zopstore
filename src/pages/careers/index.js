import React, { useState } from "react";
import "./style.css";
import Team from "./team.png";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Careers() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  function greet() {
    setLoading(false);
  }
  setTimeout(greet, 1500);

  return (
    <>
      <div className="gform">
        <br /> <br /> <br />
        <div className="pc">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              //   display: "flex",
              paddingTop: "20px",
              paddingBottom: "5px",
            }}
          >
            {" "}
            <img src={Team} style={{ width: "160px" }} alt="team" /> <br />
            <h2>Build the future with zopstore</h2>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              //   paddingTop: "50px",
            }}
          >
            {loading ? (
              <div className={classes.root}>
                <CircularProgress />
              </div>
            ) : null}
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfzG_2f64foFKrQ9cZbwUV69OBciROUOk_Minwey8nTVGXqQg/viewform?embedded=true"
            width="750"
            height="1800"
            scrolling="no"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <div className="mobile">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              //   display: "flex",
              paddingTop: "10px",
              paddingBottom: "5px",
            }}
          >
            {" "}
            <img src={Team} style={{ width: "130px" }} alt="team" /> <br />
            <h3>Build the future with zopstore</h3>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              //   paddingTop: "50px",
            }}
          >
            {loading ? (
              <div className={classes.root}>
                <CircularProgress />
              </div>
            ) : null}
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfzG_2f64foFKrQ9cZbwUV69OBciROUOk_Minwey8nTVGXqQg/viewform?embedded=true"
            width="330"
            height="2000"
            scrolling="no"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
}

export default Careers;
