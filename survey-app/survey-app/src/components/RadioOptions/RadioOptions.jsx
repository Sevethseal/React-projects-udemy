import React from "react";
import "./RadioOptions.scss";

const RadioOptions = ({ id, name, label, radioSate }) => {
  return (
    <div className="radio">
      <input
        type="radio"
        id={id}
        name={name}
        value={label}
        onChange={(e) => radioSate(e)}
        required
      ></input>
      <label>{label}</label>
    </div>
  );
};

export default RadioOptions;
