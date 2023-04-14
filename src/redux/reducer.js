import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [],//Se pisan los resultados de filtrado para mostrar
    allCharactersFav: []//Se trabajan los filtros en una copia
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav,payload]
            }
        case REMOVE_FAV:
            let filterRemoveFav = state.myFavorites.filter((character) => character.id !== payload);
            let filterRemoveFavAll = state.allCharactersFav.filter((character) => character.id !== payload);
            return {
                ...state,
                 myFavorites: [...filterRemoveFav],
                allCharactersFav: [...filterRemoveFavAll],
    };
        case FILTER:
            let charactersFilter = state.allCharactersFav.filter((character) => character.gender === payload);
            return {
                ...state,
                myFavorites: //Condicional para mostrar todos los personajes de favoritos
                payload === "All"
                ? [...state.allCharactersFav]
                : [...charactersFilter]
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            const orderA = (a, b) => a.id - b.id;
            const orderD = (a, b) => b.id - a.id;
            return {
                ...state,
                myFavorites: payload === "A" ? allCharactersFavCopy.sort(orderA) : allCharactersFavCopy.sort(orderD)
            }
        default:
            return { ...state }
    }
}

export default reducer;