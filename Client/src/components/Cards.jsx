import Card from './Card';
import "../stylesheets/Cards.css";
import { useState, useEffect } from 'react';
import ScrollButton from './ScrollButton';

export default function Cards({ characters, onClose }) {

   //const [loaded, setLoaded] = useState(false);
   const [animatedCards, setAnimatedCards] = useState([]);

   return (
   <div className='cards'>
      {
      characters.map(({ id, name, status, species, gender, origin, image }) => {
         return (
            <Card
            key={id}//Reservado para React
            id={id}//Para que podamos acceder al componente
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            isAnimated={animatedCards.includes(id)}
         />
         )
      })}
      <ScrollButton />
   </div>
   )
};
