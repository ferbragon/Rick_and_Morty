import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ALL_FAVS, REMOVE_ALL_FAVS } from "./types";

const initialState = {
    myFavorites: [],//Se pisan los resultados de filtrado para mostrar
    allCharactersFav: []//Se trabajan los filtros en una copia
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...payload],
                allCharactersFav: [...payload]
              };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: [...payload],
                allCharactersFav: [...payload]
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
        case ALL_FAVS:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload,
            };
        case REMOVE_ALL_FAVS:
            return {
                ...state,
                myFavorites: [...payload],
                allCharactersFav: [...payload]
                };


        default:
            return { ...state }
    }
}

export default reducer;