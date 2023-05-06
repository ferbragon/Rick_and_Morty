const { conn } = require("../DB_connection.js");
const Favorite = conn.models.Favorite;

const deleteFav = async (req, res) => {
    try {
      const { id } = req.params;
      const favDeleted = await Favorite.findByPk(id);
      if (favDeleted) {
        await favDeleted.destroy();
  
        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
      } else {
        return res.status(404).json({ message: "Character not found" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    deleteFav,
  };  
  
  
  
  
  
  