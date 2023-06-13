const { modeloTweets } = require('../models/tweets')

const obtenerTweets = async(req, res) => {
    try {
        const tweets = await modeloTweets.findAll({});
        res.json({tweets});
    } catch (error) {
        console.log(error.message);
    }
}


const crearTweet = async(req, res) => {
    try {
        const { nombreUsuario, descripcion, favorito = false } = req.body;
        const tweet = await modeloTweets.create({
            nombreUsuario,
            descripcion,
            favorito
        });
        res.json({mensaje: 'El tweet ha sido exitoso', tweet});
    } catch (error) {
        console.log(error.message);
    }
}

const eliminarTweet = async(req, res) => {
    try {
        const { id } = req.params;
        await modeloTweets.destroy({where: {id}})
        res.json({mensaje: 'El tweet ha sido eliminado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

const statusFavoritos = async(req, res) => {
    try {
        const { id, favorito } = req.body;
        const mensaje = favorito ? 'El tweet ha sido marcado como favorito' : 'El tweet ha sido marcado como no favorito' 
        
        await modeloTweets.update({favorito}, {where: {id}})
        res.json({mensaje});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    crearTweet,
    eliminarTweet,
    statusFavoritos,
    obtenerTweets
}