import React, { Component } from "react";
import "./Header.css";

const Header = props => {
  const height = props.isHome ? "400px" : "200px";
  const lineHeight = props.isHome ? "330px" : "200px";
  return (
    <div className="header" style={{ height, lineHeight }}>
      {props.title}
    </div>
  );
};

export default Header;
