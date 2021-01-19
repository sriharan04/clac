import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div className={props.st} onClick={props.evt}>
      {props.children}
    </div>
  );
};

export default Button;
