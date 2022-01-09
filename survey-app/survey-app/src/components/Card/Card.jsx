import React from "react";
import RadioOptions from "../RadioOptions/RadioOptions";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__question-wrapper">
        <div className="card__question">What is ur name?</div>
      </div>
      <div className="card__options">
        <RadioOptions id={1} name="name" label="Nirmal" />
        <RadioOptions id={1} name="name" label="Nirmal" />
        <RadioOptions id={1} name="name" label="Nirmal" />
      </div>
    </div>
  );
};

export default Card;
