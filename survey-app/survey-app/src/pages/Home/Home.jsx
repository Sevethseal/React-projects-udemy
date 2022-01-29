import React from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
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
  const ids = [1, 2, 3, 4];
  const [name, setName] = useState("user");
  const [pageStatus, setPageStatus] = useState("login");
  const [id, setId] = useState(0);
  const [questions, setQuestions] = useState();
  const [answer, setAnswers] = useState();
  const [finalAnswers, setFinalAnswers] = useState([]);
  console.log("hiii", answer);
  const cardFormSubmit = (e, qid) => {
    e.preventDefault();
    console.log(e.target);
    setFinalAnswers((prev) => [...prev, { id: qid, answer: answer }]);
    setQuestions((prev) => prev.filter((value) => value.id !== qid));
    setId((prev) => prev + 1);
    if (id + 1 >= ids.length) {
      setPageStatus("complete");
    }
  };
  useEffect(() => {
    setQuestions(sampleData.filter((value) => value.id === ids[id]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const nameSubmit = (e) => {
    e.preventDefault();
    setFinalAnswers((prev) => [...prev, { name: name }]);
    setPageStatus("question");
  };
  if (pageStatus === "login") {
    return (
      <div className="home">
        <form className="home__form" onSubmit={nameSubmit}>
          <label>Enter your name :</label>
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }

  if (pageStatus === "question") {
    return (
      <div className="home">
        {console.log("h00", finalAnswers)}
        <div className="home__title-wrapper">
          <div className="home__title">Hi {name},Welcome to U-Survey</div>
        </div>
        <div className="home__title-sub">Here are some questions</div>
        <div className="home__question-cards">
          {questions &&
            questions.map((value) => (
              <Card
                key={value.id}
                data={value}
                cardFormSubmit={cardFormSubmit}
                radioSate={(e) => {
                  setAnswers(e.target.value);
                }}
              />
            ))}
        </div>
      </div>
    );
  }
  if (pageStatus === "complete") {
    return (
      <div className="home">
        {" "}
        <div className="home__thanks">
          Thanks for tasking the Survey {name},See you!
        </div>{" "}
      </div>
    );
  }
};