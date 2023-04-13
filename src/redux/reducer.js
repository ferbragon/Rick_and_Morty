import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters,payload]
            }
        case REMOVE_FAV:
            let filterRemoveFav = state.myFavorites.filter((character) => character.id !== payload);
            let filterRemoveFavAll = state.allCharacters.filter((character) => character.id !== payload);
            return {
                ...state,
                 myFavorites: [...filterRemoveFav],
                allCharacters: [...filterRemoveFavAll],
    };
        case FILTER:
            let charactersFilter = state.myFavorites.filter((character) => character.gender === payload);
            return {
                ...state,
                allCharacters: [...charactersFilter]
            }
        case ORDER:
            let orderA = (a, b) => {return a.id - b.id};
            let orderD = (a, b) => {return b.id - a.id};
            return {
                ...state,
                allCharacters: payload === "A" ? [...state.myFavorites].sort(orderA) : [...state.myFavorites].sort(orderD)
            }
        default:
            return { ...state }
    }
}

export default reducer;