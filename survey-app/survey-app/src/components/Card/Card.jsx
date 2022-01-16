import React from "react";
import RadioOptions from "../RadioOptions/RadioOptions";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card__question-wrapper">
        <div className="card__question">{data.question} :</div>
      </div>
      <div className="card__options">
        {data.options.map((value, index) => (
          <RadioOptions key={index} name={data.id} label={value} />
        ))}
      </div>
      <div className="card__button-wrapper">
        <button type="button" className="card__button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Card;
