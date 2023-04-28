import SearchBar from './SearchBar.jsx';
import { NavLink } from "react-router-dom";
import "../stylesheets/Nav.css";
import logo from "../assets/Rick_and_Morty.svg.png";
import rickHead from "../assets/rickHead.png";

function Nav({ onSearch, logOut }) {
  const random = () => Math.floor(Math.random() * 827);

  return (
    <div className='navbar'>
      <img className='rick-head' src={rickHead} alt="rick-head"/>
      <button onClick={logOut}>
        <NavLink className='logout-button' to="/">Log out</NavLink>
      </button>
      <SearchBar className="searchbar" onSearch={onSearch} />
      <button onClick={() => onSearch(random())}>Random</button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/favorites">Favorites</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <img className='logo' src={logo} alt="rick-and-morty-logo"/>
    </div>
  );
}

export default Nav;