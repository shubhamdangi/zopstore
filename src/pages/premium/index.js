import React, { useEffect } from "react";
import "./style.css";
import PremiumImage from "../media/premium2.png";
import Button from "@material-ui/core/Button";
// import StarsIcon from '@material-ui/icons/Stars';
import StarsIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Premium() {
  useEffect(() => {
    document.title = "Zopstore | Go Premium";
  }, []);

  const classes = useStyles();
  return (
    <>
      <div className="pagedata">
        <div className="PremiumHead">
          <div
            className={classes.root}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0 15px 0",
            }}
          >
            <Alert severity="error">
              NOTE: This feature will be available shortly.
            </Alert>
          </div>
          <img
            src={PremiumImage}
            alt="Premium-image"
            className="PremiumImage"
          />
          <h4>Get a Premium membership</h4>
          <hr />
          <h4>Become a Premium member for just </h4>
          <span style={{ fontSize: "60px" }}>₹49/year</span> <br /> <br />
          <Link to="/premium/apply">
            <Button
              variant="contained"
              variant="outlined"
              style={{ backgroundColor: "#95E1D3" }}
            >
              Get zopstore Premium
            </Button>
          </Link>
          <br /> <hr />
        </div>
        <div className="benefits" style={{ textAlign: "center" }}>
          <h1>Premium Benefits</h1>
          <div style={{ textAlign: "match-parent", margin: "0 auto" }}>
            <p style={{ alignItems: "center" }}>
              <StarsIcon /> Get FLAT 10% Off on all products
            </p>
            <p style={{ alignItems: "center" }}>
              <StarsIcon /> Premium Badge on all your Ads
            </p>
            <p style={{ alignItems: "center" }}>
              <StarsIcon /> Feature your ads on the top feed
            </p>
            <p style={{ alignItems: "center" }}>
              <StarsIcon /> Early access to occasional sales
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Premium;
