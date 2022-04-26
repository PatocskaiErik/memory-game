import { useParams } from "react-router-dom";
import cards from "../components/cards/cards";
import GameHeader from "../components/Header/GameHeader";
import "../App.css";
import { useState, useEffect } from "react";

const Game = () => {
  const { numberOfCards } = useParams();

  const [deck, setDeck] = useState([...cards]);
  const [activeCards, setActiveCards] = useState([]);
  const [cardNames, setCardNames] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestResult") || 0
  );

  const restartGame = () => {
    localStorage.setItem("state", null);
    window.location.reload();
  };

  const cardClicked = (index, name) => {
    if (activeCards.length === 0) {
      setActiveCards([index]);
      setCardNames([name]);
    }
    if (activeCards.length === 1) {
      const firstCard = cardNames[0];
      const secondCard = name;
      if (firstCard === secondCard) {
        if (pairs.length + 2 === deck.length) {
          alert("Congratulations! Your score is " + moves + " in this round.");
          if (moves < bestScore) {
            localStorage.setItem("bestResult", moves);
          }
        }
        setPairs([...pairs, activeCards[0], index]);
      }
      setCardNames([...cardNames, name]);
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
      setCardNames([name]);
    }
    setMoves(moves + 1);
  };

  useEffect(() => {
    setDeck((deck) =>
      [...deck].slice(0, numberOfCards * 2).sort((a, b) => Math.random() - 0.5)
    );
  }, []);

  return (
    <div>
      <GameHeader numberOfCards={numberOfCards} />
      <div className="game-container">
        <div className="data-container">
          <div className="tries">
            Current tries: <span>{moves}</span>
          </div>
          <div className="best-result">
            Best: <br /> <span>{bestScore}</span>
          </div>
          <button className="restart-button" onClick={restartGame}>
            Restart
          </button>
        </div>
        <div className="card-container">
          {deck.map((card, index) => {
            const clicked = activeCards.indexOf(index) !== -1;

            const matched = pairs.indexOf(index) !== -1;
            return (
              <div
                className={matched ? "matched" : "card"}
                onClick={() => cardClicked(index, card.name)}
              >
                <img
                  src={"/images/cards/" + card.image}
                  alt={card.name}
                  className={clicked || matched ? "show" : "hide"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Game;
