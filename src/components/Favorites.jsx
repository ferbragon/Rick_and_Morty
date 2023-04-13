import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

export const Favorites = ({ myFavorites, allCharacters }) => {

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        setAux(!aux);
        dispatch(orderCards(event.target.value))
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <>
        <h1>Favorites</h1>
        <select onChange={handleOrder} >
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
            {
                allCharacters.map((character) => {
                    return(
                        <Card
                            key={character.id}//Reservado para React
                            id={character.id}//Para que podamos acceder al componente
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin?.name}
                            image={character.image}
                            onClose={character.onClose}
                        />
                    )
                })
            }
        </>
    )
};

export const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites, 
            allCharacters: state.allCharacters};
};

export default connect(
    mapStateToProps,
    null,
)(Favorites);