import React, { useState } from "react";
import "./style.css";
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

function ReqPremium() {
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
              display: "flex",
              paddingTop: "50px",
            }}
          >
            {loading ? (
              <div className={classes.root}>
                <CircularProgress />
              </div>
            ) : null}
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScD0MSoSD87D3uJfxgbPmnvsIH7xsv4Ye5kDVFA3C46BfcAJA/viewform?embedded==true"
            width="750"
            height="725"
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
              display: "flex",
              paddingTop: "50px",
            }}
          >
            {loading ? (
              <div className={classes.root}>
                <CircularProgress />
              </div>
            ) : null}
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScD0MSoSD87D3uJfxgbPmnvsIH7xsv4Ye5kDVFA3C46BfcAJA/viewform?embedded==true"
            width="330"
            height="820"
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

export default ReqPremium;
