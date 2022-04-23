import "../App.css";
import Header from "../components/Header/Header";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Home = () => {
  const deckSizes = [3, 4, 5, 6, 7, 8, 9, 10];
  const [deckSize, setDeckSize] = useState(3);

  return (
    <div>
      <Header />
      <h1 className="home-title">Splendex Memory Game</h1>
      <div className="deck-size-label">Deck Size</div>
      <div className="deck-size-form">
        <FormControl>
          <Select
            className="deck-size-select"
            onChange={setDeckSize}
            sx={{ fontSize: "1.5rem" }}
          >
            {deckSizes.map((number) => {
              return (
                <MenuItem key="number" value={number}>
                  {number}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="button-container">
        <button type="submit" className="start-button">
          Start New Game
        </button>
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
