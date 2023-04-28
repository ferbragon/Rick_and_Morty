import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import "../stylesheets/Detail.css";
import Loading from "./Loading";

//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
//const API_KEY = "e2c9093d788f.170c014870ce69bce089";


const Detail = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true); // mostrar componente Loading
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .finally(() => {
          // Ocultar el componente Loading después de que se complete la carga de los datos
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        });
    }, [id]);

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <button className="button-detail-close">
              <NavLink to="/home">X</NavLink>
            </button>
            <div className="detail">
              <div className="detail-box">
                <h2>
                  <span>Name: </span>
                  {character.name}
                </h2>
                <h2>
                  <span>Status: </span>
                  {character.status}
                </h2>
                <h2>
                  <span>Species: </span>
                  {character.species}
                </h2>
                <h2>
                  <span>Gender: </span>
                  {character.gender}
                </h2>
                <h2>
                  <span>Origin: </span>
                  {character.origin?.name}
                </h2>
              </div>
              <img
                src={character.image}
                alt={`Foto de ${character.name}`}
              />
            </div>
          </>
        )}
      </div>
    );
  };

export default Detail;