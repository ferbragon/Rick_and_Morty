import Card from './Card';

export default function Cards({ characters, onClose }) {
   return (
   <div>
      {
      characters.map(({ id, name, status, species, gender, origin, image, }) => {
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
         />
         )
      })}
   </div>
   )
};
