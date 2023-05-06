const express = require("express");
const router = express.Router();
const { getCharById } = require("../controllers/getCharById.js");
const { postUser } = require("../controllers/postUser.js");
const { login } = require("../controllers/login.js");
const { postFav } = require("../controllers/postFavs.js");
const { deleteFav } = require("../controllers/deleteFav.js");
const { addAllFavs, deleteAllFavs } = require("../controllers/handleAllFavs.js");
//const { postFav, deleteFav } = require("../controllers/handleFavorites.js");


router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/single/:id", deleteFav);

router.post('/fav/all', addAllFavs);

router.delete('/fav/all', deleteAllFavs);

module.exports = router;