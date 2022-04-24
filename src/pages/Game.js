import { useParams } from "react-router-dom";
import Card from "../components/cards/Card";
import cards from "../components/cards/cards";
import GameHeader from "../components/Header/GameHeader";

const Game = () => {
  const { numberOfCards } = useParams();

  return (
    <div>
      <GameHeader />
      {cards
        .slice(0, numberOfCards * 2)
        .map((card) => (
          <img
            src={"/images/cards/" + card.image}
            alt={card.name}
            className={card.clicked ? "show" : "hide"}
          />
        ))
        .sort((a, b) => 0.5 - Math.random())}
    </div>
  );
};
export default Game;
