const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbconfig");

const modeloTweets = sequelize.define('tweets', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombreUsuario: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    favorito: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = { modeloTweets };