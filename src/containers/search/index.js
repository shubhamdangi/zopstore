import React from "react";
import "./style.css";

export default function SearchBar({ onChange, placeholder }) {
  return (
    <div className="Search">
      <span className="SearchSpan">{/* <input type="text" /> */}</span>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
