import SearchBar from './SearchBar.jsx';
import { NavLink } from "react-router-dom";
import "../stylesheets/Nav.css";
import logo from "../assets/Rick_and_Morty.svg.png";
import rickHead from "../assets/rickHead.png";
import headRickRain from "../assets/headRickRain.png";
import { useDispatch } from 'react-redux';
import { allCharacters, removeAllFavs } from '../redux/actions.js';
import { useState } from 'react';

function Nav({ onSearch, logOut, characters }) {
  const random = () => Math.floor(Math.random() * 827);
  const dispatch = useDispatch();

  const[allFavsIcon, setAllFavsIcon] = useState(false);

  const handleAllCharacters = () => {
    if (allFavsIcon === false) {
      dispatch(allCharacters(characters));
      setAllFavsIcon(!allFavsIcon);
    } else {
      dispatch(removeAllFavs(characters));
      setAllFavsIcon(!allFavsIcon);
    }
  };

  return (
    <div className='navbar'>
      <button className='allFavs' onClick={handleAllCharacters}>
        <img className='rick-head' src={allFavsIcon ? headRickRain : rickHead} />
      </button>
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