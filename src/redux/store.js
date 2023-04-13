import { createStore, applyMiddleware, compose } from "redux";
import  reducer  from "./reducer";
import thunkMiddleware from "redux-thunk";//Para que sirva la extensión del navegador

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Sirve para conectar la App con la extensión
//REDUX DEVTOOLS DEL NAVEGADOR


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // Sirve para que podamos hacer peticiones a una API/Servidor
    );



export default store;
