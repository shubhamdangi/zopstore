import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
        textAlign: "center",
        background: "#14406d",
        paddingBottom: "100px",
        marginTop: "auto",
        position: "sticky",
        top: "100%",
      }}
    >
      <p style={{ color: "white" }}>
        {" "}
        <br />
        Copyright &copy; 2020-21. <br />A Shubham Dangi Production.
      </p>{" "}
    </div>
  );
}
