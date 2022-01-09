import React from "react";
import "./RadioOptions.scss";

const RadioOptions = ({ id, name, label }) => {
  return (
    <div className="radio">
      <input type="radio" id={id} name={name} value={label}></input>
      <label>{label}</label>
    </div>
  );
};

export default RadioOptions;
