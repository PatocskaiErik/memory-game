import cards from "./cards";
import { useEffect } from "react";

const Card = (numberOfCards) => {
  const cardDeck = [];
  const createDeck = () => {
    for (let index = 0; index <= 5; index++) {
      cardDeck.push(cards);
    }
    return cardDeck;
  };

  return (
    <div className="card-container">
      {cards.slice(0, numberOfCards).map((card) => (
        <img
          src={"/images/cards/" + card.image}
          alt={card.name}
          className={card.clicked ? "show" : "hide"}
        />
      ))}
    </div>
  );
};
export default Card;
