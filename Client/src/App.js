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


//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
//const API_KEY = "e2c9093d788f.170c014870ce69bce089";
const URL = 'http://localhost:3001/rickandmorty/login';


function App() {
   //Variables
   const location = useLocation();
   const navigate = useNavigate();

   //States
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   //Sets

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   /*const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name && !characters.some((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else if (data.name && characters.some((char) => char.id === data.id)) {
            alert("This character is already showed");
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };*/

   //OnSearch with async await

   const onSearch = async function(id){
      try{
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name && !characters.some((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else if (data.name && characters.some((char) => char.id === data.id)) {
            alert("This character is already showed");
         } 
      } catch (error) {
         alert('There is not characters with this id!');
      }
   }

   const onClose = (id) => {
      setCharacters((oldChar) =>
      oldChar.filter((character) => character.id !== id))
   };

   /*function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   };*/

   //login with async await
   const login = async function(userData) {
      try {
         const { email, password } = userData;
         const { data } = await axios(`${URL}?email=${email}&password=${password}`);
         const { access } = data;

         setAccess(access);
         access && navigate("/home");

      } catch (error){
         console.log(error.message);
      }
   }

   const logOut = () =>{
         setAccess(false);
   };


   return (
      <div className='App'>
         {location.pathname === "/" || location.pathname.startsWith("/detail/") ? null : (
         <Nav logOut={logOut} onSearch={onSearch} characters={characters} />)}
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
