import "./App.css";
import { MemoryRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<Home />} />
            <Route exact path="/play" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
