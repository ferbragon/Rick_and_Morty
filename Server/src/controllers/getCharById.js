//Código para http from node server
/*const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        const data = response.data;
        const character = {
            id: data.id,
            gender: data.gender,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        };
        return res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character));
    })
    .catch(error => {
        return res
        .writeHead(500, {"Content-type": "text/plain"})
        .end(error.message);
    });
};

module.exports = {
    getCharById
};*/

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

/*const getCharById = (req, res) => {
    const { id } = req.params;

    axios(`${URL}${id}`)
    .then(response => response.data)
    .then(({ status, name, species, origin, image, gender}) => {
        if(name){
            const character = {
                id,
                gender,
                name,
                species,
                origin,
                image,
                status
            }
            return res.status(200).json(character)
        }

        return res.status(404).send("Not found");
    })
    .catch(error => res.status(500).send(error.message))
}*/

//Async await function:
const getCharById = async function(req, res){
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}${id}`);
        
        if(!data.name) throw new Error(`Missing character data with ID: ${id}`);//Error del usuario 404

        const character = {
            id: data.id,
            gender: data.gender,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }

        return res.status(200).json(character);

    } catch (error) {
        return error.message.includes("ID")
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
};

module.exports = {
    getCharById
}








