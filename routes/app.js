import express from "express";
import { 
  paginaInicio, 
  paginaNosotros, 
  paginaTestimoneales, 
  paginaViajes,
  paginaDetalleViaje
}from "../controllers/paginaControllers.js";

import { 
  guardarTestimoneal 
} from "../controllers/testimonealControllers.js";

const router = express.Router()

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoneales', paginaTestimoneales)

router.post('/testimoneales', guardarTestimoneal)

export default router;