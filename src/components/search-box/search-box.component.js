import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      ref={input => input && input.focus()}
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
