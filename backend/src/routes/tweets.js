const express = require("express");
const router = express.Router();

const { 
    crearTweet,
    eliminarTweet,
    statusFavoritos,
    obtenerTweets,
} = require("../controllers/tweetsControllers");


router.get('/obtener-tweets', obtenerTweets);
router.post('/crear-tweet', crearTweet);
router.put('/status-favorito', statusFavoritos)
router.delete('/eliminar-tweet/:id', eliminarTweet);



module.exports = router;