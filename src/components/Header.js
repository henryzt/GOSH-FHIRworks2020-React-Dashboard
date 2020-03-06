import React from "react";
import "./Header.css";
import logo from "../img/fhir-dashboard-logo.png";

const Header = props => {
  const height = props.isHome ? "400px" : "200px";
  const lineHeight = props.isHome ? "330px" : "200px";
  return (
    <div className={props.isHome ? "header mobileHeader" : "header"} style={{ height, lineHeight }}>
      {props.isHome ? (
        <img src={logo} style={{ width: "70%", maxWidth: "450px", height: "auto" }}></img>
      ) : (
        props.title
      )}
    </div>
  );
};

export default Header;
