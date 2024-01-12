const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosControler')

router.get('/',todosController.getall)
router.get('/:id',todosController.getByid)
router.post('/',todosController.create)
router.delete('/:id',todosController.delete)

module.exports = router