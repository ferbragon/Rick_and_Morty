import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Form from "./components/Form";
import Favorites from './components/Favorites';


const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "e2c9093d788f.170c014870ce69bce089";


function App() {
   //Variables
   const location = useLocation();
   const navigate = useNavigate();
   //Data
   const EMAIL = "nando@gmail.com";
   const PASS = "nando123";

   //States
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   //Sets

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name && !characters.some((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else if (data.name && characters.some((char) => char.id === data.id)) {
            alert("This character is already showed");
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters((oldChar) =>
      oldChar.filter((character) => character.id !== id))
   };

   const login = (userData) =>{
      if(userData.email === EMAIL && userData.password === PASS){
         setAccess(true);
         navigate("/home");
      }else{
        alert("Incorrect password or user");
      }
   };

   const logOut = () =>{
         setAccess(false);
   };


   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav logOut={logOut} onSearch={onSearch}/>}
         <Routes>
            <Route path="/" element={<Form login={login}/>}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
            <Route path="/about" element={<About />} />
            <Route path="detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
