import React from "react";
import RadioOptions from "../RadioOptions/RadioOptions";
import "./Card.scss";

const Card = ({ data, cardFormSubmit, radioSate }) => {
  return (
    <div className="card">
      <div className="card__question-wrapper">
        <div className="card__question">{data.question} :</div>
      </div>
      <form onSubmit={(e) => cardFormSubmit(e, data.id)}>
        <div className="card__options">
          {data.options.map((value, index) => (
            <RadioOptions
              key={index}
              name={data.id}
              label={value}
              radioSate={radioSate}
            />
          ))}
        </div>
        <div className="card__button-wrapper">
          <button type="submit" className="card__button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
