import { useParams } from "react-router-dom";
import cards from "../components/cards/cards";
import GameHeader from "../components/Header/GameHeader";
import "../App.css";
import { useState } from "react";
import { shuffle } from "lodash";

const Game = () => {
  const [deck, setDeck] = useState(shuffle([...cards]));
  const [activeCards, setActiveCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );

  const { numberOfCards } = useParams();

  const restartGame = () => {
    localStorage.setItem("state", null);
  };

  const cardClicked = (index) => {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([]);
    }
  };

  return (
    <div>
      <GameHeader />
      <div className="game-container">
        <div className="data-container">
          <div className="tries">
            Current tries: <span>0</span>
          </div>
          <div className="best-result">
            Best: <br /> <span>9</span>
          </div>
          <button className="restart-button" onClick={restartGame}>
            Restart
          </button>
        </div>
        <div className="card-container">
          {deck.slice(0, numberOfCards * 2).map((card, index) => (
            <div className="card" onClick={() => cardClicked(index)}>
              <img
                src={"/images/cards/" + card.image}
                alt={card.name}
                className={activeCards.indexOf(index) !== -1 ? "show" : "hide"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Game;
