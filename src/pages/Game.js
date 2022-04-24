import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/cards/Card";
import cards from "../components/cards/cards";

const Game = () => {
  const { numberOfCards } = useParams();

  useEffect(() => {}, []);

  return (
    <div>
      {cards.slice(0, numberOfCards * 2).map((card) => (
        <img
          src={"/images/cards/" + card.image}
          alt={card.name}
          className={card.clicked ? "show" : "hide"}
        />
      ))}
    </div>
  );
};
export default Game;
