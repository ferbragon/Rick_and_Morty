import { NavLink } from "react-router-dom";
import "../stylesheets/Card.css";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";


export function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const location = useLocation();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      const characterProps = { id, name, status, species, gender, origin, image, onClose }; 

      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(characterProps);
      }
   };

   useEffect(() => {
   
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className="card">
         <button id={id} onClick={location.pathname === "/home" ? () => onClose(id) : handleFavorite }>
            {location.pathname === "/home" ? "Eliminate Card" : "Discard favorite"}
         </button>
         <div className="box-info">
            <div className="content-info">
               <h2 className="info-description"><span className="info">Status: </span>{status}</h2>
               <h2 className="info-description"><span className="info">Species:</span> {species}</h2>
               <h2 className="info-description"><span className="info">Gender: </span>{gender}</h2>
               <h2 className="info-description"><span className="info">Origin: </span>{origin}</h2>
            </div>
            <div className="content-fav">
            {
                  isFav ? (
                     <button id={id}  className="fav-button" onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button id={id} className="fav-button" onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>
         </div>
         <NavLink to={`/detail/${id}`}>
            <img src={image} alt={`Foto de ${name}`} />
            <h2 className="name">{name}</h2>
         </NavLink>
         <h2 className="card-number">#{id}</h2>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {myFavorites: state.myFavorites}
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
