import { Router } from 'express'

import { getRegSuelo, createNewRegSuelo, getRegSgetRegSueloById, getRegSgetRegSueloByFecha, deleteRegistroById, UpdateRegSueloById } from '../controllers/formSuelos.controllers'

const router = Router();

router.get('/regSuelo', getRegSuelo)

router.post('/regSuelo', createNewRegSuelo)

router.get('/regSuelo/:id', getRegSgetRegSueloById)
router.get('/regSuelofecha/:fecha', getRegSgetRegSueloByFecha)

router.delete('/regSuelo/:id', deleteRegistroById)

router.put('/regSuelo/:id', UpdateRegSueloById)

export default router