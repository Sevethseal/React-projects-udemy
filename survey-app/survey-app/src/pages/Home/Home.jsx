import React from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__title-wrapper">
        <div className="home__title">Welcome to U-Survey</div>
      </div>
      <div className="home__title-sub">Here are some questions</div>
      <div className="home__question-cards">
        <Card />
      </div>
    </div>
  );
};
