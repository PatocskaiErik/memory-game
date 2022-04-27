import "../App.css";
import Header from "../components/Header/Header";
import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const deckSizes = [3, 4, 5, 6, 7, 8, 9, 10];
  const [deckSize, setDeckSize] = useState(3);

  const navigate = useNavigate();

  const startGame = () => {
    localStorage.setItem("state", null);
    localStorage.setItem("deckSize", deckSize);
    navigate(`/play/${deckSize}`);
  };

  return (
    <div>
      <Header />
      <h1 className="home-title">Splendex Memory Game</h1>
      <div className="deck-size-label">Deck Size</div>
      <div className="deck-size-form">
        <FormControl>
          <Select
            value={deckSize}
            className="deck-size-select"
            sx={{ fontSize: "1.5rem" }}
            onChange={(e) => setDeckSize(e.target.value)}
          >
            {deckSizes.map((number) => {
              return (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              );
            })}
          </Select>
          <div className="button-container">
            <button onClick={startGame} className="start-button">
              Start New Game
            </button>
          </div>
        </FormControl>
      </div>

      <div className="game-rules">
        <h2>Game Rules</h2>
        <div>Present the user with an even number of cards, “face down”.</div>
        <div>
          When the user clicks a card, “flip it over” and reveal the hidden
          image.
        </div>
        <div>When two cards are revealed:</div>
        <div>If the cards are identical, they are removed from play.</div>
        <div>If they are not, they will flip back.</div>
        <div>The game ends when all the cards are removed.</div>
      </div>
    </div>
  );
};
export default Home;
