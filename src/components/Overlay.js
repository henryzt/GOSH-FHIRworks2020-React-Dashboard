import React from "react";
import { CSSTransition } from "react-transition-group";

const Overlay = props => {
  return (
    <div>
      <CSSTransition unmountOnExit in={props.show} timeout={200} classNames="overlay-anim">
        <div className={"overlay"}></div>
      </CSSTransition>
    </div>
  );
};

export default Overlay;
