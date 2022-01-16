import React from "react";
import Card from "../../components/Card/Card";
import { useState } from "react";
import "./Home.scss";
const sampleData = [
  {
    id: 1,
    question: "Favorite programming language",
    options: ["Python", "Java", "C++", "Javascript"],
  },
  {
    id: 5,
    question: "Favorite sitcom",
    options: ["Seinfield", "Friends", "Office", "Brooklyn nine"],
  },
  {
    id: 2,
    question: "Favorite Book",
    options: [" Moby Dick", "Don Quixote", "The Little Prince", "Harry Potter"],
  },
  {
    id: 3,
    question: "Favorite author",
    options: [
      "William Shakespeare",
      "Danielle Steel",
      "Harold Robbins",
      "Georges Simenon",
    ],
  },
  {
    id: 4,
    question: "Favorite food",
    options: ["burger", "sandwich", "bread", "biriyani"],
  },
];

export const Home = () => {
  return (
    <div className="home">
      <div className="home__title-wrapper">
        <div className="home__title">Welcome to U-Survey</div>
      </div>
      <div className="home__title-sub">Here are some questions</div>
      <div className="home__question-cards">
        {sampleData.map((value, index) => (
          <Card key={index} data={value} />
        ))}
      </div>
    </div>
  );
};
