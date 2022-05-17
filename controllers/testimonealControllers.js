import { Testimoneales } from "../models/Testimoneales.js";

const guardarTestimoneal = async (req, res) => {
  //Validar form
  const { nombre, email, mensaje } = req.body;

  let errores = [];

  if(nombre.trim() === '') {
    errores.push({mensaje: 'El nombre esta vacio'});
  }

  if(email.trim() === '') {
    errores.push({mensaje: 'El correo esta vacio'});
  }

  if(mensaje.trim() === '') {
    errores.push({mensaje: 'El mensaje esta vacio'});
  }

  if(errores.length > 0) {
    //Consultar la DB con los testimoneales existentes
    const testimoneales = await Testimoneales.findAll();
    
    //Eviar errores hacia la vista
    res.render('testimoneales', {
      pagina: 'Testimoneales',
      errores,
      nombre,
      mensaje,
      email,
      testimoneales,
    })
  }else {
    //Almacenar los datos en la DB
    try {
      await Testimoneales.create( {
        nombre,
        email,
        mensaje
      })
      res.redirect('/testimoneales')
    } catch (error) {
      console.log(errore);
    }
  }
}

export {
  guardarTestimoneal,
}