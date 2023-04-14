import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
import "../stylesheets/Favorites.css";

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
        <>
        <h1>Favorites</h1>
        <select onChange={handleOrder} >
            <option value="A">Ascendent</option>
            <option value="D">Descendent</option>
        </select>
        <select onChange={handleFilter}>
            <option value="All">All Characters</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <div className="favorites">
            {
                myFavorites.map((character) => {
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
        </>
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