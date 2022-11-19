import logo from "../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

const Header = ({ handleName, handleTitle }) => {
  const location = useLocation();
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo Marvel" />
          </Link>
        </div>
        {location.pathname === "/" ? (
          <div className="searchbar">
            <input onChange={handleName} type="text" placeholder="Spiderman" />
          </div>
        ) : location.pathname === "/comics" ? (
          <div className="searchbar">
            <input onChange={handleTitle} type="text" placeholder="Avengers" />
          </div>
        ) : null}

        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
