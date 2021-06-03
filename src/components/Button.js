import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <>
      <button className={props.title}>{props.title}</button>
    </>
  );
};
