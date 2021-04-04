import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

export default function Card1(props) {
  return (
    <div class="card" style={{ width: "21rem" }}>
      <div className="header">
        <div className="info">
          <img
            class="dp"
            src="https://images.squarespace-cdn.com/content/v1/523a0270e4b01ab6f41e9814/1604589539213-GI8ZFSS52WUHTG5R7KB7/ke17ZwdGBToddI8pDm48kKvsL8b7NcLORtPcFkxWYE9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz7PwTeRYFZTuB_GzunsmUxF6L7dD2nBnnPKXZtNfF-pWFCJJEBYCqjRO2MwrVteDI/whitssunsetcropped.jpg"
            alt="dp"
          />
          <div className="nameTime">
            <p style={{ margin: "0", padding: "0" }}>@shubham.d3v</p>

            <h6
              style={{
                margin: "0",
                padding: "0",
                color: "grey",
                fontSize: "0.9rem",
              }}
            >
              Tuesday · March 16
            </h6>
          </div>
        </div>

        <IconButton className="del">
          <DeleteIcon />
        </IconButton>
      </div>
      <img
        class
        class="card-img-top"
        src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <div
          className="price"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5 class="card-title">$460 </h5>
          <IconButton style={{ margin: "0", padding: "0" }}>
            <ShareIcon />
          </IconButton>
        </div>
        <p style={{ margin: "0", padding: "0" }}>
          {" "}
          THE SUBTLE ART OF NOT GIVING A FU
        </p>
        <p>Contains all the work related to the book and the author details</p>

        <div
          className="mao"
          style={{ placeItems: "center", textAlign: "center" }}
        >
          <button type="button" class="btn btn-outline-info btn-lg btn-block">
            Bet on this product
          </button>
          {/* <Button variant="contained" color="primary">
            Make An Offer
          </Button> */}
        </div>
      </div>
    </div>
  );
}
