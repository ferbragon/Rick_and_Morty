import SearchBar from './SearchBar.jsx';
import { NavLink } from "react-router-dom";

function Nav({ onSearch, logOut }) {
  const random = () => Math.floor(Math.random() * 827);

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <button onClick={() => onSearch(random())}>Random</button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button onClick={logOut}>
        <NavLink to="/">LogOut</NavLink>
      </button>
    </>
  );
}

export default Nav;