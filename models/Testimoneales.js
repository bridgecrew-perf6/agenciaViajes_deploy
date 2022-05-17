import Sequelize from 'sequelize';
import db from '../config/db.js';

//Nombre de la tabla en la db 
export const Testimoneales = db.define('testimoneales', {
  nombre: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING
  },

  mensaje: {
    type: Sequelize.STRING
  }
})