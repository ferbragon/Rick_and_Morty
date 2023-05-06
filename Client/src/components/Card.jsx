import { NavLink } from "react-router-dom";
import "../stylesheets/Card.css";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import  favNo from "../assets/heartnon.png";
import favYes from "../assets/heartyes.png";


export function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites, isAnimated }) {

   const location = useLocation();

   const [isFav, setIsFav] = useState(false);
   
   const [animationCompleted, setAnimationCompleted] = useState(false);

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
      if (myFavorites.length) {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }
   }, [myFavorites, id]);

   useEffect(() => {
      const isCharacterFavorite = myFavorites.some(fav => fav.id === id);
   
      if (isCharacterFavorite) {
         setIsFav(true);
      } else {
         setIsFav(false);
      }
   }, [myFavorites, id]);

         
   useEffect(() => {
      if (!isAnimated && !animationCompleted) {
         const timer = setTimeout(() => {
         setAnimationCompleted(true);
         }, 1500); // La duración de la animación en milisegundos
 
     return () => clearTimeout(timer);
      }
   }, [isAnimated, animationCompleted]);
   

   return (
      <div className={`card ${!isAnimated && !animationCompleted ? 'card-enter' : ''}`}>
         <button id={id} onClick={location.pathname === "/home" ? () => onClose(id) : handleFavorite }>
            {location.pathname === "/home" ? <span>Delete Card</span> : <span>Discard favorite</span>}
         </button>
         <div className="box-info">
            <div className="content-info">
               <span className="info-description"><span className="info">Status: </span>{status}</span>
               <span className="info-description"><span className="info">Species:</span> {species}</span>
               <span className="info-description"><span className="info">Gender: </span>{gender}</span>
               <span className="info-description"><span className="info">Origin: </span>{origin}</span>
            </div>
            {
                  isFav ? (
                     <button id={id}  className="fav-button" onClick={handleFavorite}><img className="imageFav" src={favYes} alt="red-heart"/></button>
                  ) : (
                     <button id={id} className="fav-button" onClick={handleFavorite}><img className="imageFavNo" src={favNo} alt="transparent-heart"/></button>
                  )
               }
         </div>
         <NavLink to={`/detail/${id}`}>
            <img className="img-card" src={image} alt={`Foto de ${name}`}/>
            <h2 className="name">{name}</h2>
         </NavLink>
         <h2 className="card-number"><span>#{id}</span></h2>
         <div className="content-fav">
         </div>
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
