import { Viaje } from '../models/Viaje.js';
import { Testimoneales } from '../models/Testimoneales.js'

const paginaInicio = async (req, res) =>{

  const promiseDB = []

  promiseDB.push( Viaje.findAll( {limit: 3,}))
  promiseDB.push( Testimoneales.findAll( {limit: 3,}))
  try {
    //Consultar la DB para mostrar tres viajes
    const resultado = await Promise.all(promiseDB)

    res.render('inicio', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoneales: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }
}

const paginaNosotros = (req, res) =>{
  res.render('nosotros', {
    pagina: 'Nosotros',
  });
}

const paginaViajes = async (req, res) =>{
  const viajes = await Viaje.findAll()

  res.render('viajes', {
    pagina: 'Viajes disponibles',
    viajes,
  });
}

const paginaTestimoneales = async (req, res) => {
  try{
    const testimoneales = await Testimoneales.findAll()

    res.render('testimoneales', {
      pagina: 'Testimoneales',
      testimoneales,
    })
  }catch(error) {
    console.log(error);
  }
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({where: { slug }})

    res.render('viaje', {
      pagina: 'Informacion sobre el viaje',
      viaje,
    })
  } catch (error) {
    console.log(error);
  }

}

export {
  paginaInicio, 
  paginaNosotros,
  paginaViajes,
  paginaTestimoneales,
  paginaDetalleViaje
}