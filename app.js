import express from "express";
import db from "./config/db.js";
import router from "./routes/app.js";
import dotenv from 'dotenv';

const app = express();

//Conectar a la base de datos
db.authenticate()
  .then( () => console.log('BD conectada'))
  .catch( error => console.log(error))
 

//Habilitar PUG
app.set('view engine', 'pug')

//Obtener el año actual
app.use( (req, res, next) => {
  const actualYear = new Date().getFullYear();
  res.locals.year = actualYear;
  res.locals.nombreSitio = 'Agencia de Viajes';

  return next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica (A lo que el usuario tiene acceso)
app.use(express.static('public'))

//Agregar router
app.use('/', router)

//Puero y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('El servidor esta funcionando');
});