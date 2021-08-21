const express = require('express');
require('dotenv').config();


//crear servidor de exprees
const app = express();

//directorio 
app.use(express.static('public'));

//lectura y parceo del body 
app.use(express.json());

//ruta
app.use('/api/auth', require('./routes/auth')); 

// escuchar peticion
app.listen( process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${ process.env.PORT}`)
});