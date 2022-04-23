import "./Header.css";
import logo from "./evista.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Evista logo" />
    </header>
  );
};
export default Header;
