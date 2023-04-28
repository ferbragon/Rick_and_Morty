let myFavorites = [];
console.log(myFavorites);

const postFav = (req, res) => {
    const character = req.body;

    if(character){
        myFavorites.push(character);
        return res.status(200).json(character);
    }

    res.status(404).send("Error");
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
  
    return res.status(200).json(myFavorites);
    /*res.status(404).send(`You do not have favorites with this ${id}`);*/
}

module.exports =  {
    postFav, 
    deleteFav
}