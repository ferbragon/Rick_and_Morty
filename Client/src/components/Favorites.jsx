import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
import "../stylesheets/Favorites.css";
import ScrollButton from './ScrollButton';

export const Favorites = ({ myFavorites, allCharactersFav }) => {
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        setAux(true);
        dispatch(orderCards(event.target.value))
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div className="box-favorites">
        <h1>Favorites</h1>
        <select onChange={handleOrder} >
            <option className="option" value="A">Ascendent</option>
            <option className="option" value="D">Descendent</option>
        </select>
        <select onChange={handleFilter}>
            <option className="option" value="All">All Characters</option>
            <option className="option" value="Male">Male</option>
            <option className="option" value="Female">Female</option>
            <option className="option" value="Genderless">Genderless</option>
            <option className="option" value="unknown">unknown</option>
        </select>
        <div className="favorites">
            {
                myFavorites && myFavorites.flat().map((character) => {
                    return(
                        <Card
                            key={character.id}//Reservado para React
                            id={character.id}//Para que podamos acceder al componente
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin}
                            image={character.image}
                            onClose={character.onClose}
                        />
                    )
                })
            }
        </div>
        <ScrollButton />
        </div>
    )
};

export const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites, 
            allCharactersFav: state.allCharactersFav};
};

export default connect(
    mapStateToProps,
    null,
)(Favorites);