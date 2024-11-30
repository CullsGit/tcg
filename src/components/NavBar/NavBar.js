import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="">
          <li>Lore</li>
          <li>
            <Link to="/cardlist">Cards</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>How to play</li>
          <li>Shop</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
