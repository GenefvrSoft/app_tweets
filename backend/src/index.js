const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config()
require('./conexionDB');

const rutasTweets = require('./routes/tweets');
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use('/api', rutasTweets);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));