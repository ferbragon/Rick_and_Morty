//Server con http

/*const http = require("http");
const PORT = 3001;
const { getCharById } = require("./controllers/getCharById.js");

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")){
        const id = request.url.split("/").at(-1);

        getCharById(response, +id);
}}).listen(PORT)*/ // En node v 18  o más no es necesario colocar "localhost" para que RapidAPI client funcione


//Express server
/*const express = require("express");
const PORT = 3001;
const server = express();

//Controller
const router = require("./routes/index.js");

//Middleware
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use("/rickandmorty", router);*/

//Se realiza módulo para testing
const { server } = require("./app.js");
const { conn } = require('./DB_connection');
const PORT = 3001;


// Conectar a la base de datos y sincronizar los modelos
conn.sync({force: false})
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .then(() => {
    // Iniciar el servidor una vez que la conexión y la sincronización estén completas
    server.listen(PORT, () => {
      console.log(`Server rised in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });