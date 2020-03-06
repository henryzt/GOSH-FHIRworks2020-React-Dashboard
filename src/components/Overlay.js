import React from "react";

const Overlay = props => {
  if (props.show) {
    return <div className={"overlay"}></div>;
  }
  return <div></div>;
};

export default Overlay;
