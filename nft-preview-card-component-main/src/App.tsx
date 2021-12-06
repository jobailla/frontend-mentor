import "./App.scss";

import React, { ReactElement } from "react";

import Avatar from "./assets/images/image-avatar.png";
import Equilibrium from "./assets/images/image-equilibrium.jpg";
import Card from "./components/Card";

const App = (): ReactElement => {
  const cards = [
    {
      id: "1",
      img: Equilibrium,
      title: "Equilibrium #3429",
      description: " Our Equilibrium collection promotes balance and calm.",
      price: 0.041,
      time: "3 days left",
      author: {
        name: "Jonathan Baillais",
        link: "https://github.com/jobailla",
        avatar: Avatar,
      },
    },
  ];

  return (
    <div className="App">
      <div className="App__cards">
        {cards.map((card, i) => {
          return (
            <div key={`${i}_${card.id}`}>
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
