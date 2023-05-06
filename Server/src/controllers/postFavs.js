const { conn } = require("../DB_connection.js");
const Favorite = conn.models.Favorite;

const postFav = async(req, res) => {
    try{
        const { id, name, origin, status, image, species, gender } = req.body;
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({ message: "Ey, we're missing data!"});
        };
        const newFav = await Favorite.findOrCreate({
            where: { id },
            defaults: {
                name,
                origin, 
                status, 
                image,
                species, 
                gender
            }
        });
        const allFavs = await Favorite.findAll();

        return res.status(200).json(allFavs);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
};

module.exports = {
    postFav
};