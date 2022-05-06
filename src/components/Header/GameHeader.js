import "./Header.css";
import "../../App.css";
import logo from "./evista.png";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameHeader = () => {
  const deckSizes = [3, 4, 5, 6, 7, 8, 9, 10];
  const [deckSize, setDeckSize] = useState(
    localStorage.getItem("deckSize", (e) => e.target.value)
  );

  const navigate = useNavigate();

  //state reseted when the user clicks on the Start button
  const startGame = (event) => {
    event.preventDefault();
    localStorage.setItem("state", null);
    localStorage.setItem("deckSize", deckSize);
    window.location.replace(`/${deckSize}`);
  };

  //navigates to home when the user click onto logo
  const backToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <img
        className="header-logo"
        src={logo}
        alt="Evista logo"
        onClick={backToHome}
        style={{ cursor: "pointer" }}
      />
      <div className="header-title">Deck Size:</div>
      <div className="deck-selector">
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
      </div>
      <button onClick={startGame} className="start-button">
        Start New Game
      </button>
    </header>
  );
};
export default GameHeader;
