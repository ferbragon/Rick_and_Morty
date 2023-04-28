const app = require('../src/app');
const session = require('supertest');
const request = session(app);
const users = require("../src/utils/users.js");

const character = {
    id: 932,
    name: "Dai",
    species: "Human",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpg",
    gender: "Female",
    status: "Alive"
};


describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it('response con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it('response un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get("/rickandmorty/character/1");
            for(const prop in character){
                expect(response.body).toHaveProperty(prop);
            }
        });

        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/900j');
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        const object = { access: true };

        it("Si se ejecuta la ruta `/rickandmorty/login` se obtiene un objeto con propiedad access en true sila información del usuario es válida", async () => {
            const response = await request.get(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`);
            expect(response.body).toEqual(object);
        })
    
        it("Si se ejecuta la ruta `/rickandmorty/login` con datos incorrectos devuelve false", async () => {
            const response = await request.get(`/rickandmorty/login?email=una&password=contrasenia`);
            object.access = false;
            expect(response.body).toEqual(object);
        });
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").
            send(character);
            expect(response.body).toContainEqual(character);//toContainEqual para objetos y arrays
        });
        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 1923;
            character.name = "FT 37a"
            const response = await request.post("/rickandmorty/fav").send(character);
            expect(response.body.length).toBe(2);
        });
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Cuando se ejecuta la ruta /rickandmorty/fav/:id en el caso de que no haya ningún personaje con el ID que se envía, se recibe un arreglo con los elementos previos sin modificar",
        async () => {
            const response = await request.delete("/rickandmorty/fav/999hh");
            expect(response.body.length).toBe(2);
        });

        it("Si el ID enviado existe debería eliminarlo de favoritos", async () => {
            const response = await request.delete("/rickandmorty/fav/1923");
            expect(esponse.body.length).toBe(1);
        });
    });
}); 
