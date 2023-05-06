const { conn } = require("../DB_connection.js");
const Favorite = conn.models.Favorite;

const addAllFavs = async (req, res) => {
    try {
        const characters = req.body;

        const favoritesToAdd = characters.map((character) => ({
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            image: character.image
        }));

        await Favorite.bulkCreate(favoritesToAdd, { ignoreDuplicates: true });

        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const deleteAllFavs = async (req, res) => {
    try {
        await Favorite.destroy({ where: {} });;

        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



module.exports = {
    addAllFavs,
    deleteAllFavs
}