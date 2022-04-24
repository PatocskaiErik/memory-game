import "./Header.css";
import logo from "./evista.png";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameHeader = () => {
  const deckSizes = [3, 4, 5, 6, 7, 8, 9, 10];
  const [deckSize, setDeckSize] = useState(3);

  const navigate = useNavigate();

  const startGame = (event) => {
    event.preventDefault();
    localStorage.setItem("state", null);
    navigate(`/play/${deckSize}`);
  };

  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Evista logo" />
      <div className="header-title">Deck Size:</div>
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
      <button onClick={startGame} className="start-button">
        Start New Game
      </button>
    </header>
  );
};
export default GameHeader;
