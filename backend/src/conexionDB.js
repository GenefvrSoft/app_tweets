const mysql = require('mysql2/promise');
const { sequelize } = require('./dbconfig');
const { modeloTweets } = require('./models/tweets');


function conexionDb() {
    mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    })
    .then((connection) => {  // Creando la base de datos
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`).then(() => {
            console.log('Base de datos creada exitosamente');
        })
    })
    .then( () => { // Creando la conexion a la base de datos
        sequelize.authenticate().then( () => {
            console.log('La conexion a la base de datos se ha realizado exitosamente');
        })
    })
    .then( () => { // Se crea la tabla 'tweets'
        modeloTweets.sync({ force: false })
        .then(() => console.log('Tabla tweets creada'))
    })
    .catch( (error) => {
        console.log('Incapaz de conectar a la base de datos: ', error.message);
    });
}

conexionDb();




