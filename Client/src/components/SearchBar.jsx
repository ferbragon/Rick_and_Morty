import { useState } from "react";
import "../stylesheets/SearchBar.css";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const handleClick = () => {
      onSearch(id);
      setId("");
   };

   return (
      <div className="searchbar">
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={handleClick}>Add</button>
      </div>
   );
}
